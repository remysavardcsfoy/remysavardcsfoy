"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[3335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[d]="string"==typeof e?e:o,r[1]=m;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={id:"A23-Performance",title:"Performance",sidebar_label:"Performance",slug:"/performance"},r=void 0,m={unversionedId:"A23-Performance",id:"A23-Performance",title:"Performance",description:"Premature Optimization",source:"@site/docs/A23-Performance.md",sourceDirName:".",slug:"/performance",permalink:"/docs/performance",draft:!1,tags:[],version:"current",frontMatter:{id:"A23-Performance",title:"Performance",sidebar_label:"Performance",slug:"/performance"}},s={},l=[{value:"Premature Optimization",id:"premature-optimization",level:2},{value:"What causes a component to <code>render</code> in React?",id:"what-causes-a-component-to-render-in-react",level:2},{value:"Summary",id:"summary",level:3},{value:"Wasted Renders",id:"wasted-renders",level:2},{value:"<code>React.memo</code>",id:"reactmemo",level:3},{value:"<code>React.PureComponent</code>",id:"reactpurecomponent",level:3},{value:"FAQs",id:"faqs",level:2},{value:"index.js",id:"indexjs",level:4},{value:"<code>React.memo</code> Demo",id:"reactmemo-demo",level:2},{value:"Class Components",id:"class-components",level:2},{value:"<code>React.PureComponent</code> Demo",id:"reactpurecomponent-demo",level:3},{value:"Reference",id:"reference",level:2}],p={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"premature-optimization"},"Premature Optimization"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Premature optimization is the root of all evil -- DonaldKnuth")),(0,o.kt)("p",null,"Premature Optimization is optimizing before we know that we need to do it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommendation:")," Get your application working and then near the end of a development cycle take the time to optimize for performance."),(0,o.kt)("h2",{id:"what-causes-a-component-to-render-in-react"},"What causes a component to ",(0,o.kt)("inlineCode",{parentName:"h2"},"render")," in React?"),(0,o.kt)("p",null,"A re-render can only be triggered if a component\u2019s state has changed. The state can change from a ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," change, or from a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," update state function. The component gets the updated state and React decides if it should re-render the component. Unfortunately, by default React is incredibly simplistic and basically re-renders everything all the time."),(0,o.kt)("p",null,"Component changed? Re-render. Parent changed? Re-render parent and all it's children. Section of props that doesn't actually impact the view changed? Re-render."),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default Behavior"),": ",(0,o.kt)("strong",{parentName:"p"},"Changing state")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"results in that component and ",(0,o.kt)("strong",{parentName:"li"},"all descendants")," being re-rendered."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default Behavior"),": ",(0,o.kt)("strong",{parentName:"p"},"Update a prop in a component")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"results in ",(0,o.kt)("strong",{parentName:"li"},"that component and all descendants")," re-rendered."),(0,o.kt)("li",{parentName:"ul"},"the check for whether a prop changed uses a strict equality check ",(0,o.kt)("inlineCode",{parentName:"li"},"==="))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'const a = { "test": 1 };\nconst b = { "test": 1\'};\n\nconsole.log(a === b); // will be false\n\nconst c = a; // "c" is just a reference to "a"\n\nconsole.log(a === c); // will be true\n')))),(0,o.kt)("h2",{id:"wasted-renders"},"Wasted Renders"),(0,o.kt)("p",null,"React has two phrases that run sequentially to update the UI."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Render Phase")),(0,o.kt)("p",{parentName:"li"},'The "render phase" is where React compares a previous version of a Virtual DOM representing the UI with an updated version to figure out what if any changes need to be made.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Commit Phase")),(0,o.kt)("p",{parentName:"li"},'The "commit phase" is where React actually changes the real DOM.'))),(0,o.kt)("p",null,'As demonstrated in the Virtual DOM chapter React is very efficient about figuring out the minimal DOM operations to make in the "render phase" and batches them to make rendering the UI extremely performant.'),(0,o.kt)("p",null,'However, the "render phase" does take work and consumes resources and should not take place if it isn\'t needed. If all the components on the screen are constantly rendering when the don\'t need to this is a common source of eventual performance problems. We call this problem: "wasted renders".'),(0,o.kt)("p",null,"Wasted Renders can be fixed using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"React.Memo")," when using function components."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"React.PureComponent")," when using class components.")),(0,o.kt)("h3",{id:"reactmemo"},(0,o.kt)("inlineCode",{parentName:"h3"},"React.memo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," is a higher order component for function components and subsequently can only be used with function components."),(0,o.kt)("p",null,"If your function component renders the same result given the same props, you can wrap it in a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," only checks for prop changes. If your function component wrapped in ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext")," Hook in its implementation, it will still rerender when state or context change.")),(0,o.kt)("p",null,"By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function MyComponent(props) {\n  /* render using props */\n}\nfunction areEqual(prevProps, nextProps) {\n  /*\n  return true if passing nextProps to render would return\n  the same result as passing prevProps to render,\n  otherwise return false\n  */\n}\nexport default React.memo(MyComponent, areEqual);\n")),(0,o.kt)("p",null,"This method only exists as a ",(0,o.kt)("strong",{parentName:"p"},"performance optimization."),' Do not rely on it to "prevent" a render, as this can lead to bugs.'),(0,o.kt)("h3",{id:"reactpurecomponent"},(0,o.kt)("inlineCode",{parentName:"h3"},"React.PureComponent")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.PureComponent")," is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"React.Component"),". The difference between them is that ",(0,o.kt)("inlineCode",{parentName:"p"},"React.Component")," doesn't implement ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"React.PureComponent")," implements it with a shallow prop and state comparison."),(0,o.kt)("p",null,"If your React component's ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," function renders the same result given the same props and state, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"React.PureComponent")," for a performance boost in some cases."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"React.PureComponent"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()")," only shallowly compares the objects. If these contain complex data structures, it may produce false-negatives for deeper differences. Only extend ",(0,o.kt)("inlineCode",{parentName:"p"},"PureComponent")," when you expect to have simple props and state, or use ",(0,o.kt)("inlineCode",{parentName:"p"},"forceUpdate()")," when you know deep data structures have changed. Or, consider using ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/immutable-js/"},"immutable objects")," to facilitate fast comparisons of nested data."),(0,o.kt)("p",{parentName:"blockquote"},"Furthermore, ",(0,o.kt)("inlineCode",{parentName:"p"},"React.PureComponent"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()"),' skips prop updates for the whole component subtree. Make sure all the children components are also "pure".')),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note"),(0,o.kt)("p",{parentName:"blockquote"},"Unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()")," method on class components, the ",(0,o.kt)("inlineCode",{parentName:"p"},"areEqual")," function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the props are equal and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if the props are not equal. This is the inverse from ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),".")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is memoization?")),(0,o.kt)("p",null,"In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why is my component rendering twice?")),(0,o.kt)("p",null,"Remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"<React.StrictMode>")," tag as shown below and this behavior will go away however you may not want to remove it as it doesn't happen in production. For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"Strict Mode Documentation")," or this stackoverflow question: ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode"},"Strict Mode Rendering Twice"),"."),(0,o.kt)("h4",{id:"indexjs"},"index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"const root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n-  <React.StrictMode>\n    {app}\n-  </React.StrictMode>\n,\n  document.getElementById('root')\n);\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"reactmemo-demo"},(0,o.kt)("inlineCode",{parentName:"h2"},"React.memo")," Demo"),(0,o.kt)("p",null,"Run the demo below and open the console to observe some wasted renders."),(0,o.kt)("p",null,"Steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Before beginning the demos in this chapter add the following css class if it doesn't already exist."),(0,o.kt)("h4",{parentName:"li",id:"stylescss"},"styles.css"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-css"},".box {\n  border: 1px dashed;\n  padding: 30px;\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Paste")," the ",(0,o.kt)("strong",{parentName:"p"},"code")," below into ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Open")," the application in a ",(0,o.kt)("strong",{parentName:"p"},"browser"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Open")," Chrome DevTools and switch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"console"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type in the add textbox to add an item and then click the add button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Notice that every item in the list re-renders even though you only added one item."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Note: Updating or removing an item also causes everything to re-render."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Commment out the ",(0,o.kt)("inlineCode",{parentName:"p"},"ListItem")," component.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uncomment the ",(0,o.kt)("inlineCode",{parentName:"p"},"ListItem")," component below the original wrapped in a ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," function.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Refresh your browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once again type in the add textbox to add an item and then click the add button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Notice that only one item in the list re-renders since the other ",(0,o.kt)("inlineCode",{parentName:"p"},"ListItem"),"'s are the same. You have successfully eliminated some wasted renders."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The same issue of every item re-rendering actually existing when editing or removing an item. We have now fixed all of these wasted renders. If time permits feel free to change back to the non memoized implemention of ",(0,o.kt)("inlineCode",{parentName:"p"},"ListItem")," to see the wasted renders.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function ID() {\n  return \'_\' + Math.random().toString(36).substr(2, 9);\n}\n\nclass Item {\n  constructor(id, name) {\n    this.id = id;\n    this.name = name;\n  }\n}\n\nconst initialItems = [\n  new Item(ID(), \'First Item\'),\n  new Item(ID(), \'Second Item\'),\n  new Item(ID(), \'Third Item\'),\n];\n\nfunction LastRendered() {\n  return <p>Last Rendered: {new Date().toLocaleTimeString()}</p>;\n}\n\nfunction Form({ item, onSubmit, onCancel, buttonValue }) {\n  const [inputValue, setInputValue] = React.useState(item.name || \'\');\n\n  const handleChange = (event) => {\n    setInputValue(event.target.value);\n  };\n\n  const handleFormSubmit = (event) => {\n    event.preventDefault();\n    const submittedItem = {\n      id: item ? item.id : ID(),\n      name: inputValue,\n    };\n\n    onSubmit(submittedItem);\n    setInputValue(\'\');\n  };\n\n  const handleCancel = (event) => {\n    event.preventDefault();\n    onCancel();\n  };\n\n  return (\n    <div className="box">\n      <LastRendered />\n      <form onSubmit={handleFormSubmit}>\n        <input value={inputValue} onChange={handleChange} />\n        <button>{buttonValue || \'Save\'}</button>\n        {onCancel && (\n          <a href="#" onClick={handleCancel}>\n            cancel\n          </a>\n        )}\n      </form>\n    </div>\n  );\n}\n\n//1) Wasted renders when adding item\nfunction ListItem({ item, onEdit, onRemove }) {\n  return (\n    <div className="box">\n      <LastRendered />\n      <p>\n        <span>{item.name}</span>\n        <button onClick={() => onEdit(item)}>Edit</button>\n        <button onClick={() => onRemove(item)}>Remove</button>\n      </p>\n    </div>\n  );\n}\n\n//2) Wasted renders fixed using React.memo and custom areEqual function\n// const ListItem = React.memo(\n//   function ListItem({ item, onEdit, onRemove }) {\n//     return (\n//       <div className="box">\n//         <LastRendered />\n//         <p>\n//           <span>{item.name}</span>\n//           <button onClick={() => onEdit(item)}>Edit</button>\n//           <button onClick={() => onRemove(item)}>Remove</button>\n//         </p>\n//       </div>\n//     );\n//   },\n//   (previous, next) => previous.item === next.item\n// );\n\n//3) Wasted renders fixed using React.memo and useCallback\n// const ListItem = React.memo(function ListItem({ item, onEdit }) {\n//   return (\n//     <div className="box">\n//       <LastRendered />\n//       <p>\n//         <span>{item.name}</span>\n//         <button onClick={() => onEdit(item)}>Edit</button>\n//         <button onClick={() => onRemove(item)}>Remove</button>\n//       </p>\n//     </div>\n//   );\n// });\n\nfunction List({ items, onRemove, onUpdate }) {\n  const [editingItem, setEditingItem] = React.useState(null);\n\n  const handleEdit = (item) => {\n    setEditingItem(item);\n  };\n  // const handleEdit = React.useCallback(\n  //   (item) => {\n  //     setEditingItem(item);\n  //   },\n  //   [setEditingItem]\n  // );\n\n  const handleCancel = () => {\n    setEditingItem(null);\n  };\n\n  return (\n    <div className="box">\n      <LastRendered />\n      <ul>\n        {items.map((item) => (\n          <li key={item.id}>\n            {item === editingItem ? (\n              <Form item={item} onSubmit={onUpdate} onCancel={handleCancel} />\n            ) : (\n              <ListItem item={item} onEdit={handleEdit} onRemove={onRemove} />\n            )}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nfunction Container() {\n  const [items, setItems] = React.useState([]);\n\n  React.useEffect(() => setItems(initialItems), []);\n\n  const addItem = (item) => {\n    setItems([...items, item]);\n  };\n\n  const updateItem = (updatedItem) => {\n    let updatedItems = items.map((item) => {\n      return item.id === updatedItem.id\n        ? Object.assign({}, item, updatedItem)\n        : item;\n    });\n    return setItems(updatedItems);\n  };\n\n  const removeItem = (removeThisItem) => {\n    const filteredItems = items.filter((item) => item.id != removeThisItem.id);\n    setItems(filteredItems);\n  };\n\n  // const removeItem = React.useCallback((removeThisItem) => {\n  //   const filteredItems = items.filter((item) => item.id != removeThisItem.id);\n  //   setItems(filteredItems);\n  // }, setItems);\n\n  return (\n    <div className="box">\n      <LastRendered />\n      <Form item="" onSubmit={addItem} buttonValue="Add" />\n\n      <List items={items} onRemove={removeItem} onUpdate={updateItem} />\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <Container />\n    </div>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\'root\')).render(<App />);\n')),(0,o.kt)("h2",{id:"class-components"},"Class Components"),(0,o.kt)("h3",{id:"reactpurecomponent-demo"},(0,o.kt)("inlineCode",{parentName:"h3"},"React.PureComponent")," Demo"),(0,o.kt)("p",null,"Run the demo below and open the console to observe some wasted renders."),(0,o.kt)("p",null,"Steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Paste")," the ",(0,o.kt)("strong",{parentName:"li"},"code")," below into ",(0,o.kt)("inlineCode",{parentName:"li"},"main.js")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Open")," the application in a ",(0,o.kt)("strong",{parentName:"li"},"browser"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Open")," Chrome DevTools and switch to the ",(0,o.kt)("inlineCode",{parentName:"li"},"console"),"."),(0,o.kt)("li",{parentName:"ol"},"Type in the add textbox to add an item and then click the add button."),(0,o.kt)("li",{parentName:"ol"},"Notice that every item in the list re-renders even though you only added one item."),(0,o.kt)("li",{parentName:"ol"},"Commment out the ",(0,o.kt)("inlineCode",{parentName:"li"},"ListItem")," component (version labeled a)."),(0,o.kt)("li",{parentName:"ol"},"Uncomment the ",(0,o.kt)("inlineCode",{parentName:"li"},"ListItem")," component below the which extends ",(0,o.kt)("inlineCode",{parentName:"li"},"React.PureComponent")," function (version b)."),(0,o.kt)("li",{parentName:"ol"},"Notice that the anonymous callback functions in the ",(0,o.kt)("inlineCode",{parentName:"li"},"onClick")," event handlers where changed to use ",(0,o.kt)("inlineCode",{parentName:"li"},"bind")," so that the same version of the function would be passed as a prop every time instead of a new instance.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-  <button onClick={() => onEdit(item)}>Edit</button>\n-  <button onClick={() => onRemove(item)}>Remove</button>\n+  <button onClick={onEdit.bind(this, item)}>Edit</button>\n+  <button onClick={onRemove.bind(this, item)}>Remove</button>\n"))),(0,o.kt)("li",{parentName:"ol"},"Refresh your browser."),(0,o.kt)("li",{parentName:"ol"},"Once again type in the add textbox to add an item and then click the add button."),(0,o.kt)("li",{parentName:"ol"},"Notice that only one item in the list re-renders since the other ",(0,o.kt)("inlineCode",{parentName:"li"},"ListItem"),"'s are the same. You have successfully eliminated a wasted render."),(0,o.kt)("li",{parentName:"ol"},"Try version c) of the component which uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"shouldComponentUpdate")," lifecyle method to control whether the component updates and only focuses on the ",(0,o.kt)("inlineCode",{parentName:"li"},"item")," prop and ignores the ",(0,o.kt)("inlineCode",{parentName:"li"},"onEdit")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"onRemove")," callbacks.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The same issue of every item re-rendering actually existing when editing or removing an item. We have now fixed all of these wasted renders. If time permits feel free to change back to the nonpure implemention of ",(0,o.kt)("inlineCode",{parentName:"p"},"ListItem")," to see the wasted renders.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function ID() {\n  return \'_\' + Math.random().toString(36).substr(2, 9);\n}\n\nclass Item {\n  constructor(id, name) {\n    this.id = id;\n    this.name = name;\n  }\n}\n\nconst initialItems = [\n  new Item(ID(), \'First Item\'),\n  new Item(ID(), \'Second Item\'),\n  new Item(ID(), \'Third Item\'),\n];\n\nclass LastRendered extends React.Component {\n  render() {\n    return <p>Last Rendered: {new Date().toLocaleTimeString()}</p>;\n  }\n}\n\n//a) wasted renders\nclass ListItem extends React.Component {\n  render() {\n    const { item, onEdit, onRemove } = this.props;\n    return (\n      <div className="box">\n        <LastRendered />\n        <p>\n          <span>{item.name}</span>\n          <button onClick={() => onEdit(item)}>Edit</button>\n          <button onClick={() => onRemove(item)}>Remove</button>\n        </p>\n      </div>\n    );\n  }\n}\n\n//b) pure component\n// class ListItem extends React.PureComponent {\n//   render() {\n//     const { item, onEdit, onRemove } = this.props;\n//     return (\n//       <div className="box">\n//         <LastRendered />\n//         <p>\n//           <span>{item.name}</span>\n//           <button onClick={onEdit.bind(this, item)}>Edit</button>\n//           <button onClick={onRemove.bind(this, item)}>Remove</button>\n//         </p>\n//       </div>\n//     );\n//   }\n// }\n\n//c) shouldComponentUpdate\n// class ListItem extends React.Component {\n//   shouldComponentUpdate(previousProps) {\n//     return previousProps.item !== this.props.item;\n//   }\n\n//   render() {\n//     const { item, onEdit, onRemove } = this.props;\n//     return (\n//       <div className="box">\n//         <LastRendered />\n//         <p>\n//           <span>{item.name}</span>\n//           <button onClick={() => onEdit(item)}>Edit</button>\n//           <button onClick={() => onRemove(item)}>Remove</button>\n//         </p>\n//       </div>\n//     );\n//   }\n// }\n\nclass List extends React.Component {\n  state = {\n    editingItem: null,\n  };\n\n  handleEditClick = (item) => {\n    this.setState({ editingItem: item });\n  };\n\n  handleCancel = (item) => {\n    this.setState({ editingItem: null });\n  };\n\n  render() {\n    const { items, onRemove, onUpdate } = this.props;\n    return (\n      <div className="box">\n        <LastRendered />\n        <ul>\n          {items.map((item) => (\n            <li key={item.id}>\n              {item === this.state.editingItem ? (\n                <Form\n                  item={item}\n                  onSubmit={onUpdate}\n                  onCancel={this.handleCancel}\n                />\n              ) : (\n                <ListItem\n                  item={item}\n                  onEdit={this.handleEditClick}\n                  onRemove={onRemove}\n                />\n              )}\n            </li>\n          ))}\n        </ul>\n      </div>\n    );\n  }\n}\n\nclass Form extends React.Component {\n  state = {\n    inputValue: this.props.item.name || \'\',\n  };\n\n  handleChange = (event) => {\n    event.preventDefault();\n    this.setState({ inputValue: event.target.value });\n  };\n\n  handleFormSubmit = (event) => {\n    event.preventDefault();\n    const item = {\n      id: this.props.item ? this.props.item.id : ID(),\n      name: this.state.inputValue,\n    };\n\n    this.props.onSubmit(item);\n    this.setState({ inputValue: \'\' });\n  };\n\n  handleCancel = (event) => {\n    event.preventDefault();\n    this.props.onCancel();\n  };\n\n  render() {\n    return (\n      <div className="box">\n        <LastRendered />\n        <form onSubmit={this.handleFormSubmit}>\n          <input value={this.state.inputValue} onChange={this.handleChange} />\n          <button>{this.props.buttonValue || \'Save\'}</button>\n          {this.props.onCancel && (\n            <a href="#" onClick={this.handleCancel}>\n              cancel\n            </a>\n          )}\n        </form>\n      </div>\n    );\n  }\n}\n\nclass Container extends React.Component {\n  state = {\n    items: [],\n  };\n\n  componentDidMount() {\n    this.setState({ items: initialItems });\n  }\n\n  addItem = (item) => {\n    this.setState((state) => ({ items: [...state.items, item] }));\n  };\n\n  updateItem = (updatedItem) => {\n    this.setState((state) => {\n      let items = state.items.map((item) => {\n        return item.id === updatedItem.id\n          ? Object.assign({}, item, updatedItem)\n          : item;\n      });\n      return { items };\n    });\n  };\n\n  removeItem = (removeThisItem) => {\n    this.setState((state) => {\n      const items = state.items.filter((item) => item.id != removeThisItem.id);\n      return { items };\n    });\n  };\n\n  render() {\n    return (\n      <div className="box">\n        <LastRendered />\n        <Form item="" onSubmit={this.addItem} buttonValue="Add" />\n        <List\n          items={this.state.items}\n          onRemove={this.removeItem}\n          onUpdate={this.updateItem}\n        />\n      </div>\n    );\n  }\n}\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div>\n        <Container />\n      </div>\n    );\n  }\n}\n\nReactDOM.createRoot(document.getElementById(\'root\')).render(<App />);\n')),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/react-api.html#reactpurecomponent"},"React.PureComponent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/react-api.html#reactmemo"},"React.memo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/perf.html"},"Performance Tools")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/optimizing-performance.html"},"Optimizing Performance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab"},"Profiling Components with Chrome")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34385243/why-is-immutability-so-important-or-needed-in-javascript"},"Why is immutability so important (or needed) in JavaScript?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd"},"The DAO of Immutability")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/welldone-software/why-did-you-render"},"Why Did You Render")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/welldone-software/why-did-you-render-mr-big-pure-react-component-2a36dd86996f"},"Why Did You Render Blog Post")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@Osterberg/react-component-renders-too-often-2917daabcf5"},"React Component Renders Too Often")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html#flame-chart"},"Flame Chart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://thoughtbot.com/blog/react-rendering-misconception"},"React Rendering Misconception")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html"},"You Probably Don't Need Derived State")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lucybain.com/blog/2017/react-js-when-to-rerender/"},"When to Re-Render a Component")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/how-to-update-a-components-prop-in-react-js-oh-yes-it-s-possible-f9d26f1c4c6d/"},"How to Update a Component's Props in React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.educative.io/edpresso/how-to-force-a-react-component-to-re-render"},"How to force a React component to re-render")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.pluralsight.com/courses/optimize-performance-react"},"Pluralsight: Optimize Performance for React (payment required)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/strict-mode.html"},"Strict Mode Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode"},"Strict Mode Rendering Twice")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.coinbase.com/optimizing-react-native-7e7bf7ac3a34"},"Optimizing React Native"))))}c.isMDXComponent=!0}}]);