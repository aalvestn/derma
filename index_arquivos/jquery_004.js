!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a,b){function k(a){function e(a){c?(b(),g(e),d=!0,c=!1):d=!1}var b=a,c=!1,d=!1;this.kick=function(a){c=!0,d||e()},this.end=function(a){var e=b;a&&(d?(b=c?function(){e(),a()}:a,c=!0):a())}}function l(){return!0}function m(){return!1}function n(a){a.preventDefault()}function o(a){h[a.target.tagName.toLowerCase()]||a.preventDefault()}function p(a){return 1===a.which&&!a.ctrlKey&&!a.altKey}function q(a,b){var c,d;if(a.identifiedTouch)return a.identifiedTouch(b);for(c=-1,d=a.length;++c<d;)if(a[c].identifier===b)return a[c]}function r(a,b){var c=q(a.changedTouches,b.identifier);if(c&&(c.pageX!==b.pageX||c.pageY!==b.pageY))return c}function s(a){var b;p(a)&&(b={target:a.target,startX:a.pageX,startY:a.pageY,timeStamp:a.timeStamp},d(document,i.move,t,b),d(document,i.cancel,u,b))}function t(a){A(a,a.data,a,v)}function u(a){v()}function v(){e(document,i.move,t),e(document,i.cancel,u)}function w(a){var b,c;h[a.target.tagName.toLowerCase()]||(b=a.changedTouches[0],c={target:b.target,startX:b.pageX,startY:b.pageY,timeStamp:a.timeStamp,identifier:b.identifier},d(document,j.move+"."+b.identifier,x,c),d(document,j.cancel+"."+b.identifier,y,c))}function x(a){var b=a.data,c=r(a,b);c&&A(a,b,c,z)}function y(a){var b=a.data;q(a.changedTouches,b.identifier)&&z(b.identifier)}function z(a){e(document,"."+a,x),e(document,"."+a,y)}function A(a,b,d,e){var f=d.pageX-b.startX,g=d.pageY-b.startY;f*f+g*g<c*c||D(a,b,d,f,g,e)}function B(){return this._handled=l,!1}function C(a){a._handled()}function D(a,b,c,d,e,g){var i,j;b.target;i=a.targetTouches,j=a.timeStamp-b.timeStamp,b.type="movestart",b.distX=d,b.distY=e,b.deltaX=d,b.deltaY=e,b.pageX=c.pageX,b.pageY=c.pageY,b.velocityX=d/j,b.velocityY=e/j,b.targetTouches=i,b.finger=i?i.length:1,b._handled=B,b._preventTouchmoveDefault=function(){a.preventDefault()},f(b.target,b),g(b.identifier)}function E(a){var b=a.data.timer;a.data.touch=a,a.data.timeStamp=a.timeStamp,b.kick()}function F(a){var b=a.data.event,c=a.data.timer;G(),L(b,c,function(){setTimeout(function(){e(b.target,"click",m)},0)})}function G(a){e(document,i.move,E),e(document,i.end,F)}function H(a){var b=a.data.event,c=a.data.timer,d=r(a,b);d&&(a.preventDefault(),b.targetTouches=a.targetTouches,a.data.touch=d,a.data.timeStamp=a.timeStamp,c.kick())}function I(a){var b=a.data.event,c=a.data.timer;q(a.changedTouches,b.identifier)&&(J(b),L(b,c))}function J(a){e(document,"."+a.identifier,H),e(document,"."+a.identifier,I)}function K(a,b,c,d){var e=c-a.timeStamp;a.type="move",a.distX=b.pageX-a.startX,a.distY=b.pageY-a.startY,a.deltaX=b.pageX-a.pageX,a.deltaY=b.pageY-a.pageY,a.velocityX=.3*a.velocityX+.7*a.deltaX/e,a.velocityY=.3*a.velocityY+.7*a.deltaY/e,a.pageX=b.pageX,a.pageY=b.pageY}function L(a,b,c){b.end(function(){return a.type="moveend",f(a.target,a),c&&c()})}function M(a,b,c){return d(this,"movestart.move",C),!0}function N(a){return e(this,"dragstart drag",n),e(this,"mousedown touchstart",o),e(this,"movestart",C),!0}function O(a){"move"!==a.namespace&&"moveend"!==a.namespace&&(d(this,"dragstart."+a.guid+" drag."+a.guid,n,b,a.selector),d(this,"mousedown."+a.guid,o,b,a.selector))}function P(a){"move"!==a.namespace&&"moveend"!==a.namespace&&(e(this,"dragstart."+a.guid+" drag."+a.guid),e(this,"mousedown."+a.guid))}var c=6,d=a.event.add,e=a.event.remove,f=function(b,c,d){a.event.trigger(c,d,b)},g=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,b){return window.setTimeout(function(){a()},25)}}(),h={textarea:!0,input:!0,select:!0,button:!0},i={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},j={move:"touchmove",cancel:"touchend",end:"touchend"};a.event.special.movestart={setup:M,teardown:N,add:O,remove:P,_default:function(a){function g(b){K(c,e.touch,e.timeStamp),f(a.target,c)}var c,e;a._handled()&&(c={target:a.target,startX:a.startX,startY:a.startY,pageX:a.pageX,pageY:a.pageY,distX:a.distX,distY:a.distY,deltaX:a.deltaX,deltaY:a.deltaY,velocityX:a.velocityX,velocityY:a.velocityY,timeStamp:a.timeStamp,identifier:a.identifier,targetTouches:a.targetTouches,finger:a.finger},e={event:c,timer:new k(g),touch:b,timeStamp:b},a.identifier===b?(d(a.target,"click",m),d(document,i.move,E,e),d(document,i.end,F,e)):(a._preventTouchmoveDefault(),d(document,j.move+"."+a.identifier,H,e),d(document,j.end+"."+a.identifier,I,e)))}},a.event.special.move={setup:function(){d(this,"movestart.move",a.noop)},teardown:function(){e(this,"movestart.move",a.noop)}},a.event.special.moveend={setup:function(){d(this,"movestart.moveend",a.noop)},teardown:function(){e(this,"movestart.moveend",a.noop)}},d(document,"mousedown.move",s),d(document,"touchstart.move",w),"function"==typeof Array.prototype.indexOf&&function(a,b){for(var c=["changedTouches","targetTouches"],d=c.length;d--;)-1===a.event.props.indexOf(c[d])&&a.event.props.push(c[d])}(a)});