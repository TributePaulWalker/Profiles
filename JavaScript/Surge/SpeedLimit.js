try {
   const [Group, policy, time, minSpeed] = $argument.match(/(?<=\=)[^&]+/g);

   [Group, policy, time, minSpeed].forEach((value, index) => {
      const _value = ["Group", "Policy", "Time", "MinSpeed"][index];
      if (!value) {
         throw `${_value} 不能为空`;
      } else if (index >= 2 && isNaN(value)) {
         throw `${_value} 必须为数字`;
      }
   });

   const host = $request.hostname || $request.url;

   const cache = JSON.parse($persistentStore.read("last_update_time")) || {};

   const lastUpdateTime = cache[host];

   const policyGroupName = (Group) => {
      return $surge.selectGroupDetails().decisions[Group];
   };

   if (Date.now() - lastUpdateTime >= 1 * 3600000) {
      policyGroupName(`${Group}`) !== "Direct" && $surge.setSelectGroupPolicy(`${Group}`, "Direct");
   }

   $done({ matched: true });

   const speed = () => {
      return new Promise((r) => {
         $httpAPI("GET", "/v1/requests/active", null, (data) =>
            r(data.requests.find((item) => item.URL.includes(`iosapps.itunes.apple.com`))?.inCurrentSpeed),
         );
      });
   };

   const speed_unit = (speed) => {
      for (units of ["B/S", "KB/S", "MB/S", "GB/S", "TB/S"]) {
         if (speed < 1000 || !(speed = parseFloat(speed / 1024))) return `${speed.toFixed(2)} ${units}`;
      }
   };

   !(async () => {
      let current_speed;
      let count = 0;
      for (let i = 0; i < Math.ceil(time / 3); i++) {
         await new Promise((r) => setTimeout(r, 3000));
         current_speed = await speed();

         if (current_speed === undefined) {
            count++;
            if (count >= 2) return;
         }

         if (current_speed >= minSpeed * 1048576) return;
      } //结束循环

      if (policyGroupName(`${Group}`) === "Direct") {
         $surge.setSelectGroupPolicy(`${Group}`, `${policy}`);
         $notification.post(
            `🎉🎉🎉切换成功 监控时间${time}秒`,
            `当前速度—> ${speed_unit(current_speed)}——> ${minSpeed} MB/s`,
            `${host}平均下载速度低于${minSpeed} MB/s 已自动切换至${policy}策略`,
         );
         cache[host] = Date.now();
         $persistentStore.write(JSON.stringify(cache), "last_update_time");
      }
   })();
} catch (err) {
   $notification.post("错误: ❌", err.message || err, "☹️😞😫切换失败");
   $done({});
}
