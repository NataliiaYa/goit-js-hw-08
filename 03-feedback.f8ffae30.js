function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,o,i,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function j(e){return l=e,f=setTimeout(S,t),c?y(e):a}function x(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function S(){var e=v();if(x(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?m(n,i-(e-l)):n}(e))}function T(e){return f=void 0,p&&r?y(e):(r=o=void 0,a)}function h(){var e=v(),n=x(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=o=f=void 0},h.flush=function(){return void 0===f?a:T(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),inputarea:document.querySelector(".feedback-form input")};y.form.addEventListener("submit",(function(e){if(e.preventDefolt(),""===input.value||""===y.textarea.value)return alert("All fields must be filled!");e.currentTarget.reset(),localStorage.removeItem("feedback-form"),console.log(j),j.email="",j.message=""})),y.form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form",JSON.stringify(j))}),500));let j={email:" ",message:" "};!function(){const e=localStorage.getItem("feedback-form");if(e){j=JSON.parse(e);let{email:t,message:n}=y.form.elements;t.value=j.email,n.value=j.message}}();
//# sourceMappingURL=03-feedback.f8ffae30.js.map
