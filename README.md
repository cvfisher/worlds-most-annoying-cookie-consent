# World's Most Annoying Cookie Consent

## Overview

Welcome to the World's Most Annoying Cookie Consent! This project humorously explores over-the-top modal interactions to show off creative web development skills. It frustrates users with playful features and animations while demonstrating the use of HTML, CSS, and JavaScript.

## Live Demos

**GitHub Pages:** [World's Most Annoying Cookie Consent](https://cvfisher.github.io/worlds-most-annoying-cookie-consent/)
Netlify: [World's Most Annoying Cookie Consent](https://animated-basbousa-057a1c.netlify.app/)

## Features

### Annoying Modal:

- Automatically opens after 1.5 seconds.
- The "Decline" button flips the button order on hover.

### Interactive Form:

- Users must provide their name and email to submit.
- Form submission triggers a sarcastic sequence of events.

### Dynamic Updates:

- Displays a fake "uploading your data" message.
- Animates a series of humorous messages before enabling the close button.

## Key Code Highlights

### 1. Opening the Modal

The modal automatically appears after 1.5 seconds:

```
setTimeout(() => {
    modal.style.display = "inline";
}, 1500);
```

### 2. Decline Button Interaction

The "Decline" button flips the button layout when hovered over, using the .reverse class:

```
declineBtn.addEventListener("mouseenter", () => {
    modalChoiceBtns.classList.toggle("reverse");
});
```

### This CSS class swaps the button order:

```
.reverse {
    flex-direction: row-reverse;
}
```

### 3. Form Submission Flow

Upon submitting the form, a sequence of events plays out:

```
consentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = new FormData(consentForm).get("name");

    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">Uploading your data to the dark web...</p>
        </div>`;

    setTimeout(() => {
        document.getElementById("uploadText").innerText = `Making the sale...`;
    }, 1500);

    setTimeout(() => {
        document.getElementById("modal-inner").innerHTML = `
            <h2>Thanks <span class="modal-display-name">${fullName}</span> you sucker!</h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>`;
    }, 3000);

    setTimeout(() => {
        modalCloseBtn.disabled = false;
    }, 4500);

    console.log("form submitted");
});
```

### 4. Modal Close Button

The close button is initially disabled and becomes clickable only after the sequence ends:

```
<button class="modal-close-btn" id="modal-close-btn" disabled>X</button>
```

JavaScript enables it after 4.5 seconds:

```
setTimeout(() => {
    modalCloseBtn.disabled = false;
}, 4500);
```

## File Structure

```
worlds-most-annoying-cookie-consent/
├── index.html       # Main HTML file
├── style.css        # Project styling
├── script.js        # JavaScript for modal functionality
├── images/          # Folder for images used in the modal
│   ├── bugatti.jpg  # Background image in the main section
│   ├── loading.svg  # Loading spinner animation
│   ├── pirate.gif   # Fun GIF displayed after form submission
└── README.md        # Project documentation
```

## Running Locally

Clone the repository:

```
git clone https://github.com/cvfisher/worlds-most-annoying-cookie-consent.git
```

Open index.html in a browser.
