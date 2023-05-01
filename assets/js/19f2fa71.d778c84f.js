"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[7738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Testing Lab 3: More Component Testing"},i=void 0,s={unversionedId:"labs/ts/T3-MoreTestingComponents",id:"labs/ts/T3-MoreTestingComponents",title:"Testing Lab 3: More Component Testing",description:"Objectives",source:"@site/docs/labs/ts/T3-MoreTestingComponents.md",sourceDirName:"labs/ts",slug:"/labs/ts/T3-MoreTestingComponents",permalink:"/docs/labs/ts/T3-MoreTestingComponents",draft:!1,tags:[],version:"current",frontMatter:{title:"Testing Lab 3: More Component Testing"}},p={},l=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Test Setup",id:"test-setup",level:3},{value:"Testing a Prop",id:"testing-a-prop",level:3},{value:"Testing a Function Prop",id:"testing-a-function-prop",level:3},{value:"Taking a Snapshot",id:"taking-a-snapshot",level:3},{value:"\u2714 You have completed Testing Lab 3",id:"-you-have-completed-testing-lab-3",level:3}],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"objectives"},"Objectives"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test Setup"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testing a Prop"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testing a Function Prop"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Taking a Snapshot")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"test-setup"},"Test Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create")," the ",(0,o.kt)("strong",{parentName:"p"},"directory")," ",(0,o.kt)("inlineCode",{parentName:"p"},"src\\projects\\__tests__"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create")," the ",(0,o.kt)("strong",{parentName:"p"},"file")," ",(0,o.kt)("inlineCode",{parentName:"p"},"src\\projects\\__tests__\\ProjectCard-test.tsx"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Add")," the ",(0,o.kt)("strong",{parentName:"p"},"setup")," code below to test the component."),(0,o.kt)("h4",{parentName:"li",id:"srcprojects__tests__projectcard-testtsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectCard-test.tsx")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { render, screen } from "@testing-library/react";\nimport React from "react";\nimport { Project } from "../Project";\nimport ProjectCard from "../ProjectCard";\n\ndescribe("<ProjectCard />", () => {\n  let project: Project;\n  let handleEdit: jest.Mock;\n  beforeEach(() => {\n    project = new Project({\n      id: 1,\n      name: "Mission Impossible",\n      description: "This is really difficult",\n      budget: 100,\n    });\n    handleEdit = jest.fn();\n  });\n\n  it("should initially render", () => {\n    render(<ProjectCard project={project} onEdit={handleEdit} />);\n  });\n});\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the test fails."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"useHref() may be used only in the context of a <Router> component.\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wrap the component in a ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryRouter"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import { render, screen } from '@testing-library/react';\nimport React from 'react';\n+ import { MemoryRouter } from 'react-router-dom';\nimport { Project } from '../Project';\nimport ProjectCard from '../ProjectCard';\n\ndescribe('<ProjectCard />', () => {\n  let project: Project;\n  let handleEdit: jest.Mock;\n  beforeEach(() => {\n    project = new Project({\n      id: 1,\n      name: 'Mission Impossible',\n      description: 'This is really difficult',\n      budget: 100,\n    });\n    handleEdit = jest.fn();\n  });\n\n  it('should initially render', () => {\n    render(\n+      <MemoryRouter>\n        <ProjectCard project={project} onEdit={handleEdit} />\n+      </MemoryRouter>\n    );\n  });\n});\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"<MemoryRouter>")," - is a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Router>"),' that keeps the history of your "URL" in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native.')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verify the initial test now passes.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"PASS  src/projects/__tests__/ProjectCard-test.tsx\n")))),(0,o.kt)("h3",{id:"testing-a-prop"},"Testing a Prop"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a command-prompt or terminal and run the following command to install ",(0,o.kt)("inlineCode",{parentName:"p"},"user-event")," from the core testing library behind React testing library."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm install --save-dev @testing-library/user-event @testing-library/dom\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Test")," that the project ",(0,o.kt)("strong",{parentName:"p"},"property renders correctly"),"."),(0,o.kt)("h4",{parentName:"li",id:"srcprojects__tests__projectcard-testtsx-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectCard-test.tsx")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"...\n\ndescribe('<ProjectCard />', () => {\n  let project: Project;\n  let handleEdit: jest.Mock;\n  beforeEach(() => {\n    project = new Project({\n      id: 1,\n      name: 'Mission Impossible',\n      description: 'This is really difficult',\n      budget: 100,\n    });\n    handleEdit = jest.fn();\n  });\n\n  it('should initially render', () => {\n    render(\n      <MemoryRouter>\n        <ProjectCard project={project} onEdit={handleEdit} />\n      </MemoryRouter>\n    );\n  });\n\n+  it('renders project properly', () => {\n+    render(\n+      <MemoryRouter>\n+        <ProjectCard project={project} onEdit={handleEdit} />\n+      </MemoryRouter>\n+    );\n+    expect(screen.getByRole('heading')).toHaveTextContent(project.name);\n+    // screen.debug(document);\n+    screen.getByText(/this is really difficult\\.\\.\\./i);\n+    screen.getByText(/budget : 100/i);\n+  });\n\n});\n\n\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Verify")," the ",(0,o.kt)("strong",{parentName:"li"},"test passes"),".",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"PASS  src/projects/__tests__/ProjectCard-test.tsx\n...\n \u2713 renders project properly\n")))),(0,o.kt)("h3",{id:"testing-a-function-prop"},"Testing a Function Prop"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a command-prompt or terminal and run the following command to install ",(0,o.kt)("inlineCode",{parentName:"p"},"user-event")," from the core testing library behind React testing library."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm install --save-dev @testing-library/user-event @testing-library/dom\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Test")," that the ",(0,o.kt)("strong",{parentName:"p"},"handler prop")," is called when edit is clicked."),(0,o.kt)("h4",{parentName:"li",id:"srcprojects__tests__projectcard-testtsx-2"},(0,o.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectCard-test.tsx")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import { render, screen } from '@testing-library/react';\nimport React from 'react';\nimport { MemoryRouter } from 'react-router-dom';\nimport { Project } from '../Project';\nimport ProjectCard from '../ProjectCard';\n+ import userEvent from '@testing-library/user-event';\n\ndescribe('<ProjectCard />', () => {\n  let project: Project;\n  let handleEdit: jest.Mock;\n  beforeEach(() => {\n    project = new Project({\n      id: 1,\n      name: 'Mission Impossible',\n      description: 'This is really difficult',\n      budget: 100,\n    });\n    handleEdit = jest.fn();\n  });\n\n  it('should initially render', () => {\n    render(\n      <MemoryRouter>\n        <ProjectCard project={project} onEdit={handleEdit} />\n      </MemoryRouter>\n    );\n  });\n\n  it('renders project properly', () => {\n    render(\n      <MemoryRouter>\n        <ProjectCard project={project} onEdit={handleEdit} />\n      </MemoryRouter>\n    );\n    expect(screen.getByRole('heading')).toHaveTextContent(project.name);\n    // screen.debug(document);\n    screen.getByText(/this is really difficult\\.\\.\\./i);\n    screen.getByText(/budget : 100/i);\n  });\n\n+  it('handler called when edit clicked', async () => {\n+    render(\n+      <MemoryRouter>\n+        <ProjectCard project={project} onEdit={handleEdit} />\n+      </MemoryRouter>\n+    );\n+    // this query works screen.getByText(/edit/i)\n+    // but using role is better\n+    const user = userEvent.setup();\n+    await user.click(screen.getByRole('button', { name: /edit/i }));\n+    expect(handleEdit).toBeCalledTimes(1);\n+    expect(handleEdit).toBeCalledWith(project);\n+  });\n});\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Verify")," the ",(0,o.kt)("strong",{parentName:"p"},"test passes"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"PASS  src/projects/__tests__/ProjectCard-test.tsx\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Refactor the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectCard-test.tsx")," to use use a ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," function to render the component at the start of each test."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { render, screen } from "@testing-library/react";\nimport React from "react";\nimport { MemoryRouter } from "react-router-dom";\nimport { Project } from "../Project";\nimport ProjectCard from "../ProjectCard";\nimport userEvent from "@testing-library/user-event";\nimport renderer from "react-test-renderer";\n\ndescribe("<ProjectCard />", () => {\n  let project: Project;\n  let handleEdit: jest.Mock;\n\n  const setup = () =>\n    render(\n      <MemoryRouter>\n        <ProjectCard project={project} onEdit={handleEdit} />\n      </MemoryRouter>\n    );\n\n  beforeEach(() => {\n    project = new Project({\n      id: 1,\n      name: "Mission Impossible",\n      description: "This is really difficult",\n      budget: 100,\n    });\n    handleEdit = jest.fn();\n  });\n\n  it("should initially render", () => {\n    setup();\n  });\n\n  it("renders project properly", () => {\n    setup();\n    expect(screen.getByRole("heading")).toHaveTextContent(project.name);\n    // screen.debug(document);\n    screen.getByText(/this is really difficult\\.\\.\\./i);\n    screen.getByText(/budget : 100/i);\n  });\n\n  it("handler called when edit clicked", async () => {\n    setup();\n    // this query works screen.getByText(/edit/i)\n    // but using role is better\n    // eslint-disable-next-line testing-library/render-result-naming-convention\n    const user = userEvent.setup();\n    await user.click(screen.getByRole("button", { name: /edit/i }));\n    expect(handleEdit).toBeCalledTimes(1);\n    expect(handleEdit).toBeCalledWith(project);\n  });\n\n  test("snapshot", () => {\n    const tree = renderer\n      .create(\n        <MemoryRouter>\n          <ProjectCard project={project} onEdit={handleEdit} />\n        </MemoryRouter>\n      )\n      .toJSON();\n    expect(tree).toMatchSnapshot();\n  });\n});\n')),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why not just put the setup code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach"),"? See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-setup.md"},"this ESLint rule")," for react-testing-library.")))),(0,o.kt)("h3",{id:"taking-a-snapshot"},"Taking a Snapshot"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Take")," a ",(0,o.kt)("strong",{parentName:"p"},"snapshot")," of the component."),(0,o.kt)("h4",{parentName:"li",id:"srcprojects__tests__projectcard-testtsx-3"},(0,o.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectCard-test.tsx")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import { render, screen } from '@testing-library/react';\nimport React from 'react';\nimport { MemoryRouter } from 'react-router-dom';\nimport { Project } from '../Project';\nimport ProjectCard from '../ProjectCard';\nimport userEvent from '@testing-library/user-event';\n+ import renderer from 'react-test-renderer';\n\ndescribe('<ProjectCard />', () => {\n  let project: Project;\n  let handleEdit: jest.Mock;\n  beforeEach(() => {\n    ...\n  });\n\n...\n\n+  test('snapshot', () => {\n+    const tree = renderer\n+      .create(\n+        <MemoryRouter>\n+          <ProjectCard project={project} onEdit={handleEdit} />\n+        </MemoryRouter>\n+      )\n+      .toJSON();\n+    expect(tree).toMatchSnapshot();\n+  });\n});\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Verify")," the ",(0,o.kt)("strong",{parentName:"p"},"snapshot")," is taken."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u2713 1 snapshot written\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-you-have-completed-testing-lab-3"},"\u2714"," You have completed Testing Lab 3"))}m.isMDXComponent=!0}}]);