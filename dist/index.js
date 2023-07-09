"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),n=require("react-device-detect");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var a=r(e),l=o(t),i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};function c(e,t,n,o){return new(n||(n=Promise))((function(r,a){function l(e){try{c(o.next(e))}catch(e){a(e)}}function i(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((o=o.apply(e,t||[])).next())}))}function s(e,t){var n,o,r,a,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(r=l.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){l.label=a[1];break}if(6===a[0]&&l.label<r[1]){l.label=r[1],r=a;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(a);break}r[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap");\n#index_terminalContainer__4seT6 {\n  --control-default-bg-color: #ccc;\n  --control-close-bg-color: #fc5b57;\n  --control-minimize-bg-color: #e5bf3c;\n  --control-maximize-bg-color: #57c038;\n}\n\n.index_controls__sXDjs {\n  text-align: left;\n  height: 26px;\n  position: relative;\n  top: 4px;\n  margin-left: 4px;\n}\n.index_controls__sXDjs .index_consoleCtrl__DI2H1 {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  margin: 0 3px;\n  border-radius: 50%;\n  background: var(--control-default-bg-color);\n}\n.index_controls__sXDjs .index_close__XGN9U {\n  background: var(--control-close-bg-color);\n}\n.index_controls__sXDjs .index_minimize__pZYTU {\n  background: var(--control-minimize-bg-color);\n}\n.index_controls__sXDjs .index_maximize__szRK7 {\n  background: var(--control-maximize-bg-color);\n}\n\n.index_editor__JoDSg {\n  text-align: left;\n  height: 100%;\n  padding: 10px 15px;\n  overflow-wrap: break-word;\n  overflow-y: scroll;\n  outline: none;\n  font-family: "Source Code Pro", monospace;\n  font-size: 18px;\n  line-height: 22px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.index_editor__JoDSg .index_mobileInput__WloSq {\n  position: absolute;\n  top: -2000px;\n  left: -2000px;\n}\n.index_editor__JoDSg .index_lineText__j6qNj {\n  display: inline;\n  position: relative;\n  top: -1px;\n  margin-left: 8px;\n}\n.index_editor__JoDSg .index_preWhiteSpace__7KwuG {\n  white-space: pre-wrap;\n}\n.index_editor__JoDSg .index_caret__VS4iV {\n  position: relative;\n  -webkit-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  -moz-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  -o-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  -ms-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n}\n.index_editor__JoDSg .index_caret__VS4iV .index_caretAfter__6aXPx {\n  content: "";\n  position: absolute;\n  top: 2px;\n  width: 10px;\n  height: 22px;\n  z-index: 10;\n}\n@-moz-keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n@-webkit-keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n@-o-keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n@keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n.index_editor__JoDSg a {\n  color: #1a87b5;\n}\n\n.index_editorWithTopBar__L6XKw {\n  height: calc(100% - 46px);\n}\n\n.index_curvedTop__LX9XS {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n#index_terminalContainer__4seT6 {\n  height: 100%;\n}\n\n.index_terminal__teubZ {\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  border-radius: 5px;\n}');var u={terminalContainer:"index_terminalContainer__4seT6",controls:"index_controls__sXDjs",consoleCtrl:"index_consoleCtrl__DI2H1",close:"index_close__XGN9U",minimize:"index_minimize__pZYTU",maximize:"index_maximize__szRK7",editor:"index_editor__JoDSg",mobileInput:"index_mobileInput__WloSq",lineText:"index_lineText__j6qNj",preWhiteSpace:"index_preWhiteSpace__7KwuG",caret:"index_caret__VS4iV",blink:"index_blink__FJp0-",caretAfter:"index_caretAfter__6aXPx",editorWithTopBar:"index_editorWithTopBar__L6XKw",curvedTop:"index_curvedTop__LX9XS",terminal:"index_terminal__teubZ"},f=a.createContext(null),m=function(e){var t=e.children;return a.createElement(f.Provider,{value:u},t)},d={dark:{themeBGColor:"#022833",themeToolbarColor:"#131519",themeColor:"#839496",themePromptColor:"#a917a8"},light:{themeBGColor:"#fdf6e4",themeToolbarColor:"#d8d8d8",themeColor:"#333333",themePromptColor:"#a917a8"},dracula:{themeBGColor:"#272B36",themeToolbarColor:"#DBDBDB",themeColor:"#FFFEFC",themePromptColor:"#a917a8"},"material-dark":{themeBGColor:"#151515",themeToolbarColor:"#424242",themeColor:"#fff",themePromptColor:"#42A5F5"},"material-light":{themeBGColor:"#fafafa",themeToolbarColor:"#424242",themeColor:"#151515",themePromptColor:"#42A5F5"},"material-ocean":{themeBGColor:"#263238",themeToolbarColor:"#37474F",themeColor:"#fff",themePromptColor:"#C3D82C"},matrix:{themeBGColor:"#0D0208",themeToolbarColor:"#0D0208",themeColor:"#00FF41",themePromptColor:"#008F11"}},p=a.createContext(null),_=function(e){var t=e.children,n=i(i({},d),t.props.themes||{}),o=n[t.props.theme]||n.light;return a.createElement(p.Provider,{value:o},t)};function h(e){var t=a.useContext(f),n=e.controlButtonLabels,o=e.showControlButtons?n.map((function(e){return a.createElement("div",{key:e,className:"".concat(t.consoleCtrl," ").concat(t[e])})})):null;return a.createElement("div",{className:t.controls},o)}var x=a.createContext({bufferedContent:"",temporaryContent:"",setBufferedContent:function(e){},setTemporaryContent:function(e){},appendCommandToHistory:function(){},getNextCommand:function(){return""},getPreviousCommand:function(){return""}}),g=function(){function e(){}return e.splitStringAtIndex=function(e,t){return e?[e.substring(0,t),e.substring(t)]:["",""]},e}(),b=function(e,t,o,r,l,i,u){var m=a.useContext(f),d=a.useContext(p),_=a.useContext(x),h=_.appendCommandToHistory,b=_.temporaryContent,C=a.useRef(null),v=a.useState(""),y=v[0],w=v[1],E=a.useState(!1),T=E[0],S=E[1],k=a.useState(0),B=k[0],D=k[1],F=a.useState(""),P=F[0],N=F[1],j=a.useState(""),A=j[0],z=j[1];a.useEffect((function(){n.isMobile&&t&&C.current.focus()}),[t]),a.useEffect((function(){T&&h(y)}),[T]);var I=n.isMobile&&i?a.createElement("div",{className:m.mobileInput},a.createElement("input",{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",value:y,onChange:function(e){return w(e.target.value)},ref:C})):null,M=T?a.createElement(a.Fragment,null,I,a.createElement("div",{className:m.lineText},t&&e?a.createElement("span",{className:m.caret},a.createElement("span",{className:m.caretAfter,style:{background:d.themeColor}})):null,a.createElement("span",{className:m.preWhiteSpace},b))):a.createElement(a.Fragment,null,I,a.createElement("span",{style:{color:d.themePromptColor}},o),a.createElement("div",{className:m.lineText},a.createElement("span",{className:m.preWhiteSpace},P),t&&e?a.createElement("span",{className:m.caret},a.createElement("span",{className:m.caretAfter,style:{background:d.themeColor}})):null,a.createElement("span",{className:m.preWhiteSpace},A)));return function(e,t,n,o,r,l,i,c,s){var u=a.useContext(x),f=u.getPreviousCommand,m=u.getNextCommand,d=function(a){if(e&&s){a.preventDefault();var i=a.key;if("Enter"!==i){var c=null;if("Backspace"===i){var u=g.splitStringAtIndex(t,r),d=u[0],p=u[1];c=d.slice(0,-1)+p,t&&0!==t.length&&l(r-1)}else if("ArrowUp"===i)(c=f())&&l(c.length);else if("ArrowDown"===i)c=m(),l(c?c.length:0);else if("ArrowLeft"===i)r>0&&l(r-1),c=t;else if("ArrowRight"===i)r<t.length&&l(r+1),c=t;else if((a.metaKey||a.ctrlKey)&&"v"===i.toLowerCase())navigator.clipboard.readText().then((function(e){var o=g.splitStringAtIndex(t||"",r),a=o[0],i=o[1];c=a+e+i,l(r+e.length),n(c)}));else if((a.metaKey||a.ctrlKey)&&"c"===i.toLowerCase()){var _=window.getSelection().toString();navigator.clipboard.writeText(_).then((function(){n(c=t)}))}else if(i&&1===i.length){var h=g.splitStringAtIndex(t,r);d=h[0],p=h[1],c=d+i+p,l(r+1)}else c=t;n(c),o(!1)}else o(!0)}};a.useEffect((function(){return document.addEventListener("keydown",d),function(){document.removeEventListener("keydown",d)}})),a.useEffect((function(){var e=g.splitStringAtIndex(t,r),n=e[0],o=e[1];i(n),c(o)}),[t,r])}(t,y,w,S,B,D,N,z,i),function(e,t,n,o,r,l,i,u,m,d){var _=a.useContext(x);_.bufferedContent;var h=_.setBufferedContent,g=_.setTemporaryContent;a.useContext(f),a.useContext(p),a.useEffect((function(){var f;e&&(f=n,c(void 0,void 0,void 0,(function(){var e,c,p,_,x,b,C,v;return s(this,(function(s){switch(s.label){case 0:return e=f.trim().split(" "),c=e[0],p=e.slice(1),_="","clear"===c?(h(""),o(""),t(!1),r(0),l(""),i(""),[2]):(x=a.createElement(a.Fragment,null,a.createElement("span",null,">>>",n),a.createElement("br",null)),h((function(e){return a.createElement(a.Fragment,null,e,x)})),o(""),r(0),l(""),i(""),f?(b=p.join(" "),c&&u[c]?"function"!=typeof(C=u[c])?[3,2]:[4,C(b)]:[3,4]):[3,9]);case 1:return _=s.sent(),[3,3];case 2:_=C,s.label=3;case 3:return[3,9];case 4:return"function"!=typeof d?[3,6]:[4,d(c,b)];case 5:return _=s.sent(),[3,9];case 6:return"function"!=typeof m?[3,8]:[4,m(c,b)];case 7:return _=s.sent(),[3,9];case 8:_=m,s.label=9;case 9:return v=a.createElement(a.Fragment,null,_?a.createElement("span",null,_):null,a.createElement("br",null)),h((function(e){return a.createElement(a.Fragment,null,e,v)})),g(""),t(!1),[2]}}))})))}),[e])}(T,S,y,w,D,N,z,r,l,u),M};function C(e){var t=a.useRef(null),n=a.useContext(f),o=a.useContext(p),r=a.useContext(x).bufferedContent;!function(e,t){a.useEffect((function(){t.current&&(t.current.scrollTop=t.current.scrollHeight)}),[e])}(r,t);var l=e.enableInput,i=e.caret,c=e.consoleFocused,s=e.prompt,u=e.commands,m=e.welcomeMessage,d=e.errorMessage,_=e.showControlBar,h=e.defaultHandler,g=b(i,c,s,u,d,l,h);return a.createElement("div",{ref:t,className:"".concat(n.editor," ").concat(_?null:n.curvedTop," ").concat(_?n.editorWithTopBar:null),style:{background:o.themeBGColor}},m,r,g)}function v(e){var t,o,r,l,i=a.useRef(null),c=a.useState(!n.isMobile),s=c[0],u=c[1],m=a.useContext(f),d=a.useContext(p);t=i,o=s,r=u,l=function(e){t.current&&!t.current.contains(e.target)?r(!1):n.isMobile?r(!o):r(!0)},a.useEffect((function(){return document.addEventListener("mousedown",l),function(){document.removeEventListener("mousedown",l)}}));var _=e.caret,x=e.theme,g=e.showControlBar,b=e.showControlButtons,v=e.controlButtonLabels,y=e.prompt,w=e.commands,E=e.welcomeMessage,T=e.errorMessage,S=e.enableInput,k=e.defaultHandler,B=g?a.createElement(h,{consoleFocused:s,showControlButtons:b,controlButtonLabels:v}):null,D=a.createElement(C,{caret:_,consoleFocused:s,prompt:y,commands:w,welcomeMessage:E,errorMessage:T,enableInput:S,showControlBar:g,defaultHandler:k});return a.createElement("div",{ref:i,id:m.terminalContainer,className:m["theme--".concat(x)],"data-testid":"terminal"},a.createElement("div",{className:"".concat(m.terminal),style:{background:d.themeToolbarColor,color:d.themeColor}},B,D))}function y(e){var t=e.children;return a.createElement(m,null,a.createElement(_,null,t))}function w(e){return a.createElement(y,null,a.createElement(v,i({},e)))}v.propTypes={enableInput:l.default.bool,caret:l.default.bool,theme:l.default.string,showControlBar:l.default.bool,showControlButtons:l.default.bool,controlButtonLabels:l.default.arrayOf(l.default.string),prompt:l.default.string,commands:l.default.objectOf(l.default.oneOfType([l.default.string,l.default.func,l.default.node])),welcomeMessage:l.default.oneOfType([l.default.string,l.default.func,l.default.node]),errorMessage:l.default.oneOfType([l.default.string,l.default.func,l.default.node]),defaultHandler:l.default.func},v.defaultProps={enableInput:!0,caret:!0,theme:"light",showControlBar:!0,showControlButtons:!0,controlButtonLabels:["close","minimize","maximize"],prompt:">>>",commands:{},welcomeMessage:"",errorMessage:"not found!",defaultHandler:null};var E=function(e){var t=e.children,n=a.useState(""),o=n[0],r=n[1],l=a.useState(""),i=l[0],c=l[1],s=a.useState([]),u=s[0],f=s[1],m=a.useState(null),d=m[0],p=m[1];a.useEffect((function(){p(u.length)}),[u]);return a.createElement(x.Provider,{value:{bufferedContent:o,temporaryContent:i,setTemporaryContent:c,setBufferedContent:r,appendCommandToHistory:function(e){e&&f(u.concat(e))},getPreviousCommand:function(){if(0===d)return 0===u.length?"":u[0];var e=u[d-1];return d>0&&p(d-1),e},getNextCommand:function(){if(d+1<=u.length){var e=u[d+1];return p(d+1),e}return""}}},t)},T=x,S={ReactTerminal:w,TerminalContextProvider:E,TerminalContext:T};exports.ReactTerminal=w,exports.TerminalContext=T,exports.TerminalContextProvider=E,exports.default=S;
