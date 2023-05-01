"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[9199],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),i=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=i(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=i(t),k=r,d=p["".concat(o,".").concat(k)]||p[k]||c[k]||l;return t?a.createElement(d,s(s({ref:n},m),{},{components:t})):a.createElement(d,s({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=k;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[p]="string"==typeof e?e:r,s[1]=u;for(var i=2;i<l;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var a=t(7462),r=(t(7294),t(3905));const l={title:"GraphQL"},s=void 0,u={unversionedId:"gatsby/labs/GraphQL",id:"gatsby/labs/GraphQL",title:"GraphQL",description:"Uses GraphQL Playground",source:"@site/docs/gatsby/labs/08-GraphQL.md",sourceDirName:"gatsby/labs",slug:"/gatsby/labs/GraphQL",permalink:"/docs/gatsby/labs/GraphQL",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"GraphQL"}},o={},i=[{value:"Send a Query with GraphQL Playground",id:"send-a-query-with-graphql-playground",level:2},{value:"Query a List of Objects",id:"query-a-list-of-objects",level:2},{value:"Query an Enumeration Type",id:"query-an-enumeration-type",level:2},{value:"Query Nested GraphQL Query",id:"query-nested-graphql-query",level:2},{value:"Filter Query using Arguments",id:"filter-query-using-arguments",level:2},{value:"Aliasing Fields",id:"aliasing-fields",level:2},{value:"Use Variables to Filter a Query",id:"use-variables-to-filter-a-query",level:2},{value:"Query Variables",id:"query-variables",level:3},{value:"By Customer",id:"by-customer",level:2},{value:"Operation Names",id:"operation-names",level:2},{value:"TOO BIG",id:"too-big",level:3},{value:"NO Query (operation) Names",id:"no-query-operation-names",level:3},{value:"Queries with Operation Names",id:"queries-with-operation-names",level:3},{value:"CustomerPage",id:"customerpage",level:4},{value:"Mutation",id:"mutation",level:2},{value:"Authenticate a User",id:"authenticate-a-user",level:2},{value:"Checkout a Pet",id:"checkout-a-pet",level:2},{value:"Fragments",id:"fragments",level:2},{value:"Reference",id:"reference",level:2}],m={toc:i},p="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://pet-library.moonhighway.com/\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Uses GraphQL Playground")),(0,r.kt)("h2",{id:"send-a-query-with-graphql-playground"},"Send a Query with GraphQL Playground"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query {\n  totalPets\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ctrl+Space to autocomplete fields")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "totalPets": 25\n  }\n}\n')),(0,r.kt)("h2",{id:"query-a-list-of-objects"},"Query a List of Objects"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"query {\n  totalPets\n+  allPets{\n+    name,\n+    weight\n  }\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "totalPets": 25,\n    "allPets": [\n      {\n        "name": "Archy",\n        "weight": 19.9\n      },\n      {\n        "name": "Pip",\n        "weight": 3.7\n      },\n      {\n        "name": "Luna",\n        "weight": 75.4\n      },\n      {\n        "name": "Pillow",\n        "weight": 8.3\n      },\n   ...\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Curly Braces = Selection Set"),(0,r.kt)("li",{parentName:"ul"},"Data Requested = Field(s)"),(0,r.kt)("li",{parentName:"ul"},"#"," Comments")),(0,r.kt)("h2",{id:"query-an-enumeration-type"},"Query an Enumeration Type"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"query {\n  totalPets\n  allPets{\n    name,\n    weight\n+   category\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type System (see Schema tab)"),(0,r.kt)("li",{parentName:"ul"},"Cmd+Click a Field to see Type info")),(0,r.kt)("h2",{id:"query-nested-graphql-query"},"Query Nested GraphQL Query"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"query {\n  totalPets\n  allPets{\n    name,\n    weight,\n    category,\n    photo{\n+      full\n+      thumb\n    }\n  }\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "totalPets": 25,\n    "allPets": [\n      {\n        "name": "Archy",\n        "weight": 19.9,\n        "category": "DOG",\n        "photo": {\n          "full": "https://res.cloudinary.com/hzrulbrds/image/upload/v1582763883/archy_yehmk9.jpg",\n          "thumb": "https://res.cloudinary.com/hzrulbrds/image/upload/v1582764387/thumbs/archy_tn_qlgg24.jpg"\n        }\n      },\n\n  ...\n  }\n}\n')),(0,r.kt)("h2",{id:"filter-query-using-arguments"},"Filter Query using Arguments"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"query {\n-  totalPets,\n+  totalPets(status:AVAILABLE)\n  allPets{\n    name\n    weight,\n    category,\n    photo{\n      full\n      thumb\n    }\n  }\n}\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "data": {\n+    "totalPets": 10,\n    "allPets": [\n      {\n        "name": "Archy",\n        "weight": 19.9,\n        "category": "DOG",\n        "photo": {}\n        ...\n}\n')),(0,r.kt)("h2",{id:"aliasing-fields"},"Aliasing Fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Duplicate field names will need to be aliased.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query {\n+  available: totalPets(status:AVAILABLE),\n+  checkedOut: totalPets(status: CHECKEDOUT)\n-  totalPets(status:AVAILABLE),\n-  totalPets(status: CHECKEDOUT)\n  allPets{\n    name\n    weight,\n    category\n  }\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "data": {\n+    "available": 10,\n+    "checkedOut": 15,\n    "allPets": [\n  ...\n  }\n}\n')),(0,r.kt)("h2",{id:"use-variables-to-filter-a-query"},"Use Variables to Filter a Query"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Create a new Query")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query{\n  allPets(category: DOG, status: AVAILABLE){\n    id\n    name\n    status\n    category\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query($category: PetCategory, $status: PetStatus){\n  allPets(category: $category, status: $status){\n    id\n    name\n    status\n    category\n  }\n}\n")),(0,r.kt)("h3",{id:"query-variables"},"Query Variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "category": "DOG",\n  "status": "AVAILABLE"\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n"data": {\n    "allPets": [\n      {\n        "id": "D-1",\n        "name": "Danton",\n        "status": "AVAILABLE",\n        "category": "DOG"\n      },\n      {\n        "id": "D-8",\n        "name": "Pax",\n        "status": "AVAILABLE",\n        "category": "DOG"\n      },\n  ...\n  }\n}\n')),(0,r.kt)("h2",{id:"by-customer"},"By Customer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'query{\n  allCustomers{\n    name\n    username\n    currentPets{\n      id\n      name\n    }\n  }\n  petById(id: "C-1"){\n    name\n    inCareOf{\n     name\n    }\n  }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "allCustomers": [\n      {\n        "name": "Paul Benson",\n        "username": "pbenson",\n        "currentPets": []\n      },\n      ...{\n        "name": "Veronica",\n        "username": "V100",\n        "currentPets": [\n          {\n            "id": "C-1",\n            "name": "Biscuit"\n          }\n        ]\n      },\n      {\n        "name": "Jeet chauhan",\n        "username": "Jeet007",\n        "currentPets": [\n          {\n            "id": "C-2",\n            "name": "Jungle"\n          }\n        ]\n      },\n      {\n        "name": "Aynur Timerbaev",\n        "username": "aironrich",\n        "currentPets": [\n          {\n            "id": "D-2",\n            "name": "Archy"\n          }\n        ]\n      }\n    ],\n    "petById": {\n      "name": "Biscuit",\n      "inCareOf": {\n        "name": "Veronica"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"operation-names"},"Operation Names"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Query")),(0,r.kt)("h3",{id:"too-big"},"TOO BIG"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query {\n  availablePets: totalPets(status: AVAILABLE)\n  checkedOutPets: totalPets(status: CHECKEDOUT)\n  dogs: allPets(category: DOG, status: AVAILABLE) {\n    name\n    weight\n    status\n    category\n    photo {\n      full\n      thumb\n    }\n  }\n  totalCustomers\n  allCustomers {\n    name\n    username\n    dateCreated\n    checkoutHistory {\n      pet {\n        name\n      }\n      checkOutDate\n      checkInDate\n      late\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"no-query-operation-names"},"NO Query (operation) Names"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query {\n  availablePets: totalPets(status: AVAILABLE)\n  checkedOutPets: totalPets(status: CHECKEDOUT)\n  dogs: allPets(category: DOG, status: AVAILABLE) {\n    name\n    weight\n    status\n    category\n    photo {\n      full\n      thumb\n    }\n  }\n}\n\nquery {\n  totalCustomers\n  allCustomers {\n    name\n    username\n    dateCreated\n    checkoutHistory {\n      pet {\n        name\n      }\n      checkOutDate\n      checkInDate\n      late\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"queries-with-operation-names"},"Queries with Operation Names"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query PetPage {\n  availablePets: totalPets(status: AVAILABLE)\n  checkedOutPets: totalPets(status: CHECKEDOUT)\n  dogs: allPets(category: DOG, status: AVAILABLE) {\n    name\n    weight\n    status\n    category\n    photo {\n      full\n      thumb\n    }\n  }\n}\n\nquery CustomerPage{\n  totalCustomers\n  allCustomers {\n    name\n    username\n    dateCreated\n    checkoutHistory {\n      pet {\n        name\n      }\n      checkOutDate\n      checkInDate\n      late\n    }\n  }\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("h4",{id:"customerpage"},"CustomerPage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "totalCustomers": 121,\n    "allCustomers": [\n      {\n        "name": "John Bronson",\n        "username": "jbronson",\n        "dateCreated": "2019-03-24T02:19:49.025Z",\n        "checkoutHistory": [\n')),(0,r.kt)("h2",{id:"mutation"},"Mutation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\nmutation ($input: CreateAccountInput!) {\n  createAccount(input: $input) {\n    username,\n    name\n  }\n}\n\n\n")),(0,r.kt)("p",null,"1a. Query Variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "input": {\n    "name": "James Franco",\n    "username": "jfranco",\n    "password": "abc123"\n  }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createAccount": {\n      "username": "jfranco",\n      "name": "James Franco"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"authenticate-a-user"},"Authenticate a User"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Mutation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'query user {\n  me {\n    name\n    username\n  }\n}\n\nmutation login{\n  logIn(username: "jfranco" password: "abc123") {\n    customer {\n      name\n    }\n    token\n  }\n}\n\n')),(0,r.kt)("p",null,"1a. HTTP Headers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "Authorization": "Bearer your-token-here"\n}\n\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "me": {\n      "name": "James Franco",\n      "username": "jfranco"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"checkout-a-pet"},"Checkout a Pet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Queries")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query {\n  allPets(status: AVAILABLE) {\n    id\n    name\n    category\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'mutation Checkout {\n  checkOut(id: "S-4") {\n    pet {\n      name\n    }\n    customer {\n      name\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"query Me {\n  me {\n    name\n    currentPets{\n      name\n    }\n  }\n}\n")),(0,r.kt)("p",null,"You likely already have this header set from a previous step."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Authorization": "Bearer your-token here"\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "me": {\n      "name": "James Franco",\n      "currentPets": [\n        {\n          "name": "Pluto"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"fragments"},"Fragments"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query {\n  allCustomers {\n    name\n    username\n    checkoutHistory {\n      pet{\n        name\n      }\n      checkInDate\n      checkOutDate\n    }\n  }\n}\n\n")),(0,r.kt)("p",null,"1a. Refactored"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\nquery {\n  allCustomers {\n    ...CustomerDetails\n  }\n}\n\nfragment CustomerDetails on Customer {\n  name\n  username\n  checkoutHistory {\n    pet {\n      name\n    }\n    checkInDate\n    checkOutDate\n  }\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n "data": {\n    "allCustomers": [\n      {\n        "name": "Paul Benson",\n        "username": "pbenson",\n        "checkoutHistory": []\n      },\n      {\n        "name": "Gran Janson",\n        "username": "gjanson",\n        "checkoutHistory": []\n      },\n  ...\n  }\n}\n')),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/"},"GraphQL Query Language Documentation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://app.pluralsight.com/guides/querying-data-with-graphql"},"Guide: Querying GraphQL")))))}c.isMDXComponent=!0}}]);