/*

作者：小白脸
版本：1.0.3
搬运：@MuTu888
仓库：https://github.com/githubdulong
日期：2023.05.11 14:34
Surge配置参考注释

示例↓↓↓ 
----------------------------------------

[Rule]
# Apple策略优选
AND,((DOMAIN,iosapps.itunes.apple.com), (SCRIPT,Apple策略优选)),Apple

[Script]
# Apple下载速度低于10MB将自动触发替换策略
Apple策略优选 = type=rule,timeout=60,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/SpeedLimit.js,argument="Group=Apple&policy=Direct,Proxy&time=15&minSpeed=10"

-----------------------------------------

• 支持监控多个策略组，每个策略组可以监控多个域名，and 套 or 规则 or 可以放多个域名 and最下面放脚本规则；
• Group 填 “策略组”是填策略组重要事情说3遍；
• policy填 ‘策略’  第一个是填默认策略，默认策略可以是DIRECT，可以是其他策略，后面填你要跳转的策略，用英文的逗号 , 隔开；
• time 表示要监控的时间，单位为秒；
• minSpeed 表示低于这个速度就跳转策略，单位MB/s；
• 兼容了16以下的系统；
• 多策略跳转顺序就是你填的顺序；
• 只到速度达标或策略跳转完结束,10 分钟后自动跳转默认策略；
• 遇到不能用直接删缓存 last_update_time；

-----------------------------------------
*/

const policyGroupName = (Group) => {
   return $surge.selectGroupDetails().decisions[Group];
};

const speed = (includes = "?.inCurrentSpeed") => {
   return new Promise((r) => {
      $httpAPI("GET", "/v1/requests/active", null, (data) =>
         r(
            eval(
               `data.requests.filter(item => item.URL.includes('${host}')).reduce((prev, current) => (prev.speed > current.speed) ? prev : current)${includes}`,
            ),
         ),
      );
   });
};

const speed_unit = (speed) => {
   for (units of ["B/s", "KB/s", "MB/s", "GB/s", "TB/s"]) {
      if (speed < 1000 || !(speed = parseFloat(speed / 1024))) return `${speed.toFixed(2)} ${units}`;
   }
};

const write = (num) => {
   cache[host].switch = `${num}`;
   $persistentStore.write(JSON.stringify(cache), "last_update_time");
};

const host = $request.hostname || $request.url;

let cache;
try {
   cache = JSON.parse($persistentStore.read("last_update_time")) || {};
} catch (error) {
   cache = {};
}
cache[host] || (cache[host] = {});

const lastUpdateTime = cache[host]?.time;

const _Group = cache[host]?.Group;
const _policy0 = cache[host]?.policy0;

if (_Group && Date.now() - lastUpdateTime >= 0.16 * 3600000) $surge.setSelectGroupPolicy(`${_Group}`, `${_policy0}`);

$done({ matched: true });

!(async () => {
   const Group = _Group || (await speed(".notes")).find((x) => x.includes("->")).match(/path\:\s(.+?)\s->/)[1];

   if (typeof $argument === "string") {
      var arg = $argument.match(`${Group}.+?minSpeed=[0-9]+`)?.[0].replace(/\s+/g, "");

      if (!arg) throw "策略组不存在";
   } else {
      throw "argument不存在,别直接运行";
   }

   const { policy, time, minSpeed } = Object.fromEntries(arg.split("&").map((item) => item.split("=")));

   [Group, policy, time, minSpeed].forEach((value, index) => {
      const _value = ["Group", "Policy", "Time", "MinSpeed"][index];
      if (!value) {
         throw `${_value} 不能为空`;
      } else if (index >= 2 && isNaN(value)) {
         throw `${_value} 必须为数字`;
      }
   });

   const arr_policy = policy.split(",").filter((x) => !!x);

   const policy1 = policyGroupName(Group); // 现在使用的
   const index_p = arr_policy.length;
   if (index_p < 2) throw "policy必须包含默认策略和至少一个跳转策略";
   const policy0 = arr_policy[0];
   const End = arr_policy[index_p - 1];
   let policys = cache[host]?.policy;

   //存储的
   if (policy1 === policy0) {
      policys = policy0;
   }

   //限制并发请求
   if (cache[host].switch === "1") return;
   write("1");

   let current_speed;
   let count = 0;

   for (let i = 0; i < Math.ceil(time / 3); i++) {
      await new Promise((r) => setTimeout(r, 3000));
      current_speed = await speed();

      if (current_speed === undefined || current_speed < 1500) count++;

      if (count >= 2 || policyGroupName(Group) === End || current_speed >= minSpeed * 1048576) {
         write("0");
         return;
      }
   } //主逻辑一直循环策略
   //网络波动，速度达标，最后个策略 结束循环

   const p = arr_policy[arr_policy.indexOf(policy1) + 1];

   if (!p) return;
   $surge.setSelectGroupPolicy(`${Group}`, `${p}`);
   $notification.post(
      `策略切换成功 🎉`,
      `速度 ${speed_unit(current_speed)} ${minSpeed} MB/s`,
      `域名 ${host}\n监控时长${time}秒 切换${p}策略`,
   );
   cache[host].time = Date.now();
   cache[host].Group = Group;
   cache[host].policy = p;
   cache[host].policy0 = policy0;
   write("0");
})().catch((err) => {
   write("0");
   $notification.post("错误: ❌", err.message || err, "策略切换失败 😞");
});
