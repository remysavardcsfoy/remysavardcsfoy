"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[3188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),E=a,m=d["".concat(i,".").concat(E)]||d[E]||u[E]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=E;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},2576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Lab 24: Redux | Actions and Reducer"},c=void 0,p={unversionedId:"labs/ts/ReduxActionsReducer",id:"labs/ts/ReduxActionsReducer",title:"Lab 24: Redux | Actions and Reducer",description:"Objectives",source:"@site/docs/labs/ts/24-ReduxActionsReducer.md",sourceDirName:"labs/ts",slug:"/labs/ts/ReduxActionsReducer",permalink:"/docs/labs/ts/ReduxActionsReducer",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"Lab 24: Redux | Actions and Reducer"}},i={},s=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Define types: actions types, action interfaces, and state",id:"define-types-actions-types-action-interfaces-and-state",level:3},{value:"Create action creator functions",id:"create-action-creator-functions",level:3},{value:"Implement a reducer",id:"implement-a-reducer",level:3},{value:"Configure the project reducer and state",id:"configure-the-project-reducer-and-state",level:3},{value:"\u2714 You have completed Lab 24",id:"-you-have-completed-lab-24",level:3}],l={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Define types: actions types, action interfaces, and state"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create action creator functions"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement a reducer"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Configure the project reducer and state")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"define-types-actions-types-action-interfaces-and-state"},"Define types: actions types, action interfaces, and state"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create")," the ",(0,a.kt)("strong",{parentName:"p"},"directory")," ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\projects\\state"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create")," the ",(0,a.kt)("strong",{parentName:"p"},"file")," ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\projects\\state\\projectTypes.ts"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Define")," the ",(0,a.kt)("strong",{parentName:"p"},"project")," ",(0,a.kt)("inlineCode",{parentName:"p"},"actions types"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"action interfaces"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"."),(0,a.kt)("h4",{parentName:"li",id:"srcprojectsstateprojecttypests"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\state\\projectTypes.ts")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Project } from '../Project';\n\n//action types\nexport const LOAD_PROJECTS_REQUEST = 'LOAD_PROJECTS_REQUEST';\nexport const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';\nexport const LOAD_PROJECTS_FAILURE = 'LOAD_PROJECTS_FAILURE';\nexport const SAVE_PROJECT_REQUEST = 'SAVE_PROJECT_REQUEST';\nexport const SAVE_PROJECT_SUCCESS = 'SAVE_PROJECT_SUCCESS';\nexport const SAVE_PROJECT_FAILURE = 'SAVE_PROJECT_FAILURE';\nexport const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';\nexport const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';\nexport const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';\n\ninterface LoadProjectsRequest {\n  type: typeof LOAD_PROJECTS_REQUEST;\n}\n\ninterface LoadProjectsSuccess {\n  type: typeof LOAD_PROJECTS_SUCCESS;\n  payload: { projects: Project[]; page: number };\n}\n\ninterface LoadProjectsFailure {\n  type: typeof LOAD_PROJECTS_FAILURE;\n  payload: { message: string };\n}\n\ninterface SaveProjectRequest {\n  type: typeof SAVE_PROJECT_REQUEST;\n}\n\ninterface SaveProjectSuccess {\n  type: typeof SAVE_PROJECT_SUCCESS;\n  payload: Project;\n}\n\ninterface SaveProjectFailure {\n  type: typeof SAVE_PROJECT_FAILURE;\n  payload: { message: string };\n}\n\ninterface DeleteProjectRequest {\n  type: typeof DELETE_PROJECT_REQUEST;\n}\n\ninterface DeleteProjectSuccess {\n  type: typeof DELETE_PROJECT_SUCCESS;\n  payload: Project;\n}\n\ninterface DeleteProjectFailure {\n  type: typeof DELETE_PROJECT_FAILURE;\n  payload: { message: string };\n}\n\nexport type ProjectActionTypes =\n  | LoadProjectsRequest\n  | LoadProjectsSuccess\n  | LoadProjectsFailure\n  | SaveProjectRequest\n  | SaveProjectSuccess\n  | SaveProjectFailure\n  | DeleteProjectRequest\n  | DeleteProjectSuccess\n  | DeleteProjectFailure;\n\nexport interface ProjectState {\n  loading: boolean;\n  projects: Project[];\n  error: string | undefined;\n  page: number;\n}\n")))),(0,a.kt)("h3",{id:"create-action-creator-functions"},"Create action creator functions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create")," the ",(0,a.kt)("strong",{parentName:"p"},"file")," ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\projects\\state\\projectActions.ts"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Define")," your ",(0,a.kt)("strong",{parentName:"p"},"action")," ",(0,a.kt)("strong",{parentName:"p"},"creator")," functions and return a ",(0,a.kt)("inlineCode",{parentName:"p"},"ThunkAction")," (",(0,a.kt)("inlineCode",{parentName:"p"},"function"),") instead of just an ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," (",(0,a.kt)("inlineCode",{parentName:"p"},"object"),") to handle the asyncronous nature of the HTTP calls happening."),(0,a.kt)("h4",{parentName:"li",id:"srcprojectsstateprojectactionsts"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\projects\\state\\projectActions.ts")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Action } from 'redux';\nimport { ThunkAction } from 'redux-thunk';\nimport { projectAPI } from '../projectAPI';\nimport { Project } from '../Project';\nimport {\n  LOAD_PROJECTS_REQUEST,\n  LOAD_PROJECTS_SUCCESS,\n  LOAD_PROJECTS_FAILURE,\n  SAVE_PROJECT_REQUEST,\n  SAVE_PROJECT_SUCCESS,\n  SAVE_PROJECT_FAILURE,\n  ProjectState,\n} from './projectTypes';\n\n//action creators\nexport function loadProjects(\n  page: number\n): ThunkAction<void, ProjectState, null, Action<string>> {\n  return (dispatch: any) => {\n    dispatch({ type: LOAD_PROJECTS_REQUEST });\n    return projectAPI\n      .get(page)\n      .then((data) => {\n        dispatch({\n          type: LOAD_PROJECTS_SUCCESS,\n          payload: { projects: data, page },\n        });\n      })\n      .catch((error) => {\n        dispatch({ type: LOAD_PROJECTS_FAILURE, payload: error });\n      });\n  };\n}\n\nexport function saveProject(\n  project: Project\n): ThunkAction<void, ProjectState, null, Action<string>> {\n  return (dispatch: any) => {\n    dispatch({ type: SAVE_PROJECT_REQUEST });\n    return projectAPI\n      .put(project)\n      .then((data) => {\n        dispatch({ type: SAVE_PROJECT_SUCCESS, payload: data });\n      })\n      .catch((error) => {\n        dispatch({ type: SAVE_PROJECT_FAILURE, payload: error });\n      });\n  };\n}\n")))),(0,a.kt)("h3",{id:"implement-a-reducer"},"Implement a reducer"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create")," the ",(0,a.kt)("strong",{parentName:"li"},"file")," ",(0,a.kt)("inlineCode",{parentName:"li"},"src\\projects\\state\\projectReducer.ts"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Define")," your ",(0,a.kt)("strong",{parentName:"li"},"reducer")," function.\n",(0,a.kt)("inlineCode",{parentName:"li"},"src\\projects\\state\\projectReducer.ts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  ProjectActionTypes,\n  LOAD_PROJECTS_REQUEST,\n  LOAD_PROJECTS_SUCCESS,\n  LOAD_PROJECTS_FAILURE,\n  DELETE_PROJECT_REQUEST,\n  DELETE_PROJECT_SUCCESS,\n  DELETE_PROJECT_FAILURE,\n  SAVE_PROJECT_REQUEST,\n  SAVE_PROJECT_SUCCESS,\n  SAVE_PROJECT_FAILURE,\n  ProjectState,\n} from './projectTypes';\nimport { Project } from '../Project';\n\nexport const initialProjectState: ProjectState = {\n  projects: [],\n  loading: false,\n  error: undefined,\n  page: 1,\n};\n\nexport function projectReducer(\n  state = initialProjectState,\n  action: ProjectActionTypes\n) {\n  switch (action.type) {\n    case LOAD_PROJECTS_REQUEST:\n      return { ...state, loading: true, error: '' };\n    case LOAD_PROJECTS_SUCCESS:\n      let projects: Project[];\n      const { page } = action.payload;\n      if (page === 1) {\n        projects = action.payload.projects;\n      } else {\n        projects = [...state.projects, ...action.payload.projects];\n      }\n      return {\n        ...state,\n        loading: false,\n        page,\n        projects,\n        error: '',\n      };\n    case LOAD_PROJECTS_FAILURE:\n      return { ...state, loading: false, error: action.payload.message };\n    case SAVE_PROJECT_REQUEST:\n      return { ...state };\n    case SAVE_PROJECT_SUCCESS:\n      if (action.payload.isNew) {\n        return {\n          ...state,\n          projects: [...state.projects, action.payload],\n        };\n      } else {\n        return {\n          ...state,\n          projects: state.projects.map((project: Project) => {\n            return project.id === action.payload.id\n              ? Object.assign({}, project, action.payload)\n              : project;\n          }),\n        };\n      }\n\n    case SAVE_PROJECT_FAILURE:\n      return { ...state, error: action.payload.message };\n    case DELETE_PROJECT_REQUEST:\n      return { ...state };\n    case DELETE_PROJECT_SUCCESS:\n      return {\n        ...state,\n        projects: state.projects.filter(\n          (project: Project) => project.id !== action.payload.id\n        ),\n      };\n    case DELETE_PROJECT_FAILURE:\n      return { ...state, error: action.payload.message };\n    default:\n      return state;\n  }\n}\n")),(0,a.kt)("h3",{id:"configure-the-project-reducer-and-state"},"Configure the project reducer and state"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"update state.ts")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Open")," the ",(0,a.kt)("strong",{parentName:"p"},"file")," ",(0,a.kt)("inlineCode",{parentName:"p"},"src\\state.ts"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configure")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectReducer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectState"),"."),(0,a.kt)("h4",{parentName:"li",id:"srcstatets"},(0,a.kt)("inlineCode",{parentName:"h4"},"src\\state.ts")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"import { createStore, applyMiddleware } from 'redux';\nimport ReduxThunk from 'redux-thunk';\nimport { composeWithDevTools } from 'redux-devtools-extension';\nimport { combineReducers } from 'redux';\n\n+ import { ProjectState } from './projects/state/projectTypes';\n+ import { initialProjectState } from './projects/state/projectReducer';\n+ import { projectReducer } from './projects/state/projectReducer';\n\nconst reducer = combineReducers({\n+  projectState: projectReducer\n});\n\n...\n\nexport interface AppState {\n+  projectState: ProjectState;\n}\n\nexport const initialAppState: AppState = {\n+  projectState: initialProjectState\n};\n\nexport const store = configureStore(initialAppState);\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Verify")," the application ",(0,a.kt)("strong",{parentName:"p"},"compiles"),"."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In the next lab we will connect our Redux code to our React application.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-you-have-completed-lab-24"},"\u2714"," You have completed Lab 24"))}u.isMDXComponent=!0}}]);