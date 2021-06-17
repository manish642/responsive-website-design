
	window.addEventListener('scroll',function(){
		const nav = document.querySelector('nav');
		nav.classList.toggle('sticky', window.scrollY>0);
	});

	function toggleMenu(){
		var navigation = document.querySelector('.navigation');
		var toggleNav = document.querySelector('.nav-wrap');
		navigation.classList.toggle('active');
		toggleNav.classList.toggle('active');
	}