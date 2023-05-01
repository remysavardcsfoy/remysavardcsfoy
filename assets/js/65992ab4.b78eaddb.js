"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[5061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,v=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return n?o.createElement(v,r(r({ref:t},p),{},{components:n})):o.createElement(v,r({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const s={title:"Component Architecture",sidebar_label:"Component Architecture",slug:"/component-architecture"},r=void 0,i={unversionedId:"ComponentArchitecture",id:"ComponentArchitecture",title:"Component Architecture",description:"R\xe9utilisation",source:"@site/docs/12-ComponentArchitecture.md",sourceDirName:".",slug:"/component-architecture",permalink:"/docs/component-architecture",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Component Architecture",sidebar_label:"Component Architecture",slug:"/component-architecture"}},l={},u=[{value:"R\xe9utilisation",id:"r\xe9utilisation",level:2},{value:"Communication des composants",id:"communication-des-composants",level:2},{value:"Mod\xe8les de communication communs",id:"mod\xe8les-de-communication-communs",level:4},{value:"Mod\xe8les de communication suppl\xe9mentaires",id:"mod\xe8les-de-communication-suppl\xe9mentaires",level:4},{value:"Levage State Up",id:"levage-state-up",level:2},{value:"Exemple de composant de fonction",id:"exemple-de-composant-de-fonction",level:3},{value:"Exemple de composant de classe",id:"exemple-de-composant-de-classe",level:3},{value:"Composants de conteneur et de pr\xe9sentation",id:"composants-de-conteneur-et-de-pr\xe9sentation",level:2},{value:"Composants de conteneur (intelligent)",id:"composants-de-conteneur-intelligent",level:3},{value:"Composants de pr\xe9sentation",id:"composants-de-pr\xe9sentation",level:3},{value:"R\xe9f\xe9rence",id:"r\xe9f\xe9rence",level:3},{value:"Composition vs h\xe9ritage",id:"composition-vs-h\xe9ritage",level:2},{value:"Penser dans React",id:"penser-dans-react",level:2},{value:"Reference",id:"reference",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"r\xe9utilisation"},"R\xe9utilisation"),(0,a.kt)("p",null,"Vous pouvez diviser un composant en plusieurs composants plus petits pour avoir une conception plus lisible et maintenable et / ou pour obtenir une r\xe9utilisation."),(0,a.kt)("p",null,"Mais comment savez-vous quel devrait \xeatre son propre composant?"),(0,a.kt)("p",null,"Voici quelques questions \xe0 vous poser lors de la d\xe9termination du moment de cr\xe9er un autre composant:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Est-il possible que votre morceau de code soit r\xe9utilis\xe9?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Si oui, la construction d'un nouveau composant semble \xeatre une excellente id\xe9e."),(0,a.kt)("li",{parentName:"ul"},"m\xeame si la r\xe9utilisation est dans un seul composant.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Votre code est-il assez complexe?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Si oui, c'est peut-\xeatre une bonne id\xe9e de se diviser dans des composants s\xe9par\xe9s afin de rendre votre code plus lisible et maintenable.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Conception de logiciels")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"En g\xe9n\xe9ral, utilisez simplement les m\xeames techniques pour d\xe9cider si vous devez cr\xe9er une nouvelle fonction ou un nouvel objet."),(0,a.kt)("li",{parentName:"ul"},"Une de ces techniques est le principe de responsabilit\xe9 unique, c'est-\xe0-dire qu'un composant ne devrait id\xe9alement faire qu'une seule chose.S'il finit par cro\xeetre, il doit \xeatre d\xe9compos\xe9 en sous-composants plus petits.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Apr\xe8s avoir cr\xe9\xe9 plus de composants, plus de questions se posent telles que:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Comment les composants doivent-ils interagir?(Communication des composants)"),(0,a.kt)("li",{parentName:"ul"},"Y a-t-il des mod\xe8les de conception que je devrais suivre lors de la cr\xe9ation de composants?(Levage de l'\xe9tat vers le haut, composition vs h\xe9ritage)"),(0,a.kt)("li",{parentName:"ul"},"Quels types de composants y a-t-il?(Conteneur vs pr\xe9sentation)"),(0,a.kt)("li",{parentName:"ul"},"Comment rendre mes composants r\xe9utilisables?")),(0,a.kt)("p",null,"Cette section explore chacune de ces questions."),(0,a.kt)("h2",{id:"communication-des-composants"},"Communication des composants"),(0,a.kt)("p",null,"Comment les composants doivent-ils interagir?"),(0,a.kt)("h4",{id:"mod\xe8les-de-communication-communs"},"Mod\xe8les de communication communs"),(0,a.kt)("p",null,"Les composants communiquent g\xe9n\xe9ralement de cette mani\xe8re:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parent de l'enfant"),(0,a.kt)("li",{parentName:"ul"},"Enfant \xe0 parent")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"La communication du parent \xe0 l'enfant")," passe une propri\xe9t\xe9 de donn\xe9es dans un composant.Plus pr\xe9cis\xe9ment, passer certaines donn\xe9es (pourrait \xeatre une cha\xeene (primitive), un objet, un tableau) dans un composant enfant."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n  return <Parent />;\n}\n\nfunction Parent() {\n  const [words, setWords] = React.useState('');\n\n  const handleClick = () => {\n    setWords('Did you do your homework?');\n  };\n\n  return (\n    <div>\n      <h1>Parent</h1>\n      <button onClick={handleClick}>Ask</button>\n      <Child hears={words} />\n    </div>\n  );\n}\n\nfunction Child(props) {\n  return (\n    <div>\n      <h2>Child</h2>\n      <p>{props.hears}</p>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<App />);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"L'enfant \xe0 parent")," La communication passe une fonction en tant que propri\xe9t\xe9 dans un composant.La fonction est ensuite invoqu\xe9e chez l'enfant mais ex\xe9cut\xe9e dans le contexte du parent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n  return <Parent />;\n}\n\nfunction Parent() {\n  const handleRequest = (request) => {\n    if (request.includes('car')) {\n      alert('No');\n    }\n  };\n\n  return (\n    <div>\n      <h1>Parent</h1>\n      <Child onRequest={handleRequest} />\n    </div>\n  );\n}\nfunction Child(props) {\n  const handleClick = () => {\n    props.onRequest('Can I have the car?');\n  };\n\n  return (\n    <div>\n      <h2>Child</h2>\n      <button onClick={handleClick}>Ask for the car</button>\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<App />);\n")),(0,a.kt)("h4",{id:"mod\xe8les-de-communication-suppl\xe9mentaires"},"Mod\xe8les de communication suppl\xe9mentaires"),(0,a.kt)("p",null,'Maintenant que vous comprenez comment cette communication fonctionne dans la pratique, nous pouvons explorer ces mod\xe8les de communication suppl\xe9mentaires qui sont essentiellement des variations sur "Parent to Child" et "Enfant to Parent"'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enfant \xe0 enfant (fr\xe8res et s\u0153urs)"),(0,a.kt)("li",{parentName:"ul"},"Grand-parent \xe0 petit-enfant"),(0,a.kt)("li",{parentName:"ul"},"petit-enfant \xe0 parent")),(0,a.kt)("p",null,"Essentiellement, ",(0,a.kt)("strong",{parentName:"p"},"La communication ne saute pas les g\xe9n\xe9rations"),", donc si cela va se produire, vous devez communiquer manuellement vers le haut ou vers le bas entre chaque g\xe9n\xe9ration."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"La communication des composants ne fonctionne pas comme les \xe9v\xe9nements JavaScript ... il n'y a pas d'\xe9v\xe9nements.")),(0,a.kt)("h1",{id:"mod\xe8les-de-conception"},"Mod\xe8les de conception"),(0,a.kt)("h2",{id:"levage-state-up"},"Levage State Up"),(0,a.kt)("p",null,"Souvent, plusieurs composants doivent refl\xe9ter les m\xeames donn\xe9es changeantes.Nous vous recommandons de soulever l'\xe9tat partag\xe9 jusqu'\xe0 leur anc\xeatre commun le plus proche."),(0,a.kt)("p",null,"Voici un exemple."),(0,a.kt)("h3",{id:"exemple-de-composant-de-fonction"},"Exemple de composant de fonction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Button({ onClickFunction }) {\n  return <button onClick={onClickFunction}>+1</button>;\n}\n\nconst Result = ({ value }) => {\n  return <div>Result: {value}</div>;\n};\n\nfunction App() {\n  const [counter, setCounter] = React.useState(0);\n\n  const incrementCounter = () => {\n    setCounter((previousCounter) => previousCounter + 1);\n  };\n\n  return (\n    <div>\n      <Button onClickFunction={incrementCounter} />\n      <Result value={counter} />\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<App />);\n")),(0,a.kt)("h3",{id:"exemple-de-composant-de-classe"},"Exemple de composant de classe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Button extends React.Component {\n  render() {\n    return <button onClick={this.props.onClickFunction}>+1</button>;\n  }\n}\n\nconst Result = (props) => {\n  return <div>Result: {props.value}</div>;\n};\n\nclass App extends React.Component {\n  state = {\n    counter: 0,\n  };\n\n  incrementCounter = () => {\n    this.setState((prevState) => ({\n      counter: prevState.counter + 1,\n    }));\n  };\n\n  render() {\n    return (\n      <div>\n        <Button onClickFunction={this.incrementCounter} />\n        <Result value={this.state.counter} />\n      </div>\n    );\n  }\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<App />);\n")),(0,a.kt)("p",null,"La documentation React le r\xe9sume le mieux:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Il devrait y avoir une seule \xabsource de v\xe9rit\xe9\xbb pour toutes les donn\xe9es qui changent dans une application React.Habituellement, l'\xe9tat est d'abord ajout\xe9 au composant qui en a besoin pour le rendu.Ensuite, si d'autres composants en ont \xe9galement besoin, vous pouvez le soulever \xe0 leur anc\xeatre commun le plus proche.Au lieu d'essayer de synchroniser l'\xe9tat entre les diff\xe9rents composants, vous devez compter sur le flux de donn\xe9es descendant.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Le levage de l'\xe9tat consiste \xe0 \xe9crire plus de code \xabpasse-partout\xbb que les approches de liaison bidirectionnelles, mais comme avantage, il faut moins de travail pour trouver et isoler les bogues.\xc9tant donn\xe9 que tout \xe9tat \xabvit\xbb dans un composant et que ce composant seul peut le changer, la surface des insectes est consid\xe9rablement r\xe9duite.De plus, vous pouvez impl\xe9menter n'importe quelle logique personnalis\xe9e pour rejeter ou transformer l'entr\xe9e utilisateur.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si quelque chose peut \xeatre d\xe9riv\xe9 des accessoires ou de l'\xe9tat, il ne devrait probablement pas \xeatre dans l'\xe9tat.")),(0,a.kt)("h2",{id:"composants-de-conteneur-et-de-pr\xe9sentation"},"Composants de conteneur et de pr\xe9sentation"),(0,a.kt)("h3",{id:"composants-de-conteneur-intelligent"},"Composants de conteneur (intelligent)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sont pr\xe9occup\xe9s par ",(0,a.kt)("em",{parentName:"li"}," comment les choses fonctionnent ")),(0,a.kt)("li",{parentName:"ul"},"Fournir les donn\xe9es et le comportement aux composants de pr\xe9sentation ou d'autres conteneurs"),(0,a.kt)("li",{parentName:"ul"},"charge et modifie les donn\xe9es via les appels vers une API"),(0,a.kt)("li",{parentName:"ul"},"peut contenir \xe0 la fois des composants de pr\xe9sentation et de conteneur \xe0 l'int\xe9rieur, mais n'a g\xe9n\xe9ralement pas de balisage DOM \xe0 l'exception de quelques divs emballages, et jamais de styles"),(0,a.kt)("li",{parentName:"ul"},"CONNAISSEZ \xe9galement sous le nom de composants de conteneurs ou de composants du contr\xf4leur")),(0,a.kt)("h3",{id:"composants-de-pr\xe9sentation"},"Composants de pr\xe9sentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sont pr\xe9occup\xe9s par ",(0,a.kt)("em",{parentName:"li"},"\xe0 quoi ressemblent les choses")),(0,a.kt)("li",{parentName:"ul"},"Recevez des donn\xe9es et des rappels exclusivement via des accessoires"),(0,a.kt)("li",{parentName:"ul"},"Ne sp\xe9cifiez pas comment les donn\xe9es sont charg\xe9es ou modifi\xe9es"),(0,a.kt)("li",{parentName:"ul"},"CONNAISSEZ \xe9galement sous le nom de composants purs ou de composants stupides")),(0,a.kt)("h3",{id:"r\xe9f\xe9rence"},"R\xe9f\xe9rence"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"},"Presentational and Container Components by Dan Abramov"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/dan_abramov/status/802569801906475008"},"Not a Rule but Something to Notice")))),(0,a.kt)("p",null,"Jusqu'\xe0 r\xe9cemment, lorsque React introduit \xabHooks\xbb semble que presque tous les composants ont finalement besoin de l'\xe9tat afin que les gens aient eu tendance \xe0 cr\xe9er des composants de classe par d\xe9faut.En r\xe9alit\xe9, ce n'est pas l'un ou l'autre ... souvent des composants sont un m\xe9lange des deux.Sachez simplement que plus ils deviennent stades, plus ils sont difficiles \xe0 tester et \xe0 r\xe9utiliser, mais la r\xe9utilisation a souvent un co\xfbt de complexit\xe9."),(0,a.kt)("p",null,"Souvent, mes composants de pr\xe9sentation ne sont pas des composants de pr\xe9sentation purs, ils ont un \xe9tat d'\xc9tat particuli\xe8rement local."),(0,a.kt)("h2",{id:"composition-vs-h\xe9ritage"},"Composition vs h\xe9ritage"),(0,a.kt)("p",null,"React recommande d'utiliser la composition au lieu de l'h\xe9ritage pour r\xe9utiliser le code entre les composants."),(0,a.kt)("p",null,"En g\xe9n\xe9ral, les composants peuvent \xeatre imbriqu\xe9s \xe0 l'int\xe9rieur d'autres composants ou vivre \xe0 c\xf4t\xe9 d'autres composants comme dans HTML o\xf9 un ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," peut avoir un ",(0,a.kt)("inlineCode",{parentName:"p"},"<p>")," \xe0 l'int\xe9rieur et le",(0,a.kt)("inlineCode",{parentName:"p"},"<p>")," peut avoir un ",(0,a.kt)("inlineCode",{parentName:"p"},"<A>")," et un",(0,a.kt)("inlineCode",{parentName:"p"},"<Mg>"),".HTML fonctionne sur la composition, donc les composants r\xe9agissent fonctionnent sur la composition car ils sont essentiellement des balises HTML que vous avez invent\xe9es."),(0,a.kt)("p",null,"See the section ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/composition-vs-inheritance.html"},"Composition vs Inheritance")," in the React documentation for more information."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Nous utilisons React dans des milliers de composants, et nous n'avons trouv\xe9 aucun cas d'utilisation o\xf9 nous recommandons de cr\xe9er des hi\xe9rarchies sur l'h\xe9ritage des composants.- Facebook")),(0,a.kt)("h2",{id:"penser-dans-react"},"Penser dans React"),(0,a.kt)("p",null,"Voici quelques \xe9tapes que vous pourriez trouver utiles lorsque vous apprenez pour ",(0,a.kt)("strong",{parentName:"p"},"penser dans React")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cassez l'interface utilisateur en une hi\xe9rarchie de composants")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cr\xe9ez une version statique dans React"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Aucun \xe9tat ou accessoire"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Identifiez la repr\xe9sentation minimale (mais compl\xe8te) de l'\xe9tat de l'interface utilisateur")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Identifiez o\xf9 votre \xe9tat devrait vivre"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pour chaque \xe9l\xe9ment d'\xe9tat de votre application:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Identifiez chaque composant qui rend quelque chose en fonction de cet \xe9tat."),(0,a.kt)("li",{parentName:"ul"},"Trouvez un composant propri\xe9taire commun (un seul composant au-dessus de tous les composants qui ont besoin de l'\xe9tat dans la hi\xe9rarchie)."),(0,a.kt)("li",{parentName:"ul"},"Le propri\xe9taire commun ou un autre composant plus \xe9lev\xe9 dans la hi\xe9rarchie doivent \xeatre propri\xe9taires de l'\xc9tat."),(0,a.kt)("li",{parentName:"ul"},"Si vous ne trouvez pas de composant o\xf9 il est logique de poss\xe9der l'\xe9tat, cr\xe9ez un nouveau composant simplement pour maintenir l'\xe9tat et l'ajouter quelque part dans la hi\xe9rarchie au-dessus du composant propri\xe9taire commun."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ajouter un flux de donn\xe9es inverse"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Le rendu de l'\xe9cran implique initialement des accessoires et de l'\xc9tat coulant dans la hi\xe9rarchie"),(0,a.kt)("li",{parentName:"ul"},"Le flux de donn\xe9es inverse fait r\xe9f\xe9rence aux composants au plus profond de la hi\xe9rarchie r\xe9pondant aux actions de l'utilisateur (cliquant sur un bouton, en survol, en tapant), puis en mettant \xe0 jour l'\xe9tat dans le ou les composants de conteneurs sup\xe9rieurs")))),(0,a.kt)("p",null,"See the section ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/thinking-in-react.html"},"Thinking in React")," in the documentation for more information."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/gordonbrander/2230317"},"Unique ID"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://reactjsexample.com/a-to-do-list-app-built-using-react-js/"},"To Do List Example")))))}m.isMDXComponent=!0}}]);