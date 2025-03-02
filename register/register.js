document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1; // Start with 1 participant

    // Select the "Add Participant" button
    const addParticipantButton = document.getElementById("add");
    const participantsFieldset = document.getElementById("participants");

    // Event listener for "Add Participant" button
    addParticipantButton.addEventListener("click", function () {
        participantCount++; // Increment participant count

        // Generate a new participant section
        const newParticipantHTML = participantTemplate(participantCount);
        

        // Insert the new participant section before the "Add Participant" button
        addParticipantButton.insertAdjacentHTML("beforebegin", newParticipantHTML);

        updateButtonPosition();
    });

    function updateButtonPosition() {
        const totalParticipants = document.querySelectorAll(".participant").length;
        const addButtonContainer = addButton.parentElement;
    
        // Ensure the button always spans 2 columns and is at the bottom
        if (totalParticipants % 2 === 1) {
          addButtonContainer.style.gridColumn = "span 2"; // Push to full row
        } else {
          addButtonContainer.style.gridColumn = "1 / -1"; // Ensures it still spans full width
        }
      }

    // Function to create a new participant section dynamically
    function participantTemplate(count) {
        return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required="">
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity">
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee" type="number" name="fee">
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date">
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected="" value="" disabled=""></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`
    }
});
