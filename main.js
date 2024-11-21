(()=>{"use strict";var t={208:(t,n,e)=>{e.d(n,{A:()=>h});var r=e(601),a=e.n(r),i=e(314),o=e.n(i),c=e(417),s=e.n(c),d=new URL(e(831),e.b),u=o()(a());u.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Titan+One&family=Varela+Round&display=swap);"]);var l=s()(d);u.push([t.id,`:root{\n    --color-highlight: #fdba74;\n    --color-background-dark: #000000c0;\n    --color-background-light: rgba(255, 255, 255, 0.7);\n}\n\nbody{\n    background-color: #ffedd5;\n    background-image: url(${l});\n    font-family: "Roboto", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\n#content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#nav-container{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    margin: 15px;\n}\n\n#search-container{\n    width: 60ch;\n}\n\n#search-container form{\n    min-width: 10ch;\n    max-width: 80ch;\n    display: grid;\n    gap: 10px;\n    grid-template-columns: 1fr max-content;\n    align-items: center;\n}\n\n#search-container input[type=text]{\n    padding: 10px 15px;\n    font-size: 18px;\n    border: none;\n    border-radius: 50px;\n}\n\n#search-container button {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    padding: 6px 10px;\n    background: white;\n    font-size: 17px;\n    border: none;\n    cursor: pointer;\n}\n\n#search-container button:hover {\n    background: var(--color-highlight);\n}\n\n#current-conditions-container{\n    display: flex;\n    width: 100ch;\n}\n\n.loader {\n    border: 10px solid white;\n    border-top: 10px solid var(--color-highlight);\n    border-radius: 50%;\n    width: 100px;\n    height: 100px;\n    animation: spin 1s linear infinite;\n    margin: 100px auto;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n#location-container{\n    display: flex;\n    align-items: center;\n    font-size: 1.5rem;\n    font-family: "Varela Round", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    gap: 10px;\n    background-color: var(--color-background-light);\n    padding: 10px;\n    border-radius: 10px;\n}\n\n#content > div.flex{\n    width: 100%;\n    justify-content: center;\n}\n\n#weather-display-container{\n    width: 550px;\n    display: grid;\n    row-gap: 20px;\n}\n\n#temperature-unit-container{\n    flex: none;\n    display: flex;\n    background-color: white;\n    border-radius: 10px;\n    padding: 10px 0px;\n}\n\n.celsius-button, .fahrenheit-button{\n    padding: 0px 10px;\n    font-weight: 300;\n    transition: 0.1s;\n    cursor: pointer;\n}\n\n.celsius-button{\n    border-right: 1px solid black;\n}\n\n#location-container img{\n    width: 1em;\n}\n\n.bold{\n    font-weight: 600;\n}\n\n.flex{\n    display: flex;\n}\n\n#conditions-container .weather-icon{\n    display: grid;\n    place-content: center;\n}\n\n#conditions-container .weather-icon img{\n    width: 1.5em;\n}\n\n#conditions-container{\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    background-color: var(--color-background-dark);\n    border-radius: 10px;\n    color: white;\n}\n\n#temperature-condition-container .date-container{\n    font-size: 1.2em;\n    font-weight: 300;\n}\n\n#temperature-condition-container .current-condition{\n    font-size: 3em;\n    font-weight: 500;\n    font-family: "Titan One", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\n#conditions-container .weather-description{\n    font-family: "Varela Round", serif;\n    font-weight: 400;\n    font-style: normal;\n    margin-top: auto;\n}\n\n#temperature-condition-container .temperature-range-container{\n    display: flex;\n    gap: 15px;\n    font-family: "Varela Round", serif;\n    font-weight: 400;\n    font-size: 0.9em;\n    font-style: normal;\n}\n\n#secondary-conditions-container{\n    display: flex;\n    text-align: right;\n    flex-direction: column;\n    align-items: end;\n    font-size: 0.95rem;\n    font-weight: 300;\n}\n\n#wallpaper {\n    z-index: -1;\n    position: fixed;\n    object-fit: cover;\n    right: 0;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%;\n}\n\n#hourly-forecast-container{\n    background-color: var(--color-background-light);\n    border-radius: 10px;\n    padding: 10px;\n    width: inherit;\n    max-width: 95vw;\n}\n\n#hourly-forecast-container .scroll-container{\n    display: flex;\n    gap: 10px;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.heading{\n    font-family: "Varela Round", serif;\n    font-weight: 400;\n    font-style: normal;\n    margin-bottom: 10px;\n    text-align: center;\n}\n\n.hour-forecast-container{\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    background-color: var(--color-background-dark);\n    color: white;\n    border-radius: 10px;\n    padding: 10px;\n    gap: 10px;\n}\n\n#ten-day-forecast-container{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.day-forecast-container.highlight{\n    background-color: var(--color-background-dark);\n    color: white;\n}\n\n.day-forecast-container{\n    display: grid;\n    grid-template-columns: 2fr 1fr auto;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 10px;\n    border-radius: 10px;\n    background-color: var(--color-background-light);\n    cursor: pointer;\n}\n\n.day-forecast-container .temperature-container{\n    font-weight: 300;\n}\n\n`,""]);const h=u},380:(t,n,e)=>{e.d(n,{A:()=>c});var r=e(601),a=e.n(r),i=e(314),o=e.n(i)()(a());o.push([t.id,'/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n    4.1 Fallback fonts\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n  /*\n    5. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    6. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    7. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    8. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }',""]);const c=o},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},417:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},o=[],c=0;c<t.length;c++){var s=t[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var h=e(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)n[h].references++,n[h].updater(f);else{var p=a(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:p,references:1})}o.push(l)}return o}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var i=r(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<i.length;o++){var c=e(i[o]);n[c].references--}for(var s=r(t,a),d=0;d<i.length;d++){var u=e(i[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},831:t=>{t.exports="data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23f97316%27 fill-opacity=%270.35%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),a=e.n(r),i=e(825),o=e.n(i),c=e(659),s=e.n(c),d=e(56),u=e.n(d),l=e(540),h=e.n(l),f=e(113),p=e.n(f),m=e(380),g={};g.styleTagTransform=p(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h(),a()(m.A,g),m.A&&m.A.locals&&m.A.locals;var b=e(208),y={};y.styleTagTransform=p(),y.setAttributes=u(),y.insert=s().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=h(),a()(b.A,y),b.A&&b.A.locals&&b.A.locals;const w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function v(t){return(n={})=>{const e=n.width?String(n.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}const x={date:v({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:v({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:v({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},C={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function k(t){return(n,e)=>{let r;if("formatting"===(e?.context?String(e.context):"standalone")&&t.formattingValues){const n=t.defaultFormattingWidth||t.defaultWidth,a=e?.width?String(e.width):n;r=t.formattingValues[a]||t.formattingValues[n]}else{const n=t.defaultWidth,a=e?.width?String(e.width):t.defaultWidth;r=t.values[a]||t.values[n]}return r[t.argumentCallback?t.argumentCallback(n):n]}}const M={ordinalNumber:(t,n)=>{const e=Number(t),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},era:k({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:k({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:k({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:k({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:k({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function S(t){return(n,e={})=>{const r=e.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=n.match(a);if(!i)return null;const o=i[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?function(t){for(let n=0;n<t.length;n++)if(t[n].test(o))return n}(c):function(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&t[n].test(o))return n}(c);let d;return d=t.valueCallback?t.valueCallback(s):s,d=e.valueCallback?e.valueCallback(d):d,{value:d,rest:n.slice(o.length)}}}const P={ordinalNumber:(T={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,n={})=>{const e=t.match(T.matchPattern);if(!e)return null;const r=e[0],a=t.match(T.parsePattern);if(!a)return null;let i=T.valueCallback?T.valueCallback(a[0]):a[0];return i=n.valueCallback?n.valueCallback(i):i,{value:i,rest:t.slice(r.length)}}),era:S({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:S({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:S({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:S({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var T;const E={code:"en-US",formatDistance:(t,n,e)=>{let r;const a=w[t];return r="string"==typeof a?a:1===n?a.one:a.other.replace("{{count}}",n.toString()),e?.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r},formatLong:x,formatRelative:(t,n,e,r)=>C[t],localize:M,match:P,options:{weekStartsOn:0,firstWeekContainsDate:1}};let L={};function A(){return L}Math.pow(10,8);const D=6048e5,W=Symbol.for("constructDateFrom");function H(t,n){return"function"==typeof t?t(n):t&&"object"==typeof t&&W in t?t[W](n):t instanceof Date?new t.constructor(n):new Date(n)}function j(t,n){return H(n||t,t)}function O(t){const n=j(t),e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),+t-+e}function F(t,...n){const e=H.bind(null,t||n.find((t=>"object"==typeof t)));return n.map(e)}function Y(t,n){const e=j(t,n?.in);return e.setHours(0,0,0,0),e}function q(t,n){const e=j(t,n?.in);return function(t,n,e){const[r,a]=F(e?.in,t,n),i=Y(r),o=Y(a),c=+i-O(i),s=+o-O(o);return Math.round((c-s)/864e5)}(e,function(t,n){const e=j(t,n?.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}(e))+1}function z(t,n){const e=A(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??e.weekStartsOn??e.locale?.options?.weekStartsOn??0,a=j(t,n?.in),i=a.getDay(),o=(i<r?7:0)+i-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function N(t,n){return z(t,{...n,weekStartsOn:1})}function I(t,n){const e=j(t,n?.in),r=e.getFullYear(),a=H(e,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=N(a),o=H(e,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const c=N(o);return e.getTime()>=i.getTime()?r+1:e.getTime()>=c.getTime()?r:r-1}function $(t,n){const e=j(t,n?.in),r=+N(e)-+function(t,n){const e=I(t,n),r=H(n?.in||t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),N(r)}(e);return Math.round(r/D)+1}function B(t,n){const e=j(t,n?.in),r=e.getFullYear(),a=A(),i=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,o=H(n?.in||t,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const c=z(o,n),s=H(n?.in||t,0);s.setFullYear(r,0,i),s.setHours(0,0,0,0);const d=z(s,n);return+e>=+c?r+1:+e>=+d?r:r-1}function R(t,n){const e=j(t,n?.in),r=+z(e,n)-+function(t,n){const e=A(),r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??e.firstWeekContainsDate??e.locale?.options?.firstWeekContainsDate??1,a=B(t,n),i=H(n?.in||t,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),z(i,n)}(e,n);return Math.round(r/D)+1}function Q(t,n){return(t<0?"-":"")+Math.abs(t).toString().padStart(n,"0")}const G={y(t,n){const e=t.getFullYear(),r=e>0?e:1-e;return Q("yy"===n?r%100:r,n.length)},M(t,n){const e=t.getMonth();return"M"===n?String(e+1):Q(e+1,2)},d:(t,n)=>Q(t.getDate(),n.length),a(t,n){const e=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];default:return"am"===e?"a.m.":"p.m."}},h:(t,n)=>Q(t.getHours()%12||12,n.length),H:(t,n)=>Q(t.getHours(),n.length),m:(t,n)=>Q(t.getMinutes(),n.length),s:(t,n)=>Q(t.getSeconds(),n.length),S(t,n){const e=n.length,r=t.getMilliseconds();return Q(Math.trunc(r*Math.pow(10,e-3)),n.length)}},U={G:function(t,n,e){const r=t.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});default:return e.era(r,{width:"wide"})}},y:function(t,n,e){if("yo"===n){const n=t.getFullYear(),r=n>0?n:1-n;return e.ordinalNumber(r,{unit:"year"})}return G.y(t,n)},Y:function(t,n,e,r){const a=B(t,r),i=a>0?a:1-a;return"YY"===n?Q(i%100,2):"Yo"===n?e.ordinalNumber(i,{unit:"year"}):Q(i,n.length)},R:function(t,n){return Q(I(t),n.length)},u:function(t,n){return Q(t.getFullYear(),n.length)},Q:function(t,n,e){const r=Math.ceil((t.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,n,e){const r=Math.ceil((t.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return Q(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,n,e){const r=t.getMonth();switch(n){case"M":case"MM":return G.M(t,n);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(t,n,e){const r=t.getMonth();switch(n){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,e,r){const a=R(t,r);return"wo"===n?e.ordinalNumber(a,{unit:"week"}):Q(a,n.length)},I:function(t,n,e){const r=$(t);return"Io"===n?e.ordinalNumber(r,{unit:"week"}):Q(r,n.length)},d:function(t,n,e){return"do"===n?e.ordinalNumber(t.getDate(),{unit:"date"}):G.d(t,n)},D:function(t,n,e){const r=q(t);return"Do"===n?e.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,n.length)},E:function(t,n,e){const r=t.getDay();switch(n){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(t,n,e,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(i);case"ee":return Q(i,2);case"eo":return e.ordinalNumber(i,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(t,n,e,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(i);case"cc":return Q(i,n.length);case"co":return e.ordinalNumber(i,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(t,n,e){const r=t.getDay(),a=0===r?7:r;switch(n){case"i":return String(a);case"ii":return Q(a,n.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(t,n,e){const r=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,n,e){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",n){case"b":case"bb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(a,{width:"narrow",context:"formatting"});default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,n,e){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",n){case"B":case"BB":case"BBB":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(a,{width:"narrow",context:"formatting"});default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,n,e){if("ho"===n){let n=t.getHours()%12;return 0===n&&(n=12),e.ordinalNumber(n,{unit:"hour"})}return G.h(t,n)},H:function(t,n,e){return"Ho"===n?e.ordinalNumber(t.getHours(),{unit:"hour"}):G.H(t,n)},K:function(t,n,e){const r=t.getHours()%12;return"Ko"===n?e.ordinalNumber(r,{unit:"hour"}):Q(r,n.length)},k:function(t,n,e){let r=t.getHours();return 0===r&&(r=24),"ko"===n?e.ordinalNumber(r,{unit:"hour"}):Q(r,n.length)},m:function(t,n,e){return"mo"===n?e.ordinalNumber(t.getMinutes(),{unit:"minute"}):G.m(t,n)},s:function(t,n,e){return"so"===n?e.ordinalNumber(t.getSeconds(),{unit:"second"}):G.s(t,n)},S:function(t,n){return G.S(t,n)},X:function(t,n,e){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(n){case"X":return J(r);case"XXXX":case"XX":return V(r);default:return V(r,":")}},x:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"x":return J(r);case"xxxx":case"xx":return V(r);default:return V(r,":")}},O:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+X(r,":");default:return"GMT"+V(r,":")}},z:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+X(r,":");default:return"GMT"+V(r,":")}},t:function(t,n,e){return Q(Math.trunc(+t/1e3),n.length)},T:function(t,n,e){return Q(+t,n.length)}};function X(t,n=""){const e=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return 0===i?e+String(a):e+String(a)+n+Q(i,2)}function J(t,n){return t%60==0?(t>0?"-":"+")+Q(Math.abs(t)/60,2):V(t,n)}function V(t,n=""){const e=t>0?"-":"+",r=Math.abs(t);return e+Q(Math.trunc(r/60),2)+n+Q(r%60,2)}const _=(t,n)=>{switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});default:return n.date({width:"full"})}},K=(t,n)=>{switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});default:return n.time({width:"full"})}},Z={p:K,P:(t,n)=>{const e=t.match(/(P+)(p+)?/)||[],r=e[1],a=e[2];if(!a)return _(t,n);let i;switch(r){case"P":i=n.dateTime({width:"short"});break;case"PP":i=n.dateTime({width:"medium"});break;case"PPP":i=n.dateTime({width:"long"});break;default:i=n.dateTime({width:"full"})}return i.replace("{{date}}",_(r,n)).replace("{{time}}",K(a,n))}},tt=/^D+$/,nt=/^Y+$/,et=["D","DD","YY","YYYY"];function rt(t){return!(!((n=t)instanceof Date||"object"==typeof n&&"[object Date]"===Object.prototype.toString.call(n))&&"number"!=typeof t||isNaN(+j(t)));var n}const at=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,it=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ot=/^'([^]*?)'?$/,ct=/''/g,st=/[a-zA-Z]/;function dt(t,n,e){const r=A(),a=e?.locale??r.locale??E,i=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=j(t,e?.in);if(!rt(c))throw new RangeError("Invalid time value");let s=n.match(it).map((t=>{const n=t[0];return"p"===n||"P"===n?(0,Z[n])(t,a.formatLong):t})).join("").match(at).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const n=t[0];if("'"===n)return{isToken:!1,value:ut(t)};if(U[n])return{isToken:!0,value:t};if(n.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(s=a.localize.preprocessor(c,s));const d={firstWeekContainsDate:i,weekStartsOn:o,locale:a};return s.map((r=>{if(!r.isToken)return r.value;const i=r.value;return(!e?.useAdditionalWeekYearTokens&&function(t){return nt.test(t)}(i)||!e?.useAdditionalDayOfYearTokens&&function(t){return tt.test(t)}(i))&&function(t,n,e){const r=function(t,n,e){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,n,e);if(console.warn(r),et.includes(t))throw new RangeError(r)}(i,n,String(t)),(0,U[i[0]])(c,i,a.localize,d)})).join("")}function ut(t){const n=t.match(ot);return n?n[1].replace(ct,"'"):t}function lt(t,n){return function(t,n,e){const[r,a]=F(e?.in,t,n);return+Y(r)==+Y(a)}(H(n?.in||t,t),function(t){return H(t,Date.now())}(n?.in||t))}const ht=e.p+"738fbaf6e8b043274ab2.svg",ft=e.p+"9d0aba067148fb459f01.svg",pt=e.p+"6b05f1fde22268f2e764.svg",mt=e.p+"f65fbe9cb8b784f97b89.svg",gt=e.p+"d8a93782d282a98f7eb3.svg",bt=e.p+"521699a8b66dd3de6e23.svg",yt=e.p+"e29f8817ddc0af274d56.svg",wt=e.p+"040a62c7af987c4fa794.svg",vt=e.p+"457ba1ccef9fb45a2b84.svg",xt={snow:{icon:ht,wallpaper:e.p+"8acd6ca4ae05b33ec60a.mp4"},rain:{icon:ft,wallpaper:e.p+"a391b88781af23a5c8b6.mp4"},fog:{icon:pt,wallpaper:e.p+"02b9b29c2bce0b47447e.mp4"},wind:{icon:mt,wallpaper:e.p+"933ce2c67beab6f6f726.mp4"},cloudy:{icon:gt,wallpaper:e.p+"bd38fb7c51fd8c608506.mp4"},"partly-cloudy-day":{icon:bt,wallpaper:e.p+"d63410e1ebcbd07e59a5.mp4"},"partly-cloudy-night":{icon:yt,wallpaper:e.p+"48012499d444aa0f237f.mp4"},"clear-day":{icon:wt,wallpaper:e.p+"7d7b970f6872357529d5.mp4"},"clear-night":{icon:vt,wallpaper:e.p+"0f890bfbbbedc44cdb81.mp4"}};function Ct(t){const n=document.createElement("div");let e;return n.classList.add("weather-icon"),t in xt&&(e=xt[t].icon),n.appendChild(function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const e=document.createElement("img");return e.src=t,""!==n&&e.setAttribute("alt",n),e}(e,t)),n}const kt=e.p+"54ff7732bb1a5ff166c6.svg",Mt=e.p+"8ed820373498e050ba48.svg",St=document.getElementById("nav-container"),Pt=document.getElementById("weather-display-container");let Tt=localStorage.getItem("temperatureUnit")||"celsius";function Et(t,n){const e=At({type:"div",classList:["temperature-container"],attribute:[["temp-unit","none"],["prefix",arguments.length>2&&void 0!==arguments[2]?arguments[2]:""],["fahrenheit-value",t]]});return Lt(e,n),e}function Lt(t,n){if(t.getAttribute("temp-unit")!=n){switch(n){case"fahrenheit":t.textContent=`${t.getAttribute("prefix")} ${t.getAttribute("fahrenheit-value")}°F`;break;case"celsius":t.textContent=`${t.getAttribute("prefix")} ${e=t.getAttribute("fahrenheit-value"),(5*(e-32)/9).toFixed(1)}°C`}t.setAttribute("temp-unit",n)}var e}function At(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"div"};const n=document.createElement(t.type);if("id"in t&&(n.id=t.id),"classList"in t)for(const e of t.classList)n.classList.add(e);if("attribute"in t)for(const e of t.attribute)n.setAttribute(e[0],e[1]);return"text"in t&&(n.textContent=t.text),n}function Dt(t){if(Tt!=t){const n=document.querySelectorAll(".temperature-container");for(const e of n)Lt(e,t);Tt=t,localStorage.setItem("temperatureUnit",Tt)}}function Wt(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const e=document.createElement("img");return e.src=t,""!==n&&e.setAttribute("alt",n),e}function Ht(t){let n=document.getElementById("conditions-container");null===n&&(n=At({type:"div",id:"conditions-container"}),Pt.appendChild(n)),n.innerHTML="",function(t){if(!t in xt)return;const n=xt[t].wallpaper;let e=document.getElementById("wallpaper-container");if(null===e&&(e=document.createElement("div"),e.id="wallpaper-container",e.setAttribute("condition","none"),document.body.appendChild(e)),e.getAttribute("condition")===t)return;e.setAttribute("condition",t),e.innerHTML="";const r=document.createElement("video");r.setAttribute("autoplay",""),r.setAttribute("muted",""),r.setAttribute("loop",""),r.setAttribute("playsinline",""),r.id="wallpaper";const a=document.createElement("source");a.setAttribute("src",n),a.setAttribute("type","video/mp4"),r.appendChild(a),e.appendChild(r)}(t.icon);const e=At({type:"div",id:"temperature-condition-container"});n.appendChild(e);const r=At({type:"div",classList:["date-container"],text:Yt(t.datetime)});e.appendChild(r);const a=At({type:"div",classList:["flex","current-condition"]});e.appendChild(a),a.appendChild(Et(t.temp,Tt)),a.appendChild(Ct(t.icon));const i=At({type:"div",classList:["flex","temperature-range-container"]});e.appendChild(i);const o=Et(t.tempmax,Tt,"High"),c=Et(t.tempmin,Tt,"Low");i.appendChild(o),i.appendChild(c);const s=At({type:"div",id:"secondary-conditions-container"});n.appendChild(s);const d=At({type:"div",classList:["feels-like-container"]});s.appendChild(d),d.appendChild(Et(t.feelslike,Tt,"Feels like"));const u=At({type:"div",text:`UV Index ${t.uvindex}`});s.appendChild(u);const l=At({type:"div",text:`Humidity ${t.humidity}%`});s.appendChild(l);const h=At({type:"div",classList:["weather-description"],text:`*${t.description||t.conditions}`});s.appendChild(h)}function jt(t){let n=document.getElementById("hourly-forecast-container");null===n&&(n=At({type:"div",id:"hourly-forecast-container"}),Pt.appendChild(n)),n.innerHTML="",n.appendChild(At({type:"div",classList:["heading"],text:"Hourly Forecast"}));const e=At({type:"div",classList:["scroll-container"]});n.appendChild(e);for(const n of t)e.appendChild(Ot(n))}function Ot(t){const n=At({type:"div",classList:["hour-forecast-container"]});return n.appendChild(Et(t.temp,Tt)),n.appendChild(Ct(t.icon)),n.appendChild(At({type:"div",classList:["time-container"],text:dt(new Date(`December 17, 1995 ${t.datetime}`),"h aaa")})),n}function Ft(t){const n=At({type:"div",classList:["day-forecast-container"]}),e=At({type:"div",classList:["date-description"],text:Yt(t.datetime)});n.appendChild(e),n.appendChild(Ct(t.icon));const r=At({type:"div"});return n.appendChild(r),r.appendChild(Et(t.tempmax,Tt,"↑")),r.appendChild(Et(t.tempmin,Tt,"↓")),n.onclick=()=>{const e=document.querySelector(".day-forecast-container.highlight");null!==e&&e.classList.remove("highlight"),n.classList.add("highlight"),Ht(t),jt(t.hours)},n}function Yt(t){return new RegExp(/^(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9])?$/).test(t)?`Today ${t}`:lt(t)?"Today":dt(t,"eee, d MMM")}function qt(t){if(t){Pt.innerHTML="";const t=At({type:"div",classList:["loader"]});Pt.appendChild(t)}else Pt.removeChild(Pt.querySelector(".loader"))}async function zt(t){try{qt(!0);const n=await async function(t){try{const n=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${t}?key=LZH27Q7URJEH39RX3W5DDG2H7`,{mode:"cors"});return await n.json()}catch(t){console.log(t)}}(t);qt(!1),function(t){Pt.innerHTML="",function(t){const n=At({type:"div",id:"location-container"});n.appendChild(Wt(Mt));const e=At({type:"div",text:t});n.appendChild(e),Pt.appendChild(n)}(t.resolvedAddress),t.currentConditions.tempmax=t.days[0].tempmax,t.currentConditions.tempmin=t.days[0].tempmin,Ht(t.currentConditions),jt(t.days[0].hours),function(t){let n=document.getElementById("ten-day-forecast-container");null===n&&(n=At({type:"div",id:"ten-day-forecast-container"}),Pt.appendChild(n)),n.innerHTML="";for(let e=0;e<8;e++)n.appendChild(Ft(t[e]))}(t.days)}(n)}catch(t){console.log(t)}}!async function(){!function(){const t=At({type:"div",id:"search-container"});St.appendChild(t);const n=At({type:"form"}),e=At({type:"input",attribute:[["type","text"],["placeholder","Search location..."],["name","location"]]});n.appendChild(e);const r=At({type:"button",attribute:[["type","submit"]]});r.appendChild(Wt(kt,"Search")),n.appendChild(r),n.addEventListener("submit",(t=>{t.preventDefault(),zt(e.value)})),t.innerHTML="",t.appendChild(n)}(),function(){const t=At({type:"div",id:"temperature-unit-container"});St.appendChild(t);const n=At({type:"div",classList:["celsius-button"],text:"°C"});t.appendChild(n);const e=At({type:"div",text:"°F",classList:["fahrenheit-button"]});switch(t.appendChild(e),n.onclick=()=>{e.classList.remove("bold"),n.classList.add("bold"),Dt("celsius")},e.onclick=()=>{n.classList.remove("bold"),e.classList.add("bold"),Dt("fahrenheit")},Tt){case"celsius":n.classList.add("bold");break;case"fahrenheit":e.classList.add("bold")}}();try{qt(!0);const t=await async function(){try{const t=await fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=da4cced2b4484b65bfe629c42c1e7c05",{method:"GET"}),n=await t.json();return`${n.city.name}, ${n.country.name}`}catch(t){console.error("IP Location Error",t)}}();qt(!1),zt(t)}catch(t){qt(!1),console.log(t)}}()})();