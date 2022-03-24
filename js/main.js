(() => {
	// collect the elements we need to interact with
	const badges = document.querySelectorAll(".badgeContainer"),
				theBanner = document.querySelector("#teamImages"),
				names = document.querySelector("#cap"),
				textInfo = document.querySelector(".textEl");

	let currentHouse = '';

	const teamText = [
		`Our Beer brand is...`,

		`Our Team designer name is ....`,

		`Our Team developer name is ....`,

		`Our story is ....`,
	];

	//function go here
	function animateBanners() {
		theBanner.style.right = `${this.dataset.offset * 500}px`;

    getHouseName(this.classList[1]);
  }

	function getHouseName(name) {
		console.log(name)
		names.textContent = name;
	}

	// add event handling
	badges.forEach(badge => badge.addEventListener('click', animateBanners));


})();
