"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[7217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Testing Lab 6: Testing Forms"},s=void 0,i={unversionedId:"labs/ts/T6-TestingForms",id:"labs/ts/T6-TestingForms",title:"Testing Lab 6: Testing Forms",description:"Objectives",source:"@site/docs/labs/ts/T6-TestingForms.md",sourceDirName:"labs/ts",slug:"/labs/ts/T6-TestingForms",permalink:"/docs/labs/ts/T6-TestingForms",draft:!1,tags:[],version:"current",frontMatter:{title:"Testing Lab 6: Testing Forms"}},l={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Update the Form to be more Accessible",id:"update-the-form-to-be-more-accessible",level:3},{value:"Test Loading Data into the Form",id:"test-loading-data-into-the-form",level:3},{value:"Test Updating Form Values",id:"test-updating-form-values",level:3},{value:"Test Validation Rules",id:"test-validation-rules",level:3},{value:"\u2714 You have completed Testing Lab 6",id:"-you-have-completed-testing-lab-6",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update the Form to be more Accessible"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test Loading Data into the Form"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test Updating Form Values"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test Validation Rules")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"update-the-form-to-be-more-accessible"},"Update the Form to be more Accessible"),(0,a.kt)("p",null,"One of the great benefits of using React Testing Library is that it helps us build a more accessible application. The way we initially built our form HTML needs to be updated so we can more easily and realiably select various form elements and errors."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the form to be more accessible."),(0,a.kt)("h4",{parentName:"li",id:"srcprojectsprojectformtsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectForm.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'...\n\nfunction ProjectForm({ project: initialProject, onCancel }: ProjectFormProps) {\n  ...\n\n  return (\n    <form\n      aria-label="Edit a Project"\n      name="projectForm"\n      className="input-group vertical"\n      onSubmit={handleSubmit}\n    >\n      <label htmlFor="name">Project Name</label>\n      <input\n+        id="name"\n+        aria-label="project name"\n        type="text"\n        name="name"\n        placeholder="enter name"\n        value={project.name}\n        onChange={handleChange}\n      />\n      {errors.name.length > 0 && (\n        <div\n+        role="alert"\n        className="card error">\n          <p>{errors.name}</p>\n        </div>\n      )}\n\n      <label htmlFor="description">Project Description</label>\n      <textarea\n+        id="description"\n+        aria-label="project description"\n        name="description"\n        placeholder="enter description"\n        value={project.description}\n        onChange={handleChange}\n      />\n      {errors.description.length > 0 && (\n        <div\n+         role="alert"\n          className="card error">\n          <p>{errors.description}</p>\n        </div>\n      )}\n\n      <label htmlFor="budget">Project Budget</label>\n      <input\n+        id="budget"\n        type="number"\n        name="budget"\n        placeholder="enter budget"\n        value={project.budget}\n        onChange={handleChange}\n      />\n      {errors.budget.length > 0 && (\n        <div\n+         role="alert"\n        className="card error">\n          <p>{errors.budget}</p>\n        </div>\n      )}\n\n      <label htmlFor="isActive">Active?</label>\n      <input\n+        id="isActive"\n        type="checkbox"\n        name="isActive"\n        checked={project.isActive}\n        onChange={handleChange}\n      />\n      <div className="input-group">\n        <button className="primary bordered medium">Save</button>\n        <span />\n        <button type="button" className="bordered medium" onClick={onCancel}>\n          cancel\n        </button>\n      </div>\n    </form>\n  );\n}\n\nexport default ProjectForm;\n\n')))),(0,a.kt)("h3",{id:"test-loading-data-into-the-form"},"Test Loading Data into the Form"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create")," the ",(0,a.kt)("strong",{parentName:"p"},"file")," ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\projects\\__tests__\\ProjectForm-test.tsx"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Add")," the ",(0,a.kt)("strong",{parentName:"p"},"setup")," code below to test loading data into the form."),(0,a.kt)("h4",{parentName:"li",id:"srcprojects__tests__projectform-testtsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectForm-test.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport { MemoryRouter } from 'react-router-dom';\nimport { Project } from '../Project';\nimport ProjectForm from '../ProjectForm';\nimport { Provider } from 'react-redux';\nimport { store } from '../../state';\nimport userEvent from '@testing-library/user-event';\n\ndescribe('<ProjectForm />', () => {\n  let project: Project;\n  let updatedProject: Project;\n  let handleCancel: jest.Mock;\n  let nameTextBox: any;\n  let descriptionTextBox: HTMLElement;\n  let budgetTextBox: HTMLElement;\n\n  const setup = () => {\n    render(\n      <Provider store={store}>\n        <MemoryRouter>\n          <ProjectForm project={project} onCancel={handleCancel} />\n        </MemoryRouter>\n      </Provider>\n    );\n\n    nameTextBox = screen.getByRole('textbox', {\n      name: /project name/i,\n    });\n    descriptionTextBox = screen.getByRole('textbox', {\n      name: /project description/i,\n    });\n    budgetTextBox = screen.getByRole('spinbutton', {\n      name: /project budget/i,\n    });\n  };\n\n  beforeEach(() => {\n    project = new Project({\n      id: 1,\n      name: 'Mission Impossible',\n      description: 'This is really difficult',\n      budget: 100,\n    });\n    updatedProject = new Project({\n      name: 'Ghost Protocol',\n      description:\n        'Blamed for a terrorist attack on the Kremlin, Ethan Hunt (Tom Cruise) and the entire IMF agency...',\n    });\n    handleCancel = jest.fn();\n  });\n\n  test('should load project into form', () => {\n    setup();\n    expect(\n      screen.getByRole('form', {\n        name: /edit a project/i,\n      })\n    ).toHaveFormValues({\n      name: project.name,\n      description: project.description,\n      budget: project.budget,\n      isActive: project.isActive,\n    });\n  });\n});\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Verify")," that the intial ",(0,a.kt)("strong",{parentName:"p"},"test passes"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," PASS  src/projects/__tests__/ProjectForm-test.tsx\n")))),(0,a.kt)("h3",{id:"test-updating-form-values"},"Test Updating Form Values"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Test")),(0,a.kt)("h4",{parentName:"li",id:"srcprojects__tests__projectform-testtsx-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectForm-test.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"...\n\ndescribe('<ProjectForm />', () => {\n...\n\n+  test('should accept input', async () => {\n+    setup();\n+    const user = userEvent.setup();\n+    await user.clear(nameTextBox);\n+    await user.type(nameTextBox, updatedProject.name);\n+    expect(nameTextBox).toHaveValue(updatedProject.name);\n+\n+    await user.clear(descriptionTextBox);\n+    await user.type(descriptionTextBox, updatedProject.description);\n+    expect(descriptionTextBox).toHaveValue(updatedProject.description);\n+\n+    await user.clear(budgetTextBox);\n+    await user.type(budgetTextBox, updatedProject.budget.toString());\n+    expect(budgetTextBox).toHaveValue(updatedProject.budget);\n+  });\n\n});\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n1. **Verify** the **test passes**.\n\n   ```shell\n    PASS  src/projects/__tests__/ProjectForm-test.tsx\n")),(0,a.kt)("h3",{id:"test-validation-rules"},"Test Validation Rules"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Test")),(0,a.kt)("h4",{parentName:"li",id:"srcprojects__tests__projectform-testtsx-2"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\__tests__\\ProjectForm-test.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"...\n\ndescribe('<ProjectForm />', () => {\n  ...\n\n+  test('name should display required validation', async () => {\n+    setup();\n+    const user = userEvent.setup();\n+    await user.clear(nameTextBox);\n+    expect(screen.getByRole('alert')).toBeInTheDocument();\n+  });\n+\n+  test('name should display minlength validation', async () => {\n+    setup();\n+    const user = userEvent.setup();\n+    await user.clear(nameTextBox);\n+    await user.type(nameTextBox, 'ab');\n+    await expect(screen.getByRole('alert')).toBeInTheDocument();\n+    await user.type(nameTextBox, 'c');\n+    expect(screen.queryByRole('alert')).not.toBeInTheDocument();\n+  });\n+\n+  test('budget should display not 0 validation', async () => {\n+    setup();\n+    const user = userEvent.setup();\n+    await user.clear(budgetTextBox);\n+    await user.type(budgetTextBox, '0');\n+    expect(screen.getByRole('alert')).toBeInTheDocument();\n+    await user.type(budgetTextBox, '1');\n+    expect(screen.queryByRole('alert')).not.toBeInTheDocument();\n+  });\n\n});\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Verify")," all ",(0,a.kt)("strong",{parentName:"p"},"tests pass"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," PASS  src/projects/__tests__/ProjectForm-test.tsx\n")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-you-have-completed-testing-lab-6"},"\u2714"," You have completed Testing Lab 6"))}d.isMDXComponent=!0}}]);