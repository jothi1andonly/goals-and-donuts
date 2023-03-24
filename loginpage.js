const loginBtn = document.getElementById("login-btn")
const nonButton = document.getElementById("button-nonform")
const createBtn = document.getElementById("create-btn")
const closeBtn = document.getElementById("close-btn")
const overLay = document.getElementById("overlay")
const modal = document.getElementById("modal")
/*createBtn.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = document.querySelector("button.dataset.openButton")
		openModal(modal)
	})
})
function openModal(modal) {
	if (modal == null) return
	modal.classList.add("active")
	overLay.classList.add("active")
}
for (let i = 0; i < createBtn.length; i++) {
	createBtn[i].addEventListener("click", function () {
		console.log("create button was clicked")
	})
}*/
overLay.addEventListener("click", function () {
	closeModal(modal)
})
closeBtn.addEventListener("click", function () {
	closeModal(modal)
})
createBtn.addEventListener("click", function () {
	openModal(modal)
})
function openModal() {
	modal.classList.add("active")
	overLay.classList.add("active")
}
function closeModal() {
	modal.classList.remove("active")
	overLay.classList.remove("active")
}
