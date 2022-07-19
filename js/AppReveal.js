const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.Home__content',{delay:350, origin:'left'})
sr.reveal('.Media__cover',{delay:350, origin:'right'})

sr.reveal('.Works,.About,.Portfolios,.Others__portfolios,.Slider3D,.Services,.Sub__Services,.Blogs,.Skills,.Timeline,.Contacts,.Footer',{delay:200, origin:'bottom'})