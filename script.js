// ===============================
// 1. Smooth Scroll
// ===============================
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        
        // শুধু অভ্যন্তরীণ লিঙ্কগুলোর (#) জন্য কাজ করবে
        if (targetId.startsWith("#")) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// ===============================
// 2. Active Navbar
// ===============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("tib");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("tib");
        }
    });
});

// ===============================
// 3. Dark / Light Mode
// ===============================
const moodButton = document.querySelector(".mood");
const moodIcon = document.querySelector(".mood i");

if (moodButton) {
    moodButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        
        // টগল আইকন পরিবর্তন (Optional)
        if (moodIcon) {
            moodIcon.classList.toggle("fa-toggle-on");
            moodIcon.classList.toggle("fa-toggle-off");
        }
    });
}

// ===============================
// 4. Contact Form
// ===============================
const contactForm = document.querySelector(".jt");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your message has been sent!");
        contactForm.reset();
    });
}