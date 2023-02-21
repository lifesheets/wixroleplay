WixCore.Module.DataTime = {};

/**
  * Обробка часу для серверної частини.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

const DateTime = new Date();
const Constant = WixCore.Module.DataTime;

// Example "ed".
Constant.DigitFormat = function (arg) {
    var result = ("0" + arg).slice(-2);
    return result;
};
// Example "1676999487".
Constant.Stamp = function () {
    var result = Date.now() / 1000 | 0;
    return result;
};
// Example "1676999558534". 
Constant.FullStamp = function () {
    var result = Date.now();
    return result;
};
// Example "19:24:00".
Constant.Time = function () {
    var hours = Constant.DigitFormat(DateTime.getHours());
    var minutes = Constant.DigitFormat(DateTime.getMinutes());
    var seconds = Constant.DigitFormat(DateTime.getSeconds());
    var result = `${hours}:${minutes}:${seconds}`;
    return result;
};
// Example 19:36
Constant.TimeWithoutSec = function () {
    var hours = Constant.DigitFormat(DateTime.getHours());
    var minutes = Constant.DigitFormat(DateTime.getMinutes());
    var result = `${hours}:${minutes}`;
    return result;
};