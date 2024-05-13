function formatTimeUnit(unit) {
  return unit < 10 ? "0" + unit : unit;
}
function showTime() {
  var d = new Date();
  var h = formatTimeUnit(d.getHours());
  var m = formatTimeUnit(d.getMinutes());
  var s = formatTimeUnit(d.getSeconds());

  const year = formatTimeUnit(d.getFullYear());
  const months = formatTimeUnit(d.getMonth() + 1);
  const day = formatTimeUnit(d.getDate());

  const alldates = year + ":" + months + ":" + day;

  var time = h + ":" + m + ":" + s;
  document.getElementsByTagName("p")[0].innerHTML = alldates;
  document.getElementsByTagName("h1")[0].innerHTML = time;
  setTimeout(showTime, 1000);
}
