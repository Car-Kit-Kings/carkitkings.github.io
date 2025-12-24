// Check if cookie consent was already given
if (!localStorage.getItem("cookieAccepted")) {

  // Create cookie banner
  const banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.innerHTML = `
    <p>We use cookies to improve your experience and analyze traffic. By continuing, you agree to our 
    <a href="privacy-policy.html" style="color:#fff; text-decoration:underline;">Privacy Policy</a>.</p>
    <button id="cookie-accept">Accept</button>
  `;

  document.body.appendChild(banner);

  // Inline style for banner
  banner.style.position = "fixed";
  banner.style.bottom = "0";
  banner.style.left = "0";
  banner.style.right = "0";
  banner.style.backgroundColor = "#0f172a";
  banner.style.color = "#fff";
  banner.style.padding = "15px 20px";
  banner.style.display = "flex";
  banner.style.justifyContent = "space-between";
  banner.style.alignItems = "center";
  banner.style.zIndex = "9999";
  banner.style.fontSize = "14px";

  // Accept button style
  const btn = document.getElementById("cookie-accept");
  btn.style.backgroundColor = "#38bdf8";
  btn.style.color = "#000";
  btn.style.border = "none";
  btn.style.padding = "8px 15px";
  btn.style.cursor = "pointer";
  btn.style.borderRadius = "4px";
  btn.style.fontWeight = "bold";

  btn.addEventListener("mouseover", function() {
    btn.style.backgroundColor = "#0ea5e9";
  });
  btn.addEventListener("mouseout", function() {
    btn.style.backgroundColor = "#38bdf8";
  });

  // Click to accept
  btn.addEventListener("click", function () {
    localStorage.setItem("cookieAccepted", "true");
    banner.style.display = "none";
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector("nav ul");

  if (hamburger && menu) {
    hamburger.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }
});
