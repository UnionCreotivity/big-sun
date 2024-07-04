const navItem = [
  {
    name: "關於大賞",
    url: "About_manage.html",
  },
  {
    name: "最新消息",
    url: "About_last_news.html",
  },
  {
    name: "作品賞析",
    url: "About_project.html",
  },
  {
    name: "線上個案",
    url: "About_online_case.html",
  },
  {
    name: "開發專區",
    url: "About_develop.html",
  },
  {
    name: "聯絡大賞",
    url: "About_contact.html",
  },
];

function addNav(nav) {
  let src = "";

  if (window.innerWidth <= 1024) {
    src += `<div class="nav-left">
          <div class="nav-left-icon">
            <a href="./index.html"
              ><img src="./img/home/main-logo.svg" alt="main-logo"
            /></a>
          </div>
          <button class="hamburger hamburger--spring nav-hamb-icon ph" type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
      </div>
       <div class="nav-right">
       <div class="nav-right-container">
      <ul class="nav-right-list">
      `;
  } else {
    src += `  <div class="nav-left">
          <div class="nav-left-icon">
            <a href="./index.html"
              ><img src="./img/home/main-logo.svg" alt="main-logo"
            /></a>
          </div>
        </div>
        <div class="nav-right">
      <ul class="nav-right-list">`;
  }
  navItem.forEach((item) => {
    src += `<li><a href="${item.url}">${item.name}</a></li>`;
  });
  src += ` </ul>
        <div class="nav-fb"><a href='#'  target="_blank"><img src="./img/home/fb.svg" alt="fb" /></a></div></div>
      </div>`;

  $(nav).empty().append(src);
}

$(window).on("load", function () {
  addNav("#nav");

  if (window.innerWidth <= 1024) {
    $(".nav-hamb-icon").on("click", function (e) {
      e.preventDefault();

      if (!$(this).hasClass("is-active")) {
        $(".nav-hamb-icon").addClass("is-active"); //漢堡選單變成叉叉
      } else {
        $(".nav-hamb-icon").removeClass("is-active"); //漢堡選單移除叉叉
      }
      $(".nav-right").toggle("slide", { direction: "right" });
    });
  }
});
