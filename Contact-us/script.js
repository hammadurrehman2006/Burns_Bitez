
const header = document.querySelector('header');
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY>100)
})
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const formData = new FormData(form);

    // Send form data to Formspree using fetch
    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(() => {
        // Show the modal popup after successful submission
        showModal();
        form.reset(); // Clear the form
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("There was an issue submitting your message. Please try again.");
    });
});

function showModal() {
    const modal = document.getElementById("popupModal");
    modal.classList.add("show");

    // Close the modal when the close button is clicked
    document.querySelector(".close-btn").addEventListener("click", function () {
        modal.classList.remove("show");
    });

    // Close the modal when clicked outside of the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
}
