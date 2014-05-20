/*
 * plugins.js
 * by ZHAO Xudong
 * 插件 js
 */
define(function(require, exports, module) {
  var $ = require('jquery')
  ,jQuery = $

  window.qida = $.extend({
    noResultMsg: '无结果,请尝试刷新'
    ,onloadCrsRecommend: false
    ,emailReg: new RegExp('^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{1,20}$')
    ,emailLengthLimit: 54
    ,cellReg: new RegExp('^0?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$')
    ,passReg: /^[0-9A-Za-z-_,\*\+\$\^\!]{6,16}$/
    ,userNameReg: /^[0-9A-Za-z\u4E00-\uffff]{1,20}$/
    ,touchDevice: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch
    ,ie6: (typeof document.body.style.maxHeight === undefined) || $('body').hasClass('lt-ie7')
    ,ie68: !$.support.leadingWhitespace
    ,isIOS: !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
    ,isAndroid: !!navigator.userAgent.match(/Android/i)
    ,onSubmitRecommend: false
  }, seajs.data.vars)

  //icon set
  var icons = exports.icons = {
    'down-dir': '&#xe800;'
    ,'up-dir': '&#xe801;'
    ,'left-dir': '&#xe802;'
    ,'right-dir': '&#xe803;'
    ,'plus-squared-alt': '&#xe804;'
    ,'minus-squared-alt': '&#xe805;'
  }

  //init icons
  exports.initIcons = function(range) {
    range = range?range + ' ':'body '
    $(range + '[data-icon]').each(function() {
      var t = $(this)
      t.html(icons[t.data('icon')])
    })
  }

  exports.init = function() {

  }

  //seajs module end
})