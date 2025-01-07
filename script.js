const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");

setTimeout(function () {
	modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

consentForm.addEventListener("submit", (e) => {
	e.preventDefault();
	modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`;
	setTimeout(() => {
		document.getElementById("uploadText").innerText = `Making the sale...`;
	}, 1500);
	console.log("form submitted");
});
