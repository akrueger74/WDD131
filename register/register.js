document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1; // Start with 1 participant

    // Select the "Add Participant" button
    const addParticipantButton = document.getElementById("add");
    const summary = document.getElementById("summary")
    const form = document.getElementById("form");


    function submitForm(event) {
        event.preventDefault()

        const formData = new FormData(form)
        const name = formData.get("adult_name")

        const total = totalFees() 

        console.log(`
            name: ${name}
            participants: ${participantCount}
            total: ${total}
        `)
        const info = {
            name: name,
            participants: participantCount,
            total: total
        }

        const resultsHTML = successTemplate(info)
        console.log(`resultsHTML: ${resultsHTML}`)
        form.style.display = "none"
        summary.insertAdjacentHTML("afterend", resultsHTML)


    }

    form.addEventListener("submit", submitForm)

    // Event listener for "Add Participant" button
    addParticipantButton.addEventListener("click", function () {
        participantCount++; // Increment participant count

        // Generate a new participant section
        const newParticipantHTML = participantTemplate(participantCount);
        

        // Insert the new participant section before the "Add Participant" button
        addParticipantButton.insertAdjacentHTML("beforebegin", newParticipantHTML);

    });

   
    function successTemplate(info) {

        return `<p>Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.total} in Fees.</p>`
    }
    function totalFees() {
        // the selector below lets us grab any element that has an id that begins with "fee"
        let feeElements = document.querySelectorAll("[id^=fee]");
        console.log(feeElements);
        // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
        // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
        // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
        feeElements = [...feeElements];
        // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
        // Remember that the text that was entered into the input element will be found in the .value of the element.
        let total = 0

        for (const fee of feeElements){
            total += parseFloat(fee.value)
        }
        return total
        // once you have your total make sure to return it!
        
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
