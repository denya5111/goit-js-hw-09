var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("7Y9D8");const u=document.querySelector('input[name = "delay"]'),i=document.querySelector('input[name = "step"]'),l=document.querySelector('input[name = "amount"]');function c(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector('button[type = "submit"]').addEventListener("click",(function(e){e.preventDefault();const t=Number(i.value);let n=Number(u.value);for(let e=1;e<=l.value;e+=1)c(e,n).then((e=>r.Notify.success(e))).catch((e=>r.Notify.failure(e))),n+=t}));
//# sourceMappingURL=03-promises.778dd735.js.map
