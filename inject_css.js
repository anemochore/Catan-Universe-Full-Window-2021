// ==UserScript==
// @name         Catan Universe Full Window 2021
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @updateURL    https://raw.githubusercontent.com/anemochore/Catan-Universe-Full-Window-2021/main/inject_css.js
// @downloadURL  https://raw.githubusercontent.com/anemochore/Catan-Universe-Full-Window-2021/main/inject_css.js
// @description  try to take over the world!
// @author       fallensky@naver.com
// @include      https://catanuniverse.com/en/game/*
// @resource     CSS https://raw.githubusercontent.com/anemochore/Catan-Universe-Full-Window-2021/main/only_css.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

const css = GM_getResourceText('CSS')
  .replace('@-moz-document url("https://catanuniverse.com/en/game/") {', '')
  .replace(/;/g, ' !important;')  //idk other ways to make it work
  .trim().replace(/}\n}$/, '}');

GM_addStyle(css);
console.log('css injected!');
