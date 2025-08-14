/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
const themeButton = document.getElementById('theme-button');

// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Update button text based on current theme
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Toggle Light Mode';
    } else {
        themeButton.textContent = 'Toggle Dark Mode';
    }
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener('click', toggleDarkMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById('rsvp-button');
let count = 3;

const addParticipant = (person) => {
    // Step 2: Write your code to manipulate the DOM here
    
    // Create new participant element
    const newParticipant = document.createElement('p');
    newParticipant.textContent = `🎟️ ${person.name} from ${person.state} has joined.`;
    
    // Add new participant to the list
    const participantsDiv = document.querySelector('.rsvp-participants');
    participantsDiv.appendChild(newParticipant);
    
    // Update the count
    const countElement = document.getElementById('rsvp-count');
    countElement.remove();
    
    count = count + 1;
    
    const newCountElement = document.createElement('p');
    newCountElement.id = 'rsvp-count';
    newCountElement.textContent = `⭐ ${count} healthcare professionals have joined our mission!`;
    
    participantsDiv.appendChild(newCountElement);
}

// Step 3: Add a click event listener to the submit RSVP button here
// Note: This event listener will be replaced by form validation
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {
    let containsErrors = false;

    var rsvpInputs = document.getElementById("rsvp-form").elements;
    
    // Create person object with form data
    let person = {
        name: rsvpInputs[0].value,
        email: rsvpInputs[1].value,
        state: rsvpInputs[2].value
    };
    
    // Loop through all inputs
    for (let i = 0; i < rsvpInputs.length; i++) {
        // Validate the value of each input
        if (rsvpInputs[i].value.length < 2) {
            containsErrors = true;
            rsvpInputs[i].classList.add('error');
        } else {
            rsvpInputs[i].classList.remove('error');
        }
    }
    
    // Email validation (stretch feature)
    const emailInput = document.getElementById('email');
    if (!emailInput.value.includes('@')) {
        containsErrors = true;
        emailInput.classList.add('error');
    }
    
    // If no errors, call addParticipant() and clear fields
    if (containsErrors === false) {
        addParticipant(person);
        toggleModal(person);
        
        // Clear all form fields
        for (let i = 0; i < rsvpInputs.length; i++) {
            rsvpInputs[i].value = "";
        }
    }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener('click', validateForm);

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

// Animation variables
let rotateFactor = 0;
let modalImage = document.getElementById('modal-image');
let motionEnabled = true;

const animateImage = () => {
    if (!motionEnabled) return;
    
    // Alternate rotation between 0 and -10 degrees for waving effect
    rotateFactor = rotateFactor === 0 ? -10 : 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

const toggleModal = (person) => {
    let modal = document.getElementById('success-modal');
    
    // Update modal display to flex
    modal.style.display = 'flex';
    
    // Update modal text to personalized message
    const modalText = document.getElementById('modal-text');
    modalText.textContent = `Thank you for joining our mission, ${person.name}! We're excited to have you as part of our healthcare community. Together, we can make emergency medical knowledge accessible to everyone.`;
    
    // Start animation
    let intervalId = setInterval(animateImage, 500);
    
    // Set modal timeout to 5 seconds
    setTimeout(() => {
        modal.style.display = 'none';
        clearInterval(intervalId);
        // Reset image rotation
        modalImage.style.transform = 'rotate(0deg)';
        rotateFactor = 0;
    }, 5000);
}

// Close modal functionality
const closeModal = () => {
    const modal = document.getElementById('success-modal');
    modal.style.display = 'none';
    // Reset image rotation
    modalImage.style.transform = 'rotate(0deg)';
    rotateFactor = 0;
}

// Reduce motion functionality
const reduceMotion = () => {
    motionEnabled = !motionEnabled;
    const motionButton = document.getElementById('motion-button');
    if (motionEnabled) {
        motionButton.textContent = 'Reduce Motion';
    } else {
        motionButton.textContent = 'Enable Motion';
    }
}

// Event listeners
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('motion-button').addEventListener('click', reduceMotion);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/