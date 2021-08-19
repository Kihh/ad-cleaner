// ==UserScript==
// @name         逸林广告屏蔽大师
// @namespace    https://kihh.github.io/
// @version      1.0.0
// @description  屏蔽百度首页广告，百度翻译广告，
// @author       Kihh
// @run-at document-body
// @license GPL
// updateURL https://kihh.github.io/js/ad-cleaner.js
// downloadURL https://kihh.github.io/js/ad-cleaner.js
// @include *://www.baidu.com/*
// @include *://fanyi.baidu.com/*
// ==/UserScript==
console.log('逸林广告屏蔽大师——加载成功');
  var baidu = RegExp("http.*://www.baidu.com/$");

  var fanyi = RegExp("http.*://fanyi.baidu.com/.*");

(function() {
    if(baidu.test(location.href)){
        document.head.insertAdjacentHTML('beforeend','<style>#s_mancard_main{display:none !important;}</style>');
    }else if(fanyi.test(location.href)){
        document.head.insertAdjacentHTML('beforeend','<style>#transOtherRight,div.spread-wrap{display:none !important;}</style>');
    }
    })();