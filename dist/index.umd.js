!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("react-router-dom"),require("react/jsx-runtime")):"function"==typeof define&&define.amd?define(["react","react-router-dom","react/jsx-runtime"],t):(e||self).reactRouting=t(e.react,e.reactRouterDom,e.jsxRuntime)}(this,function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}var i=/*#__PURE__*/e.createContext(),o=/*#__PURE__*/e.createContext();function a(){return e.useContext(o)}function u(t){var r=t.isAuthenticated,a=t.showLoader,u=void 0===a||a,c=t.loader,s=t.children,l=e.useState(null),d=l[0],h=l[1],f=e.useState({isAuthenticated:r,showLoader:u,loader:c});/*#__PURE__*/return n.jsx(i.Provider,{value:{auth:d,setAuth:h},children:/*#__PURE__*/n.jsx(o.Provider,{value:{config:f[0]},children:s})})}function c(){var e=a();/*#__PURE__*/return n.jsx("div",{className:"loader",style:{height:"100vh",width:"100%",backgroundColor:"white",position:"absolute",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center"},children:/*#__PURE__*/n.jsx("img",{src:e.config.loader||"https://i.imgur.com/FhvNntt.gif",alt:"loader"})})}function s(r){var o=r.failureRedirect,u=void 0===o?"/":o,s=r.children,l=e.useContext(i),d=l.auth,h=l.setAuth,f=a().config,p=f.isAuthenticated,v=f.showLoader;return e.useEffect(function(){p?p().then(function(e){h(e)}).catch(function(){return h(!1)}):h(!1)},[p,h]),null===d?v&&/*#__PURE__*/n.jsx(c,{}):d?s:/*#__PURE__*/n.jsx(t.Navigate,{to:u})}function l(e){/*#__PURE__*/return n.jsx(t.Route,e.navigate?{path:e.path,element:/*#__PURE__*/n.jsx(t.Navigate,{to:e.navigate})}:e.protected?{path:e.path,element:/*#__PURE__*/n.jsx(s,{failureRedirect:e.failureRedirect,children:e.element})}:{path:e.path,element:e.element},e.path)}function d(e,t){void 0===t&&(t="");var n=e.map(function(e){e.path=function(e,t){var n=e.split("/"),r=t.split("/"),i=[].concat(new Set([].concat(n,r))).join("/");return"/"===i[0]?i:"/"+i}(t,e.path);var n=[];return e.children&&(n=d(e.children,e.path)),[].concat(n,[l(e)])});return n.flat()}return function(e){/*#__PURE__*/return n.jsx(t.BrowserRouter,{children:/*#__PURE__*/n.jsx(u,r({},e,{children:/*#__PURE__*/n.jsx(t.Routes,{children:d(e.routes)})}))})}});
//# sourceMappingURL=index.umd.js.map
