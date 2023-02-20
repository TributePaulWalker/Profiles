/*
感谢@小白脸 重写脚本原脚本
原作者@yibeizipeini来自于https://raw.githubusercontent.com/yibeizipeini/JavaScript/Surge/ConnectivityTest.js
 */
let $ = {

baidu:'https://www.baidu.com',
google:'https://www.google.com/generate_204',
github:'https://www.github.com',
youtube:'https://www.youtube.com/'

}
!(async () => {
await Promise.all([http($.baidu),http($. google),http($. github),http($.youtube)]).then((x)=>{
	$done({
    title: '网络延迟',
    content: x.join('\n'),
    icon: 'link.icloud',
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
