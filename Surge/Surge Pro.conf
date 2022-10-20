# 官方手册 - https://manual.nssurge.com/
# 理解原理 - https://manual.nssurge.com/book/understanding-surge/cn/
# 帮助中心 - https://nssurge.zendesk.com/
# 技术社区 - https://community.nssurge.com


# Self-use sgmodule:

# Advanced Settings & URL Redirect - https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Module/General.sgmodule

# Block Advertising for Surge iOS - https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Module/Block/Advertising.sgmodule

# Block YouTube Advertising - https://raw.githubusercontent.com/Maasea/sgmodule/master/YoutubeAds.sgmodule

# AllInOne - https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rewrite/Surge/AllInOne/AllInOne.sgmodule

# iRingo for Siri & Search - https://raw.githubusercontent.com/VirgilClyne/iRingo/main/sgmodule/Siri.Proxy.sgmodule

# iRingo for Location Services - https://raw.githubusercontent.com/VirgilClyne/iRingo/main/sgmodule/Location.sgmodule

# BoxJs - https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.surge.sgmodule

# iRingo.boxjs.json - https://raw.githubusercontent.com/VirgilClyne/iRingo/main/box/iRingo.boxjs.json


[General]
# Update-2022.10.20.11.15

# 你可以从该 URL 下载这个配置文件: https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/Surge/Surge%20Pro.conf

# > 增强版 Wi-Fi 助理
# 在 Wi-Fi 网络不佳时尝试使用数据网络建立连接，请仅当使用不限量的数据流量时开启，默认关闭：false,开启把false修改为true即可。
wifi-assist = false

# > Hybrid Network（建议关闭、无限流量或者超出套餐流量不限速可选择开启）
# 对所有策略设置 hybrid = true，所有 TCP 连接在建立时均会并发尝试数据网络和 WiFi 连接。除此之外，所有 DNS 查询操作也都将并发在数据网络和 WiFi 上进行。所以若想体验该功能，请手动配置公网 DNS，暂不支持 DOH。请注意数据网络的套餐流量使用。
# 混合网络，默认关闭：false,开启把false修改为true即可。
all-hybrid = false

# > Internet 测试 URL
internet-test-url = http://wifi.vivo.com.cn/generate_204

# > 代理测速 URL
proxy-test-url = http://cp.cloudflare.com/generate_204

# > 测试超时（秒）
test-timeout = 5

# > 自定义 GeoIP 数据库（根据需求二选一即可）
geoip-maxmind-url = https://raw.githubusercontent.com/Loyalsoldier/geoip/release/Country.mmdb
# geoip-maxmind-url = https://raw.githubusercontent.com/Hackl0us/GeoIP2-CN/release/Country.mmdb

# > GeoIP 数据库自动更新
disable-geoip-db-auto-update = false

# > VIF Excluded Routes
# Surge VIF 只能处理 TCP 和 UDP 协议。使用此选项可以绕过特定的 IP 范围，允许所有流量通过。
# tun-excluded-routes = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12

# > VIF Included Routes
# 默认情况下，Surge VIF 接口会声明自己是默认路由。但是，由于 Wi-Fi 接口的路由较小，有些流量可能不会通过 Surge VIF 接口。使用此选项可以添加一条较小的路由。
# tun-included-routes = 192.168.1.12/32

# > UDP IP 防泄漏
# 如果没有代理服务器支持 UDP 转发，可修改为「 direct 」或注释下条，但需注意同一目标主机名 TCP 请求与 UDP 请求的源地址不同所造成的隐私及安全风险。
udp-policy-not-supported-behaviour = reject

# > 隐藏状态栏上的VPN图标
hide-vpn-icon = true

# > IPv6 支持（默认关闭）
ipv6 = false

# > 允许 Wi-Fi 访问 (仅 iOS ）
allow-wifi-access = true
wifi-access-http-port = 6152
wifi-access-socks5-port = 6153

# > Allow Hotspot Access（热点分享代理）
allow-hotspot-access = true

# > 允许 Wi-Fi 访问 (仅 macOS，若允许远程访问将「127.0.0.1」改为「0.0.0.0」)
http-listen = 127.0.0.1:6152
socks5-listen = 127.0.0.1:6153

# > HTTP-API
# 依次为：密码，主机名，端口
http-api = Brian@0.0.0.0:6171

# > HTTP-API-TLS
http-api-tls = false

# > Web控制器
# Safari输入127.0.0.1:6171,填入HTTP-API密码即可。
http-api-web-dashboard = true

# > 兼容模式 (仅 iOS)
# compatibility-mode = 0

# > 跳过代理
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, iosapps.itunes.apple.com

# > 排除简单主机名
exclude-simple-hostnames = true

# > DNS 服务器
dns-server = 119.29.29.29, 223.5.5.5, system

# > 加密的DNS服务器(如无必要不建议使用)
encrypted-dns-server = h3://223.5.5.5/dns-query,https://dns.alidns.com/dns-query

# > 关闭 DOH 的服务端证书验证
doh-skip-cert-verification=true

# > 从 /etc/hosts 读取 DNS 记录
read-etc-hosts = true

# > 日志级别
loglevel = notify

# > 当遇到 REJECT 策略时返回错误页
show-error-page-for-reject = true

# > Always Real IP Hosts
always-real-ip = *.msftconnecttest.com, *.msftncsi.com, *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com, *.logon.battlenet.com.cn, *.logon.battle.net, stun.l.google.com

# > Hijack DNS
# hijack-dns = 8.8.8.8:53, 8.8.4.4:53

# > 路由防火墙
# 包含所有的网络请求
include-all-networks = false

# > 包含本地网络请求
include-local-networks = false

# > 代理请求本地DNS映射
use-local-host-item-for-proxy = false

[Replica]
# > 隐藏 Apple 请求
hide-apple-request = false

# > 隐藏崩溃追踪器请求
hide-crash-reporter-request = true

# > 隐藏 UDP 会话
hide-udp = false

# > 关键词过滤器
# keyword-filter-type = none

# > 关键词
# keyword-filter = (null)

[Panel]
Panel = title=TributePaulWalker, content=GitHub:https://github.com/TributePaulWalker,icon=aqi.medium,icon-color=#5AC8FA

节假日倒计时 = script-name=节假日倒计时,update-interval=600

网络信息 = script-name=网络信息,title=网络信息,content=请刷新,style=info,update-interval=60

配置重载 = title=配置重载,content=配置重载,style=info,script-name=配置重载,update-interval=-1

[Proxy]
Direct = direct
Reject = reject

[Proxy Group]
# 机场信息（encode地址链接: https://www.urlencoder.org）
BitzNet = select, policy-path=http://sub.info?url=[URL encode 后的机场节点链接]&due_day=10&alert=1&title=Bitz-Net, update-interval=3600, hidden=0
E-Net = select, policy-path=http://sub.info?url=[URL encode 后的机场节点链接]&due_day=24&alert=1&title=Enet, update-interval=3600, hidden=0

Proxy = select, HK, TW, JP, SG, US

Final = select, Proxy, Direct

# 国内用户建议直连。
Weibo = select, HK, TW, JP, SG, US, Direct

YouTube = select, HK, TW, JP, SG, US

Telegram = select, HK, SG, US

Streaming = select, HK, TW, JP, SG, US

HK = url-test, policy-path=你的订阅地址, interval=600, tolerance=50, update-interval=86400, policy-regex-filter=(🇭🇰)|(港)|(Hong)|(HK), hidden=false

TW = url-test, policy-path=你的订阅地址, interval=600, tolerance=50, update-interval=86400, policy-regex-filter=(🇨🇳)|(台)|(Tai)|(TW), hidden=false

JP = url-test, policy-path=你的订阅地址, interval=600, tolerance=50, update-interval=86400, policy-regex-filter=(🇯🇵)|(日)|(Japan)|(JP), hidden=false

SG = url-test, policy-path=你的订阅地址, interval=600, tolerance=50, update-interval=86400, policy-regex-filter=(🇸🇬)|(新)|(Singapore)|(SG), hidden=false

US = url-test, policy-path=你的订阅地址, interval=600, tolerance=50, update-interval=86400, policy-regex-filter=(🇺🇸)|(美)|(States)|(US), hidden=false

[Rule]
# 屏蔽HTTP3/QUIC协议
# 阻止所有UDP流量进入443端口，使HTTP3请求回落到TCP流量。
AND,((PROTOCOL,UDP),(DEST-PORT,443)),REJECT-NO-DROP

# 屏蔽YouTube的UDP
AND,((PROTOCOL,UDP),(DOMAIN-SUFFIX,googlevideo.com)),REJECT-NO-DROP

# Safari 防跳转
DOMAIN,app-site-association.cdn-apple.com,Reject

# Boxjs 代理
DOMAIN-KEYWORD,jsdelivr.net,Proxy

# Sub-Store 的 Web 页面
DOMAIN-SUFFIX,vercel.app,Proxy

# 天气数据 
# DOMAIN,api.waqi.info,Proxy

# Client(仅 macOS)
PROCESS-NAME,UUBooster,Direct

# > Download (仅 macOS)
PROCESS-NAME,aria2c,Direct
PROCESS-NAME,fdm,Direct
PROCESS-NAME,Folx,Direct
PROCESS-NAME,NetTransport,Direct
PROCESS-NAME,Thunder,Direct
PROCESS-NAME,Transmission,Direct
PROCESS-NAME,uTorrent,Direct
PROCESS-NAME,WebTorrent,Direct
PROCESS-NAME,WebTorrent Helper,Direct

# 后续规则修正
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Unbreak.list,Direct

# 广告拦截
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Guard/Advertising.list,Reject
DOMAIN-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Guard/AdvertisingPlus.list,Reject
DOMAIN-SET,https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-surge2.txt,Reject

# 隐私保护
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Guard/Privacy.list,Reject

# 运营商劫持或恶意网站
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Guard/Hijacking.list,Reject

# 腾讯 WeChat ASN
IP-ASN,132203,Direct

# 腾讯 WeChat
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/WeChat.list,Direct
RULE-SET,https://raw.githubusercontent.com/NobyDa/Script/master/Surge/WeChat.list,Direct

# YouTube
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/YouTube.list,YouTube

# 国际流媒体服务
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Streaming.list,Streaming

# Disney+
# RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/DisneyPlus.list,Streaming

# Netflix
# RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/Netflix.list,Streaming

# Spotify
# RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Music/Spotify.list,Streaming

# Telegram服务
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Telegram/Telegram.list,Telegram

# 新浪微博（国内用户建议直连）
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Weibo/Weibo.list,Weibo

# 全球加速
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Global.list,Proxy

# Apple 服务
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Apple/Apple.list,Direct

# 中国直连
RULE-SET,https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/China.list,Direct

# Local Area Network 局域网
RULE-SET,LAN,Direct

# GeoIP China
GEOIP,CN,Direct

FINAL,Final,dns-failed

[Host]
# Firebase Cloud Messaging
mtalk.google.com = 108.177.125.188

# Google Dl
dl.google.com = server:119.29.29.29
dl.l.google.com = server:119.29.29.29
update.googleapis.com = server:119.29.29.29

# PlayStation
*.dl.playstation.net = server:119.29.29.29

# Router Admin Panel
amplifi.lan = server:syslib // Ubiquiti Amplifi Router
router.synology.com = server:syslib // Synology Router
sila.razer.com = server:syslib // Razer Sila Router
router.asus.com = server:syslib // Asus Router
routerlogin.net = server:syslib // Netgear Router
orbilogin.com = server:syslib // Netgear Obri Router
www.LinksysSmartWiFi.com = server:syslib // Linksys Router
LinksysSmartWiFi.com = server:syslib // Linksys Router
myrouter.local = server:syslib // Linksys Router
www.miwifi.com = server:syslib // Xiaomi Mi WiFi Router
miwifi.com = server:syslib // Xiaomi Mi WiFi Router
mediarouter.home = server:syslib // Huawei Router
tplogin.cn = server:syslib // TP-Link Router
tplinklogin.net = server:syslib // TP-Link Router
melogin.cn = server:syslib // MERCURY Router
falogin.cn = server:syslib // FAST Router

# Apple TestFlight
*testflight.apple.com = server:8.8.4.4

[Header Rewrite]

[URL Rewrite]
# Safari全能搜索
# 以下为Safari全能搜索、需要把Safari的搜索引擎设置为：DuckDuckGo

# gm (Google图片)
^https:\/\/duckduckgo.com\/\?q=gm\+([^&]+).+ https://www.google.com/search?&tbm=isch&q=$1 302

# gh (GitHub)
^https:\/\/duckduckgo.com\/\?q=gh\+([^&]+).+ https://github.com/search?q=$1 302

# tf (Google 搜索 TestFlight)
^https:\/\/duckduckgo.com\/\?q=tf(\+|%20)([^&]+).+ https://www.google.com/search?as_q=$2&as_sitesearch=testflight.apple.com 302

# wb (微博)
^https:\/\/duckduckgo.com\/\?q=wb\+([^&]+).+ https://s.weibo.com/weibo/$1 302

# wx (微信)
^https:\/\/duckduckgo.com\/\?q=wx\+([^&]+).+ https://weixin.sogou.com/weixinwap?query=$1 302

# jd (京东)
^https:\/\/duckduckgo.com\/\?q=jd\+([^&]+).+ https://so.m.jd.com/ware/search.action?keyword=$1 302

# tb (淘宝)
^https:\/\/duckduckgo.com\/\?q=tb\+([^&]+).+ https://s.m.taobao.com/h5?q=$1 302

# tm (天猫)
^https:\/\/duckduckgo.com\/\?q=tm\+([^&]+).+ https://s.m.tmall.com/m/search.htm?q=$1 302

# ytb (YouTube)
^https:\/\/duckduckgo.com\/\?q=ytb\+([^&]+).+ https://www.youtube.com/results?search_query=$1 302

# ph (PornHub)
^https:\/\/duckduckgo.com\/\?q=ph\+([^&]+).+ https://cn.pornhub.com/video/search?search=$1 302

# bi (必应)
^https:\/\/duckduckgo.com\/\?q=bi\+([^&]+).+ https://cn.bing.com/search?q=$1 302

# bd (百度)
^https:\/\/duckduckgo.com\/\?q=bd\+([^&]+).+ https://www.baidu.com/s?wd=$1 302

# ccn (App Store 临时换至中国区)
^https:\/\/duckduckgo.com\/\?q=ccn&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143465&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=cn&urlDesc= 302

# uus (App Store 临时换至美国区)
^https:\/\/duckduckgo.com\/\?q=uus&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143441&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=us&urlDesc= 302

# hhk (App Store 临时换至香港区)
^https:\/\/duckduckgo.com\/\?q=hhk&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143463&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=hk&urlDesc= 302

# ddg (DuckDuckGo)
^https:\/\/duckduckgo.com\/\?q=ddg\+([^&]+).+ https://duckduckgo.com/?ia=about&q=$1 302

# 无指令 (Google)
^https:\/\/duckduckgo.com\/\?q=([^&]+).+ https://www.google.com/search?q=$1 302

# 阻止google.com 跳转到google.com.hk
^https?:\/\/(www\.)?g\.cn https://www.google.com/ncr 302
^https?:\/\/(www\.)?google\.cn https://www.google.com/ncr 302

[Script]
Sub-Store = type=http-request,pattern=^https?:\/\/sub\.store\/((download)|api\/(preview|sync|(utils\/node-info))),script-path=https://github.com/sub-store-org/Sub-Store/releases/latest/download/sub-store-1.min.js,requires-body=true,timeout=120,ability=http-client-policy
Sub-Store = type=http-request,pattern=^https?:\/\/sub\.store,script-path=https://github.com/sub-store-org/Sub-Store/releases/latest/download/sub-store-0.min.js,requires-body=true

机场信息 = type=http-request,pattern=http://sub\.info,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/Sub_info_lite.js,timeout=10

百度搜索防跳转 = type=http-response,pattern=^https?\:\/\/boxer\.baidu\.com\/scheme,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/baidu-no-redirect.js

微博去广告 = type=http-response,pattern=^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua),requires-body=1,max-size=0,timeout=30,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
微博去广告 = type=http-response,pattern=^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info),requires-body=1,max-size=-1,timeout=30,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

微信去除公众号文章底部广告 = type=http-request,pattern=^https://mp\.weixin\.qq\.com/mp/getappmsgad,timeout=30,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

解除微信链接限制 = type=http-response,pattern=^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/asset/UnblockURLinWeChat.js

酷我音乐VIP = type=http-response,pattern=^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice),requires-body=1,max-size=0,timeout=60,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js

TestFlight下载修正 = type=http-request,pattern=^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$,requires-body=1,script-update-interval=-1,max-size=0,script-path=https://gist.githubusercontent.com/NobyDa/9be418b93afc5e9c8a8f4d28ae403cf2/raw/TF_Download.js

节假日倒计时 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/Timecard.js

网络信息 = type=generic,timeout=5,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/ipcheck.js

配置重载 = script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/Profile-Reload.js,type=generic

Web豆瓣电影和电视剧添加便捷播放按钮 = type=http-response,pattern=^https?:\/\/m\.douban\.com\/movie\/subject\/\d+\/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/I-am-R-E/Surge/main/JavaScript/DouBan.js

每日一句 = type=cron,cronexp=8 8 8 * * *,wake-system=1,script-path=https://raw.githubusercontent.com/githubdulong/Script/master/One.js,script-update-interval=0

美图秀秀VIP = type=http-response,pattern=^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/v\d\/(h\d\/vip|vip|user)\/,requires-body=1,script-path=https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/MeiTuXiuXiu.js

[SSID Setting]

[MITM]
# 跳过服务端证书验证
skip-server-cert-verify = true

# MITM over HTTP/2
h2 = true

hostname = duckduckgo.com, *.google.cn, *.google.com.hk, sub.store, boxer.baidu.com, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, -*.weibo.com, mp.weixin.qq.com, security.wechat.com, weixin110.qq.com, vip1.kuwo.cn, testflight.apple.com, pan.baidu.com, m.douban.com, h5.xiuxiu.meitu.com,api.xiuxiu.meitu.com
