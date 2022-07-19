(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.Works,.About,.Portfolios,.Others__portfolios,.Slider3D,.Services,.Sub__Services,.Blogs,.Skills,.Timeline,.Contacts,.Footer',{delay:200, origin:'bottom'})

