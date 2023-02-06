/*
 * Surge：
 * [Panel]
 * 节假提醒 = script-name=节假提醒,update-interval=3600
 *
 * [Script]
 * 节假提醒 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/Timecard.js
 
 */
var tlist = {
  1: ["元宵", "2023-02-05"],
  2: ["老爸生日", "2023-02-12"],
  3: ["情人节", "2023-02-14"],
  4: ["结婚纪念日3周年", "2023-03-27"],
  5: ["清明", "2023-04-05"],
  6: ["劳动", "2023-05-01"],
  7: ["生日", "2023-05-09"],
  8: ["奶奶生日", "2023-05-22"],
  9: ["楠楠生日", "2023-05-31"],
  10: ["520", "2023-05-20"],
  11: ["521", "2023-05-21"],
  12: ["端午", "2023-06-22"],
  13: ["老婆生日", "2023-07-22"],
  14: ["七夕", "2023-08-22"],
  15: ["多多生日", "2023-09-07"],
  16: ["中秋", "2023-09-29"],
  17: ["国庆", "2023-10-01"],
  18: ["妹妹生日", "2023-11-15"],
  19: ["冬至", "2023-12-22"],
  20: ["平安夜", "2023-12-24"],
  21: ["圣诞节", "2023-12-25"],
  22: ["元旦", "2024-01-01"],
  23: ["腊八", "2024-01-18"],
  24: ["小年", "2024-02-02"],
  25: ["除夕", "2024-02-09"],
  26: ["春节", "2024-02-10"],
  27: ["情人节", "2024-02-14"],
  28: ["元宵节", "2024-02-24"],
  29: ["老爸生日", "2024-02-29"],
  30: ["结婚纪念日4周年", "2024-03-27"]
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
