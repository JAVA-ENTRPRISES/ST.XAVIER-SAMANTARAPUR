// ===== MASTER HEADER =====
const headerTemplate = `
    <div class="header-container">
        <div class="logo-section">
            <img src="image/LOGO.jpeg" alt="School Logo" class="logo-img">
            <div class="logo-text">ST. XAVIER HIGH SCHOOL</div>
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


// ===== MASTER FOOTER =====
const footerTemplate = `
    <div class="footer-container">
        <div class="footer-section">
            <img src="image/LOGO.jpeg" class="footer-logo">
            <p>St. Xavier High School<br>Bhubaneswar, Odisha</p>
        </div>

        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="facility.html">Facility</a></li>
                <li><a href="disclosure.html">Mandatory Disclosure</a></li>
                                <li><a href="contact.html">Contact Us</a></li>

            </ul>
        </div>

        <div class="footer-section">
            <h3>Contact</h3>
            <p>📧 stxavierbbsr@gmail.com</p>
            <p>📞 +91 9692973059</p>
        </div>

        
    </div>

    <div class="footer-bottom">
        &copy; 2026 St. Xavier High School, Bhubaneswar. All Rights Reserved.
    </div>
`;


// ===== LOAD HEADER + FOOTER =====
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("header").innerHTML = headerTemplate;
    document.querySelector("footer").innerHTML = footerTemplate;

    // Active link highlight
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

});
