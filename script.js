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

});
