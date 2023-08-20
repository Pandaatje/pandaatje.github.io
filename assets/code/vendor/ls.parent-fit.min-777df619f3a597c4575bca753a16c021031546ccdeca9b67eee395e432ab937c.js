/*! lazysizes - v1.5.0-rc3 */

!function(a,b){"use strict";if(a.addEventListener){var c,d=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,e=/^picture$/i,f={getFit:function(a){var b={fit:a.getAttribute("data-parent-fit")};return b.fit?(b.parent=a.parentNode,b.parent&&e.test(b.parent.nodeName||"")&&(b.parent=b.parent.parentNode)):b.fit=(getComputedStyle(a)||{getPropertyValue:function(){}}).getPropertyValue("object-fit"),b},getImageRatio:function(b){var c,f,g,h={},i=b.parentNode,j=i&&e.test(i.nodeName||"")?i.querySelectorAll("source, img"):[b];for(c=0;c<j.length;c++)if(b=j[c],f=b.getAttribute(lazySizesConfig.srcsetAttr)||b.getAttribute("srcset")||b.getAttribute("data-pfsrcset")||b.getAttribute("data-risrcset")||"",g=b.getAttribute("media"),g=lazySizesConfig.customMedia[b.getAttribute("data-media")||g]||g,f&&(!g||(a.matchMedia&&matchMedia(g)||{}).matches)){f.match(d)&&("w"==RegExp.$2?(h.w=RegExp.$1,h.h=RegExp.$3):(h.w=RegExp.$3,h.h=RegExp.$1));break}return h.w/h.h},calculateSize:function(a,b){if(a._parentfitWidthCache)return a._parentfitWidthCache;var c,d,e,f,g=this.getFit(a),h=g.fit,i=g.parent;return"width"==h||("contain"==h||"cover"==h)&&(e=this.getImageRatio(a))?(i?b=i.offsetWidth:i=a,f=b,"width"==h?f=b:(d=i.offsetHeight,d>40&&(c=b/d)&&("cover"==h&&e>c||"contain"==h&&c>e)&&(f=b*(e/c))),f):b}},g=function(){a.lazySizes&&(lazySizes.parentFit||(lazySizes.parentFit=f),a.removeEventListener("lazybeforeunveil",g,!0))};a.lazySizesConfig=a.lazySizesConfig||{},c=a.lazySizesConfig.rC,a.lazySizesConfig.rC=function(a,b){return c&&(b=c.apply(this,arguments)||b),a._parentfitWidthCache=f.calculateSize(a,b)||b,a._parentfitWidthCache},a.addEventListener("lazybeforeunveil",g,!0),b.addEventListener("lazybeforesizes",function(a){if(!a.defaultPrevented){var b=a.target;a.detail.width=f.calculateSize(b,a.detail.width),b._parentfitWidthCache&&delete b._parentfitWidthCache}}),setTimeout(g)}}(window,document);
