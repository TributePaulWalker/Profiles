/*
修改自https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js
特别感谢：https://github.com/mieqq/mieqq

Surge 
[Script]
百度云VIP倍速播放 = type=http-response,pattern=https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user,requires-body=1,max-size=0,timeout=20,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/BaiduCloud.js

[MITM]
hostname = pan.baidu.com


QuantumultX
[rewrite_local]
# 百度云VIP倍速播放
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/BaiduCloud.js

[MITM]
hostname = pan.baidu.com

**************************/

if ($response.body) {
    $done({
        body: JSON.stringify({
            "product_infos": [{
                "product_id": "5310897792128633390",
                "start_time": 2147483648,
                "end_time": 2877706811,
                "buy_time": "1417260485",
                "cluster": "offlinedl",
                "detail_cluster": "offlinedl",
                "product_name": "gz_telecom_exp"
            }, {
                "product_name": "svip2_nd",
                "product_description": "超级会员",
                "function_num": 0,
                "start_time": 1672502399,
                "buy_description": "",
                "buy_time": 0,
                "product_id": "1",
                "auto_upgrade_to_svip": 0,
                "end_time": 1791302400,
                "cluster": "vip",
                "detail_cluster": "svip",
                "status": 0
            }],
            "currenttime": 1672502399,
            "reminder": {
                "reminderWithContent": [],
                "advertiseContent": []
            },
            "request_id": 7501873289383874371
        })
    });
} else {
    $done({});
}
