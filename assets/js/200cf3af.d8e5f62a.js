"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[1744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,b=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Lab 10: Creating a Form to Edit Your Data"},i=void 0,l={unversionedId:"labs/ts/CreatingForm",id:"labs/ts/CreatingForm",title:"Lab 10: Creating a Form to Edit Your Data",description:"Objectives",source:"@site/docs/labs/ts/10-CreatingForm.md",sourceDirName:"labs/ts",slug:"/labs/ts/CreatingForm",permalink:"/docs/labs/ts/CreatingForm",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Lab 10: Creating a Form to Edit Your Data"}},p={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Create a form component",id:"create-a-form-component",level:3},{value:"Render the form component",id:"render-the-form-component",level:3},{value:"\u2714 You have completed Lab 10",id:"-you-have-completed-lab-10",level:3}],m={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a form component"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Render the form component")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"create-a-form-component"},"Create a form component"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following CSS style to to set the width of the form."),(0,a.kt)("h4",{parentName:"li",id:"srcindexcss"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\index.css")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css"},"form {\n  min-width: 300px;\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\projects\\ProjectForm.tsx"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectForm")," ",(0,a.kt)("strong",{parentName:"p"},"function")," component that meets the following specifications:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Paste the HTML below into the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectForm")," and use your editor and the link below to identify the changes needed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTML")," to make it ",(0,a.kt)("inlineCode",{parentName:"p"},"JSX"),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/dom-elements.html#differences-in-attributes"},"DOM Element vs JSX Element Differences"))),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"We will pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"project")," object as a ",(0,a.kt)("inlineCode",{parentName:"p"},"prop")," in a later lab so you just need to render the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTML")," from the previous step as ",(0,a.kt)("inlineCode",{parentName:"p"},"JSX"),".")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form class="input-group vertical">\n  <label for="name">Project Name</label>\n  <input type="text" name="name" placeholder="enter name" />\n  <label for="description">Project Description</label>\n\n  <textarea name="description" placeholder="enter description"></textarea>\n  <label for="budget">Project Budget</label>\n\n  <input type="number" name="budget" placeholder="enter budget" />\n  <label for="isActive">Active?</label>\n  <input type="checkbox" name="isActive" />\n\n  <div class="input-group">\n    <button class="primary bordered medium">Save</button>\n    <span></span>\n    <button type="button" class="bordered medium">cancel</button>\n  </div>\n</form>\n')),(0,a.kt)("h3",{parentName:"li",id:"solution"},"Solution"),(0,a.kt)("h4",{parentName:"li",id:"srcprojectsprojectformtsx"},"src\\projects\\ProjectForm.tsx"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nfunction ProjectForm() {\n  return (\n    <form className="input-group vertical">\n      <label htmlFor="name">Project Name</label>\n      <input type="text" name="name" placeholder="enter name" />\n      <label htmlFor="description">Project Description</label>\n      <textarea name="description" placeholder="enter description" />\n      <label htmlFor="budget">Project Budget</label>\n      <input type="number" name="budget" placeholder="enter budget" />\n      <label htmlFor="isActive">Active?</label>\n      <input type="checkbox" name="isActive" />\n      <div className="input-group">\n        <button className="primary bordered medium">Save</button>\n        <span />\n        <button type="button" className="bordered medium">\n          cancel\n        </button>\n      </div>\n    </form>\n  );\n}\n\nexport default ProjectForm;\n')))))),(0,a.kt)("h3",{id:"render-the-form-component"},"Render the form component"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\projects\\ProjectList.tsx"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Render the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectForm")," component below the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectCard"),"."),(0,a.kt)("h4",{parentName:"li",id:"srcprojectsprojectlisttsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectList.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'...\n+ import ProjectForm from \'./ProjectForm\';\n...\nfunction ProjectList ({ projects }: ProjectListProps) {\n    const items = projects.map(project => (\n      <div key={project.id} className="cols-sm">\n        <ProjectCard project={project}></ProjectCard>\n+       <ProjectForm />\n      </div>\n    ));\n    return <div className="row">{items}</div>;\n}\n...\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Verify")," a ",(0,a.kt)("strong",{parentName:"p"},"form")," ",(0,a.kt)("strong",{parentName:"p"},"renders")," under each card in the application. Note, you may need to reload the application a few times to see the changes on this step."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1474579/64896991-c8bb7680-d64f-11e9-913c-b3e8521a74e3.png",alt:"image"})))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-you-have-completed-lab-10"},"\u2714"," You have completed Lab 10"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")))}d.isMDXComponent=!0}}]);