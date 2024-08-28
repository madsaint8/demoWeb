document.addEventListener("DOMContentLoaded", function() {
    // Create the modal
    const modal = document.createElement('div');
    modal.id = 'reservationModal';
    modal.className = 'modal';

    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = `
        <span class="close" id="closeModalBtn">&times;</span>
        <h1>Schedule a visit</h1>
        <form id="reservationForm" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="c6e96d91-da30-4696-9862-d7584da097e1">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" class="modal-input" required>

            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Your E-mail" class="modal-input" required>

            <label for="date">Preferred Date:</label>
            <input type="date" id="date" name="date" class="modal-input" required>

            <label for="court">Choose Accomodation:</label>
            <select id="court" name="court" class="modal-input">
                <option value="angeli_court">Angeli Court</option>
                <option value="margaret_court">Margaret Court</option>
                <option value="omega_court">Omega Court</option>
            </select>

            <label for="message">Additional Information:</label>
            <textarea class="modal-text" id="message" name="message" rows="4" placeholder="Provide any additional information or requirements"></textarea>

            <button class="bttn" type="submit">Submit Reservation</button>
        </form>
    `;
    modal.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Get modal elements
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Open the modal
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Close the modal
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal if the user clicks outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    
});


document.addEventListener("DOMContentLoaded", function() {
    // Create the modal
    const modal = document.createElement('div');
    modal.id = 'reservationModal';
    modal.className = 'modal';

    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = `
        <span class="close" id="closeModalBtn">&times;</span>
        <h1>Schedule a visit</h1>
        <form id="reservationForm" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="c6e96d91-da30-4696-9862-d7584da097e1">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" class="modal-input" required>

            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Your E-mail" class="modal-input" required>

            <label for="date">Preferred Date:</label>
            <input type="date" id="date" name="date" class="modal-input" required>

            <label for="court">Choose Accommodation:</label>
            <select id="court" name="court" class="modal-input">
                <option value="angeli_court">Angeli Court</option>
                <option value="margaret_court">Margaret Court</option>
                <option value="omega_court">Omega Court</option>
            </select>

            <label for="message">Additional Information:</label>
            <textarea class="modal-text" id="message" name="message" rows="4" placeholder="Provide any additional information or requirements"></textarea>

            <button class="bttn" type="submit">Submit Reservation</button>
        </form>
    `;
    modal.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Get all buttons that should open the modal
    const openModalBtns = document.querySelectorAll(".reservation-button");

    // Attach event listeners to each button
    openModalBtns.forEach(btn => {
        btn.addEventListener("click", openModal);
    });

    // Close the modal when the close button is clicked
    const closeModalBtn = document.getElementById("closeModalBtn");
    closeModalBtn.addEventListener("click", closeModal);

    // Close the modal if the user clicks outside of the modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
