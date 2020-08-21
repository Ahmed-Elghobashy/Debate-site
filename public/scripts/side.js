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
  const sideMenuItems = sideMenu.children;
  showSideMentItems(sideMenuItems);
  sideMenu.style.width = "250px";
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

