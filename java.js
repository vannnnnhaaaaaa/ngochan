document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".icon");
  const pages = document.querySelectorAll(".page");

  console.log(sections);
  sections.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.className == "iconhome icon") {
        close("#home");
      }
      if (element.className == "about icon") {
        close("#about");
      }
      if (element.className == "project icon") {
        close("#project");
      }
      if (element.className == "library icon") {
        close("#library");
      }
      if (element.className == "photo icon") {
        close("#photo");
      }
      if (element.className == "writing icon") {
        close("#project");
      }
      if (element.className == "facebook icon") {
        close("#project");
      }
      if (element.className == "instagram icon") {
        close("#project");
      }
      if (element.className == "contact icon") {
        close("#project");
      }
    });
  });

  function close(element) {
    const page = document.querySelector(element);

    pages.forEach((page) => {
      page.style.display = "none";
    });
    page.style.display = "block";
  }
});
