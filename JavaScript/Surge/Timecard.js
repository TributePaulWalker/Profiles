/*

申明：部分函数方法来源于TimeCard.js，其原始作者@smartmimi
原脚本：https://raw.githubusercontent.com/smartmimi/conf/master/surge/timecard.js
原脚本作者：@smartmimi 
GitHub：https://github.com/smartmimi/conf/tree/master

修改：TributePaulWalker
Surge：

[Panel]
节假提醒 = script-name=节假提醒,update-interval=3600

[Script]
节假提醒 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/Timecard.js
 
 */
var tlist = {
  1: ["元宵节", "2026-03-03"],
  2: ["老爸生日", "2026-03-10"],
  3: ["清明", "2026-04-05"],
  5: ["生日", "2026-05-06"],
  6: ["奶奶生日", "2026-05-20"],
  7: ["楠楠生日", "2026-05-29"],
  8: ["端午", "2026-06-19"],
  9: ["七夕", "2026-08-19"],
 10: ["多多生日", "2026-09-04"],
 11: ["中秋", "2026-09-25"],
 12: ["平安夜", "2026-12-24"],
 13: ["圣诞节", "2026-12-25"],
 14: ["腊八", "2027-01-15"],
 15: ["小年", "2027-01-30"],
 16: ["除夕", "2027-02-05"],
 17: ["春节", "2027-02-06"],
 18: ["元宵节", "2027-02-20"]
};
let tnow = new Date();
let tnowf =
  tnow.getFullYear() + "-" + (tnow.getMonth() + 1) + "-" + tnow.getDate();

/* 计算2个日期相差的天数，不包含今天，如：2016-12-13到2016-12-15，相差2天
 * @param startDateString
 * @param endDateString
 * @returns
 */
function dateDiff(startDateString, endDateString) {
  var separator = "-"; //日期分隔符
  var startDates = startDateString.split(separator);
  var endDates = endDateString.split(separator);
  var startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
  var endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
  return parseInt(
    (endDate - startDate) / 1000 / 60 / 60 / 24
  ).toString();
}

//计算输入序号对应的时间与现在的天数间隔
function tnumcount(num) {
  let dnum = num;
  return dateDiff(tnowf, tlist[dnum][1]);
}

//获取最接近的日期
function now() {
  for (var i = 1; i <= Object.getOwnPropertyNames(tlist).length; i++) {
    if (Number(dateDiff(tnowf, tlist[i.toString()][1])) >= 0) {
      //console.log("最近的日期是:" + tlist[i.toString()][0]);
      //console.log("列表长度:" + Object.getOwnPropertyNames(tlist).length);
      //console.log("时间差距:" + Number(dateDiff(tnowf, tlist[i.toString()][1])));
      return i;
    }
  }
}

//如果是0天，发送emoji;
let nowlist = now();
function today(day) {
  let daythis = day;
  if (daythis == "0") {
    datenotice();
    return "🎉";
  } else {
    return daythis;
  }
}

//提醒日当天发送通知
function datenotice() {
  if ($persistentStore.read("timecardpushed") != tlist[nowlist][1] && tnow.getHours() >= 6) {
    $persistentStore.write(tlist[nowlist][1], "timecardpushed");
    $notification.post("假日祝福","", "今天是" + tlist[nowlist][1] + "日 " + tlist[nowlist][0] + "   🎉")
  } else if ($persistentStore.read("timecardpushed") == tlist[nowlist][1]) {
    //console.log("当日已通知");
  }
}
$done({
title:"节假提醒",
icon:"list.dash.header.rectangle",
'icon-color': "#5AC8FA",
content:tlist[nowlist][0]+"  :  "+today(tnumcount(nowlist))+"天\n"+tlist[Number(nowlist) + Number(1)][0] +"  :  "+ tnumcount(Number(nowlist) + Number(1))+ "天\n"+tlist[Number(nowlist) + Number(2)][0]+"  :  "+tnumcount(Number(nowlist) + Number(2))+"天"
})
