"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[2015],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,d=c["".concat(s,".").concat(u)]||c[u]||g[u]||r;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={title:"Images"},o=void 0,l={unversionedId:"gatsby/concepts/Images",id:"gatsby/concepts/Images",title:"Images",description:"Importing assets with webpack",source:"@site/docs/gatsby/concepts/06-Images.md",sourceDirName:"gatsby/concepts",slug:"/gatsby/concepts/Images",permalink:"/docs/gatsby/concepts/Images",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Images"}},s={},p=[{value:"Importing assets with webpack",id:"importing-assets-with-webpack",level:2},{value:"Gatsby Image plugin",id:"gatsby-image-plugin",level:2},{value:"Why Gatsby&#39;s Automatic Image Optimizations Matter",id:"why-gatsbys-automatic-image-optimizations-matter",level:3},{value:"Using the Gatsby Image plugin",id:"using-the-gatsby-image-plugin",level:3},{value:"Decide which component to use",id:"decide-which-component-to-use",level:3},{value:"Static images",id:"static-images",level:3}],m={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"importing-assets-with-webpack"},"Importing assets with webpack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since Gatsby uses webpack you can import a file right in a JavaScript module. This"),(0,i.kt)("li",{parentName:"ul"},"Tells webpack to include that file in the bundle"),(0,i.kt)("li",{parentName:"ul"},"Importing a file gives you a string value"),(0,i.kt)("li",{parentName:"ul"},"The imported file\u2019s value is the final path you can reference in your code",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. as the src attribute of an image"))),(0,i.kt)("li",{parentName:"ul"},"When the project is built, webpack will correctly move the images into the public folder, and provide us with correct paths"),(0,i.kt)("li",{parentName:"ul"},"webpack finds all relative module references in CSS (they start with ./) and replaces them with the final paths from the compiled bundle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport logo from './logo.png'; // Tell webpack this JS file uses this image\n\nconsole.log(logo); // /logo.84287d09.png\n\nfunction Header() {\n  // Import result is the URL of your image\n  return <img src={logo} alt=\"Logo\" />;\n}\n\nexport default Header;\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path.")),(0,i.kt)("p",null,"You can reference files in CSS to import them, too:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".Logo {\n  background-image: url(./logo.png);\n}\n")),(0,i.kt)("h2",{id:"gatsby-image-plugin"},"Gatsby Image plugin"),(0,i.kt)("p",null,"Adding responsive images to your site while maintaining high performance scores can be difficult to do manually. The Gatsby Image plugin handles the hard parts of producing images in multiple sizes and formats for you!"),(0,i.kt)("h3",{id:"why-gatsbys-automatic-image-optimizations-matter"},"Why Gatsby's Automatic Image Optimizations Matter"),(0,i.kt)("p",null,"The web has come a long way since 1995, when ",(0,i.kt)("inlineCode",{parentName:"p"},'<img src="....">')," syntax was invented. Our visual standards for what we've come to expect have risen -- a lot."),(0,i.kt)("p",null,"When visiting new pages, users expect pages to load near-instantly, with a smooth experience. A delay of 100ms is associated with a 3% increased bounce rate."),(0,i.kt)("p",null,"One important part of overall page loading experience is image loading. There are three basic principles of delivering an optimal image loading experience:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},'Fetch "above the fold" images immediately; delay other work'),". This means doing the work necessary for showing users the images they'll see on page load -- and ",(0,i.kt)("em",{parentName:"p"},"only")," that work, to avoid resource congestion.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Provide a placeholder during image fetch"),'. "Progressive images" are image placeholders -- previews of a full image that hold its place during page load time.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Minimize image file size to reduce request roundtrip time.")," There are a number of ways, from cropping overly large images, to using newer file types, to reduce image file size."))),(0,i.kt)("p",null,"For more details about these features ",(0,i.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/conceptual/using-gatsby-image/"},"see this article"),"."),(0,i.kt)("h3",{id:"using-the-gatsby-image-plugin"},"Using the Gatsby Image plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the following packages:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the plugins to your ",(0,i.kt)("inlineCode",{parentName:"p"},"gatsby-config.js"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js:title=gatsby-config.js"},"module.exports = {\nplugins: [\n    `gatsby-plugin-image`,\n    `gatsby-plugin-sharp`,\n    `gatsby-transformer-sharp`,\n],\n}\n")))),(0,i.kt)("h3",{id:"decide-which-component-to-use"},"Decide which component to use"),(0,i.kt)("p",null,"Two image components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StaticImage")," (static images)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GatsbyImage")," (dynamic images)"),(0,i.kt)("li",{parentName:"ul"},"The simplest way to decide which you need to is to ask yourself: ",(0,i.kt)("em",{parentName:"li"},'"will this image be the same every time the component or template is used?"'),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If it will always be the same, then use ",(0,i.kt)("inlineCode",{parentName:"li"},"StaticImage"),"."),(0,i.kt)("li",{parentName:"ul"},"If it will change, whether through data coming from a CMS or different values passed to a component each time you use it, then it is a dynamic image and you should use the ",(0,i.kt)("inlineCode",{parentName:"li"},"GatsbyImage")," component.")))),(0,i.kt)("h3",{id:"static-images"},"Static images"),(0,i.kt)("p",null,"If you are using an image that will be the same each time the component is used, such as a logo or front page hero image, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"StaticImage")," component. The image can be either a local file in your project, or an image hosted on a remote server. Any remote images are downloaded and resized at build time."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add the image to your project.")),(0,i.kt)("p",{parentName:"li"},"If you are using a local image, copy it into the project. A folder such as ",(0,i.kt)("inlineCode",{parentName:"p"},"src/images")," is a good choice.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add the ",(0,i.kt)("inlineCode",{parentName:"strong"},"StaticImage")," component to your template.")),(0,i.kt)("p",{parentName:"li"},"Import the component, then set the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," prop to point to the image you added earlier. The path is relative to the source file itself. If your component file was ",(0,i.kt)("inlineCode",{parentName:"p"},"src/components/dino.js"),", then you would load the image like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { StaticImage } from \'gatsby-plugin-image\';\n\nexport function Dino() {\n  return <StaticImage src="../images/dino.png" alt="A dinosaur" />;\n}\n')),(0,i.kt)("p",{parentName:"li"},"If you are using a remote image, pass the image URL in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," prop:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { StaticImage } from \'gatsby-plugin-image\';\n\nexport function Kitten() {\n  return (\n    <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />\n  );\n}\n')),(0,i.kt)("p",{parentName:"li"},"When you build your site, the ",(0,i.kt)("inlineCode",{parentName:"p"},"StaticImage")," component will load the image from your filesystem or from the remote URL, and it will generate all the sizes and formats that you need to support a responsive image."),(0,i.kt)("p",{parentName:"li"},"Because the image is loaded at build time, you cannot pass the filename in as a prop, or otherwise generate it outside of the component. It should either be a static string, or a local variable in the component's scope."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Important:")," Remote images are downloaded and resized at build time. If the image is changed on the other server, it will not be updated on your site until you rebuild.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Configure the image.")),(0,i.kt)("p",{parentName:"li"},"You configure the image by passing props to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<StaticImage />")," component. You can change the size and layout, as well as settings such as the type of placeholder used when lazy loading. There are also advanced image processing options available. You can find the full list of options ",(0,i.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/"},"in the API docs"),"."),(0,i.kt)("p",{parentName:"li"},"This component renders a 200px by 200px image of a dinosaur. Before loading it will have a blurred, low-resolution placeholder. It uses the ",(0,i.kt)("inlineCode",{parentName:"p"},'"fixed"')," layout, which means the image does not resize with its container."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { StaticImage } from \'gatsby-plugin-image\';\n\nexport function Dino() {\n  return (\n    <StaticImage\n      src="../images/dino.png"\n      alt="A dinosaur"\n      placeholder="blurred"\n      layout="fixed"\n      width={200}\n      height={200}\n    />\n  );\n}\n')))))}g.isMDXComponent=!0}}]);