let lmexican = document.querySelector("#lmexican");
let rmexican = document.querySelector("#rmexican");
let litalian = document.querySelector("#litalian");
let ritalian = document.querySelector("#ritalian");
let lchinese = document.querySelector("#lchinese");
let rchinese = document.querySelector("#rchinese");
let lindian = document.querySelector("#lindian");
let rindian = document.querySelector("#rindian");

let mex = document.querySelector("#mexican");
let italian = document.querySelector("#italian");
let chinese = document.querySelector("#chinese");
let indian = document.querySelector("#indian");

rmexican.addEventListener("click", () => {
  mex.scrollBy(500, 0);
});
lmexican.addEventListener("click", () => {
  mex.scrollBy(-500, 0);
});
ritalian.addEventListener("click", () => {
  italian.scrollBy(500, 0);
});
litalian.addEventListener("click", () => {
  italian.scrollBy(-500, 0);
});
rchinese.addEventListener("click", () => {
  chinese.scrollBy(500, 0);
});
lchinese.addEventListener("click", () => {
  chinese.scrollBy(-500, 0);
});
rindian.addEventListener("click", () => {
  indian.scrollBy(500, 0);
});
lindian.addEventListener("click", () => {
  indian.scrollBy(-500, 0);
});
