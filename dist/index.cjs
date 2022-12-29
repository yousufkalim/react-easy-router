var e=require("react"),t=require("react-router-dom"),r=require("react/jsx-runtime");function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}var i=/*#__PURE__*/e.createContext(),a=/*#__PURE__*/e.createContext();function o(){return e.useContext(a)}function c(t){var n=t.isAuthenticated,o=t.showLoader,c=void 0===o||o,u=t.loader,s=t.children,l=e.useState(null),h=l[0],d=l[1],f=e.useState({isAuthenticated:n,showLoader:c,loader:u});/*#__PURE__*/return r.jsx(i.Provider,{value:{auth:h,setAuth:d},children:/*#__PURE__*/r.jsx(a.Provider,{value:{config:f[0]},children:s})})}function u(){var e=o();/*#__PURE__*/return r.jsx("div",{className:"loader",style:{height:"100vh",width:"100%",backgroundColor:"white",position:"absolute",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center"},children:/*#__PURE__*/r.jsx("img",{src:e.config.loader||"https://i.imgur.com/FhvNntt.gif",alt:"loader"})})}function s(n){var a=n.failureRedirect,c=void 0===a?"/":a,s=n.children,l=e.useContext(i),h=l.auth,d=l.setAuth,f=o().config,v=f.isAuthenticated,p=f.showLoader;return e.useEffect(function(){v?v().then(function(e){d(e)}).catch(function(){return d(!1)}):d(!1)},[v,d]),null===h?p&&/*#__PURE__*/r.jsx(u,{}):h?s:/*#__PURE__*/r.jsx(t.Navigate,{to:c})}function l(e){/*#__PURE__*/return r.jsx(t.Route,e.navigate?{path:e.path,element:/*#__PURE__*/r.jsx(t.Navigate,{to:e.navigate})}:e.protected?{path:e.path,element:/*#__PURE__*/r.jsx(s,{failureRedirect:e.failureRedirect,children:e.element})}:{path:e.path,element:e.element},e.path)}function h(e,t){void 0===t&&(t="");var r=e.map(function(e){e.path=function(e,t){var r=e.split("/"),n=t.split("/"),i=[].concat(new Set([].concat(r,n))).join("/");return"/"===i[0]?i:"/"+i}(t,e.path);var r=[];return e.children&&(r=h(e.children,e.path)),[].concat(r,[l(e)])});return r.flat()}module.exports=function(e){/*#__PURE__*/return r.jsx(t.BrowserRouter,{children:/*#__PURE__*/r.jsx(c,n({},e,{children:/*#__PURE__*/r.jsx(t.Routes,{children:h(e.routes)})}))})};
//# sourceMappingURL=index.cjs.map
