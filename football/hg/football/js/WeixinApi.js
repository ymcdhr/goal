var WeixinApi=function(){"use strict";function e(e,i){i=i||{};var n=function(e){WeixinJSBridge.invoke("shareTimeline",{appid:e.appId?e.appId:"",img_url:e.imgUrl,link:e.link,desc:e.title,title:e.desc,img_width:"120",img_height:"120"},function(e){switch(e.err_msg){case"share_timeline:cancel":i.cancel&&i.cancel(e);break;case"share_timeline:fail":i.fail&&i.fail(e);break;case"share_timeline:confirm":case"share_timeline:ok":i.confirm&&i.confirm(e)}i.all&&i.all(e)})};WeixinJSBridge.on("menu:share:timeline",function(a){i.async&&i.ready?(window._wx_loadedCb_=i.dataLoaded||new Function,window._wx_loadedCb_.toString().indexOf("_wx_loadedCb_")>0&&(window._wx_loadedCb_=new Function),i.dataLoaded=function(e){window._wx_loadedCb_(e),n(e)},i.ready&&i.ready(a)):(i.ready&&i.ready(a),n(e))})}function i(e,i){i=i||{};var n=function(e){WeixinJSBridge.invoke("sendAppMessage",{appid:e.appId?e.appId:"",img_url:e.imgUrl,link:e.link,desc:e.desc,title:e.title,img_width:"120",img_height:"120"},function(e){switch(e.err_msg){case"send_app_msg:cancel":i.cancel&&i.cancel(e);break;case"send_app_msg:fail":i.fail&&i.fail(e);break;case"send_app_msg:confirm":case"send_app_msg:ok":i.confirm&&i.confirm(e)}i.all&&i.all(e)})};WeixinJSBridge.on("menu:share:appmessage",function(a){i.async&&i.ready?(window._wx_loadedCb_=i.dataLoaded||new Function,window._wx_loadedCb_.toString().indexOf("_wx_loadedCb_")>0&&(window._wx_loadedCb_=new Function),i.dataLoaded=function(e){window._wx_loadedCb_(e),n(e)},i.ready&&i.ready(a)):(i.ready&&i.ready(a),n(e))})}function n(e,i){i=i||{};var n=function(e){WeixinJSBridge.invoke("shareWeibo",{content:e.desc,link:e.link,img_url:e.imgUrl,title:e.title,img_width:"120",img_height:"120"},function(e){switch(e.err_msg){case"share_weibo:cancel":i.cancel&&i.cancel(e);break;case"share_weibo:fail":i.fail&&i.fail(e);break;case"share_weibo:confirm":case"share_weibo:ok":i.confirm&&i.confirm(e)}i.all&&i.all(e)})};WeixinJSBridge.on("menu:share:weibo",function(a){i.async&&i.ready?(window._wx_loadedCb_=i.dataLoaded||new Function,window._wx_loadedCb_.toString().indexOf("_wx_loadedCb_")>0&&(window._wx_loadedCb_=new Function),i.dataLoaded=function(e){window._wx_loadedCb_(e),n(e)},i.ready&&i.ready(a)):(i.ready&&i.ready(a),n(e))})}function a(e,i){e&&i&&0!=i.length&&WeixinJSBridge.invoke("imagePreview",{current:e,urls:i})}function d(){WeixinJSBridge.call("showOptionMenu")}function o(){WeixinJSBridge.call("hideOptionMenu")}function t(){WeixinJSBridge.call("showToolbar")}function r(){WeixinJSBridge.call("hideToolbar")}function c(e){e&&"function"==typeof e&&WeixinJSBridge.invoke("getNetworkType",{},function(i){e(i.err_msg)})}function l(){WeixinJSBridge.call("closeWindow")}function _(e){if(e&&"function"==typeof e){var i=this,n=function(){e(i)};"undefined"==typeof window.WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",n,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",n),document.attachEvent("onWeixinJSBridgeReady",n)):n()}}return{version:"1.6",ready:_,shareToTimeline:e,shareToWeibo:n,shareToFriend:i,showOptionMenu:d,hideOptionMenu:o,showToolbar:t,hideToolbar:r,getNetworkType:c,imagePreview:a,closeWindow:l}}();