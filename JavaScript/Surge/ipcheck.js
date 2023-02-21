/*
脚本原作者：聪聪
原脚本地址：https://raw.githubusercontent.com/congcong0806/surge-list/master/Script/ipcheck.js
修改：TributePaulWalker
Surge：

[Panel]
网络信息 = script-name=网络信息, title="网络信息", content="请刷新", style=info, update-interval=60

[Script]
网络信息 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/ipcheck.js

*/

let url = "http://ip-api.com/json/?lang=zh-CN"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
    
  body = {
    title: "网络信息",
    content: `IP信息: ${ip}\n运营商: ${isp}\nIP位置: ${emoji}${country} - ${city}`,
    icon: "key.icloud",
    'icon-color': "#5AC8FA"
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
