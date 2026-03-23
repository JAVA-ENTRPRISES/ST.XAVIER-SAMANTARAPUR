// MASTER HEADER CONTENT
const headerTemplate = `
    <div class="header-container">
        <div class="logo-section">
            <h1 style="margin:0;">St. Xavier High School, Bhubaneswar</h1>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="facility.html">Facility</a></li>
                <li><a href="disclosure.html">Mandatory Disclosure</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>
    </div>
`;

// MASTER FOOTER CONTENT
const footerTemplate = `
    <div class="footer-container">
        <div class="footer-section">
            <img src="logo.png" alt="School Logo" width="80" onerror="this.src='https://via.placeholder.com/80?text=LOGO'">
            <p>St. Xavier High School<br>Bhubaneswar, Odisha</p>
        </div>
        <div class="footer-section">
            <h4>Contact Details</h4>
            <p>📧 info@stxavierbbsr.com</p>
            <p>📞 +91 674 1234567</p>
        </div>
        <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="disclosure.html">Mandatory Disclosure</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2026 St. Xavier High School, Bhubaneswar. All Rights Reserved.
    </div>
`;

// Inject into the page
document.addEventListener("DOMContentLoaded", () => {
    const headerElem = document.querySelector("header");
    const footerElem = document.querySelector("footer");

    if(headerElem) headerElem.innerHTML = headerTemplate;
    if(footerElem) footerElem.innerHTML = footerTemplate;

    // Highlight the current page link
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#ffd700";
            link.style.borderBottom = "2px solid #ffd700";
        }
    });
});