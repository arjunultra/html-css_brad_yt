// FAQ Accordian open close
document.addEventListener("DOMContentLoaded", function () {
  const faqContainer = document.querySelector(".faq-content");
  faqContainer.addEventListener("click", function (e) {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) return;
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");
    //    toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
    // Toggle Visibility of Body
    groupBody.classList.toggle("open");

    // Close other open FAQ Bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");
        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
// Hamburger mobile menu

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
hamburgerBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});
