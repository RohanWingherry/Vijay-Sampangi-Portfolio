        let index = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        // Function to update the carousel class positions
        function updateClasses() {
            slides.forEach((slide, i) => {
                slide.classList.remove('left', 'center', 'right', 'behind');
            });
            slides[index].classList.add('center');
            slides[(index + 1) % totalSlides].classList.add('right');
            slides[(index + 2) % totalSlides].classList.add('behind');
            slides[(index + 3) % totalSlides].classList.add('left');

        }

        // Function to show the next slide
        function showNextSlide() {
            index = (index + 1) % totalSlides;
            updateClasses();
        }
        setInterval(showNextSlide, 5000);

        // Initial class setup
        updateClasses();
