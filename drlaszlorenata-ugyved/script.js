document.addEventListener("DOMContentLoaded", () => {
	const navigation = document.querySelector("#foNavigacio");
	const navigationLinks = document.querySelectorAll("#foNavigacio .nav-link");

	navigationLinks.forEach((link) => {
		link.addEventListener("click", () => {
			if (navigation.classList.contains("show")) {
				bootstrap.Collapse.getOrCreateInstance(navigation).hide();
			}
		});
	});

	const cardTrack = document.querySelector(".szakiranyok-track");
	if (cardTrack) {
		const cards = [...cardTrack.querySelectorAll(".szakirany-kartya")];

		cards.forEach((card) => {
			const duplicate = card.cloneNode(true);
			duplicate.setAttribute("aria-hidden", "true");
			duplicate.removeAttribute("href");
			duplicate.setAttribute("tabindex", "-1");
			cardTrack.appendChild(duplicate);
		});
	}
});
