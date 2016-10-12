      
    <script>
        wxtitle = "用时间换更好回报，长期理财买点定开债！";
        wxdesc = "近三年平均收益超28%，定开债基近期成各路资金“秒杀”对象，来天天基金网购买费率全面一折！";
        wxlink = "https://" + location.host + "/webapp/2016/dkz_app/wx.html";
        wximg = "https://fundsc.eastmoney.com/static/wx/201609060002.gif";
    </script>


    <script>
        wxtitle =     "本周固收产品热销排行榜";
        wxdesc =  "安心稳赢，尽在固收！多种期限随心选择，每天限额抢购。";
        wxlink = "https://" + location.host + "/webapp/2016/gushou_app/?isin=wx";
        wximg =   "http://j5.dfcfw.com/app/20160805161427201.gif";
    </script>

 var wx_shareInfo = {
        imgUrl: "http://j5.dfcfw.com/app/20160805161427201.gif",
        link: location.href,
        title: "本周固收产品热销排行榜",
        desc: "安心稳赢，尽在固收！多种期限随心选择，每天限额抢购。"
    };



<script type="text/javascript" src="https://fundsc.eastmoney.com/static/appshare.js"></script>


  <script>
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
    </script>