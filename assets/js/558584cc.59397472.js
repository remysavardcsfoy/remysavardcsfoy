"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[9494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={title:"Testing Lab 4: Nested Components"},o=void 0,i={unversionedId:"labs/ts/T4-NestedComponents",id:"labs/ts/T4-NestedComponents",title:"Testing Lab 4: Nested Components",description:"Objectives",source:"@site/docs/labs/ts/T4-NestedComponents.md",sourceDirName:"labs/ts",slug:"/labs/ts/T4-NestedComponents",permalink:"/docs/labs/ts/T4-NestedComponents",draft:!1,tags:[],version:"current",frontMatter:{title:"Testing Lab 4: Nested Components"}},c={},l=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Test Setup",id:"test-setup",level:3},{value:"Testing that Projects Display",id:"testing-that-projects-display",level:3},{value:"Testing Form Display",id:"testing-form-display",level:3},{value:"Testing Form Cancel",id:"testing-form-cancel",level:3},{value:"<code>srcprojects__tests__ProjectList-test.tsx</code>",id:"srcprojects__tests__projectlist-testtsx-3",level:4},{value:"\u2714 You have completed Testing Lab 4",id:"-you-have-completed-testing-lab-4",level:3}],p={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test Setup"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testing that Projects Display"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testing Form Display"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testing Form Cancel")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"test-setup"},"Test Setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Upgrade")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"@testing-library/user-event")," library to version 14."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"npm install @testing-library/user-event@14\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create")," the ",(0,a.kt)("strong",{parentName:"p"},"file")," ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\projects\\MockProjects.ts"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Add")," the ",(0,a.kt)("strong",{parentName:"p"},"mock")," data below to the file."),(0,a.kt)("h4",{parentName:"li",id:"srcprojectsmockprojectsts"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\MockProjects.ts")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Project } from './Project';\n\nexport const MOCK_PROJECTS = [\n  new Project({\n    id: 1,\n    name: 'Johnson - Kutch',\n    description:\n      'Fully-configurable intermediate framework. Ullam occaecati libero laudantium nihil voluptas omnis.',\n    imageUrl: '/assets/placeimg_500_300_arch4.jpg',\n    contractTypeId: 3,\n    contractSignedOn: '2013-08-04T22:39:41.473Z',\n    budget: 54637,\n    isActive: false,\n  }),\n  new Project({\n    id: 2,\n    name: 'Wisozk Group',\n    description:\n      'Centralized interactive application. Exercitationem nulla ut ipsam vero quasi enim quos doloribus voluptatibus.',\n    imageUrl: '/assets/placeimg_500_300_arch1.jpg',\n    contractTypeId: 4,\n    contractSignedOn: '2012-08-06T21:21:31.419Z',\n    budget: 91638,\n    isActive: true,\n  }),\n  new Project({\n    id: 3,\n    name: 'Denesik LLC',\n    description:\n      'Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.',\n    imageUrl: '/assets/placeimg_500_300_arch12.jpg',\n    contractTypeId: 6,\n    contractSignedOn: '2016-06-26T18:24:01.706Z',\n    budget: 29729,\n    isActive: true,\n  }),\n  new Project({\n    id: 4,\n    name: 'Purdy, Keeling and Smitham',\n    description:\n      'Innovative 6th generation model. Perferendis libero qui iusto et ullam cum sint molestias vel.',\n    imageUrl: '/assets/placeimg_500_300_arch5.jpg',\n    contractTypeId: 4,\n    contractSignedOn: '2013-05-26T01:10:42.344Z',\n    budget: 45660,\n    isActive: true,\n  }),\n  new Project({\n    id: 5,\n    name: 'Kreiger - Waelchi',\n    description:\n      'Managed logistical migration. Qui quod praesentium accusamus eos hic non error modi et.',\n    imageUrl: '/assets/placeimg_500_300_arch12.jpg',\n    contractTypeId: 2,\n    contractSignedOn: '2009-12-18T21:46:47.944Z',\n    budget: 81188,\n    isActive: true,\n  }),\n  new Project({\n    id: 6,\n    name: 'Lesch - Waelchi',\n    description:\n      'Profound mobile project. Rem consequatur laborum explicabo sint odit et illo voluptas expedita.',\n    imageUrl: '/assets/placeimg_500_300_arch1.jpg',\n    contractTypeId: 3,\n    contractSignedOn: '2016-09-23T21:27:25.035Z',\n    budget: 53407,\n    isActive: false,\n  }),\n];\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create")," the ",(0,a.kt)("strong",{parentName:"p"},"file")," ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\projects\\__tests__\\ProjectList-test.tsx"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Add")," the ",(0,a.kt)("strong",{parentName:"p"},"setup")," code below to test the component."),(0,a.kt)("h4",{parentName:"li",id:"srcprojects__tests__projectlist-testtsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectList-test.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { render, screen } from '@testing-library/react';\nimport React from 'react';\nimport { MemoryRouter } from 'react-router-dom';\nimport ProjectList from '../ProjectList';\nimport { MOCK_PROJECTS } from '../MockProjects';\nimport userEvent from '@testing-library/user-event';\nimport { Provider } from 'react-redux';\nimport { store } from '../../state';\n\ndescribe('<ProjectList />', () => {\n  beforeEach(() => {\n    render(\n      <Provider store={store}>\n        <MemoryRouter>\n          <ProjectList projects={MOCK_PROJECTS} />\n        </MemoryRouter>\n      </Provider>\n    );\n  });\n\n  test('should render without crashing', () => {\n    expect(screen).toBeDefined();\n  });\n});\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify the initial test passes."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"  PASS  src/projects/__tests__/ProjectList-test.tsx\n")))),(0,a.kt)("h3",{id:"testing-that-projects-display"},"Testing that Projects Display"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Test")," that the ",(0,a.kt)("inlineCode",{parentName:"p"},"projects")," ",(0,a.kt)("strong",{parentName:"p"},"display")," correctly."),(0,a.kt)("h4",{parentName:"li",id:"srcprojects__tests__projectlist-testtsx-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectList-test.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"...\ndescribe('<ProjectList />', () => {\n  const setup = () =>\n    render(\n      <Provider store={store}>\n        <MemoryRouter>\n          <ProjectList projects={MOCK_PROJECTS} />\n        </MemoryRouter>\n      </Provider>\n    );\n\n  beforeEach(() => {});\n\n  test('should render without crashing', () => {\n    setup();\n    expect(screen).toBeDefined();\n  });\n\n+  test('should display list', () => {\n+    setup();\n+    expect(screen.getAllByRole('heading')).toHaveLength(MOCK_PROJECTS.length);\n+    expect(screen.getAllByRole('img')).toHaveLength(MOCK_PROJECTS.length);\n+    expect(screen.getAllByRole('link')).toHaveLength(MOCK_PROJECTS.length);\n+    expect(screen.getAllByRole('button')).toHaveLength(MOCK_PROJECTS.length);\n+  });\n\n});\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n1. Verify the test passes.\n   ```shell\n   PASS  src/projects/__tests__/ProjectList-test.tsx\n")),(0,a.kt)("h3",{id:"testing-form-display"},"Testing Form Display"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the card component to add an ",(0,a.kt)("inlineCode",{parentName:"p"},"aria-label")," so we can access the button in the test."),(0,a.kt)("h4",{parentName:"li",id:"srcprojectsprojectcardtsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectCard.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'...\nfunction ProjectCard(props: ProjectCardProps) {\n...\n\n  return (\n    <div className="card">\n      <img src={project.imageUrl} alt={project.name} />\n      <section className="section dark">\n        <Link to={\'/projects/\' + project.id}>\n          <h5 className="strong">\n            <strong>{project.name}</strong>\n          </h5>\n          <p>{formatDescription(project.description)}</p>\n          <p>Budget : {project.budget.toLocaleString()}</p>\n        </Link>\n        <button\n+          aria-label={`edit ${project.name}`}\n          className=" bordered"\n          onClick={() => {\n            handleEditClick(project);\n          }}\n        >\n          <span className="icon-edit "></span>\n          Edit\n        </button>\n      </section>\n    </div>\n  );\n}\n\nexport default ProjectCard;\n\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the form component to add an ",(0,a.kt)("inlineCode",{parentName:"p"},"aria-label")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," (which gives an implicit role of form) so we can access the form in the test."),(0,a.kt)("h4",{parentName:"li",id:"srcprojectsprojectformtsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectForm.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'...\n\nfunction ProjectForm({ project: initialProject, onCancel }: ProjectFormProps) {\n  ...\n\n  return (\n    <form\n+      aria-label="Edit a Project"\n+      name="projectForm"\n      className="input-group vertical"\n      onSubmit={handleSubmit}\n    >\n      ...\n    </form>\n  );\n}\n\nexport default ProjectForm;\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Test")," that the ",(0,a.kt)("strong",{parentName:"p"},"form")," is displayed when edit is clicked."),(0,a.kt)("h4",{parentName:"li",id:"srcprojects__tests__projectlist-testtsx-2"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectList-test.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"...\n\ndescribe('<ProjectList />', () => {\n...\n\n  test('should display list', () => {\n    ...\n  });\n\n+  test('should display form when edit clicked', async () => {\n+    setup();\n+    // eslint-disable-next-line testing-library/render-result-naming-convention\n+    const user = userEvent.setup();\n+    await user.click(\n+      screen.getByRole('button', { name: /edit Wisozk Group/i })\n+    );\n+    expect(\n+      screen.getByRole('form', {\n+        name: /edit a project/i,\n+      })\n+    ).toBeInTheDocument();\n+  });\n});\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify the test passes."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"PASS  src/projects/__tests__/ProjectList-test.tsx\n")))),(0,a.kt)("h3",{id:"testing-form-cancel"},"Testing Form Cancel"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Test")," that the ",(0,a.kt)("strong",{parentName:"li"},"form")," is removed after clicking cancel.")),(0,a.kt)("h4",{id:"srcprojects__tests__projectlist-testtsx-3"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectList-test.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"...\n\ndescribe('<ProjectList />', () => {\n...\n\n+  test('should display image and remove form when cancel clicked', async () => {\n+    setup();\n+    // eslint-disable-next-line testing-library/render-result-naming-convention\n+    const user = userEvent.setup();\n+    await user.click(\n+      screen.getByRole('button', { name: /edit Wisozk Group/i })\n+    );\n+    await user.click(\n+      screen.getByRole('button', {\n+        name: /cancel/i,\n+      })\n+    );\n+    expect(\n+      screen.getByRole('img', {\n+        name: /wisozk group/i,\n+      })\n+    ).toBeInTheDocument();\n+    expect(\n+      screen.queryByRole('form', {\n+        name: /edit a project/i,\n+      })\n+    ).not.toBeInTheDocument();\n+  });\n\n});\n\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify the test passes."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"PASS  src/projects/__tests__/ProjectList-test.tsx\n")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-you-have-completed-testing-lab-4"},"\u2714"," You have completed Testing Lab 4"))}d.isMDXComponent=!0}}]);