
  document.addEventListener("DOMContentLoaded", function () {
    
    /* --- 1. COOKIE BANNER LOGIC --- */
    if (!localStorage.getItem("cookieAccepted")) {
      const banner = document.createElement("div");
      banner.id = "cookie-banner";
      banner.innerHTML = `
        <p>We use cookies to improve your experience and analyze traffic. By continuing, you agree to our 
        <a href="privacy-policy.html" style="color:#fff; text-decoration:underline;">Privacy Policy</a>.</p>
        <button id="cookie-accept">Accept</button>
      `;

      document.body.appendChild(banner);

      // Inline styles for banner
      Object.assign(banner.style, {
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "#0f172a",
        color: "#fff",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: "9999",
        fontSize: "14px"
      });

      const btn = document.getElementById("cookie-accept");
      Object.assign(btn.style, {
        backgroundColor: "#38bdf8",
        color: "#000",
        border: "none",
        padding: "8px 15px",
        cursor: "pointer",
        borderRadius: "4px",
        fontWeight: "bold"
      });

      btn.addEventListener("click", function () {
        localStorage.setItem("cookieAccepted", "true");
        banner.style.display = "none";
      });
    }

    /* --- 2. HAMBURGER MENU LOGIC --- */
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".nav-menu");

    if (hamburger && menu) {
      hamburger.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevents the click from bubbling up
        menu.classList.toggle("active");
        console.log("Menu toggled!");
      });

      // Close menu if clicking outside of it
      document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
          menu.classList.remove("active");
        }
      });
    }
  });
