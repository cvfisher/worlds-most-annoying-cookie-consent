const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(() => {
	modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", () => {
	console.log("hovered");
	modalChoiceBtns.classList.toggle("reverse");
});

consentForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const consentFormData = new FormData(consentForm);
	const fullName = consentFormData.get("name");

	modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
    Uploading your data to the dark web...
    </p>
    </div>`;
	setTimeout(() => {
		document.getElementById("uploadText").innerText = `Making the sale...`;
	}, 1500);
	setTimeout(() => {
		document.getElementById(
			"modal-inner"
		).innerHTML = `<h2>Thanks <span class="modal-display-name">${fullName}</span> you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
        <img src="images/pirate.gif">
        </div>
        `;
	}, 3000);
	setTimeout(() => {
		modalCloseBtn.disabled = false;
	}, 4500);
	console.log("form submitted");
});
