var back = function() {
  location.href = "http://fundact.eastmoney.com/app2/html/";
};

window.nativeBack = function() {

  location.href = "http://fundact.eastmoney.com/app2/html/";
};

window.nativeShare = function() {
  location.href = "http://ttjj-huodong-weixin-share/";

};

window.setCustomerNo = function(customerno) {
  var href = location.href;

  if (!!customerno && customerno.length > 10) {
    if (href.indexOf("?") > -1) {
      location.href = href + "&uid=" + customerno;
    } else {
      location.href = href + "?uid=" + customerno;
    }
  }
};

$(document).ready(function() {
  function fixHeadBar() {
    location.href = 'emfundapp:headerInfo({"name":"分享","event":"window.nativeShare()","backevent":"","title":"' + document.title + '","vifylogin":""})';
  }

  function showsharebar() {
    var wxinfo = ({
      "resultCode": 0,
      "resultMessage": "",
      "datas": {
        "Id": 0,
        "Name": "",
        "Title": "",
        "Url": "",
        "HasWx": true,
        "NeedLogin": false,
        "WxTitle": wxtitle,
        "WxContent": wxdesc,
        "WxUrl": wxlink,
        "WxImage": wximg,
        "WxBackUrl": ""
      }
    });
    location.href = 'emfundapp:wx_shareInfo(' + encodeURI(JSON.stringify(wxinfo.datas)) + ')';
  }
  if (location.href.toLowerCase().indexOf("isin=ttjj") > -1 && navigator.userAgent.toLocaleLowerCase().indexOf("ttjj") > -1) {
    setTimeout(fixHeadBar, 50);
    setTimeout(showsharebar, 300);
  }

});