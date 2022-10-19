"use strict";(self.webpackChunk_anthane_core=self.webpackChunk_anthane_core||[]).push([[9471],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1444:(e,t,r)=>{r.d(t,{Km:()=>s,cx:()=>c,yo:()=>l});var n=r(2263),a=r(7294),o=r(6010);const i="heroBanner_Wsgn",l=()=>{const{siteConfig:e}=(0,n.Z)();return a.createElement("header",{className:(0,o.Z)("hero hero--primary",i)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline)))},p="icon_kWsa",s=()=>a.createElement("svg",{viewBox:"0 0 20 20",className:p,style:{width:"14px",height:"14px"}},a.createElement("path",{d:"M15 2a1 1 0 0 1 1 1v13.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-13.5a1 1 0 1 1 2 0v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a1 1 0 0 1 1-1zm-4 2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z"})),c=e=>{let{src:t}=e;return a.createElement("section",null,a.createElement("iframe",{src:`https://anthane-git.github.io/core-elements/${t}`,width:"100%",height:"200"}))}},8260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=r(1444);const i={sidebar_position:2},l="Display",p={unversionedId:"text/display/index",id:"text/display/index",title:"Display",description:"Display is used to render semantic HTML heading elements with the brand typeface.",source:"@site/docs/elements/text/display/index.mdx",sourceDirName:"text/display",slug:"/text/display/",permalink:"/core/elements/text/display/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Caption",permalink:"/core/elements/text/caption/"},next:{title:"Headline",permalink:"/core/elements/text/headline/"}},s={},c=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2}],m={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"display"},"Display"),(0,a.kt)("p",null,"Display is used to render semantic HTML heading elements with the brand typeface."),(0,a.kt)("a",{href:"https://anthane-git.github.io/core-elements/?path=/story/text-typography--component-display",target:"_blank"},"Storybook Link"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("p",null,"To implement display component into your project you'll need to add the import:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Typography } from '@anthane/core-elements';\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"After adding import into your project you can use it simply like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<Typography.Display size="Medium">\n    The quick brown fox jumps over the lazy dog\n</Typography.Display>\n')),(0,a.kt)(o.cx,{src:"?path=/story/text-typography--component-display&full=1",mdxType:"Embed"}))}u.isMDXComponent=!0}}]);