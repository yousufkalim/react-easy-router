import e,{useState as t,createContext as n,useContext as r,useEffect as l}from"react";import{Navigate as a,Route as o,Routes as i}from"react-router-dom";function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const u=/*#__PURE__*/n(null),h=/*#__PURE__*/n(null);function s(){return r(h)}function d({isAuthenticated:n,showLoader:r=!0,loader:l="https://i.imgur.com/FhvNntt.gif",children:a}){const[o,i]=t(null),[c]=t({isAuthenticated:n,showLoader:r,loader:l});/*#__PURE__*/return e.createElement(u.Provider,{value:{auth:o,setAuth:i}},/*#__PURE__*/e.createElement(h.Provider,{value:{config:c}},a))}function f(){const{config:t}=s();/*#__PURE__*/return e.createElement("div",{className:"loader",style:{height:"100vh",width:"100%",backgroundColor:"white",position:"absolute",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center"}},/*#__PURE__*/e.createElement("img",{src:t.loader,alt:"loader"}))}function m({failureRedirect:t="/",roles:n,children:o}){const{auth:i,setAuth:c}=r(u),{config:{isAuthenticated:h,showLoader:d}}=s();return l(()=>{h?h().then(e=>{if(e){if(null!=n&&n.length&&n.includes(e.role))return c(!0);c(null==n||!n.length)}else c(!1)}).catch(()=>c(!1)):c(!1)},[h,c]),null===i?d&&/*#__PURE__*/e.createElement(f,null):i?o:/*#__PURE__*/e.createElement(a,{to:t})}function p(t){/*#__PURE__*/return e.createElement(o,t.navigate?{key:t.path,path:t.path,element:/*#__PURE__*/e.createElement(a,{to:t.navigate})}:t.protected?{key:t.path,path:t.path,element:/*#__PURE__*/e.createElement(m,{failureRedirect:t.failureRedirect,roles:t.roles},t.element)}:{key:t.path,path:t.path,element:t.element})}function g(e,t=""){const n=e.map(e=>{e.path=function(e,t){const n=e.split("/"),r=t.split("/"),l=[...new Set([...n,...r])].join("/");return"/"===l[0]?l:`/${l}`}(t,e.path);let n=[];return e.children&&(n=g(e.children,e.path)),[...n,p(e)]});return n.flat()}function v(t){/*#__PURE__*/return e.createElement(d,c({},t),/*#__PURE__*/e.createElement(i,null,g(t.routes)))}export{v as default};
//# sourceMappingURL=index.modern.js.map
