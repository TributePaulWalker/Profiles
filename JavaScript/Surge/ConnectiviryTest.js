let $ = {
baidu:'https://www.baidu.com',
google:'https://www.google.com/generate_204',
youtube:'https://www.youtube.com/',
github:'https://www.github.com'
}

!(async () => {
await Promise.all([http($.baidu),http($.bilibili),http($. github),http($. google),http($.youtube)]).then((x)=>{
	$done({
    title: 'Network Connectivity Test',
    content: x.join('\n'),
    icon: 'timer',
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
