(() => {
	// collect the elements we need to interact with
	const badges = document.querySelectorAll(".badgeContainer"),
				theBanner = document.querySelector("#teamImages"),
				names = document.querySelector("#cap"),
				textInfo = document.querySelector(".textEl");

	let currentHouse = '';

	const teamText = [
		`Our Beer brand is COOLA. WANNA BE COOL? You can be cool! Please feel free to visit us!
		COOLA always strives to create a healthy beer experience that realizes a delightful and cool lifestyle. We are ALWAYS trying to develop organic products that you enjoy drinking.`,

		`Our Team designer is Cat. She was born and raised in Canada. She is activity/playfulness, fearfulness, aggression towards humans, sociability towards humans, sociability towards cats.`,

		`Our Team developer is Doyeon Kim. She was born and raised in South Korea. When she is free, she often watches movies, especially fantasy ones. She loved dogs the most among pets, but now she loves cats as much as dogs.`,

		`What are some benefits of becoming a COOL?
     Did you happen to know? Every time you order our product, you're helping our local farmers and giving some funding to support our agricultural communities! That is, you can enjoy our organic beer and be the sponsor of our society!
     If you join the COOLA club and become a special member: COOL, you can be the first to get many chances for our events, news, and promotion!`,
	];

	//function go here
	function animateBanners() {
		theBanner.style.right = `${this.dataset.offset * 500}px`;

    getHouseName(this.classList[1], this.dataset.offset);
  }

	function getHouseName(name, index) {
		console.log(name)
		names.textContent = name;

		textInfo.textContent = teamText[index];
	}

	// add event handling
	badges.forEach(badge => badge.addEventListener('click', animateBanners));

	animateBanners.call(badges[0]);


})();
