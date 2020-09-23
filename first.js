/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */
/* eslint-env browser */

window.onload = function () {
    "use strict";
    document.getElementById('demo').innerHTML = Date();
    window.alert("안녕하세요");
    var name = window.prompt("이름을 입력하세요");
    window.alert("입력한 이름은 " + name);
    var ret = window.confirm("다시 입력하시겠습니까?");
    window.alert(ret); //true or false 리턴
};
