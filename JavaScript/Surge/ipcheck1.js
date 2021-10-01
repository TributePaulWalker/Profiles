/**
* 感谢@congcong大佬提供的js，原文件地址：https://github.com/congcong0806/surge-list/blob/master/Script/ipcheck.js
* 用法
* [Panel]
* #节点检测
* 网络信息 = script-name=网络信息, title="节点信息", content="请刷新", style=info, update-interval=60
* ...
* [Script]
* 网络信息 = type=generic,timeout=3,script-path=https://raw.githubusercontent.com/LucaLin233/Luca_Conf/main/Surge/ipcheck.js
*/

let url = "http://ip-api.com/json/?lang=zh-CN"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
    let org =jsonData.org
  body = {
    title: "节点信息",
    content: `IP信息: ${ip}\n运营商家: ${isp}\n数据中心: ${org}\n地理位置: ${emoji}${country} - ${city}`,
    icon: "network",
    'icon-color': "#FFD700"
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
