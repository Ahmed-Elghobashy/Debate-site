
var removeDisplay = function (collection) {
  for (var i = 0; i < collection.length; i++) {
    collection[i].setAttribute("style", "visibility: hidden;");
  }
};

function closeSideMenu() {
  event.preventDefault();
  const sideMenu = document.querySelector("#side-menu");
  const sideMenuItems = sideMenu.children;
  document
    .getElementById("profile_pic_container")
    .setAttribute("style", "visibility:hidden");
  removeDisplay(sideMenuItems);
  sideMenu.style.width = "0";
  sideMenu.setAttribute("data-opened", "false");
}

function handleSideMenu() {
  const sideMenu = document.querySelector("#side-menu");
  if (sideMenu.getAttribute("data-opened") === "false") {
    openSideMenu();
    // console.log(sideMenu.getAttribute("data-opened"));
  } else {
    closeSideMenu();
    // console.log(sideMenu.getAttribute("data-opened"));
  }
}

function showSideMentItems(sideMenuItems) {
  for (var i = 0; i < sideMenuItems.length; i++) {
    if (sideMenuItems[i].getAttribute("id") !== "profile_pic_container")
      sideMenuItems[i].setAttribute("style", "visibility: visible;");
  }
}

function openSideMenu() {
  event.preventDefault();
  const sideMenu = document.querySelector("#side-menu");
  sideMenu.setAttribute('visibility', 'visible')
  const sideMenuItems = sideMenu.children;
  showSideMentItems(sideMenuItems);
  if (window.innerWidth >= 600)
    sideMenu.style.width = "250px";
  else {
    sideMenu.style.width = "170px";

  }
  sideMenu.setAttribute("data-opened", "true");
  setTimeout(() => {
    document
      .getElementById("profile_pic_container")
      .setAttribute("style", "visibility:visible");
  }, 150);
  // sideMenu.ontransitionend = (event) => {
  //   if (sideMenu.style.width !== "0px")
  //     document
  //       .getElementById("profile_pic_container")
  //       .setAttribute("style", "visibility:visible");
  // };
}

function resizeSideMenu() {
  const sideMenu = document.querySelector("#side-menu");

  //when it is sized down
  if (window.innerWidth < 600 && sideMenuOpen()) {
    sideMenu.style.width = '150px';
  }

  //when it is sized up
  if (window.innerWidth > 600 && sideMenuOpen()) {
    sideMenu.style.width = '250px';
  }


}

function sideMenuOpen() {
  const sideMenu = document.querySelector("#side-menu");

  if (sideMenu.getAttribute('data-opened') === 'true') {
    return true;
  }
  else {
    return false;
  }
}

window.addEventListener('resize', resizeSideMenu);