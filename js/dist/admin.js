module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e){t.exports=flarum.core.compat["admin/app"]},function(t,e){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(t,e){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},function(t,e,n){"use strict";var o=n(2),r=n.n(o);function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var a=n(0),c=n.n(a),u=n(3),i=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,s(e,n);var r=o.prototype;return r.oncreate=function(t){!function(t,e){var n=document.getElementById(t),o=n.querySelector(".days"),r=n.querySelector(".hours"),s=n.querySelector(".minutes"),a=n.querySelector(".seconds");function c(){var t=function(t){var e=Date.parse(t)-Date.parse(new Date),n=Math.floor(e/1e3%60),o=Math.floor(e/1e3/60%60),r=Math.floor(e/36e5%24);return{total:e,days:Math.floor(e/864e5),hours:r,minutes:o,seconds:n}}(e);o.innerHTML=t.days,r.innerHTML=("0"+t.hours).slice(-2),s.innerHTML=("0"+t.minutes).slice(-2),a.innerHTML=("0"+t.seconds).slice(-2),t.total<=0&&clearInterval(u)}c();var u=setInterval(c,1e3)}("clockdiv",c.a.forum.attribute("countdownEndTime"))},r.className=function(){return"EventsCountDown-widget"},r.icon=function(){return"fas fa-stopwatch-20"},r.content=function(){var t=c.a.translator.trans("justoverclock-events-countdown.forum.days"),e=c.a.translator.trans("justoverclock-events-countdown.forum.hours"),n=c.a.translator.trans("justoverclock-events-countdown.forum.minutes"),o=c.a.translator.trans("justoverclock-events-countdown.forum.seconds"),r=c.a.forum.attribute("event_title")||'The new "event" is near!! We start in...';return m("div",{class:"countdown-container"},m("h2",{class:"event-text"},r),m("div",{id:"clockdiv"},m("div",{class:"cntdwn-widget"},m("span",{class:"days"}),m("div",{class:"smalltext"},t)),m("div",{class:"cntdwn-widget"},m("span",{class:"hours"}),m("div",{class:"smalltext"},e)),m("div",{class:"cntdwn-widget"},m("span",{class:"minutes"}),m("div",{class:"smalltext"},n)),m("div",{class:"cntdwn-widget"},m("span",{class:"seconds"}),m("div",{class:"smalltext"},o))))},o}(n.n(u).a);e.a=function(t){(new r.a).add({key:"eventsCountdoen",component:i,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"justoverclock-events-countdown")}},,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),s=n(4);r.a.initializers.add("justoverclock/events-countdown",(function(){Object(s.a)(r.a),r.a.extensionData.for("justoverclock-events-countdown").registerSetting({setting:"justoverclock-events-countdown.countdownEndTime",name:"countdownEndTime",label:r.a.translator.trans("justoverclock-events-countdown.admin.endTime"),help:r.a.translator.trans("justoverclock-events-countdown.admin.endTime-help"),placeholder:"Dec 24 2021 00:00",type:"text"}).registerSetting({setting:"justoverclock-events-countdown.event_title",name:"event_title",label:r.a.translator.trans("justoverclock-events-countdown.admin.evTitle"),help:r.a.translator.trans("justoverclock-events-countdown.admin.evTitle-help"),placeholder:"Waiting Christmas!",type:"text"})}))}]);
//# sourceMappingURL=admin.js.map