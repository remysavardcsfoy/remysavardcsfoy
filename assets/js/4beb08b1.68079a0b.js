"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[1161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(r),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const s={title:"Testing Lab 2: Snapshot Tests"},o=void 0,p={unversionedId:"labs/ts/T2-SnapshotTests",id:"labs/ts/T2-SnapshotTests",title:"Testing Lab 2: Snapshot Tests",description:"Objectives",source:"@site/docs/labs/ts/T2-SnapshotTests.md",sourceDirName:"labs/ts",slug:"/labs/ts/T2-SnapshotTests",permalink:"/docs/labs/ts/T2-SnapshotTests",draft:!1,tags:[],version:"current",frontMatter:{title:"Testing Lab 2: Snapshot Tests"}},l={},i=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Install React&#39;s Test Renderer",id:"install-reacts-test-renderer",level:3},{value:"Create Your First Snapshot Test",id:"create-your-first-snapshot-test",level:3},{value:"\u2714 You have completed Testing Lab 2",id:"-you-have-completed-testing-lab-2",level:3}],c={toc:i},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install React's Test Renderer"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create Your First Snapshot Test")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"install-reacts-test-renderer"},"Install React's Test Renderer"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Open")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"command prompt")," (Windows) or ",(0,a.kt)("inlineCode",{parentName:"p"},"terminal")," (Mac).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the ",(0,a.kt)("strong",{parentName:"p"},"current directory")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"code\\keeptrack"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Run")," ",(0,a.kt)("em",{parentName:"p"},"one")," of the following sets of commands:"),(0,a.kt)("h4",{parentName:"li",id:"npm"},"npm"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i react-test-renderer --save-dev\nnpm i @types/react-test-renderer --save-dev\n")),(0,a.kt)("h4",{parentName:"li",id:"yarn"},"Yarn"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add react-test-renderer\nyarn add @types/react-test-renderer --save-dev\n")))),(0,a.kt)("h3",{id:"create-your-first-snapshot-test"},"Create Your First Snapshot Test"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a snapshot test for the component. Organize the tests in a suite (describe function)."),(0,a.kt)("h4",{parentName:"li",id:"srchomehomepagetesttsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\home\\HomePage.test.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nimport HomePage from './HomePage';\n+ import renderer from 'react-test-renderer';\n\n+ describe('<HomePage />', () => {\n\n  test('should render without crashing', () => {\n    render(<HomePage />);\n  });\n\n+  test('snapshot', () => {\n+    const tree = renderer.create(<HomePage />).toJSON();\n+    expect(tree).toMatchSnapshot();\n+  });\n\n+ });\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify the snapshot is created."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," \u203a 1 snapshot written.\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Open")," ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\home\\__snapshots__\\HomePage.test.tsx.snap")," and review the contents."))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-you-have-completed-testing-lab-2"},"\u2714"," You have completed Testing Lab 2"))}d.isMDXComponent=!0}}]);