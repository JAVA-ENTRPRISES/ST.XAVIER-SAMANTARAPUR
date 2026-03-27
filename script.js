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
     <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>St. Xavier School</h3>
                <p>Bhubaneswar, Odisha</p>
                <p>Email: info@stxavierbbsr.com</p>
                <p>Contact: +91 674 123 4567</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
<li><a href="index.html">Home</a></li>
<li><a href="facilities.html">Facilities</a></li>
<li><a href="gallery.html">Gallery</a></li>
<li><a href="mandatory.html">Mandatory</a></li>
<li><a href="contact.html">Contact</a></li>
</ul>

            </div>
            <div class="footer-section">
                <h3>School Logo</h3>
                <div style="width: 80px; height: 80px; background: #444; display: flex; align-items: center; justify-content: center; border-radius: 5px;">
                    LOGO
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 St. Xavier High School, Bhubaneswar. All Rights Reserved.
        </div>
    </footer>`;

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
