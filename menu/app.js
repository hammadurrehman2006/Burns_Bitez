document.querySelectorAll(".top-icon i").forEach((icon) => {
    icon.addEventListener("click", function () {
      this.classList.toggle("liked");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const navlist = document.getElementById("navlist");
    const closeNav = document.getElementById("close-nav");

    // Toggle the navlist when clicking the menu button
    menuButton.addEventListener("click", () => {
      navlist.classList.toggle("active");
    });

    // Close the navlist when clicking the close button
    closeNav.addEventListener("click", () => {
      navlist.classList.remove("active");
    });

    // Close the navlist when clicking outside of it
    document.addEventListener("click", (e) => {
      if (!navlist.contains(e.target) && !menuButton.contains(e.target)) {
        navlist.classList.remove("active");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const userName = localStorage.getItem("name");
    const orderButtons = document.querySelectorAll(".s-btnn a");
    const modal = document.getElementById("orderModal");
    const popupModal = document.getElementById("popupModal");
    
    popupModal.style.display="none";
    const modalItemName = document.getElementById("modalItemName");
    const userNameField = document.getElementById("userName");
    const userNameOrd = document.getElementById("userName1");
    const closeModal = document.querySelector(".close");
    const cancelOrderBtn = document.getElementById("cancelOrder");
    const orderForm = document.getElementById("orderForm");
    const orderMessage = document.getElementById("orderMessage");
    const orderDetails = document.getElementById("orderDetails");
    const countdownEl = document.getElementById('countDown');
    const downloadBtn = document.getElementById('downloadBtn');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Quantity-related elements
    const quantityValue = document.getElementById("quantityValue");
    const increaseQuantity = document.getElementById("increaseQuantity");
    const decreaseQuantity = document.getElementById("decreaseQuantity");

    // Initialize user's name in the modal
    if (userName) {
        userNameField.textContent = `Welcome, ${userName}`;
        userNameOrd.textContent = `Name: ${userName}`;
    } else {
        userNameField.textContent = "Welcome, Guest";
    }

    // Show order modal when "Order Now" button is clicked
    orderButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            quantityValue.textContent = "1"; // Reset quantity to 1 each time modal is opened
            const itemName = this.closest(".row").querySelector("h3").textContent;
            modalItemName.textContent = itemName; // Set item name in the modal
            modal.style.display = "block"; // Show the modal
        });
    });

    // Close the order modal on clicking "X" or "Cancel"
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    cancelOrderBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Increase or decrease quantity
    increaseQuantity.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityValue.textContent);
        quantityValue.textContent = currentQuantity + 1;
    });

    decreaseQuantity.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityValue.textContent);
        if (currentQuantity > 1) {
            quantityValue.textContent = currentQuantity - 1;
        }
    });

    // Form submission logic - shows success popup modal and starts timer
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form details
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const quantity = quantityValue.textContent;
        const itemName = modalItemName.textContent;

        // Set order details in the popup modal (with Address and Phone number included)
        orderDetails.innerHTML = `Item: ${itemName}, Quantity: ${quantity}, <br>Phone: ${phone}, <br>Address: ${address}`;
        orderMessage.innerHTML = `Your order for ${itemName} has been placed.<br>Phone: ${phone},<br>Address: ${address}`;

        // Hide the order modal and show the success popup modal
        modal.style.display = "none";
        popupModal.style.display = "flex"; // Make the popup modal visible

        // Start the countdown timer
        startCountdown(40 * 60); // 40 minutes in seconds
    });

    // Countdown Timer Function
    let timerInterval;
    function startCountdown(time) {
        if (timerInterval) clearInterval(timerInterval); // Clear any existing timer

        timerInterval = setInterval(() => {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countdownEl.innerHTML = `Your order will arrive in <span> ${minutes}:${seconds} </span>`;
            time--;

            if (time < 0) {
                clearInterval(timerInterval);
                countdownEl.textContent = "Your order should have arrived.";
            }
        }, 1000);
    }

    // Close the success popup modal when any close button is clicked
    closeBtns.forEach(button => {
        button.addEventListener("click", () => {
            popupModal.style.display = "none"; // Hide the popup modal
            clearInterval(timerInterval); // Stop timer when modal is closed
        });
    });

    // Handle receipt download (placeholder logic)
    downloadBtn.addEventListener('click', () => {
        alert('Receipt will be downloaded.');
        // Implement receipt download logic here
    });

    // Close the order modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
