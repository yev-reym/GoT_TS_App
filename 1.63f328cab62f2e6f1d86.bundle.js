(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"../node_modules/@material-ui/icons/ArrowLeftSharp.js":function(e,t,n){"use strict";var o=n("../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("../node_modules/react/index.js")),s=(0,o(n("../node_modules/@material-ui/icons/utils/createSvgIcon.js")).default)(a.default.createElement("path",{d:"M14 7l-5 5 5 5V7z"}),"ArrowLeftSharp");t.default=s},"../node_modules/@material-ui/icons/VisibilitySharp.js":function(e,t,n){"use strict";var o=n("../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("../node_modules/react/index.js")),s=(0,o(n("../node_modules/@material-ui/icons/utils/createSvgIcon.js")).default)(a.default.createElement("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"VisibilitySharp");t.default=s},"../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../node_modules/sass-resources-loader/lib/loader.js?!../src/components/Character/styles.scss":function(e,t,n){"use strict";var o=n("../node_modules/css-loader/dist/runtime/api.js"),a=n.n(o),s=n("../node_modules/css-loader/dist/runtime/getUrl.js"),r=n.n(s),l=n("../src/assets/fonts/GameofThrones.ttf"),i=a()((function(e){return e[1]})),c=r()(l.a);i.push([e.i,'@font-face{font-family:"Cinzel Decorative";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/cinzeldecorative/v9/daaCSScvJGqLYhG8nNt8KPPswUAPni7TTMxpazyD.woff2) format("woff2")}@font-face{font-family:"HeaderFont";src:url('+c+') format("truetype");font-weight:normal;font-style:normal}.styles__charinfo_container___35x0m{display:flex;align-items:center}.styles__charinfo_container___35x0m h3{margin:0;font-size:15px !important}.styles__charinfo_container___35x0m svg{color:#010b13;font-size:20px;margin:0 5px}.styles__modal__custom___3nT3k{position:fixed;top:50%;left:50%;border:2px solid #e3b130;background:#010b13;overflow:auto;border-radius:4px;outline:none;padding:20px 40px;height:fit-content;transform:translate(-50%, -50%);color:ivory}.styles__modal__custom___3nT3k h3{margin:0;font-size:20px;font-family:"Cinzel Decorative",serif;text-align:center;margin:5px 0}.styles__modal__custom___3nT3k div{display:flex;flex-direction:column;margin:5px 0}.styles__modal__custom___3nT3k div span{margin-left:5px}.styles__overlay__custom___2hS45{position:fixed;top:0;left:0;right:0;bottom:0}.ReactModal__Overlay{opacity:0;transition:opacity 500ms ease-in-out}.ReactModal__Overlay--after-open{opacity:1;background-color:rgba(0,0,0,0.75) !important}.ReactModal__Overlay--before-close{opacity:0}.MuiSelect-outlined.MuiSelect-outlined{color:ivory;font-family:"Cinzel Decorative",serif}.MuiOutlinedInput-notchedOutline{border-color:#e3b130}.styles__members_container___2hl7b{color:ivory}.styles__members_container___2hl7b .styles__section__top___1OALT{display:flex;justify-content:space-between;align-items:flex-end}.styles__members_container--empty___W794o{text-align:center;font-family:"Cinzel Decorative",serif;margin-top:100px}.styles__members_container___2hl7b h2{margin:0;font-size:20px;font-family:"Cinzel Decorative",serif;text-align:center;margin:20px 0 15px}.styles__members_container___2hl7b svg{color:#e3b130}.styles__members_container__grid___2q0As{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));grid-gap:30px;width:100%;padding:10px 20px 40px}.styles__members_container___2hl7b .styles__backbtn___3N99D{font-family:"Cinzel Decorative",serif;position:relative;cursor:pointer}.styles__members_container___2hl7b .styles__backbtn___3N99D>svg{position:absolute;top:-2px;left:-20px}\n',""]),i.locals={charinfo_container:"styles__charinfo_container___35x0m",modal__custom:"styles__modal__custom___3nT3k",overlay__custom:"styles__overlay__custom___2hS45",members_container:"styles__members_container___2hl7b",section__top:"styles__section__top___1OALT","members_container--empty":"styles__members_container--empty___W794o",members_container__grid:"styles__members_container__grid___2q0As",backbtn:"styles__backbtn___3N99D"},t.a=i},"../node_modules/exenv/index.js":function(e,t,n){var o;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),s={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(o=function(){return s}.call(t,n,t,e))||(e.exports=o)}()},"../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function a(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function s(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function r(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,r=null,l=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?l="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==n||null!==r||null!==l){var i=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=a),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=s;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",(function(){return r})),o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0,s.__suppressDeprecationWarning=!0},"../node_modules/react-modal/lib/components/Modal.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("../node_modules/react/index.js"),r=m(s),l=m(n("../node_modules/react-dom/index.js")),i=m(n("../node_modules/prop-types/index.js")),c=m(n("../node_modules/react-modal/lib/components/ModalPortal.js")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("../node_modules/react-modal/lib/helpers/ariaAppHider.js")),d=n("../node_modules/react-modal/lib/helpers/safeHTMLElement.js"),f=m(d),p=n("../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");function m(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",v=d.canUseDOM&&void 0!==l.default.createPortal,O=function(){return v?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function g(e){return e()}var C=function(e){function t(){var e,n,a;_(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return n=a=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.removePortal=function(){!v&&l.default.unmountComponentAtNode(a.node);var e=g(a.props.parentSelector);e&&e.contains(a.node)?e.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(e){a.portal=e},a.renderPortal=function(e){var n=O()(a,r.default.createElement(c.default,o({defaultStyles:t.defaultStyles},e)),a.node);a.portalRef(n)},h(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(v||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,g(this.props.parentSelector).appendChild(this.node),!v&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:g(e.parentSelector),nextParent:g(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var o=this.props,a=o.isOpen,s=o.portalClassName;e.portalClassName!==s&&(this.node.className=s);var r=n.prevParent,l=n.nextParent;l!==r&&(r.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||a)&&!v&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&v?(!this.node&&v&&(this.node=document.createElement("div")),O()(r.default.createElement(c.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(s.Component);C.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.instanceOf(f.default),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func},C.defaultProps={isOpen:!1,portalClassName:b,bodyOpenClassName:y,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return r.default.createElement("div",e,t)},contentElement:function(e,t){return r.default.createElement("div",e,t)}},C.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(C),t.default=C},"../node_modules/react-modal/lib/components/ModalPortal.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("../node_modules/react/index.js"),l=_(n("../node_modules/prop-types/index.js")),i=m(n("../node_modules/react-modal/lib/helpers/focusManager.js")),c=_(n("../node_modules/react-modal/lib/helpers/scopeTab.js")),u=m(n("../node_modules/react-modal/lib/helpers/ariaAppHider.js")),d=m(n("../node_modules/react-modal/lib/helpers/classList.js")),f=_(n("../node_modules/react-modal/lib/helpers/safeHTMLElement.js")),p=_(n("../node_modules/react-modal/lib/helpers/portalOpenInstances.js"));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _(e){return e&&e.__esModule?e:{default:e}}n("../node_modules/react-modal/lib/helpers/bodyTrap.js");var h={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,a=e.htmlOpenClassName,s=e.bodyOpenClassName;s&&d.remove(document.body,s),a&&d.remove(document.getElementsByTagName("html")[0],a),o&&b>0&&0===(b-=1)&&u.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(i.returnFocus(n.props.preventScroll),i.teardownScopedFocus()):i.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),p.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(i.setupScopedFocus(n.node),i.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":a(t))?t:{base:h[e],afterOpen:h[e]+"--after-open",beforeClose:h[e]+"--before-close"},s=o.base;return n.state.afterOpen&&(s=s+" "+o.afterOpen),n.state.beforeClose&&(s=s+" "+o.beforeClose),"string"==typeof t&&t?s+" "+t:s},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&d.add(document.body,a),o&&d.add(document.getElementsByTagName("html")[0],o),n&&(b+=1,u.hide(t)),p.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,a=e.overlayClassName,s=e.defaultStyles,r=e.children,l=n?{}:s.content,i=a?{}:s.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",a),style:o({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},u=o({id:t,ref:this.setContentRef,style:o({},l,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(u,r);return this.props.overlayElement(c,d)}}]),t}(r.Component);y.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},y.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.instanceOf(f.default),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},t.default=y,e.exports=t.default},"../node_modules/react-modal/lib/helpers/ariaAppHider.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=i,t.setElement=function(e){var t=e;if("string"==typeof t&&r.canUseDOM){var n=document.querySelectorAll(t);i(n,t),t="length"in n?n[0]:n}return l=t||l},t.validateElement=c,t.hide=function(e){c(e)&&(e||l).setAttribute("aria-hidden","true")},t.show=function(e){c(e)&&(e||l).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){l=null},t.resetForTesting=function(){l=null};var o,a=n("../node_modules/warning/warning.js"),s=(o=a)&&o.__esModule?o:{default:o},r=n("../node_modules/react-modal/lib/helpers/safeHTMLElement.js");var l=null;function i(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){return!(!e&&!l)||((0,s.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},"../node_modules/react-modal/lib/helpers/bodyTrap.js":function(e,t,n){"use strict";var o,a=n("../node_modules/react-modal/lib/helpers/portalOpenInstances.js"),s=(o=a)&&o.__esModule?o:{default:o};var r=void 0,l=void 0,i=[];function c(){0!==i.length&&i[i.length-1].focusContent()}s.default.subscribe((function(e,t){r&&l||((r=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),r.style.position="absolute",r.style.opacity="0",r.setAttribute("tabindex","0"),r.addEventListener("focus",c),(l=r.cloneNode()).addEventListener("focus",c)),(i=t).length>0?(document.body.firstChild!==r&&document.body.insertBefore(r,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(r.parentElement&&r.parentElement.removeChild(r),l.parentElement&&l.parentElement.removeChild(l))}))},"../node_modules/react-modal/lib/helpers/classList.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var o={},a={};t.add=function(e,t){return n=e.classList,s="html"==e.nodeName.toLowerCase()?o:a,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(s,e),n.add(e)}));var n,s},t.remove=function(e,t){return n=e.classList,s="html"==e.nodeName.toLowerCase()?o:a,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(s,e),0===s[e]&&n.remove(e)}));var n,s}},"../node_modules/react-modal/lib/helpers/focusManager.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=c,t.handleFocus=u,t.markForFocusLater=function(){r.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==r.length&&(t=r.pop()).focus({preventScroll:e}))}catch(e){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){r.length>0&&r.pop()},t.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",u))};var o,a=n("../node_modules/react-modal/lib/helpers/tabbable.js"),s=(o=a)&&o.__esModule?o:{default:o};var r=[],l=null,i=!1;function c(){i=!0}function u(){if(i){if(i=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,s.default)(l)[0]||l).focus()}),0)}}},"../node_modules/react-modal/lib/helpers/portalOpenInstances.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=o,e.exports=t.default},"../node_modules/react-modal/lib/helpers/safeHTMLElement.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var o,a=n("../node_modules/exenv/index.js");var s=((o=a)&&o.__esModule?o:{default:o}).default,r=s.canUseDOM?window.HTMLElement:{};t.canUseDOM=s.canUseDOM;t.default=r},"../node_modules/react-modal/lib/helpers/scopeTab.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,s.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,a=t.shiftKey,r=n[0],l=n[n.length-1];if(e===document.activeElement){if(!a)return;o=l}l!==document.activeElement||a||(o=r);r===document.activeElement&&a&&(o=l);if(o)return t.preventDefault(),void o.focus();var i=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==i||"Chrome"==i[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var c=n.indexOf(document.activeElement);c>-1&&(c+=a?-1:1);if(void 0===(o=n[c]))return t.preventDefault(),void(o=a?l:r).focus();t.preventDefault(),o.focus()};var o,a=n("../node_modules/react-modal/lib/helpers/tabbable.js"),s=(o=a)&&o.__esModule?o:{default:o};e.exports=t.default},"../node_modules/react-modal/lib/helpers/tabbable.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(r)};
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
var o=/input|select|textarea|button|object/;function a(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function s(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(a(t))return!1;t=t.parentNode}return!0}(e)}function r(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&s(e,!n)}e.exports=t.default},"../node_modules/react-modal/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n("../node_modules/react-modal/lib/components/Modal.js"),s=(o=a)&&o.__esModule?o:{default:o};t.default=s.default,e.exports=t.default},"../node_modules/warning/warning.js":function(e,t,n){"use strict";var o=function(){};e.exports=o},"../src/components/Character/index.tsx":function(e,t,n){"use strict";var o=n("../node_modules/react/index.js"),a=n.n(o),s=n("../src/components/Loader/index.tsx"),r=n("../src/utils/index.ts"),l=n("../node_modules/react-modal/lib/index.js"),i=n.n(l),c=n("../src/hooks/index.tsx"),u=n("../node_modules/@material-ui/icons/VisibilitySharp.js"),d=n.n(u),f=n("../src/components/Character/styles.scss"),p=function(e,t,n,o){return new(n||(n=Promise))((function(a,s){function r(e){try{i(o.next(e))}catch(e){s(e)}}function l(e){try{i(o.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}i((o=o.apply(e,t||[])).next())}))};const m=({characterUrl:e="",shouldRenderModal:t=!0,suppliedCharacterData:n=!1})=>{t&&i.a.setAppElement("#root");const[l,u]=Object(o.useState)({}),[_,h]=Object(o.useState)(!1),[b,y]=Object(o.useState)(null),[v,{toggleTo:O}]=Object(c.b)();if(Object(o.useEffect)(()=>{0===Object.keys(l).length&&e&&!n?p(void 0,void 0,void 0,(function*(){h(!0);try{const t=yield Object(r.b)((e=>e.replace("https://www.anapioficeandfire.com/api/",""))(e));t.data&&u(t.data)}catch(e){y(e.message)}})):u(n)},[e]),_&&!l)return a.a.createElement(s.a,null);const{name:g,gender:C,culture:j,born:E,died:w,titles:x,aliases:S,father:M,mother:N,spouse:A,books:T,tvSeries:D,playedBy:P}=l;return b?a.a.createElement("span",{style:{fontSize:"25px",color:"white",width:"100%",textAlign:"center",marginTop:"20px",display:"block",fontFamily:"Cinzel Decorative"}},"We are experiencing technical difficulties, we apologize!"):a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:f.a.charinfo_container},a.a.createElement("h3",null,g),t&&a.a.createElement(d.a,{style:{cursor:"pointer"},onClick:()=>O(!0)}),t&&a.a.createElement(i.a,{isOpen:v,onRequestClose:()=>O(!1),contentLabel:"Character Modal",className:f.a.modal__custom,overlayClassName:f.a.overlay_custom},a.a.createElement("h3",null,g),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Gender:"),a.a.createElement("span",null,Object(r.a)(C))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Culture:"),a.a.createElement("span",null,Object(r.a)(j))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Born:"),a.a.createElement("span",null,Object(r.a)(E))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Died:"),a.a.createElement("span",null,Object(r.a)(w))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Titles:"),a.a.createElement("span",null,"Not Available"!==Object(r.a)(x))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Aliases:"),a.a.createElement("span",null,Object(r.a)(S))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Father:"),a.a.createElement("span",null,"Not Available"!==Object(r.a)(M)?a.a.createElement(m,{characterUrl:M,shouldRenderModal:!1}):Object(r.a)(M))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Mother:"),a.a.createElement("span",null,"Not Available"!==Object(r.a)(N)?a.a.createElement(m,{characterUrl:N,shouldRenderModal:!1}):Object(r.a)(N))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Spouse:"),a.a.createElement("span",null,"Not Available"!==Object(r.a)(A)?a.a.createElement(m,{characterUrl:A,shouldRenderModal:!1}):Object(r.a)(A))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Books:"),a.a.createElement("span",null,Object(r.d)(T))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"T.V. Appearances:"),a.a.createElement("span",null,Object(r.a)(D))),a.a.createElement("div",{className:f.a.charinfo_container__list__field},a.a.createElement("strong",{className:f.a.charinfo_container__list__field__title},"Played By:"),a.a.createElement("span",null,Object(r.a)(P))))))};t.a=m},"../src/components/Character/styles.scss":function(e,t,n){"use strict";var o=n("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=n.n(o),s=n("../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../node_modules/sass-resources-loader/lib/loader.js?!../src/components/Character/styles.scss"),r={injectType:"singletonStyleTag",insert:"head",singleton:!0};a()(s.a,r);t.a=s.a.locals||{}},"../src/hooks/index.tsx":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var o=n("../node_modules/react/index.js"),a=n("../src/utils/index.ts"),s=function(e,t,n,o){return new(n||(n=Promise))((function(a,s){function r(e){try{i(o.next(e))}catch(e){s(e)}}function l(e){try{i(o.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}i((o=o.apply(e,t||[])).next())}))};const r=(e=!1)=>{const[t,n]=Object(o.useState)(e);return[t,{toggleTo:e=>n(null!=e?e:!t)}]},l=(e,t,n)=>{const r=Object(o.useRef)({}),l=Object(o.useRef)(!0),{fetchDispatchAction:i,successDispatchAction:c,failureDispatchAction:u}=t;Object(o.useEffect)(()=>()=>{l.current=!1},[]),Object(o.useEffect)(()=>{if(e&&""!==e){(()=>s(void 0,void 0,void 0,(function*(){if(i(n),r.current[e]){const t=r.current[e];l.current&&c(t)}else try{const t=l.current&&(yield Object(a.b)(e)),{data:n}=t;r.current[e]=n,l.current&&c(n)}catch(e){u(e.message)}})))()}},[e])}}}]);