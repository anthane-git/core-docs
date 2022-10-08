"use strict";(self.webpackChunk_anthane_core=self.webpackChunk_anthane_core||[]).push([[369],{8369:(e,n,t)=>{t.d(n,{OK:()=>D,td:()=>P,x4:()=>M,mQ:()=>R});var r=t(7294);function a(e){return function(n){return!!n.type&&n.type.tabsRole===e}}var l=a("Tab"),c=a("TabList"),s=a("TabPanel");function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function u(e,n){return r.Children.map(e,(function(e){return null===e?null:function(e){return l(e)||c(e)||s(e)}(e)?n(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,r.cloneElement)(e,o({},e.props,{children:u(e.props.children,n)})):e}))}function i(e,n){return r.Children.forEach(e,(function(e){null!==e&&(l(e)||s(e)?n(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(c(e)&&n(e),i(e.props.children,n)))}))}var d=t(6010),f=0;function p(){return"react-tabs-"+f++}function b(e){var n=0;return i(e,(function(e){l(e)&&n++})),n}var v,m=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function y(e){return e&&"getAttribute"in e}function N(e){return y(e)&&e.getAttribute("data-rttab")}function C(e){return y(e)&&"true"===e.getAttribute("aria-disabled")}var O=function(e){var n=(0,r.useRef)([]),t=(0,r.useRef)([]),a=(0,r.useRef)([]),o=(0,r.useRef)();function i(n,t){n<0||n>=O()||(0,e.onSelect)(n,e.selectedIndex,t)}function f(e){for(var n=O(),t=e+1;t<n;t++)if(!C(w(t)))return t;for(var r=0;r<e;r++)if(!C(w(r)))return r;return e}function y(e){for(var n=e;n--;)if(!C(w(n)))return n;for(n=O();n-- >e;)if(!C(w(n)))return n;return e}function O(){return b(e.children)}function w(e){return n.current["tabs-"+e]}function T(e){var n=e.target;do{if(g(n)){if(C(n))return;return void i([].slice.call(n.parentNode.children).filter(N).indexOf(n),e)}}while(null!=(n=n.parentNode))}function g(e){if(!N(e))return!1;var n=e.parentElement;do{if(n===o.current)return!0;if(n.getAttribute("data-rttabs"))break;n=n.parentElement}while(n);return!1}e.children;var R=e.className,k=(e.disabledTabClassName,e.domRef),x=(e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys,function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,m));return r.createElement("div",h({},x,{className:(0,d.Z)(R),onClick:T,onKeyDown:function(n){var t=e.direction,r=e.disableUpDownKeys;if(g(n.target)){var a=e.selectedIndex,l=!1,c=!1;"Space"!==n.code&&32!==n.keyCode&&"Enter"!==n.code&&13!==n.keyCode||(l=!0,c=!1,T(n)),"ArrowLeft"!==n.code&&37!==n.keyCode&&(r||38!==n.keyCode&&"ArrowUp"!==n.code)?"ArrowRight"!==n.code&&39!==n.keyCode&&(r||40!==n.keyCode&&"ArrowDown"!==n.code)?35===n.keyCode||"End"===n.code?(a=function(){for(var e=O();e--;)if(!C(w(e)))return e;return null}(),l=!0,c=!0):36!==n.keyCode&&"Home"!==n.code||(a=function(){for(var e=O(),n=0;n<e;n++)if(!C(w(n)))return n;return null}(),l=!0,c=!0):(a="rtl"===t?y(a):f(a),l=!0,c=!0):(a="rtl"===t?f(a):y(a),l=!0,c=!0),l&&n.preventDefault(),c&&i(a,n)}},ref:function(e){o.current=e,k&&k(e)},"data-rttabs":!0}),function(){var o=0,i=e.children,d=e.disabledTabClassName,f=e.focus,b=e.forceRenderTabPanel,m=e.selectedIndex,h=e.selectedTabClassName,y=e.selectedTabPanelClassName,N=e.environment;t.current=t.current||[],a.current=a.current||[];for(var C=t.current.length-O();C++<0;)t.current.push(p()),a.current.push(p());return u(i,(function(e){var i=e;if(c(e)){var p=0,C=!1;null==v&&function(e){var n=e||("undefined"!=typeof window?window:void 0);try{v=!(void 0===n||!n.document||!n.document.activeElement)}catch(t){v=!1}}(N);var O=N||("undefined"!=typeof window?window:void 0);v&&O&&(C=r.Children.toArray(e.props.children).filter(l).some((function(e,n){return O.document.activeElement===w(n)}))),i=(0,r.cloneElement)(e,{children:u(e.props.children,(function(e){var l="tabs-"+p,c=m===p,s={tabRef:function(e){n.current[l]=e},id:t.current[p],panelId:a.current[p],selected:c,focus:c&&(f||C)};return h&&(s.selectedClassName=h),d&&(s.disabledClassName=d),p++,(0,r.cloneElement)(e,s)}))})}else if(s(e)){var T={id:a.current[o],tabId:t.current[o],selected:m===o};b&&(T.forceRender=b),y&&(T.selectedClassName=y),o++,i=(0,r.cloneElement)(e,T)}return i}))}())};O.defaultProps={className:"react-tabs",focus:!1},O.propTypes={};const w=O;function T(){return T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},T.apply(this,arguments)}var g=function(e){var n=e.children,t=e.defaultFocus,a=e.defaultIndex,l=e.focusTabOnClick,c=e.onSelect,s=(0,r.useState)(t),o=s[0],u=s[1],i=(0,r.useState)(function(e){return null===e.selectedIndex?1:0}(e)),d=i[0],f=(0,r.useState)(1===d?a||0:null),p=f[0],v=f[1];if((0,r.useEffect)((function(){u(!1)}),[]),1===d){var m=b(n);(0,r.useEffect)((function(){if(null!=p){var e=Math.max(0,m-1);v(Math.min(p,e))}}),[m])}var h=T({},e);return h.focus=o,h.onSelect=function(e,n,t){"function"==typeof c&&!1===c(e,n,t)||(l&&u(!0),1===d&&v(e))},null!=p&&(h.selectedIndex=p),delete h.defaultFocus,delete h.defaultIndex,delete h.focusTabOnClick,r.createElement(w,h,n)};g.propTypes={},g.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},g.tabsRole="Tabs";const R=g;var k=["children","className"];function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}var I=function(e){var n=e.children,t=e.className,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,k);return r.createElement("ul",x({},a,{className:(0,d.Z)(t),role:"tablist"}),n)};I.tabsRole="TabList",I.propTypes={},I.defaultProps={className:"react-tabs__tab-list"};const P=I;var E=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function j(){return j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},j.apply(this,arguments)}var _="react-tabs__tab",A={className:_,disabledClassName:_+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:_+"--selected"},S=function(e){var n,t=(0,r.useRef)(),a=e.children,l=e.className,c=e.disabled,s=e.disabledClassName,o=e.focus,u=e.id,i=e.panelId,f=e.selected,p=e.selectedClassName,b=e.tabIndex,v=e.tabRef,m=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,E);return(0,r.useEffect)((function(){f&&o&&t.current.focus()}),[f,o]),r.createElement("li",j({},m,{className:(0,d.Z)(l,(n={},n[p]=f,n[s]=c,n)),ref:function(e){t.current=e,v&&v(e)},role:"tab",id:u,"aria-selected":f?"true":"false","aria-disabled":c?"true":"false","aria-controls":i,tabIndex:b||(f?"0":null),"data-rttab":!0}),a)};S.propTypes={},S.tabsRole="Tab",S.defaultProps=A;const D=S;var K=["children","className","forceRender","id","selected","selectedClassName","tabId"];function U(){return U=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},U.apply(this,arguments)}var Z="react-tabs__tab-panel",F={className:Z,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},L=function(e){var n,t=e.children,a=e.className,l=e.forceRender,c=e.id,s=e.selected,o=e.selectedClassName,u=e.tabId,i=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,K);return r.createElement("div",U({},i,{className:(0,d.Z)(a,(n={},n[o]=s,n)),role:"tabpanel",id:c,"aria-labelledby":u}),l||s?t:null)};L.tabsRole="TabPanel",L.propTypes={},L.defaultProps=F;const M=L}}]);