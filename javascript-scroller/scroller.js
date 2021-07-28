let doc = document.documentElement;
let w = window;
let prevScroll = w.scrollY || doc.scrollTop;
let curScroll;
let direction = 0;
let prevDirection = 0;
let header = document.getElementById('nav');
let checkScroll = function() {
	/*
	** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
      */
	curScroll = w.scrollY || doc.scrollTop;
	if (curScroll > prevScroll) { 
		//scrolled up
		direction = 2;
	} else if (curScroll < prevScroll) { 
		//scrolled down
		direction = 1;
	}

	if (direction !== prevDirection) {
		toggleHeader(direction, curScroll);
	}           
	prevScroll = curScroll;
};

let toggleHeader = function(direction, curScroll) {
	if (direction === 2 && curScroll > 52) {                 
		//replace 52 with the height of your header in px
		header.classList.add('mobile');
		prevDirection = direction;
	} else if (direction === 1 && curScroll < 52) {
		header.classList.remove('mobile');
		prevDirection = direction;
	}
};
                
window.addEventListener('scroll', checkScroll);
