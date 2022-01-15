var tlist = {
  1: ["距离元旦", "2022-01-01", "  ➌"],
  2: ["距离春节", "2022-02-01", "  ➐"],
  3: ["距离清明节", "2022-04-05", "  ➌"],
  4: ["距离劳动节", "2022-05-01", "  ➎"],
  5: ["距离端午节", "2022-06-03", "  ➌"],
  6: ["距离七夕", "2022-08-04", "  ✘"],
  7: ["距离中秋节", "2022-09-10", "  ➌"],
  8: ["距离国庆节", "2022-10-01", "  ➐"],
  9: ["距离元旦", "2022-01-01", "  ➌"],
  10: ["距离春节", "2023-01-22", "  ➐"]
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
    $notification.post("今天是" + tlist[nowlist][1].replace("距离", "") + tlist[nowlist][0] + "   🎉")
  } else if ($persistentStore.read("timecardpushed") == tlist[nowlist][1]) {
  }
}

$done({
title:"节假日倒计时",
icon:"hourglass",
'icon-color': "#1E88FB",
content:
tlist[nowlist][0]+"："+(today(tnumcount(nowlist))+"天").replace("🎉天", "🎉")+tlist[nowlist][2]+"\n"+tlist[Number(nowlist) + Number(1)][0] +"："+ tnumcount(Number(nowlist) + Number  (1))+ "天"+tlist[Number(nowlist) + Number(1)][2]+"\n"+tlist[Number(nowlist) + Number(2)][0]+"："+tnumcount(Number(nowlist) + Number(2))+"天"+tlist[Number(nowlist) + Number(2)][2]
})
