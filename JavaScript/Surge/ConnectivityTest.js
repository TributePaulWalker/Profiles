/*
感谢@小白脸 重写脚本原脚本
原作者@yibeizipeini来自于https://raw.githubusercontent.com/yibeizipeini/JavaScript/Surge/ConnectivityTest.js

Surge:
[Panel]
网络延迟 = script-name=网络延迟,update-interval=1

[Script]
网络延迟 = type=generic,timeout=3,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/ConnectivityTest.js,argument=title=网络延迟&server=false

 */
let $ = {
baidu:'https://www.baidu.com',
google:'https://www.google.com/generate_204',
youtube:'https://www.youtube.com/',
github:'https://www.github.com'
}
!(async () => {
await Promise.all([http($.baidu),http($. google),http($.youtube),http($. github)]).then((x)=>{
	$done({
    title: '延迟测试',
    content: x.join('\n'),
    icon: 'bolt.horizontal.icloud',
    'icon-color': '#5AC8FA',
  })
})
})();
function http(req) {
    return new Promise((r) => {
			let time = Date.now();
        $httpClient.post(req, (err, resp, data) => {
            r(req.split(".")[1]+
						'\xa0\xa0\xa0\xa0\xa0\t: ' +
						(Date.now() - time)+' ms');
        });
    });
}
