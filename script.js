const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

const navigation = document.getElementById('navigation');
for (let i = 0; i < totalSlides; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (i === currentSlide) {
		dot.classList.add('active');
	}
	dot.addEventListener('click', () => {
		goToSlide(i);
	});

	navigation.append(dot);
}

function goToSlide(slideIndex) {
	if (slideIndex < 0) {
		currentSlide = totalSlides - 1;
	} else if (slideIndex >= totalSlides) {
		currentSlide = 0;
	} else {
		currentSlide = slideIndex;
	}
	slider.style.transform = `translateX(-${currentSlide * 100}%)`;

	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add('active');
		} else {
			dot.classList.remove('active');
		}
	});
}

const forwardEl = document.querySelector('.forward');
forwardEl.addEventListener('click', () => {
	nextSlide();
});

window.addEventListener('keydown', function (e) {
	if (e.key == 'ArrowRight') {
		nextSlide();
	}
});

const backwardEl = document.querySelector('.backward');
backwardEl.addEventListener('click', () => {
	prevSlide();
});

window.addEventListener('keydown', function (e) {
	if (e.key == 'ArrowLeft') {
		prevSlide();
	}
});

function nextSlide() {
	goToSlide(currentSlide + 1);
}

function prevSlide() {
	goToSlide(currentSlide - 1);
}

setInterval(nextSlide, 2000);
