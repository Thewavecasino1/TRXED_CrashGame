// https://shasta.tronscan.org/#/tools/tron-convert-tool
import "./styles.css";
window.alert = window.imToken
  ? function (s) {
      window.imToken.callAPI("native.toastInfo", JSON.stringify(s));
    }
  : window.alert;

window.fromHex = function (hex) {
  return window.tronWeb.address.fromHex(hex);
};

window.toHex = function (hex) {
  return window.tronWeb.address.toHex(hex);
};

var buttons = document.querySelectorAll("button");
var pres = document.querySelectorAll("pre");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = (function (j) {
    return function () {
      var code = pres[j].innerHTML;
      var script = document.createElement("script");
      script.innerHTML = code;
      document.head.appendChild(script);
    };
  })(i);
}
