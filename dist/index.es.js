import*as e from"react";import n from"prop-types";import{isMobile as t}from"react-device-detect";var o=function(){return o=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},o.apply(this,arguments)};function r(e,n,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((o=o.apply(e,n||[])).next())}))}function a(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],o=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap");\n#index_terminalContainer__4seT6 {\n  --control-default-bg-color: #ccc;\n  --control-close-bg-color: #fc5b57;\n  --control-minimize-bg-color: #e5bf3c;\n  --control-maximize-bg-color: #57c038;\n}\n\n.index_controls__sXDjs {\n  text-align: left;\n  height: 26px;\n  position: relative;\n  top: 4px;\n  margin-left: 4px;\n}\n.index_controls__sXDjs .index_consoleCtrl__DI2H1 {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  margin: 0 3px;\n  border-radius: 50%;\n  background: var(--control-default-bg-color);\n}\n.index_controls__sXDjs .index_close__XGN9U {\n  background: var(--control-close-bg-color);\n}\n.index_controls__sXDjs .index_minimize__pZYTU {\n  background: var(--control-minimize-bg-color);\n}\n.index_controls__sXDjs .index_maximize__szRK7 {\n  background: var(--control-maximize-bg-color);\n}\n\n.index_editor__JoDSg {\n  text-align: left;\n  height: 100%;\n  padding: 10px 15px;\n  overflow-wrap: break-word;\n  overflow-y: scroll;\n  outline: none;\n  font-family: "Source Code Pro", monospace;\n  font-size: 18px;\n  line-height: 22px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.index_editor__JoDSg .index_mobileInput__WloSq {\n  position: absolute;\n  top: -2000px;\n  left: -2000px;\n}\n.index_editor__JoDSg .index_lineText__j6qNj {\n  display: inline;\n  position: relative;\n  top: -1px;\n  margin-left: 8px;\n}\n.index_editor__JoDSg .index_preWhiteSpace__7KwuG {\n  white-space: pre-wrap;\n}\n.index_editor__JoDSg .index_caret__VS4iV {\n  position: relative;\n  -webkit-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  -moz-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  -o-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  -ms-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n}\n.index_editor__JoDSg .index_caret__VS4iV .index_caretAfter__6aXPx {\n  content: "";\n  position: absolute;\n  top: 2px;\n  width: 10px;\n  height: 22px;\n  z-index: 10;\n}\n@-moz-keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n@-webkit-keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n@-o-keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n@keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n.index_editor__JoDSg a {\n  color: #1a87b5;\n}\n\n.index_editorWithTopBar__L6XKw {\n  height: calc(100% - 46px);\n}\n\n.index_curvedTop__LX9XS {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n#index_terminalContainer__4seT6 {\n  height: 100%;\n}\n\n.index_terminal__teubZ {\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  border-radius: 5px;\n}');var i={terminalContainer:"index_terminalContainer__4seT6",controls:"index_controls__sXDjs",consoleCtrl:"index_consoleCtrl__DI2H1",close:"index_close__XGN9U",minimize:"index_minimize__pZYTU",maximize:"index_maximize__szRK7",editor:"index_editor__JoDSg",mobileInput:"index_mobileInput__WloSq",lineText:"index_lineText__j6qNj",preWhiteSpace:"index_preWhiteSpace__7KwuG",caret:"index_caret__VS4iV",blink:"index_blink__FJp0-",caretAfter:"index_caretAfter__6aXPx",editorWithTopBar:"index_editorWithTopBar__L6XKw",curvedTop:"index_curvedTop__LX9XS",terminal:"index_terminal__teubZ"},l=e.createContext(null),c=function(n){var t=n.children;return e.createElement(l.Provider,{value:i},t)},s={dark:{themeBGColor:"#022833",themeToolbarColor:"#131519",themeColor:"#839496",themePromptColor:"#a917a8"},light:{themeBGColor:"#fdf6e4",themeToolbarColor:"#d8d8d8",themeColor:"#333333",themePromptColor:"#a917a8"},dracula:{themeBGColor:"#272B36",themeToolbarColor:"#DBDBDB",themeColor:"#FFFEFC",themePromptColor:"#a917a8"},"material-dark":{themeBGColor:"#151515",themeToolbarColor:"#424242",themeColor:"#fff",themePromptColor:"#42A5F5"},"material-light":{themeBGColor:"#fafafa",themeToolbarColor:"#424242",themeColor:"#151515",themePromptColor:"#42A5F5"},"material-ocean":{themeBGColor:"#263238",themeToolbarColor:"#37474F",themeColor:"#fff",themePromptColor:"#C3D82C"},matrix:{themeBGColor:"#0D0208",themeToolbarColor:"#0D0208",themeColor:"#00FF41",themePromptColor:"#008F11"}},u=e.createContext(null),m=function(n){var t=n.children,r=o(o({},s),t.props.themes||{}),a=r[t.props.theme]||r.light;return e.createElement(u.Provider,{value:a},t)};function f(n){var t=e.useContext(l),o=n.controlButtonLabels,r=n.showControlButtons?o.map((function(n){return e.createElement("div",{key:n,className:"".concat(t.consoleCtrl," ").concat(t[n])})})):null;return e.createElement("div",{className:t.controls},r)}var d=e.createContext({bufferedContent:"",temporaryContent:"",setBufferedContent:function(e){},setTemporaryContent:function(e){},appendCommandToHistory:function(){},getNextCommand:function(){return""},getPreviousCommand:function(){return""}}),p=function(){function e(){}return e.splitStringAtIndex=function(e,n){return e?[e.substring(0,n),e.substring(n)]:["",""]},e}(),_=function(n,o,i,c,s,m,f){var _=e.useContext(l),h=e.useContext(u),x=e.useContext(d),g=x.appendCommandToHistory,C=x.temporaryContent,b=e.useRef(null),v=e.useState(""),y=v[0],w=v[1],E=e.useState(!1),T=E[0],S=E[1],k=e.useState(0),B=k[0],F=k[1],D=e.useState(""),N=D[0],P=D[1],A=e.useState(""),I=A[0],X=A[1];e.useEffect((function(){t&&o&&b.current.focus()}),[o]),e.useEffect((function(){T&&g(y)}),[T]);var z=t&&m?e.createElement("div",{className:_.mobileInput},e.createElement("input",{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",value:y,onChange:function(e){return w(e.target.value)},ref:b})):null,J=T?e.createElement(e.Fragment,null,z,e.createElement("div",{className:_.lineText},o&&n?e.createElement("span",{className:_.caret},e.createElement("span",{className:_.caretAfter,style:{background:h.themeColor}})):null,e.createElement("span",{className:_.preWhiteSpace},C))):e.createElement(e.Fragment,null,z,e.createElement("span",{style:{color:h.themePromptColor}},i),e.createElement("div",{className:_.lineText},e.createElement("span",{className:_.preWhiteSpace},N),o&&n?e.createElement("span",{className:_.caret},e.createElement("span",{className:_.caretAfter,style:{background:h.themeColor}})):null,e.createElement("span",{className:_.preWhiteSpace},I)));return function(n,t,o,r,a,i,l,c,s){var u=e.useContext(d),m=u.getPreviousCommand,f=u.getNextCommand,_=function(e){if(n&&s){e.preventDefault();var l=e.key;if("Enter"!==l){var c=null;if("Backspace"===l){var u=p.splitStringAtIndex(t,a),d=u[0],_=u[1];c=d.slice(0,-1)+_,t&&0!==t.length&&i(a-1)}else if("ArrowUp"===l)(c=m())&&i(c.length);else if("ArrowDown"===l)c=f(),i(c?c.length:0);else if("ArrowLeft"===l)a>0&&i(a-1),c=t;else if("ArrowRight"===l)a<t.length&&i(a+1),c=t;else if((e.metaKey||e.ctrlKey)&&"v"===l.toLowerCase())navigator.clipboard.readText().then((function(e){var n=p.splitStringAtIndex(t||"",a),r=n[0],l=n[1];c=r+e+l,i(a+e.length),o(c)}));else if((e.metaKey||e.ctrlKey)&&"c"===l.toLowerCase()){var h=window.getSelection().toString();navigator.clipboard.writeText(h).then((function(){o(c=t)}))}else if(l&&1===l.length){var x=p.splitStringAtIndex(t,a);d=x[0],_=x[1],c=d+l+_,i(a+1)}else c=t;o(c),r(!1)}else r(!0)}};e.useEffect((function(){return document.addEventListener("keydown",_),function(){document.removeEventListener("keydown",_)}})),e.useEffect((function(){var e=p.splitStringAtIndex(t,a),n=e[0],o=e[1];l(n),c(o)}),[t,a])}(o,y,w,S,B,F,P,X,m),function(n,t,o,i,c,s,m,f,p,_){var h=e.useContext(d);h.bufferedContent;var x=h.setBufferedContent,g=h.setTemporaryContent;e.useContext(l),e.useContext(u),e.useEffect((function(){var l;n&&(l=o,r(void 0,void 0,void 0,(function(){var n,r,u,d,h,C,b,v;return a(this,(function(a){switch(a.label){case 0:return n=l.trim().split(" "),r=n[0],u=n.slice(1),d="","clear"===r?(x(""),i(""),t(!1),c(0),s(""),m(""),[2]):(h=e.createElement(e.Fragment,null,e.createElement("span",null,">>>",o),e.createElement("br",null)),x((function(n){return e.createElement(e.Fragment,null,n,h)})),i(""),c(0),s(""),m(""),l?(C=u.join(" "),r&&f[r]?"function"!=typeof(b=f[r])?[3,2]:[4,b(C)]:[3,4]):[3,9]);case 1:return d=a.sent(),[3,3];case 2:d=b,a.label=3;case 3:return[3,9];case 4:return"function"!=typeof _?[3,6]:[4,_(r,C)];case 5:return d=a.sent(),[3,9];case 6:return"function"!=typeof p?[3,8]:[4,p(r,C)];case 7:return d=a.sent(),[3,9];case 8:d=p,a.label=9;case 9:return v=e.createElement(e.Fragment,null,d?e.createElement("span",null,d):null,e.createElement("br",null)),x((function(n){return e.createElement(e.Fragment,null,n,v)})),g(""),t(!1),[2]}}))})))}),[n])}(T,S,y,w,F,P,X,c,s,f),J};function h(n){var t=e.useRef(null),o=e.useContext(l),r=e.useContext(u),a=e.useContext(d).bufferedContent;!function(n,t){e.useEffect((function(){t.current&&(t.current.scrollTop=t.current.scrollHeight)}),[n])}(a,t);var i=n.enableInput,c=n.caret,s=n.consoleFocused,m=n.prompt,f=n.commands,p=n.welcomeMessage,h=n.errorMessage,x=n.showControlBar,g=n.defaultHandler,C=_(c,s,m,f,h,i,g);return e.createElement("div",{ref:t,className:"".concat(o.editor," ").concat(x?null:o.curvedTop," ").concat(x?o.editorWithTopBar:null),style:{background:r.themeBGColor}},p,a,C)}function x(n){var o,r,a,i,c=e.useRef(null),s=e.useState(!t),m=s[0],d=s[1],p=e.useContext(l),_=e.useContext(u);o=c,r=m,a=d,i=function(e){o.current&&!o.current.contains(e.target)?a(!1):a(!t||!r)},e.useEffect((function(){return document.addEventListener("mousedown",i),function(){document.removeEventListener("mousedown",i)}}));var x=n.caret,g=n.theme,C=n.showControlBar,b=n.showControlButtons,v=n.controlButtonLabels,y=n.prompt,w=n.commands,E=n.welcomeMessage,T=n.errorMessage,S=n.enableInput,k=n.defaultHandler,B=C?e.createElement(f,{consoleFocused:m,showControlButtons:b,controlButtonLabels:v}):null,F=e.createElement(h,{caret:x,consoleFocused:m,prompt:y,commands:w,welcomeMessage:E,errorMessage:T,enableInput:S,showControlBar:C,defaultHandler:k});return e.createElement("div",{ref:c,id:p.terminalContainer,className:p["theme--".concat(g)],"data-testid":"terminal"},e.createElement("div",{className:"".concat(p.terminal),style:{background:_.themeToolbarColor,color:_.themeColor}},B,F))}function g(n){var t=n.children;return e.createElement(c,null,e.createElement(m,null,t))}function C(n){return e.createElement(g,null,e.createElement(x,o({},n)))}x.propTypes={enableInput:n.bool,caret:n.bool,theme:n.string,showControlBar:n.bool,showControlButtons:n.bool,controlButtonLabels:n.arrayOf(n.string),prompt:n.string,commands:n.objectOf(n.oneOfType([n.string,n.func,n.node])),welcomeMessage:n.oneOfType([n.string,n.func,n.node]),errorMessage:n.oneOfType([n.string,n.func,n.node]),defaultHandler:n.func},x.defaultProps={enableInput:!0,caret:!0,theme:"light",showControlBar:!0,showControlButtons:!0,controlButtonLabels:["close","minimize","maximize"],prompt:">>>",commands:{},welcomeMessage:"",errorMessage:"not found!",defaultHandler:null};var b=function(n){var t=n.children,o=e.useState(""),r=o[0],a=o[1],i=e.useState(""),l=i[0],c=i[1],s=e.useState([]),u=s[0],m=s[1],f=e.useState(null),p=f[0],_=f[1];e.useEffect((function(){_(u.length)}),[u]);return e.createElement(d.Provider,{value:{bufferedContent:r,temporaryContent:l,setTemporaryContent:c,setBufferedContent:a,appendCommandToHistory:function(e){e&&m(u.concat(e))},getPreviousCommand:function(){if(0===p)return 0===u.length?"":u[0];var e=u[p-1];return p>0&&_(p-1),e},getNextCommand:function(){if(p+1<=u.length){var e=u[p+1];return _(p+1),e}return""}}},t)},v=d,y={ReactTerminal:C,TerminalContextProvider:b,TerminalContext:v};export{C as ReactTerminal,v as TerminalContext,b as TerminalContextProvider,y as default};
