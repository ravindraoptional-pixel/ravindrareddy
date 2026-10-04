const EMAIL = "ravindraoptional@gmail.com";

const menuBtn = document.querySelector(".menu-btn");
const panel = document.querySelector(".mobile-panel");
const nav = document.querySelector(".nav");

if (menuBtn && panel) {
  menuBtn.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      panel.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-email]").forEach((node) => {
  node.textContent = EMAIL === "you@email.com" ? "[ADD EMAIL]" : EMAIL;
  if (node.tagName === "A") node.href = `mailto:${EMAIL}`;
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());

window.addEventListener("scroll", () => {
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 8);
}, { passive: true });

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];
if (sections.length && links.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-40% 0px -50% 0px" });
  sections.forEach((section) => observer.observe(section));
}
