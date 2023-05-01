"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[3621],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=c(a),u=r,d=k["".concat(p,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(d,o(o({ref:t},s),{},{components:a})):n.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={title:"How to Skip Labs"},o=void 0,i={unversionedId:"labs/ts/A1-SkippingLabs",id:"labs/ts/A1-SkippingLabs",title:"How to Skip Labs",description:"Labs can be skipped by attendees who:",source:"@site/docs/labs/ts/A1-SkippingLabs.md",sourceDirName:"labs/ts",slug:"/labs/ts/A1-SkippingLabs",permalink:"/docs/labs/ts/A1-SkippingLabs",draft:!1,tags:[],version:"current",frontMatter:{title:"How to Skip Labs"}},p={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Backup your current code",id:"backup-your-current-code",level:3},{value:"Download code",id:"download-code",level:3},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"\u2714 You have completed the Appendix A1 for the labs.",id:"-you-have-completed-the-appendix-a1-for-the-labs",level:3},{value:"Reference",id:"reference",level:2}],s={toc:c},k="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Labs can be skipped by attendees who:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"arrive late, leave early"),(0,r.kt)("li",{parentName:"ul"},"get pulled into a meeting"),(0,r.kt)("li",{parentName:"ul"},"have a doctors appointment"),(0,r.kt)("li",{parentName:"ul"},"understand a topic and want to move on to a topic they don't know"),(0,r.kt)("li",{parentName:"ul"},"etc...")),(0,r.kt)("h2",{id:"objectives"},"Objectives"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Backup your current code"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Download code"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install dependencies")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"backup-your-current-code"},"Backup your current code"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Close any editor(s) and command prompt(s) or terminal(s) related to your working copy of the course labs in the directory ",(0,r.kt)("inlineCode",{parentName:"li"},"code\\keeptrack"),"."),(0,r.kt)("li",{parentName:"ol"},"Rename ",(0,r.kt)("inlineCode",{parentName:"li"},"code\\keeptrack")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"code\\keeptrack_bkup1")," or something similar.")),(0,r.kt)("h3",{id:"download-code"},"Download code"),(0,r.kt)("p",null,"Download the completed code for the lab ",(0,r.kt)("strong",{parentName:"p"},"before")," the one you would like to work on following the steps below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For example, if you wanted to work on lab 18 download lab 17")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/craigmckeachie/keeptrack-ts"},"Finished solution code for each of the labs is available in this repository"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the branch you want to download:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"https://github.com/craigmckeachie/keeptrack-ts/tree/lab25\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can use this template:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"https://github.com/craigmckeachie/keeptrack-ts/tree/labxx\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Replacing xx with the lab number"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change ",(0,r.kt)("inlineCode",{parentName:"p"},"tree")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"archive")," and add a ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," extension"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"-   https://github.com/craigmckeachie/keeptrack-ts/tree/lab25\n+   https://github.com/craigmckeachie/keeptrack-ts/archive/lab25.zip\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Rename the zip.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- keeptrack-ts-lab25.zip\n+ keeptrack.zip\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"keeptrack.zip")," into ",(0,r.kt)("inlineCode",{parentName:"li"},"code\\keeptrack.zip"),"."),(0,r.kt)("li",{parentName:"ol"},"Unzip the file.")),(0,r.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open\xa0a\xa0command prompt\xa0(Windows) or\xa0terminal\xa0(Mac) in ",(0,r.kt)("inlineCode",{parentName:"li"},"code\\keeptrack"),"."),(0,r.kt)("li",{parentName:"ol"},"Run the command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n"))),(0,r.kt)("li",{parentName:"ol"},"After the install finishes, run the command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm start\n"))),(0,r.kt)("li",{parentName:"ol"},"If you are working on a lab which requires the backend api (lab 17 or later). Open another command-line or terminal. Run the command.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm run api\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-you-have-completed-the-appendix-a1-for-the-labs"},"\u2714"," You have completed the Appendix A1 for the labs."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/2751227/how-to-download-source-in-zip-format-from-github"},"How to download source in ZIP format from GitHub?"))))}m.isMDXComponent=!0}}]);