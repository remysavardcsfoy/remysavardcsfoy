"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[7974],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7821:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"Data"},o=void 0,i={unversionedId:"gatsby/labs/Data",id:"gatsby/labs/Data",title:"Data",description:"Query Site MetaData",source:"@site/docs/gatsby/labs/04-Data.md",sourceDirName:"gatsby/labs",slug:"/gatsby/labs/Data",permalink:"/docs/gatsby/labs/Data",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Data"}},p={},s=[{value:"Query Site MetaData",id:"query-site-metadata",level:2},{value:"Create a Static Query",id:"create-a-static-query",level:2},{value:"Query Files",id:"query-files",level:2},{value:"Create a Page Query",id:"create-a-page-query",level:2},{value:"Transform Markdown Files into HTML",id:"transform-markdown-files-into-html",level:2},{value:"Create Pages from Data",id:"create-pages-from-data",level:2},{value:"Query Variables",id:"query-variables",level:4}],m={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"query-site-metadata"},"Query Site MetaData"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a site title as metadata to the gatsby configuration file."),(0,r.kt)("h4",{parentName:"li",id:"gatsby-configjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"gatsby-config.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'module.exports = {\n+  siteMetadata: {\n+    title: `Acme Inc.`,\n+    description: `A corporate site`,\n+  },\n  plugins: [`gatsby-plugin-emotion`, "gatsby-plugin-postcss"],\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open GraphiQL and write a query for the siteMetadata."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"http://localhost:8000/___graphQL\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},"query {\n    site {\n    siteMetadata {\n        title\n    }\n    }\n}\n")))),(0,r.kt)("h2",{id:"create-a-static-query"},"Create a Static Query"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use that query as a static query in the Header component to retrieve the data.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Display the data in the header to the left of the Navigation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'import React from "react"\n- import { Link } from "gatsby"\n+ import { useStaticQuery, graphql, Link } from "gatsby"\n\nexport const NavLink = ({ children, to }) => {\n  return (\n    <Link\n      className="mx-0 p-5 text-gray-600 text-lg hover:text-gray-800 hover:border-2 hover:border-solid hover:border-gray-800"\n      to={to}\n    >\n      {children}\n    </Link>\n  )\n}\n\nexport default function Header() {\n+  const data = useStaticQuery(graphql`\n+    query {\n+      site {\n+        siteMetadata {\n+          title\n+        }\n+      }\n+    }\n+  `)\n  return (\n    <header className="pt-5 pb-10 border-b-2 border-solid border-gray-600">\n+      <Link to="/" className="text-4xl mx-4">\n+        {data.site.siteMetadata.title}\n+      </Link>\n-      <nav>\n+      <nav className="inline">\n        <NavLink to="/">Home</NavLink>\n        <NavLink to="/about">About</NavLink>\n      </nav>\n    </header>\n  )\n}\n\n')))),(0,r.kt)("h2",{id:"query-files"},"Query Files"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/craigmckeachie/acme-snippets/archive/refs/heads/main.zip"},"these files"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unzip the files.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"articles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"images")," directories into the ",(0,r.kt)("inlineCode",{parentName:"p"},"acme\\src")," directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install and configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"gatsby-source-filesystem")," plugin so we can read the files in the content directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install gatsby-source-filesystem\n")),(0,r.kt)("h4",{parentName:"li",id:"gatsby-configjs-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"gatsby-config.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"module.exports = {\n  siteMetadata: {\n    title: `Acme Inc.`,\n    description: `A corporate site`,\n  },\n  plugins: [\n+    {\n+      resolve: `gatsby-source-filesystem`,\n+      options: {\n+        name: `src`,\n+        path: `${__dirname}/src`,\n+      },\n+    },\n    `gatsby-plugin-emotion`,\n    'gatsby-plugin-postcss',\n  ],\n};\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the file and restart the gatsby development server."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Ctrl+C\ngatsby develop\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then open up GraphiQL again."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"http://localhost:8000/___graphQL\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write a query to view the file names in the content directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  allFile {\n    edges {\n      node {\n        id\n        relativePath\n        prettySize\n        birthTime(fromNow: true)\n      }\n    }\n  }\n}\n")))),(0,r.kt)("h2",{id:"create-a-page-query"},"Create a Page Query"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a page named ",(0,r.kt)("inlineCode",{parentName:"p"},"files.js")," that uses that uses a the query you just wrote as a ",(0,r.kt)("inlineCode",{parentName:"p"},"page query")," to fetch data and then displays it in the page."),(0,r.kt)("h4",{parentName:"li",id:"srcpagesfilesjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\pages\\files.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { graphql } from "gatsby";\nimport React from "react";\nimport Layout from "../components/layout";\nimport { PageTitle } from "../components/page-title";\n\nconst Th = ({ children }) => {\n  return (\n    <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">\n      {children}\n    </th>\n  );\n};\n\nconst Td = ({ children }) => {\n  return (\n    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">\n      {children}\n    </td>\n  );\n};\n\nexport default function Files({ data }) {\n  return (\n    <Layout>\n      <PageTitle>Files</PageTitle>\n      <table className="border border-gray-400 min-w-full leading-normal ">\n        <thead>\n          <tr>\n            <Th>Relative PaTh</Th>\n            <Th>Pretty Size</Th>\n            <Th>File Type</Th>\n            <Th>Created</Th>\n          </tr>\n        </thead>\n        <tbody>\n          {data.allFile.nodes.map((file) => (\n            <tr key={file.id}>\n              <Td>{file.relativePath}</Td>\n              <Td>{file.prettySize}</Td>\n              <Td>{file.extension}</Td>\n              <Td>{file.birthTime}</Td>\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </Layout>\n  );\n}\n\nexport const query = graphql`\n  {\n    allFile {\n      nodes {\n        id\n        relativePath\n        prettySize\n        extension\n        birthTime(fromNow: true)\n      }\n    }\n  }\n`;\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Load the files page and verify the contents."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"http://localhost:8000/files/\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Tip: visit the development 404 page by typing an invalid url to see a list of all available page routes")))),(0,r.kt)("h2",{id:"transform-markdown-files-into-html"},"Transform Markdown Files into HTML"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install and configure the transformer plugin."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install gatsby-transformer-remark\n")),(0,r.kt)("h4",{parentName:"li",id:"gatsby-configjs-2"},(0,r.kt)("inlineCode",{parentName:"h4"},"gatsby-config.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'module.exports = {\n  siteMetadata: {\n    title: `Acme Inc.`,\n    description: `A corporate site`,\n  },\n  plugins: [\n    {\n      resolve: `gatsby-source-filesystem`,\n      options: {\n        name: `src`,\n        path: `${__dirname}/src`,\n      },\n    },\n+    `gatsby-transformer-remark`,\n    `gatsby-plugin-emotion`,\n    "gatsby-plugin-postcss",\n  ],\n}\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the development server then refresh (or open again) GraphiQL.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Query the contents of your articles from the markdown files and transform them to HTML."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},"query  {\n  allMarkdownRemark {\n    nodes {\n      timeToRead\n      excerpt\n      frontmatter {\n        slug\n        id\n        title\n      }\n    }\n  }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dislay the articles on the home page (",(0,r.kt)("inlineCode",{parentName:"p"},"pages\\index.js"),").\n","*","You won't need the ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," field from the query just the ",(0,r.kt)("inlineCode",{parentName:"p"},"excerpt")," so you can leave it out for now."),(0,r.kt)("h4",{parentName:"li",id:"srcpagesindexhtml"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\pages\\index.html")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { graphql } from "gatsby";\nimport React from "react";\nimport Layout from "../components/layout";\nimport { PageTitle } from "../components/page-title";\n\nexport default function Home({ data }) {\n  console.log(data);\n  console.log(data.nodes);\n  return (\n    <Layout>\n      <PageTitle>Home</PageTitle>\n      <img src="https://source.unsplash.com/600x300/?house" alt="house" />\n      <blockquote className="py-6 text-xl text-gray-800  bg-gray-300 text-center my-6">\n        "We here at Acme Inc. understand that it is better to leverage\n        efficiently than to benchmark extensibly."\n      </blockquote>\n      <p>\n        What does the commonly-used commonly-used commonly-accepted industry\n        jargon "holistic" really mean? What does the term "re-sizing" really\n        mean? Imagine a combination of WAP and Apache. The ability to\n        integrate compellingly leads to the power to grow seamlessly. Your\n        budget for iterating should be at least one-tenth of your budget for\n        harnessing. If all of this comes off as fabulous to you, that\'s\n        because it is! The power to repurpose strategically leads to the\n        aptitude to productize mega-compellingly. If you redefine\n        proactively, you may have to maximize dynamically. Do you have a game\n        plan to become subscriber-defined? Think\n        micro-intra-clicks-and-mortar, open-source, C2B2B. If all of this\n        seems confused to you, that\'s because it is!\n      </p>\n      <div className="py-12">\n        <h2 className="text-xl">Featured Articles</h2>\n        <hr className="border-gray-400 pb-4" />\n        {data.allMarkdownRemark.nodes.map((node) => (\n          <div key={node.frontmatter.id} className="py-2">\n            <a className="hover:underline " href="">\n              <h3 className="text-sm text-gray-800 font-semibold tracking-wide uppercase">\n                {node.frontmatter.title}\n              </h3>\n              <p className="">{node.excerpt}</p>\n            </a>\n          </div>\n        ))}\n      </div>\n    </Layout>\n  );\n}\n\nexport const query = graphql`\n  query {\n    allMarkdownRemark {\n      nodes {\n        timeToRead\n        excerpt\n        frontmatter {\n          slug\n          id\n          title\n        }\n      }\n    }\n  }\n`;\n')))),(0,r.kt)("h2",{id:"create-pages-from-data"},"Create Pages from Data"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"src\\articles"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a file to tell gatsby what routes to dynamically generate: ",(0,r.kt)("inlineCode",{parentName:"p"},"src\\articles\\{MarkdownRemark.frontmatter__slug}.js"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a directory at ",(0,r.kt)("inlineCode",{parentName:"p"},"src/templates"),", and then add the following in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"src/templates/article.js"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your browser, visit:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"http://localhost:8000/nothing\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"This is the default 404 page in gatsby that displays all the site pages including the ones you just dynamically created."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to the bottom of the Gatsby.js development 404 page and you should see the following article pages were generated."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/articles/recontextualizing-extensibily/\n/articles/your-budget-for-streamlining/\n/articles/determining-your-feature-set/\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: If you click these page links at this point they will be broken."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the basics of a component to display an article but just hard-code a header."),(0,r.kt)("h4",{parentName:"li",id:"srcpagesarticlesmarkdownremarkfrontmatter__slugjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\pages\\articles\\{MarkdownRemark.frontmatter__slug}.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport Layout from "../../components/layout";\nimport { PageTitle } from "../../components/page-title";\n\nexport default function Article() {\n  return (\n    <Layout>\n      <PageTitle>Article Page</PageTitle>\n    </Layout>\n  );\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your browser, visit:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"http://localhost:8000/nothing\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on of the article links and you should see the ",(0,r.kt)("inlineCode",{parentName:"p"},"Article Page")," header displayed."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Article Page\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write a query to find an article based on its slug/path."),(0,r.kt)("h4",{parentName:"li",id:"query"},"Query"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"sl\n")),(0,r.kt)("h4",{id:"query-variables"},"Query Variables"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note the id below won't work, you'll have to use a prior query to find an id for your dev environment.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "b982e018-50e0-58f0-8ca6-3169483ab7c4"\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the article component as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add the query to find an article as page query"),(0,r.kt)("li",{parentName:"ul"},"Display the title of the article"),(0,r.kt)("li",{parentName:"ul"},"Display the ",(0,r.kt)("inlineCode",{parentName:"li"},"html")," of the article")),(0,r.kt)("h4",{parentName:"li",id:"srccomponentsarticlejs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\components\\article.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+ import { graphql } from 'gatsby';\nimport React from 'react';\nimport Layout from '../components/layout';\nimport { PageTitle } from \"../components/page-title\"\n\n+ export default function Article({ data }) {\n+  const article = data.markdownRemark;\n\n  return (\n    <Layout>\n+      <PageTitle>{article.frontmatter.title}</PageTitle>\n+      <div dangerouslySetInnerHTML={{ __html: article.html }} />\n    </Layout>\n  );\n}\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"export const query = graphql`")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"query {")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"allMarkdownRemark {\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  nodes {\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    timeToRead\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    excerpt\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    frontmatter {\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"      slug\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"      id\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"      title\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"`"),(0,r.kt)("p",{parentName:"li"},"}"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"")))),(0,r.kt)("ol",{start:21},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the article links on the home page to use the slug."),(0,r.kt)("h4",{parentName:"li",id:"srcpagesindexjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\pages\\index.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- import { graphql } from "gatsby"\n+ import { graphql, Link } from "gatsby"\nimport React from "react"\nimport Layout from "../components/layout"\nimport { PageTitle } from "../components/page-title"\n\nexport default function Home({ data }) {\n  return (\n    <Layout>\n      <PageTitle>Home</PageTitle>\n      ...\n      <div className="py-12">\n        <h2 className="text-xl">Featured Articles</h2>\n        <hr className="border-gray-400 pb-4" />\n        {data.allMarkdownRemark.edges.map(({ node }) => (\n\n          <div key={node.frontmatter.id} className="py-2">\n-            <a className="hover:underline" href="">\n+            <Link\n+              className="hover:underline"\n+              to={`articles${node.frontmatter.slug}`}\n+            >\n              <h3 className="text-sm text-gray-800 font-semibold tracking-wide uppercase">\n                {node.frontmatter.title}\n              </h3>\n              <p className="">{node.excerpt}</p>\n-             </a>\n+            </Link>\n          </div>\n        ))}\n      </div>\n    </Layout>\n  )\n}\n\nexport const query = graphql`\nquery {\n  allMarkdownRemark {\n    totalCount\n    edges {\n      node {\n        frontmatter {\n          id\n          slug\n          title\n        }\n        timeToRead\n        excerpt\n      }\n    }\n  }\n}\n`\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The graphql function call returns a Promise\nsee: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise")," for more info")))}d.isMDXComponent=!0}}]);