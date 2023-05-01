"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[4782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Virtual DOM",sidebar_label:"Virtual DOM",slug:"/virtual-dom"},i=void 0,l={unversionedId:"VirtualDOM",id:"VirtualDOM",title:"Virtual DOM",description:"React impl\xe9mente un syst\xe8me DOM ind\xe9pendant du navigateur pour les performances et la compatibilit\xe9 entre navigateurs. Ils appellent cela le DOM virtuel.",source:"@site/docs/04-VirtualDOM.md",sourceDirName:".",slug:"/virtual-dom",permalink:"/docs/virtual-dom",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Virtual DOM",sidebar_label:"Virtual DOM",slug:"/virtual-dom"}},c={},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React impl\xe9mente un syst\xe8me DOM ind\xe9pendant du navigateur pour les performances et la compatibilit\xe9 entre navigateurs. Ils appellent cela le DOM virtuel."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remplacez le code JavaScript dans ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js")," par ce qui suit\xa0:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const rootElement = document.getElementById('root');\nconst root = ReactDOM.createRoot(rootElement);\n\nfunction renderElement() {\n  const element = (\n    <div className=\"post\">\n      <h1>My First Blog Post</h1>\n      <div>Author: Mark Twain</div>\n      <div>Published: {new Date().toLocaleTimeString()}</div>\n      <p>\n        I am new to blogging and this is my first post. You should expect a\n        lot of great things from me.\n      </p>\n    </div>\n  );\n\n  root.render(element);\n}\nsetInterval(renderElement, 1000);\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ouvrez la page dans Chrome et inspectez la date de publication pour voir qu'elle ne met \xe0 jour que la date mais que le reste du DOM n'est pas mis \xe0 jour.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Voir le sch\xe9ma ci-dessous pour mieux comprendre le fonctionnement du DOM virtuel dans React."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1474579/98454703-84cddf80-2135-11eb-91a3-cdcb7eb47712.png",alt:"Virtual DOM"})),(0,a.kt)("h2",{parentName:"li",id:"reference"},"Reference"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/eggheadio/illustrated-dev/blob/master/content/explainers/react-vdom/index.mdx"},"Illustration of React Virtual DOM")))))}m.isMDXComponent=!0}}]);