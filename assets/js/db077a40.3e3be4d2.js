"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[8364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Lab 17: Setup Backend REST API"},i=void 0,l={unversionedId:"labs/ts/SetupBackendRESTAPI",id:"labs/ts/SetupBackendRESTAPI",title:"Lab 17: Setup Backend REST API",description:"Objectives",source:"@site/docs/labs/ts/17-SetupBackendRESTAPI.md",sourceDirName:"labs/ts",slug:"/labs/ts/SetupBackendRESTAPI",permalink:"/docs/labs/ts/SetupBackendRESTAPI",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Lab 17: Setup Backend REST API"}},p={},s=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Install the backend REST API server",id:"install-the-backend-rest-api-server",level:3},{value:"Create a custom npm script to run the REST API server",id:"create-a-custom-npm-script-to-run-the-rest-api-server",level:3},{value:"Start the REST API server",id:"start-the-rest-api-server",level:3},{value:"\u2714 You have completed Lab 17",id:"-you-have-completed-lab-17",level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"objectives"},"Objectives"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install the backend REST API server"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a custom npm script to run the REST API server"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Start the REST API server")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"install-the-backend-rest-api-server"},"Install the backend REST API server"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Open")," a ",(0,r.kt)("inlineCode",{parentName:"li"},"command prompt")," (Windows) or ",(0,r.kt)("inlineCode",{parentName:"li"},"terminal")," (Mac)."),(0,r.kt)("li",{parentName:"ol"},"Change the ",(0,r.kt)("strong",{parentName:"li"},"current directory")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"code\\keeptrack"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Run")," ",(0,r.kt)("em",{parentName:"li"},"one")," of the following commands:",(0,r.kt)("h4",{parentName:"li",id:"npm"},"npm"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install json-server@0.16.2\n")),(0,r.kt)("h4",{parentName:"li",id:"yarn"},"Yarn"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add json-server@0.16.2\n")))),(0,r.kt)("h3",{id:"create-a-custom-npm-script-to-run-the-rest-api-server"},"Create a custom npm script to run the REST API server"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Add")," a ",(0,r.kt)("strong",{parentName:"li"},"script")," to ",(0,r.kt)("strong",{parentName:"li"},"start")," the ",(0,r.kt)("strong",{parentName:"li"},"backend")," REST API.",(0,r.kt)("h4",{parentName:"li",id:"packagejson"},(0,r.kt)("inlineCode",{parentName:"h4"},"\\package.json")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'{\n "name": "keeptrack",\n ...\n "scripts": {\n     "start": "react-scripts start",\n     "build": "react-scripts build",\n     "test": "react-scripts test",\n     "eject": "react-scripts eject",\n+    "api": "json-server api/db.json --port 4000"\n },\n}\n'))),(0,r.kt)("li",{parentName:"ol"},"From the starter files repo that you downloaded in Lab 5 (might be in your downloads folder), copy the directory ",(0,r.kt)("inlineCode",{parentName:"li"},"api")," into the ",(0,r.kt)("inlineCode",{parentName:"li"},"code\\keeptrack")," directory.")),(0,r.kt)("h3",{id:"start-the-rest-api-server"},"Start the REST API server"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"In")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"command prompt")," (Windows) or ",(0,r.kt)("inlineCode",{parentName:"p"},"terminal")," (Mac) with the current ",(0,r.kt)("strong",{parentName:"p"},"directory")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"code\\keeptrack"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run")," ",(0,r.kt)("em",{parentName:"p"},"one")," of the following commands:"),(0,r.kt)("h4",{parentName:"li",id:"npm-1"},"npm"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm run api\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("strong",{parentName:"p"},"run")," command is short for ",(0,r.kt)("strong",{parentName:"p"},"run-script"),". Running the backend ",(0,r.kt)("inlineCode",{parentName:"p"},"json-server")," through an ",(0,r.kt)("inlineCode",{parentName:"p"},"npm script")," ensures that we are using the local version of the server we just installed and not a previously installed global version."),(0,r.kt)("h4",{parentName:"blockquote",id:"yarn-1"},"Yarn"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn api\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"server")," should ",(0,r.kt)("strong",{parentName:"p"},"start")," and ",(0,r.kt)("strong",{parentName:"p"},"output")," similar to the following should display."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," \\{^_^}/ hi!\n\n Loading api/db.json\n Done\n\n Resources\n http://localhost:4000/projects\n\n Home\n http://localhost:4000\n\n Type s + enter at any time to create a snapshot of the database\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note that if you visit ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/")," you would normally see the ",(0,r.kt)("inlineCode",{parentName:"p"},"json-server")," landing page but this will not work when you are inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"Create React App")," project."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"Chrome")," browser open:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://localhost:4000/projects"},"http://localhost:4000/projects")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should see ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," data being returned."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": 1,\n        "name": "Johnson - Kutch",\n        "description": "Fully-configurable intermediate framework. Ullam occaecati libero laudantium nihil voluptas omnis qui modi qui.",\n        "imageUrl": "/assets/placeimg_500_300_arch4.jpg",\n        "contractTypeId": 3,\n        "contractSignedOn": "2013-08-04T22:39:41.473Z",\n        "budget": 54637,\n        "isActive": false\n    },\n    {\n        "id": 2,\n        "name": "Dillesik LLCs",\n        "description": "Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.",\n        "imageUrl": "/assets/placeimg_500_300_arch12.jpg",\n        "contractTypeId": 6,\n        "contractSignedOn": "2016-06-26T18:24:01.706Z",\n        "budget": 29729,\n        "isActive": true\n    },\n    {\n        "id": 3,\n        "name": "Purdy, Keeling and Smithams",\n        "description": "Innovative 6th generation model. Perferendis libero qui iusto et ullam cum sint molestias vel.",\n        "imageUrl": "/assets/placeimg_500_300_arch5.jpg",\n        "contractTypeId": 4,\n        "contractSignedOn": "2013-05-26T01:10:42.344Z",\n        "budget": 45660,\n        "isActive": true\n    },\n    ...\n]\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-you-have-completed-lab-17"},"\u2714"," You have completed Lab 17"))}d.isMDXComponent=!0}}]);