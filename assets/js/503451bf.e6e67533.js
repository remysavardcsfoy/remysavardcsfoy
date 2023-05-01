"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[6814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={title:"Routing",sidebar_label:"Routing",slug:"/routing-v4"},r=void 0,l={unversionedId:"Routing-v4",id:"Routing-v4",title:"Routing",description:"Overview",source:"@site/docs/15-Routing-v4.md",sourceDirName:".",slug:"/routing-v4",permalink:"/docs/routing-v4",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Routing",sidebar_label:"Routing",slug:"/routing-v4"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Basics",id:"basics",level:2},{value:"Not Found (404)",id:"not-found-404",level:3},{value:"<code>package.json</code>",id:"packagejson",level:4},{value:"Parameters",id:"parameters",level:2},{value:"URL Parameters",id:"url-parameters",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Nesting",id:"nesting",level:2},{value:"React Router version 5",id:"react-router-version-5",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Similar in function to a server-side router in an MVC framework",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Associates a route (url) with a particular controller action"))),(0,o.kt)("li",{parentName:"ul"},"React Router switches between (page/container) components when a route changes"),(0,o.kt)("li",{parentName:"ul"},"Back button is broken by default when page/container components change",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the browser's history is not updated with a new url when page/container components change"),(0,o.kt)("li",{parentName:"ul"},"React Router programmatically adds entries to the browser's history"),(0,o.kt)("li",{parentName:"ul"},"enables the back button to work in React applications")))),(0,o.kt)("p",null,"There are two versions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"BrowserRouter (react-router-dom) for web applications."),(0,o.kt)("li",{parentName:"ol"},"NativeRouter (react-router-native) for use with React Native.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the package"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm install react-router-dom\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the script tag"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'//index.html\n\n    <script src="/node_modules/react/umd/react.development.js"><\/script>\n    <script src="/node_modules/react-dom/umd/react-dom.development.js"><\/script>\n+    <script src="/node_modules/react-router-dom/umd/react-router-dom.js"><\/script>\n    <script src="/node_modules/@babel/standalone/babel.min.js"><\/script>\n    <script src="/node_modules/axios/dist/axios.min.js"><\/script>\n    <script type="text/babel" src="/main.js"><\/script>\n')),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"! Be sure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js")," script tag's src attribute starts with a ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," or the router will not work properly when you refresh the page."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log the ",(0,o.kt)("inlineCode",{parentName:"p"},"RouterRouterDOM")," to verify it is installed properly"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Also export the common components so they are easier to use")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//main.js\nconsole.log(window.ReactRouterDOM);\n\nconst {\n  BrowserRouter: Router,\n  Route,\n  Link,\n  Prompt,\n  Switch,\n  Redirect,\n  NavLink,\n} = window.ReactRouterDOM;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the console you should see:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"{BrowserRouter: \u0192, HashRouter: \u0192, Link: \u0192, NavLink: \u0192, MemoryRouter: \u0192,\xa0\u2026}\n")))),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add these styles")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* styles.css */\n\n.container {\n  border: 1px solid #ddd;\n  margin: 30px;\n  padding: 30px;\n}\n\nnav ul {\n  list-style: none;\n}\n\nnav ul li {\n  display: inline;\n}\n\nnav ul li:after {\n  content: ' | ';\n}\n\nnav ul li:last-child:after {\n  content: '';\n}\n\n.active {\n  background-color: #bee5eb;\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Try this code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const {\n  BrowserRouter: Router,\n  Route,\n  Link,\n  Prompt,\n  Switch,\n  Redirect,\n  NavLink,\n} = window.ReactRouterDOM;\n\nfunction Home() {\n  return <h2>Home</h2>;\n}\n\nfunction About() {\n  return <h2>About</h2>;\n}\n\nfunction Contact() {\n  return <h2>Contact</h2>;\n}\n\nfunction App() {\n  return (\n    <Router>\n      <div>\n        <nav>\n          <ul>\n            <li>\n              <Link to="/">Home</Link>\n            </li>\n            <li>\n              <Link to="/about/">About</Link>\n            </li>\n            <li>\n              <Link to="/contact/">Contact</Link>\n            </li>\n          </ul>\n        </nav>\n\n        <div className="container">\n          <Route path="/" exact component={Home} />\n          <Route path="/about/" component={About} />\n          <Route path="/contact/" component={Contact} />\n        </div>\n      </div>\n    </Router>\n  );\n}\n\nReactDOM.createRoot(document.getElementById(\'root\')).render(<App />);\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Change the Link tags to NavLink tags")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<nav>\n  <ul>\n    <li>\n      <NavLink to="/">Home</NavLink>\n    </li>\n    <li>\n      <NavLink to="/about/">About</NavLink>\n    </li>\n    <li>\n      <NavLink to="/contact/">Contact</NavLink>\n    </li>\n  </ul>\n</nav>\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add the following style")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* styles.css */\n\n.active {\n  background-color: #bee5eb;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can change the name of the class used for the active item by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"activeClassName"),". See the documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://reacttraining.com/react-router/web/api/NavLink/activeclassname-string"},"activeClassName")," for more information.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Refresh the browser and see the navigation items are highlighted."),(0,o.kt)("li",{parentName:"ol"},"Notice that ",(0,o.kt)("inlineCode",{parentName:"li"},"Home")," is always highlighted because the ",(0,o.kt)("inlineCode",{parentName:"li"},"\\")," path is the start of the other paths ",(0,o.kt)("inlineCode",{parentName:"li"},"\\about")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"\\contact")),(0,o.kt)("li",{parentName:"ol"},"Add an exact attribute to the ",(0,o.kt)("strong",{parentName:"li"},"Home")," ",(0,o.kt)("inlineCode",{parentName:"li"},"NavLink")," to get this working as intended.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<nav>\n  <ul>\n    <li>\n      <NavLink exact to="/">\n        Home\n      </NavLink>\n    </li>\n    <li>\n      <NavLink to="/about">About</NavLink>\n    </li>\n    <li>\n      <NavLink to="/contact">Contact</NavLink>\n    </li>\n  </ul>\n</nav>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information see the API documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://reacttraining.com/react-router/web/api/NavLink"},"\\<NavLink",">"))),(0,o.kt)("h3",{id:"not-found-404"},"Not Found (404)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Be sure you are running a development web server like serve with the ",(0,o.kt)("inlineCode",{parentName:"li"},"-s")," flag.")),(0,o.kt)("h4",{id:"packagejson"},(0,o.kt)("inlineCode",{parentName:"h4"},"package.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "start": "serve -s",\n    ...\n  },\n  ...\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the URL to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/noroute"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The navigation renders but the page is blank. Ideally, we would like to show a ",(0,o.kt)("inlineCode",{parentName:"p"},"NotFound")," component when this happens."),(0,o.kt)("p",{parentName:"li"},"To achieve this we need to understand two things:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"<Route>")," with no path will always render a component"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"<Switch>")," component will display the first matching route listed inside of it")))),(0,o.kt)("p",null,"3) Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"NotFound")," component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function NotFound() {\n  return (\n    <>\n      <h2>Uh oh.</h2>\n      <p>\n        The page you requested could not be found. Is there any chance you were\n        looking for one of these?\n      </p>\n    </>\n  );\n}\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Add a route for it with ",(0,o.kt)("strong",{parentName:"li"},"no path"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'    <Route path="/" exact  component={Home} />\n    <Route path="/about/" component={About} />\n    <Route path="/contact/" component={Contact} />\n+   <Route component={NotFound} />\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Navigate to the home route and then the contact route and notice the ",(0,o.kt)("inlineCode",{parentName:"li"},"NotFound")," component shows when visiting every route"),(0,o.kt)("li",{parentName:"ol"},"Wrap the list of routes in a ",(0,o.kt)("inlineCode",{parentName:"li"},"Switch")," component")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'+ <Switch>\n    <Route path="/" exact component={Home} />\n    <Route path="/about/" component={About} />\n    <Route path="/contact/" component={Contact} />\n    <Route component={NotFound} />\n+ </Switch>\n')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Navigate to the various routes again and notice that only when you manually go to a route that doesn't exist like: ",(0,o.kt)("inlineCode",{parentName:"li"},"/noroute")," the ",(0,o.kt)("inlineCode",{parentName:"li"},"NotFound")," component renders.")),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The attribute ",(0,o.kt)("inlineCode",{parentName:"li"},"exact")," on a ",(0,o.kt)("inlineCode",{parentName:"li"},"<Route>")," controls what is displayed into the page."),(0,o.kt)("li",{parentName:"ul"},"The attribute ",(0,o.kt)("inlineCode",{parentName:"li"},"exact")," on a ",(0,o.kt)("inlineCode",{parentName:"li"},"<NavLink>")," controls what is active (highlighed) in the navigation."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"url-parameters"},"URL Parameters"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This example builds on the code from the previous demonstrations in this section.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Movie")," model class.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add it just before the App component")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Movie {\n  constructor(id, name, description, type) {\n    this.id = id;\n    this.name = name;\n    this.description = description;\n    this.type = type;\n  }\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an array of mock movies")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const movies = [\n  new Movie(\n    1,\n    ' Titanic',\n    'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',\n    'Drama'\n  ),\n  new Movie(\n    2,\n    ' E.T. the Extra-Terrestrial',\n    'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.',\n    'Fantasy'\n  ),\n  new Movie(\n    3,\n    'The Wizard of Oz',\n    // tslint:disable-next-line:max-line-length\n    'Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home in Kansas and help her friends as well.',\n    'Fantasy'\n  ),\n  new Movie(\n    4,\n    'Star Wars: Episode IV - A New Hope ',\n    // tslint:disable-next-line:max-line-length\n    'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire/`s world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.',\n    'Action'\n  ),\n];\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Movies")," component to list movies")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function MoviesList(props) {\n  const movieListItems = props.movies.map((movie) => (\n    <li key={movie.id}>\n      <Link to={`${props.match.url}/${movie.id}`}>{movie.name}</Link>\n    </li>\n  ));\n  return (\n    <div>\n      <h2>Movies</h2>\n      <ul>{movieListItems}</ul>\n    </div>\n  );\n}\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Add a Route to go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Movies")," component")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notice how we pass props to a the ",(0,o.kt)("inlineCode",{parentName:"p"},"Movies")," component which is rendered by the React Router")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Route\n  exact\n  path="/movies"\n  render={(props) => <Movies {...props} movies={movies} />}\n/>\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a NavLink to navigate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Movies")," component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'<ul>\n  ...\n  <li>\n    <NavLink to="/contact/">Contact</NavLink>\n  </li>\n+  <li>\n+    <NavLink to="/movies">Movies</NavLink>\n+  </li>\n</ul>\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"MovieDetail")," component to show the detail about a particular movie.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function MovieDetail(props) {\n  const movieId = Number(props.match.params.id);\n  const movie = movies.find((movie) => movie.id === movieId);\n\n  return (\n    <div>\n      <h2>Movie Detail</h2>\n      <h3>{movie.name}</h3>\n      <p>{movie.description}</p>\n    </div>\n  );\n}\n")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Add a Route to go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"MovieDetail")," component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'<div className="container">\n  <Route path="/" exact component={Home} />\n  <Route path="/about/" component={About} />\n  <Route path="/contact/" component={Contact} />\n\n  <Route exact\n    path="/movies"\n    render={props => <MoviesList {...props} movies={movies} />}\n  />\n+ <Route path={`/movies/:id`} component={MovieDetail} />\n</div>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notice how the params are automatically added to the props of the component being rendered by their route.")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"To better understand how this is working temporarily add this line to the ",(0,o.kt)("inlineCode",{parentName:"li"},"MovieDetail")," component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"function MovieDetail(props) {\n  const path = props.match.path;\n  const movieId = Number(props.match.params.id);\n  const movie = movies.find(movie => movie.id === movieId);\n\n  return (\n    <div>\n      <h2>Movie Detail</h2>\n      <h3>{movie.name}</h3>\n      <p>{movie.description}</p>\n+     <pre>{JSON.stringify(props, null, ' ')}</pre>\n    </div>\n  );\n}\n")),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Refresh the page and you will see all the information the ",(0,o.kt)("inlineCode",{parentName:"li"},"Route")," automatically adds to the component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "history": {\n    "length": 4,\n    "action": "PUSH",\n    "location": {\n      "pathname": "/movies/2",\n      "search": "",\n      "hash": "",\n      "key": "t7rwjz"\n    }\n  },\n  "location": {\n    "pathname": "/movies/2",\n    "search": "",\n    "hash": "",\n    "key": "t7rwjz"\n  },\n  "match": {\n    "path": "/movies/:id",\n    "url": "/movies/2",\n    "isExact": true,\n    "params": {\n      "id": "2"\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"Movies")," component to filter by movie type (genre)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Destructure the needed props in the function signature and rename movies to ",(0,o.kt)("inlineCode",{parentName:"p"},"allMovies"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Parse the query string parameter(s)"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"React Router does not have any opinions about how you parse URL query strings. Some applications use simple key=value query strings, but others embed arrays and objects in the query string. So it's up to you to parse the search string yourself.")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"In modern browsers that support the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL"},"URL API"),", you can instantiate a URLSearchParams object from location.search and use that.")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"In browsers that ",(0,o.kt)("a",{parentName:"p",href:"https://caniuse.com/#feat=url"},"do not support the URL API")," (read: IE) you can use a 3rd party library such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/query-string"},"query-string"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an empty movies array and then filter the movies if a type is passed")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add links with search params for the various movie types"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Movies({ movies: allMovies, location, match }) {\n  let movies = [];\n  let queryParams = new URLSearchParams(location.search);\n  let type = queryParams.get('type');\n  if (type) {\n    movies = allMovies.filter((movie) => movie.type === type);\n  } else {\n    movies = allMovies;\n  }\n  const movieListItems = movies.map((movie) => (\n    <li key={movie.id}>\n      <Link to={`${match.url}/${movie.id}`}>{movie.name}</Link>\n    </li>\n  ));\n  return (\n    <div>\n      <nav>\n        <ul>\n          <li>\n            <Link to={{ pathname: '/movies', search: '?type=Drama' }}>\n              Drama\n            </Link>\n          </li>\n          <li>\n            <Link to={{ pathname: '/movies', search: '?type=Fantasy' }}>\n              Fantasy\n            </Link>\n          </li>\n          <li>\n            <Link to={{ pathname: '/movies', search: '?type=Action' }}>\n              Action\n            </Link>\n          </li>\n        </ul>\n      </nav>\n      <h2>Movies</h2>\n      <ul>{movieListItems}</ul>\n    </div>\n  );\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bonus: If time permits, add the following code to highlight the secondary navigation movie types"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function isLinkActive(currentType, linkType) {\nreturn currentType === linkType ? 'active' : '';\n}\n\nfunction Movies({ movies: allMovies, location, match }) {\n...\n<nav>\n      <ul>\n        <li>\n          <Link\n            className={isLinkActive(type, 'Drama')}\n            to={{ pathname: '/movies', search: '?type=Drama' }}\n          >\n            Drama\n          </Link>\n        </li>\n        <li>\n          <Link\n            className={isLinkActive(type, 'Fantasy')}\n            to={{ pathname: '/movies', search: '?type=Fantasy' }}\n          >\n            Fantasy\n          </Link>\n        </li>\n        <li>\n          <Link\n            className={isLinkActive(type, 'Action')}\n            to={{ pathname: '/movies', search: '?type=Action' }}\n          >\n            Action\n          </Link>\n        </li>\n      </ul>\n    </nav>\n}\n")),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy then remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"Movie")," detail Route from the ",(0,o.kt)("inlineCode",{parentName:"li"},"App")," component"),(0,o.kt)("li",{parentName:"ol"},"Change the movies route to no longer require an exact match.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'function App() {\n  return (\n    <Router>\n...\n\n      <div className="container">\n        <Route path="/" exact component={Home} />\n        <Route path="/about/" component={About} />\n        <Route path="/contact/" component={Contact} />\n\n        <Route\n-          exact\n          path="/movies"\n          render={props => <Movies {...props} movies={movies} />}\n        />\n-        <Route path={`/movies/:id`} component={MovieDetail} />\n      </div>\n    </Router>\n  );\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Paste the ",(0,o.kt)("inlineCode",{parentName:"li"},"Movie")," detail Route into the ",(0,o.kt)("inlineCode",{parentName:"li"},"Movies")," component (so it is a route nested inside another route)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"function Movies({ movies: allMovies, location, match }) {\n  ...\n  return (\n    ...\n      <h2>Movies</h2>\n      <ul>{movieListItems}</ul>\n+      <Route path={`/movies/:id`} component={MovieDetail} />\n    </div>\n  );\n}\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Refresh the browser and notice that the movie detail now shows below the movie list after clicking a movie link.")),(0,o.kt)("h2",{id:"react-router-version-5"},"React Router version 5"),(0,o.kt)("p",null,"In React Router version 5 some hooks have been added which have significantly improved the API. The version 4 syntax is still supported (backwards compatible) when using version 5. Below is an example of how the example we have used throughout this section updated for version 5."),(0,o.kt)("p",null,"In summary:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Components can be nested inside a ",(0,o.kt)("inlineCode",{parentName:"li"},"Route")," component instead of using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Component")," property"),(0,o.kt)("li",{parentName:"ul"},"Hooks have been added including a ",(0,o.kt)("inlineCode",{parentName:"li"},"useParams")," to make it easier to access parameters")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  BrowserRouter: Router,\n  Route,\n  Link,\n  Prompt,\n  Switch,\n  Redirect,\n  NavLink,\n  useParams,\n} = window.ReactRouterDOM;\n\nfunction Home() {\n  return <h2>Home</h2>;\n}\n\nfunction About() {\n  return <h2>About</h2>;\n}\n\nfunction Contact() {\n  return <h2>Contact</h2>;\n}\n\nclass Movie {\n  constructor(id, name, description, type) {\n    this.id = id;\n    this.name = name;\n    this.description = description;\n    this.type = type;\n  }\n}\n\nconst movies = [\n  new Movie(\n    1,\n    ' Titanic',\n    'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',\n    'Drama'\n  ),\n  new Movie(\n    2,\n    ' E.T. the Extra-Terrestrial',\n    'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.',\n    'Fantasy'\n  ),\n  new Movie(\n    3,\n    'The Wizard of Oz',\n    // tslint:disable-next-line:max-line-length\n    'Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home in Kansas and help her friends as well.',\n    'Fantasy'\n  ),\n  new Movie(\n    4,\n    'Star Wars: Episode IV - A New Hope ',\n    // tslint:disable-next-line:max-line-length\n    'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire/`s world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.',\n    'Action'\n  ),\n];\n\nfunction MoviesList(props) {\n  const movieListItems = props.movies.map((movie) => (\n    <li key={movie.id}>\n      <Link to={`movies/${movie.id}`}>{movie.name}</Link>\n    </li>\n  ));\n  return (\n    <div>\n      <h2>Movies</h2>\n      <ul>{movieListItems}</ul>\n    </div>\n  );\n}\n\nfunction MovieDetail() {\n  const { id } = useParams();\n  const movieId = Number(id);\n  const movie = movies.find((movie) => movie.id === movieId);\n\n  return (\n    <div>\n      <h2>Movie Detail</h2>\n      <h3>{movie.name}</h3>\n      <p>{movie.description}</p>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Router>\n      <div>\n        <nav>\n          <ul>\n            <li>\n              <NavLink exact to=\"/\">\n                Home\n              </NavLink>\n            </li>\n            <li>\n              <NavLink to=\"/about\">About</NavLink>\n            </li>\n            <li>\n              <NavLink to=\"/contact\">Contact</NavLink>\n            </li>\n            <li>\n              <NavLink to=\"/movies\">Movies</NavLink>\n            </li>\n          </ul>\n        </nav>\n\n        <div className=\"container\">\n          <Route path=\"/\" exact>\n            <Home />\n          </Route>\n          <Route path=\"/about/\">\n            <About />\n          </Route>\n          <Route path=\"/contact/\">\n            <Contact />\n          </Route>\n          <Route exact path=\"/movies\">\n            <MoviesList movies={movies} />\n          </Route>\n\n          <Route path={`/movies/:id`}>\n            <MovieDetail />\n          </Route>\n        </div>\n      </div>\n    </Router>\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(<App />);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reach.tech/router/"},"Reach Router")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/community/routing.html"},"List of all React Routers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ReactTraining/react-router"},"React Router")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://css-tricks.com/react-router-4/"},"React Router 4 changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"Next.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/8lgmmo/router5_or_reactrouter_4/"},"Change in React Router 4 and 5 from Earlier Versions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tylermcginnis.com/react-router-pass-props-to-components/"},"Pass Props to Components"))))}u.isMDXComponent=!0}}]);