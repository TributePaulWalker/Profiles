/*
修改自https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js
特别感谢：@mieqq

Surge 
[Script]
百度云VIP倍速播放 = type=http-response,pattern=https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user,requires-body=1,max-size=0,timeout=20,script-path=https://raw.githubusercontent.com/TributePaulWalker/JavaScript/main/Baidu%20Cloud.js

QuantumultX
[rewrite_local]
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/TributePaulWalker/JavaScript/main/Baidu%20Cloud.js

[MITM]
hostname = pan.baidu.com
*/

let obj = {
  "product_infos": [{
    "product_id": "5310897792128633390",
    "start_time": 1417260485,
    "end_time": 2147483648,
    "buy_time": "1417260485",
    "cluster": "offlinedl",
    "detail_cluster": "offlinedl",
    "product_name": "gz_telecom_exp"
  }, {
    "product_name": "svip2_nd",
    "product_description": "超级会员",
    "function_num": 0,
    "start_time": 1553702399,
    "buy_description": "",
    "buy_time": 0,
    "product_id": "1",
    "auto_upgrade_to_svip": 0,
    "end_time": 1672502399,
    "cluster": "vip",
    "detail_cluster": "svip",
    "status": 0
  }],
  "currenttime": 1573473597,
  "reminder": {
    "reminderWithContent": [],
    "advertiseContent": []
  },
  "request_id": 7501873289383874371,
  "guide_data": {
    "title": "超级会员 SVIP",
    "content": "已拥有极速下载+视频倍速特权",
    "button": {
      "text": "会员中心",
      "action_url": "https://pan.baidu.com/wap/vip/user?from=myvip2#svip"
    }
  }
};

$done({body: JSON.stringify(obj)})
