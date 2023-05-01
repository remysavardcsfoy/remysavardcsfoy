"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[8164],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"JSX",sidebar_label:"JSX",slug:"/jsx"},i=void 0,o={unversionedId:"JSX",id:"JSX",title:"JSX",description:"JSX fournit juste du sucre syntaxique pour la fonction\xa0:",source:"@site/docs/03-JSX.md",sourceDirName:".",slug:"/jsx",permalink:"/docs/jsx",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"JSX",sidebar_label:"JSX",slug:"/jsx"}},s={},p=[{value:"Partie 1 - Remplacer createElement par JSX",id:"partie-1---remplacer-createelement-par-jsx",level:2},{value:"Partie 2 - Int\xe9gration d&#39;expressions dans JSX",id:"partie-2---int\xe9gration-dexpressions-dans-jsx",level:2},{value:"Partie 3 - Sp\xe9cification d&#39;attributs avec JSX",id:"partie-3---sp\xe9cification-dattributs-avec-jsx",level:2},{value:"Partie 4 - Enfants",id:"partie-4---enfants",level:2},{value:"Reference",id:"reference",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JSX fournit juste du sucre syntaxique pour la fonction\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.createElement(component, props, ...children);\n")),(0,r.kt)("h2",{id:"partie-1---remplacer-createelement-par-jsx"},"Partie 1 - Remplacer createElement par JSX"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commentez l'appel ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement")," et remplacez-le par JavaScript XML (JSX) comme indiqu\xe9 ci-dessous. Une fois compil\xe9, le JSX g\xe9n\xe9rera le code comment\xe9 en dessous."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//    const element = React.createElement(\n//      'div',\n//      {\n//        className: 'container'\n//      },\n//      'Hello World'\n//    );\n\nconst element = <div className=\"container\">Hello World</div>;\nReactDOM.createRoot(rootElement).render(element);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mais comme un compilateur JSX n'a pas \xe9t\xe9 configur\xe9, si vous essayez d'ex\xe9cuter ce code en ouvrant ou en actualisant la page d'index dans votre navigateur, vous obtiendrez l'erreur suivante\xa0:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Uncaught SyntaxError: Unexpected token <\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Parce que la syntaxe des parenth\xe8ses (JSX) n'a pas \xe9t\xe9 compil\xe9e en JavaScript.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pour installer le compilateur JSX (Babel)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/standalone\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Compiler dans le navigateur avec @babel/standalone a un cas d'utilisation assez limit\xe9, donc si vous travaillez sur un site de production, vous devriez pr\xe9compiler vos scripts c\xf4t\xe9 serveur.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configurer le compilateur JSX (Babel). Effectuez les modifications suivantes\xa0:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'...\n  <script src="/node_modules/react-dom/umd/react-dom.development.js"><\/script>\n+ <script src="/node_modules/@babel/standalone/babel.min.js"><\/script>\n- <script type="text/javascript" src="/main.js">\n+ <script type="text/babel" src="/main.js">\n...\n<\/script>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Vous devriez maintenant voir \xe0 nouveau la sortie suivante sur la page"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Hello World\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dans le chapitre pr\xe9c\xe9dent, nous avons \xe9crit les appels React.createElement mais maintenant le compilateur Babel les g\xe9n\xe8re."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Si vous voulez tester comment certains JSX sp\xe9cifiques sont convertis en JavaScript, vous essayez ","[le compilateur Babel en ligne]"," (",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/repl"},"https://babeljs.io/repl"),")")),(0,r.kt)("p",{parentName:"li"}," Voici quelques autres exemples\xa0:"),(0,r.kt)("p",{parentName:"li"}," Liste:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<ul>\n  <li>Home</li>\n  <li>About</li>\n  <li>Contact</li>\n</ul>\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.createElement(\n  'ul',\n  null,\n  React.createElement('li', null, 'Home'),\n  React.createElement('li', null, 'About'),\n  React.createElement('li', null, 'Contact')\n);\n")))),(0,r.kt)("p",null,"Collez ","[ce formulaire de connexion]"," (./snippets/bootstrap-form.jsx) dans ","[le compilateur Babel en ligne]"," (",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/repl"},"https://babeljs.io/repl"),") pour comprendre pourquoi vous souhaitez utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," comme votre HTML grandit."),(0,r.kt)("h2",{id:"partie-2---int\xe9gration-dexpressions-dans-jsx"},"Partie 2 - Int\xe9gration d'expressions dans JSX"),(0,r.kt)("p",null,"Une expression peut \xeatre cr\xe9\xe9e dans JSX avec des accolades. Lorsque vous cr\xe9ez une expression \xe0 l'aide d'accolades, vous dites que vous voulez \xe9crire du JavaScript."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Cr\xe9ez une variable et attribuez-lui un "nom", puis utilisez cette variable dans votre "JSX" dans une "expression".'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"<script type=\"text/babel\">\n  const rootElement = document.getElementById('root');\n+  const first = 'Joe';\n+  const element = <div className=\"container\">Hello {first}</div>;\n ReactDOM.createRoot(rootElement).render(element);\n<\/script>\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Hello Joe\n")),(0,r.kt)("p",{parentName:"li"},"Vous pouvez \xe9galement utiliser des objets complexes\xa0:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"}," const rootElement = document.getElementById('root');\n+  const person = { first: 'Joe', last: 'Doe' };\n  const element = (\n    <div className=\"container\">\n+      Hello {person.first} {person.last}\n    </div>\n  );\n ReactDOM.createRoot(rootElement).render(element);\n")))),(0,r.kt)("h2",{id:"partie-3---sp\xe9cification-dattributs-avec-jsx"},"Partie 3 - Sp\xe9cification d'attributs avec JSX"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"T\xe9l\xe9chargez le logo React depuis ",(0,r.kt)("a",{parentName:"p",href:"https://brandslogos.com/r/react-logo-1/"},"ce site")," \xe0 la racine de votre projet ",(0,r.kt)("inlineCode",{parentName:"p"},"demos")," en tant que ",(0,r.kt)("inlineCode",{parentName:"p"},"react-logo.png"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mettez \xe0 jour l'\xe9l\xe9ment pour qu'il devienne une balise d'image pointant vers le logo."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const element = <img src="./react-logo.png" />;\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Actualisez la page et le logo React devrait appara\xeetre sur la page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez un objet logo avec des propri\xe9t\xe9s de chemin, de nom et de titre et d\xe9finissez des attributs dans JSX sur chacune de ces valeurs, comme indiqu\xe9 ci-dessous.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const logo = {\n  name: 'React Logo',\n  title: 'React Logo',\n  path: './react-logo.png',\n};\n\nconst element = <img src={logo.path} alt={logo.name} title={logo.title} />;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Actualisez la page et le logo React devrait toujours appara\xeetre sur la page. Survolez le logo avec votre souris et le titre devrait appara\xeetre."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Notez que lorsque la valeur est un \"litt\xe9ral de cha\xeene\", vous pouvez simplement d\xe9finir l'attribut dessus, mais lorsque la valeur fait r\xe9f\xe9rence \xe0 une variable ou \xe0 une propri\xe9t\xe9 sur un objet, vous devez utiliser la syntaxe \"expression\" et assurez-vous de laisser de c\xf4t\xe9 les guillemets '''`."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"En g\xe9n\xe9ral, vous pouvez utiliser n'importe quelles propri\xe9t\xe9s et attributs DOM dans JSX, mais il y a quelques points \xe0 prendre en compte\xa0:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Dans React, toutes les propri\xe9t\xe9s et tous les attributs DOM (y compris les gestionnaires d'\xe9v\xe9nements) doivent \xeatre en camelCased. Par exemple, l'attribut HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"tabindex")," correspond \xe0 l'attribut tabIndex dans React. L'exception concerne les attributs aria-",(0,r.kt)("em",{parentName:"p"}," et data-"),", qui doivent \xeatre en minuscules. Par exemple, vous pouvez conserver aria-label comme aria-label.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Il existe un certain nombre d'attributs qui fonctionnent diff\xe9remment entre React et HTML. ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/dom-elements.html#differences-in-attributes"},"Vous pouvez en savoir plus ici"),".")))),(0,r.kt)("p",null,"Les diff\xe9rences les plus courantes sont pr\xe9sent\xe9es ci-dessous."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Au lieu de ",(0,r.kt)("inlineCode",{parentName:"p"},"class"),", utilisez ",(0,r.kt)("inlineCode",{parentName:"p"},"className")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div className="alert alert-danger">error message</div>\n')))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remplacez la variable d'\xe9l\xe9ment par la ",(0,r.kt)("inlineCode",{parentName:"li"},"div")," indiqu\xe9e ci-dessus avec un message d'erreur\n2. Actualisez la page dans votre navigateur et inspectez la div pour voir que ",(0,r.kt)("inlineCode",{parentName:"li"},"className")," a \xe9t\xe9 remplac\xe9 par ",(0,r.kt)("inlineCode",{parentName:"li"},"class"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Au lieu de ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"htmlFor")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <label htmlFor="name">Name</label>\n  <input id="name" />\n</form>\n')))),(0,r.kt)("h2",{id:"partie-4---enfants"},"Partie 4 - Enfants"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Vous pouvez imbriquer plusieurs \xe9l\xe9ments enfants."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const element = (\n  <ul>\n    <li>\n      <a href="">a</a>\n    </li>\n    <li>\n      <a href="">b</a>\n    </li>\n    <li>\n      <a href="">c</a>\n    </li>\n  </ul>\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Si vous voulez que la mise en forme et l'indentation de votre code soient align\xe9es, vous voudrez que votre balise d'ouverture soit sur la ligne suivante apr\xe8s la d\xe9claration de la variable. \xc9tant donn\xe9 que JavaScript a une insertion automatique de points-virgules, votre code peut se casser comme indiqu\xe9 ci-dessous."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const element = ;\n <ul>\n ...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pour \xe9viter les probl\xe8mes d'insertion automatique de points-virgules et toujours pouvoir utiliser l'indentation appropri\xe9e, placez simplement votre JSX entre parenth\xe8ses () comme indiqu\xe9 ci-dessus.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Bien que vous puissiez imbriquer n'importe quel nombre d'\xe9l\xe9ments dans l'\xe9l\xe9ment parent racine, vous ne pouvez avoir qu'un seul \xe9l\xe9ment parent. Le code ci-dessous est invalided."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const element = (\n    <p>123</p>\n    <ul>\n    . ..\n    </ul>\n);\n")),(0,r.kt)("p",{parentName:"li"},"Vous recevrez l'erreur suivante\xa0:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Uncaught SyntaxError: /Inline Babel script: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?\n")))),(0,r.kt)("p",null,"Pour r\xe9soudre ce probl\xe8me, vous pouvez soit\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- enveloppez votre code dans un \xe9l\xe9ment conteneur comme un div\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const element = (\n+     <div> //extraneous element\n      <p>123</p>\n      <ul>\n      . ..\n      </ul>\n+    </div>\n  );\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"enveloppez votre code dans un \xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"React.Fragment")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const element = (\n+     <React.Fragment>\n      <p>123</p>\n      <ul>\n      . ..\n      </ul>\n+    </React.Fragment>\n  );\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"utiliser une syntaxe abr\xe9g\xe9e"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"La prise en charge de la syntaxe des fragments dans JSX varie en fonction des outils que vous utilisez pour cr\xe9er votre application.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const element = (\n+     <>\n      <p>123</p>\n      <ul>\n      . ..\n      </ul>\n+     </>\n  );\n")))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/eggheadio/illustrated-dev/blob/master/content/explainers/jsx/index.mdx"},"JSX Illustration")))}m.isMDXComponent=!0}}]);