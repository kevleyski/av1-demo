!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)__webpack_require__.d(r,o,function(t){return e[t]}.bind(null,o));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(e,t){e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}},function(e,t){function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof2(e){return typeof e}:function _typeof2(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(t){return"function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?e.exports=_typeof=function _typeof(e){return _typeof2(e)}:e.exports=_typeof=function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)},_typeof(t)}e.exports=_typeof},function(e,t,r){"use strict";r(0)(r(5))},function(e,t,r){"use strict";var o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=new(o(r(6)).default)(["loadedMetadata","audioFormat","audioBuffer","cpuTime"],{init:function init(e,t){this.target.init(t)},processHeader:function processHeader(e,t){this.target.processHeader(e[0],function(e){t([e])})},processAudio:function processAudio(e,t){this.target.processAudio(e[0],function(e){t([e])})}});t.default=n},function(e,t,r){"use strict";var o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(3)),s=o(r(1)),i=o(r(2)),u=o(r(7)),a=function(){function OGVWorkerSupport(e,t){var r=this;(0,s.default)(this,OGVWorkerSupport),this.propList=e,this.handlers=t,this.transferables=function(){var e=new ArrayBuffer(1024),t=new Uint8Array(e);try{return postMessage({action:"transferTest",bytes:t},[e]),!e.byteLength}catch(e){return!1}}(),this.target=null,this.sentProps={},this.pendingEvents=[],this.handlers.construct=function(e,t){var o=e[0],n=e[1];u.default.loadClass(o,function(e){e(n).then(function(e){for(r.target=e,t();r.pendingEvents.length;)r.handleEvent(r.pendingEvents.shift())})})},addEventListener("message",function(e){r.workerOnMessage(e)})}return(0,i.default)(OGVWorkerSupport,[{key:"handleEvent",value:function handleEvent(e){var t=this;this.handlers[e.action].call(this,e.args,function(r){r=r||[];var o={},n=[];t.propList.forEach(function(e){var r=t.target[e];if(t.sentProps[e]!==r)if(t.sentProps[e]=r,"duration"==e&&isNaN(r)&&isNaN(t.sentProps[e]));else if("audioBuffer"==e){if(o[e]=r,r)for(var s=0;s<r.length;s++)n.push(r[s].buffer)}else"frameBuffer"==e?(o[e]=r,r&&(n.push(r.y.bytes.buffer),n.push(r.u.bytes.buffer),n.push(r.v.bytes.buffer))):o[e]=r});var s={action:"callback",callbackId:e.callbackId,args:r,props:o};t.transferables?postMessage(s,n):postMessage(s)})}},{key:"workerOnMessage",value:function workerOnMessage(e){var t=e.data;t&&"object"===(0,n.default)(t)&&("transferTest"==t.action||("string"!=typeof t.action||"string"!=typeof t.callbackId||"object"!==(0,n.default)(t.args)?console.log("invalid message data",t):t.action in this.handlers?"construct"==t.action?this.handleEvent(t):this.target?this.handleEvent(t):this.pendingEvents.push(t):console.log("invalid message action",t.action)))}}]),OGVWorkerSupport}();t.default=a},function(e,t,r){"use strict";var o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),s=o(r(2)),i=o(r(8)),u=o(r(10)),a=o(r(11)),c=new(function(e){function OGVLoaderWorker(){return(0,n.default)(this,OGVLoaderWorker),(0,i.default)(this,(0,u.default)(OGVLoaderWorker).apply(this,arguments))}return(0,a.default)(OGVLoaderWorker,e),(0,s.default)(OGVLoaderWorker,[{key:"loadScript",value:function loadScript(e,t){importScripts(e),t()}},{key:"getGlobal",value:function getGlobal(){return self}}]),OGVLoaderWorker}(o(r(13)).default));t.default=c},function(e,t,r){var o=r(3),n=r(9);e.exports=function _possibleConstructorReturn(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?n(e):t}},function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(t)}e.exports=_getPrototypeOf},function(e,t,r){var o=r(12);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(t,r)}e.exports=_setPrototypeOf},function(e,t,r){"use strict";var o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),s=o(r(2)),i=o(r(14)),u={OGVDemuxerOgg:"ogv-demuxer-ogg.js",OGVDemuxerOggW:"ogv-demuxer-ogg-wasm.js",OGVDemuxerWebM:"ogv-demuxer-webm.js",OGVDemuxerWebMW:"ogv-demuxer-webm-wasm.js",OGVDecoderAudioOpus:"ogv-decoder-audio-opus.js",OGVDecoderAudioOpusW:"ogv-decoder-audio-opus-wasm.js",OGVDecoderAudioVorbis:"ogv-decoder-audio-vorbis.js",OGVDecoderAudioVorbisW:"ogv-decoder-audio-vorbis-wasm.js",OGVDecoderVideoTheora:"ogv-decoder-video-theora.js",OGVDecoderVideoTheoraW:"ogv-decoder-video-theora-wasm.js",OGVDecoderVideoVP8:"ogv-decoder-video-vp8.js",OGVDecoderVideoVP8W:"ogv-decoder-video-vp8-wasm.js",OGVDecoderVideoVP8MTW:"ogv-decoder-video-vp8-mt-wasm.js",OGVDecoderVideoVP9:"ogv-decoder-video-vp9.js",OGVDecoderVideoVP9W:"ogv-decoder-video-vp9-wasm.js",OGVDecoderVideoVP9MTW:"ogv-decoder-video-vp9-mt-wasm.js",OGVDecoderVideoAV1:"ogv-decoder-video-av1.js",OGVDecoderVideoAV1W:"ogv-decoder-video-av1-wasm.js",OGVDecoderVideoAV1SIMDW:"ogv-decoder-video-av1-simd-wasm.js",OGVDecoderVideoAV1MTW:"ogv-decoder-video-av1-mt-wasm.js",OGVDecoderVideoAV1SIMDMTW:"ogv-decoder-video-av1-simd-mt-wasm.js"},a=function(){function OGVLoaderBase(){(0,n.default)(this,OGVLoaderBase),this.base=this.defaultBase()}return(0,s.default)(OGVLoaderBase,[{key:"defaultBase",value:function defaultBase(){}},{key:"wasmSupported",value:function wasmSupported(){return i.default.wasmSupported()}},{key:"scriptForClass",value:function scriptForClass(e){return u[e]}},{key:"urlForClass",value:function urlForClass(e){var t=this.scriptForClass(e);if(t)return this.urlForScript(t);throw new Error("asked for URL for unknown class "+e)}},{key:"urlForScript",value:function urlForScript(e){if(e){var t=this.base;return void 0===t?t="":t+="/",t+e+"?version="+encodeURIComponent("1.7.0-20190730055317-3d497b1")}throw new Error("asked for URL for unknown script "+e)}},{key:"loadClass",value:function loadClass(e,t,r){var o=this;r=r||{};var n=this.getGlobal(),s=this.urlForClass(e),i=function classWrapper(t){return(t=t||{}).locateFile=function(e){return"data:"===e.slice(0,5)?e:o.urlForScript(e)},t.mainScriptUrlOrBlob=o.scriptForClass(e)+"?version="+encodeURIComponent("1.7.0-20190730055317-3d497b1"),n[e](t)};"function"==typeof n[e]?t(i):this.loadScript(s,function(){t(i)})}}]),OGVLoaderBase}();t.default=a},function(e,t,r){"use strict";var o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(3)),s=o(r(1)),i=o(r(2));var u=new(function(){function WebAssemblyChecker(){(0,s.default)(this,WebAssemblyChecker),this.tested=!1,this.testResult=void 0}return(0,i.default)(WebAssemblyChecker,[{key:"wasmSupported",value:function wasmSupported(){if(!this.tested){try{"object"===("undefined"==typeof WebAssembly?"undefined":(0,n.default)(WebAssembly))?this.testResult=function testSafariWebAssemblyBug(){var e=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),t=new WebAssembly.Module(e);return 0!==new WebAssembly.Instance(t,{}).exports.test(4)}():this.testResult=!1}catch(e){console.log("Exception while testing WebAssembly",e),this.testResult=!1}this.tested=!0}return this.testResult}}]),WebAssemblyChecker}());t.default=u}]);