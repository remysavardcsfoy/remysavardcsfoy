"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,u=c["".concat(l,".").concat(d)]||c[d]||g[d]||o;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Images"},i=void 0,s={unversionedId:"gatsby/labs/Images",id:"gatsby/labs/Images",title:"Images",description:"Importing assets with webpack",source:"@site/docs/gatsby/labs/06-Images.md",sourceDirName:"gatsby/labs",slug:"/gatsby/labs/Images",permalink:"/docs/gatsby/labs/Images",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Images"}},l={},p=[{value:"Importing assets with webpack",id:"importing-assets-with-webpack",level:2},{value:"Using the Gatsby Image plugin",id:"using-the-gatsby-image-plugin",level:2}],m={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"importing-assets-with-webpack"},"Importing assets with webpack"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import an image into the home page of the site and display it."),(0,r.kt)("h4",{parentName:"li",id:"srcpagesindexjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\pages\\index.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'import { graphql, Link } from "gatsby"\nimport React from "react"\nimport Layout from "../components/layout"\nimport { PageTitle } from "../components/page-title"\n+ import homePagePhoto from "../images/home-page-photo.jpeg"\n\nexport default function Home({ data }) {\nreturn (\n    <Layout>\n    <PageTitle>Home</PageTitle>\n-    <img src="https://source.unsplash.com/600x300/?house" alt="house" />\n+    <img\n+        className="rounded-md shadow-md"\n+        style={{ width: "600px", height: "300px" }}\n+        src={homePagePhoto}\n+        alt="corporate,office,building"\n+    />\n    ...\n    <p className="mt-6">\n    ...\n    </p>\n    ...\n    </Layout>\n)\n}\n...\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import an image for the about page and display it."),(0,r.kt)("h4",{parentName:"li",id:"srcpagesaboutjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\pages\\about.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'import React from "react"\nimport Layout from "../components/layout"\nimport { PageTitle } from "../components/page-title"\n+ import aboutPhoto from "../images/about-photo.png"\n\nexport default function About() {\nreturn (\n    <Layout>\n    <PageTitle>About</PageTitle>\n+    <img\n+        className="rounded-md shadow-md"\n+        style={{ width: "600px", height: "300px" }}\n+        src={aboutPhoto}\n+        alt="corporate building"\n+    />\n-   <p>\n+   <p className="mt-6">\n    ...\n    </Layout>\n)\n}\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the logo image into the header component and display it."),(0,r.kt)("p",{parentName:"li"},"First remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom-padding")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," element (",(0,r.kt)("inlineCode",{parentName:"p"},"pb-10"),")."),(0,r.kt)("h4",{parentName:"li",id:"srccomponentsheaderjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\components\\header.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'-  <header className="pt-5 col-start-1 col-end-3 border-b-2 border-solid border-gray-600">\n+  <header className="pt-5 col-start-1 col-end-3 border-b-2 border-solid border-gray-600 pb-10">\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'import React from "react"\nimport { useStaticQuery, graphql, Link } from "gatsby"\n+ import acmeLogo from "../images/acme-logo.png"\n\nexport const NavLink = ({ children, to }) => {\n...\n}\n\nexport default function Header() {\nconst data = useStaticQuery(graphql`\n    query {\n    site {\n        siteMetadata {\n        title\n        }\n    }\n    }\n`)\nreturn (\n    <header className="col-start-1 col-end-3 border-b-2 border-solid border-gray-200 flex flex-row justify-start ">\n-      <Link to="/" className="text-4xl mx-4 flex justify-self-start">\n-        {data.site.siteMetadata.title}\n-      </Link>\n+      <img src={acmeLogo} alt="Acme Logo" />\n    <nav className="pt-4 pr-80 flex flex-row  justify-end  min-w-full">\n        <NavLink to="/">Home</NavLink>\n        <NavLink to="/about">About</NavLink>\n    </nav>\n    </header>\n)\n}\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"background-color")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," element because the logo background is white. We could have given the logo a transparent background but this will work for now."),(0,r.kt)("h4",{parentName:"li",id:"srcstylesglobalcss"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\styles\\global.css")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n- body {\n-   @apply bg-gray-100;\n- }\n")))),(0,r.kt)("h2",{id:"using-the-gatsby-image-plugin"},"Using the Gatsby Image plugin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the following packages:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the plugins to your ",(0,r.kt)("inlineCode",{parentName:"p"},"gatsby-config.js"),":"),(0,r.kt)("h4",{parentName:"li",id:"gatsby-configjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"gatsby-config.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'module.exports = {\nsiteMetadata: {\n    title: `Acme Inc.`,\n    description: `A corporate site`,\n},\nplugins: [\n    {\n    resolve: `gatsby-source-filesystem`,\n    options: {\n        name: `src`,\n        path: `${__dirname}/src`,\n    },\n    },\n    `gatsby-transformer-remark`,\n    `gatsby-plugin-emotion`,\n    "gatsby-plugin-postcss",\n+    `gatsby-plugin-image`,\n+    `gatsby-plugin-sharp`,\n+    `gatsby-transformer-sharp`,\n  ],\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the main ",(0,r.kt)("inlineCode",{parentName:"p"},"<img>")," in the home page with a ",(0,r.kt)("inlineCode",{parentName:"p"},"<StaticImage>")," from the Gatsby image plugin."),(0,r.kt)("h4",{parentName:"li",id:"srcpagesindexjs-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\pages\\index.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'...\n- import homePagePhoto from "../images/home-page-photo.jpeg"\n+ import { StaticImage } from "gatsby-plugin-image"\n...\n<PageTitle>Home</PageTitle>\n- <img\n- className="rounded-md shadow-md"\n- style={{ width: "600px", height: "300px" }}\n- src={homePagePhoto}\n- alt="corporate,office,building"\n- />\n+ <StaticImage\n+ imgClassName="rounded-md shadow-md"\n+ placeholder="blurred"\n+ loading="eager"\n+ width={600}\n+ height={300}\n+ src="../images/home-page-photo.jpeg"\n+ alt="corporate office building"\n+ />\n...\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Throttle the network in Chrome DevTools's Network tab to see a blurred home page image initially load."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Try some other placeholder settings ",(0,r.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#placeholder"},"from the documentation"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"header.js"),", style the navigation to the right and the logo to the left using flexbox."),(0,r.kt)("h4",{parentName:"li",id:"srccomponentsheaderjs-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\components\\header.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<header className="... flex flex-row justify-start pr-80 ">\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<nav className="... flex flex-row  justify-end min-w-full">\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If time permits, replace the main ",(0,r.kt)("inlineCode",{parentName:"p"},"<img>")," in the about page (",(0,r.kt)("inlineCode",{parentName:"p"},"src\\pages\\about.js"),") with a ",(0,r.kt)("inlineCode",{parentName:"p"},"<StaticImage>")," from the Gatsby image plugin using the last step as an example."))))}g.isMDXComponent=!0}}]);