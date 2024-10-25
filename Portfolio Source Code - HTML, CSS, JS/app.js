(function () {
    // Navigation logic
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Separate smooth scroll for "Contact Me!" button
    const contactButton = document.querySelector('.main-btn[href="#contact"]');
    if (contactButton) {
        contactButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

            // Optionally, add 'active' class to #contact section if needed
            document.querySelector(".active").classList.remove("active");
            document.getElementById('contact').classList.add("active");
        });
    }

    // Theme toggle button
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();
