
<!--selector: MasumBhai-->

let sidebar_btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let sidebar_searchBtn = document.querySelector(".bx-search");

sidebar_btn.onclick = function () {
    sidebar.classList.toggle("active");
}
sidebar_searchBtn.onclick = function () {
    sidebar.classList.toggle("active");
}