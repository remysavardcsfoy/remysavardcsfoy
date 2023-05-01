"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[7440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Elements",sidebar_label:"Elements",slug:"/elements"},o=void 0,i={unversionedId:"Elements",id:"Elements",title:"Elements",description:"React impl\xe9mente un syst\xe8me DOM ind\xe9pendant du navigateur pour les performances et la compatibilit\xe9 entre navigateurs. Ils appellent cela le DOM virtuel.",source:"@site/docs/02-Elements.md",sourceDirName:".",slug:"/elements",permalink:"/docs/elements",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Elements",sidebar_label:"Elements",slug:"/elements"}},p={},s=[{value:"Partie 1 - Hello World en JavaScript",id:"partie-1---hello-world-en-javascript",level:2},{value:"Partie 1 - Bonjour tout le monde en React",id:"partie-1---bonjour-tout-le-monde-en-react",level:2},{value:"Reference",id:"reference",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React impl\xe9mente un syst\xe8me DOM ind\xe9pendant du navigateur pour les performances et la compatibilit\xe9 entre navigateurs. Ils appellent cela le DOM virtuel."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un \xe9l\xe9ment React n'est pas une instance r\xe9elle d'un ","[\xe9l\xe9ment DOM]"," (",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element"},"https://developer.mozilla.org/en-US/docs/Web/API/Element"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/dom-elements.html"},"React elements")," ont une API presque identique \xe0 DOM Elements")),(0,r.kt)("p",null,"Les \xe9l\xe9ments React sont les blocs de construction des applications React.\nUn \xe9l\xe9ment d\xe9crit ce que vous voulez voir \xe0 l'\xe9cran."),(0,r.kt)("p",null,"On pourrait confondre les \xe9l\xe9ments avec un concept plus connu de \xab composants \xbb. En r\xe8gle g\xe9n\xe9rale, les \xe9l\xe9ments ne sont pas utilis\xe9s directement, mais sont renvoy\xe9s par les composants."),(0,r.kt)("h2",{id:"partie-1---hello-world-en-javascript"},"Partie 1 - Hello World en JavaScript"),(0,r.kt)("p",null,'Dans cette partie du cours, nous allons cr\xe9er une application "Hello World" en JavaScript vanille. Nous r\xe9\xe9crirons plus tard l\'application pour utiliser ',(0,r.kt)("strong",{parentName:"p"},"React"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"demos")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mkdir demos\ncd demos\n```****\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ouvrez ",(0,r.kt)("inlineCode",{parentName:"p"},"demos")," dans l'\xe9diteur de votre choix"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez VS Code, vous pouvez taper la commande suivante sur la ligne de commande pour ouvrir l'\xe9diteur"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"}," code .\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ajoutez le code suivant"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <title>Document</title>\n  </head>\n  <body></body>\n</html>\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si votre \xe9diteur prend en charge ",(0,r.kt)("inlineCode",{parentName:"p"},"Emmet"),", vous pouvez utiliser l'extrait de code ",(0,r.kt)("inlineCode",{parentName:"p"},"html:5"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ajoutez un \xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," avec un identifiant de ",(0,r.kt)("inlineCode",{parentName:"p"},"root")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'<body>\n+  <div id="root"></div>\n</body>\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"If your editor supports ",(0,r.kt)("inlineCode",{parentName:"p"},"Emmet")," you can use the code snippet ",(0,r.kt)("inlineCode",{parentName:"p"},"div#root")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following script tag to reference a JavaScript file that we will create in the next step."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'```diff\n<body>\n<div id="root"></div>\n+ <script type="text/javascript" src="/main.js"><\/script>\n</body>\n```\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"! Assurez-vous que l'attribut src de la balise de script ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," commence par ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", sinon les exemples de routeur ult\xe9rieurs ne fonctionneront pas correctement lorsque vous actualiserez la page."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez un nouveau fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"demos/main.js"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ajoutez le code suivant \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"demos/main.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const rootElement = document.getElementById('root');\n\nconst element = document.createElement('div');\nelement.textContent = 'Hello World';\nelement.className = 'container';\nrootElement.appendChild(element);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," pour stocker les d\xe9pendances de votre projet local. Ouvrez une invite de commande/un terminal dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"demos")," et ex\xe9cutez la commande suivante."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm init --yes\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"--yes : tells npm says yes to accepting all the default values in the npm config file"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Installer un serveur Web"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install serve\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"En supposant que vous souhaitiez servir un site statique, une application d'une seule page ou simplement un fichier statique (que ce soit sur votre appareil ou sur le r\xe9seau local), ",(0,r.kt)("inlineCode",{parentName:"p"},"serve")," est un serveur Web de d\xe9veloppement qui sert du contenu statique.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," > Il se comporte exactement comme des d\xe9ploiements statiques sur\n > https://vercel.com\n > il est donc parfait pour d\xe9velopper votre projet statique.\n\n > Pour plus d'informations voir :\n > https://www.npmjs.com/package/serve\n")),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Configurez un "script npm" pour d\xe9marrer le serveur Web'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'// package.json\n{\n  "name": "demos",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n+  "start": "serve -s -p 5000"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "serve": "..."\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ex\xe9cutez le serveur Web"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ouvrez ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/")," dans votre navigateur Chrome"))),(0,r.kt)("p",null,"14) V\xe9rifiez que la page s'affiche\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```\nHello World\n```\n")),(0,r.kt)("h2",{id:"partie-1---bonjour-tout-le-monde-en-react"},"Partie 1 - Bonjour tout le monde en React"),(0,r.kt)("p",null,"Hello World en JavaScript n'est pas si diff\xe9rent de ce qu'il est en React. Mettons \xe0 jour le code pour le voir dans React."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ouvrez une nouvelle invite ou un nouveau terminal cmd (laissez ",(0,r.kt)("inlineCode",{parentName:"p"},"serve")," en cours d'ex\xe9cution) et installez ",(0,r.kt)("inlineCode",{parentName:"p"},"React")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react react-dom --save\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Ajoutez les balises de script pour inclure "R\xe9agir" sur la page. Placez-les juste en dessous de la ',(0,r.kt)("inlineCode",{parentName:"p"},"root div")," mais avant la balise ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," ",(0,r.kt)("inlineCode",{parentName:"p"},"script")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="/node_modules/react/umd/react.development.js"><\/script>\n<script src="/node_modules/react-dom/umd/react-dom.development.js"><\/script>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mettez \xe0 jour le code pour utiliser React"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const rootElement = document.getElementById('root');\n\n// const element = document.createElement('div');\n// element.textContent = 'Hello World';\n// element.className = 'container';\n// rootElement.appendChild(element);\n\nconst element = React.createElement(\n  'div',\n  {\n    className: 'container',\n  },\n  'Hello World'\n);\n\nReactDOM.createRoot(rootElement).render(element);\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La signature de la m\xe9thode pour createElement est la suivante\xa0:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.createElement(type, [props], [...children]);\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"D\xe9connectez-vous de ",(0,r.kt)("inlineCode",{parentName:"p"},"React Element")," sur la console."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const element = React.createElement(\n  'div',\n  {\n    className: 'container'\n  },\n  'Hello World'\n);\n\n+ console.log(element);\nReactDOM.createRoot(rootElement).render(element);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ouvrez Chrome DevTools (F12 ou fn+F12 sur un ordinateur portable) pour voir la sortie de la console."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Notez que l'\xe9l\xe9ment React est juste un objet avec une propri\xe9t\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," qui contient un objet. Et l'objet ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," a trois propri\xe9t\xe9s que nous utilisons pour repr\xe9senter l'\xe9l\xe9ment HTML\xa0: ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"className"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Au lieu de comme troisi\xe8me param\xe8tre, les enfants (\xe9l\xe9ments enfants - m\xeame s'il ne s'agit que d'un \xe9l\xe9ment de texte comme dans cet exemple) peuvent \xeatre pass\xe9s dans le cadre des \xe9l\xe9ments props (qui est l'abr\xe9viation de propri\xe9t\xe9s)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const element = React.createElement(\n    'div',\n    {\n    className: 'container'\n+       children: 'Hello World'\nor\n+       children: ['Hello World', 'Goodbye World']\n    },\n-     'Hello World'\n);\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pour r\xe9sumer les param\xe8tres de ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement")," sont les suivants."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Param 1 : l'\xe9l\xe9ment que vous souhaitez cr\xe9er"),(0,r.kt)("li",{parentName:"ul"},"Param 2 : un objet qui contient toutes les propri\xe9t\xe9s que vous souhaitez appliquer ou d\xe9finir sur cet \xe9l\xe9ment"),(0,r.kt)("li",{parentName:"ul"},"Param 3\xa0: pour plus de commodit\xe9, vous pouvez fournir aux enfants n'importe quel nombre d'arguments apr\xe8s les props"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement()")," effectue quelques v\xe9rifications pour vous aider \xe0 \xe9crire du code sans bogue, mais il cr\xe9e essentiellement un objet comme celui-ci\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Note: this structure is simplified\nconst element = {\n  type: 'div',\n  props: {\n    className: 'container',\n    children: 'Hello World',\n  },\n};\n")),(0,r.kt)("p",null,'Ces objets sont appel\xe9s "\xe9l\xe9ments React". Vous pouvez les consid\xe9rer comme des descriptions de ce que vous voulez voir \xe0 l\'\xe9cran. React lit ces objets et les utilise pour construire le DOM et le maintenir \xe0 jour.'),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/rendering-elements.html"},"Rendering Elements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/react-api.html#createelement"},"createElement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html"},"Elements vs Components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes"},"React Supported HTML Attributes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/glossary.html#elements"},"Glossary Elements"))))}u.isMDXComponent=!0}}]);