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

        
        // media slider code

        const initSlider = () => {
            const imageList = document.querySelector(".media-slider-wrapper .media-image-list");
            const prevButton = document.querySelector("#media-prev-slide");
            const nextButton = document.querySelector("#media-next-slide");
            const sliderScrollbar = document.querySelector(".media-container .media-slider-scrollbar");
            const scrollbarThumb = sliderScrollbar.querySelector(".media-scrollbar-thumb");
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

            // Handle scrollbar thumb drag
            scrollbarThumb.addEventListener("mousedown", (e) => {
                const startX = e.clientX;
                const thumbPosition = scrollbarThumb.offsetLeft;
                const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

                const handleMouseMove = (e) => {
                    const deltaX = e.clientX - startX;
                    const newThumbPosition = thumbPosition + deltaX;
                    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

                    scrollbarThumb.style.left = `${boundedPosition}px`;
                    imageList.scrollLeft = scrollPosition;
                };

                const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                };

                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
            });

            // Slide images
            prevButton.addEventListener("click", () => {
                imageList.scrollBy({ left: -imageList.clientWidth, behavior: "smooth" });
            });

            nextButton.addEventListener("click", () => {
                imageList.scrollBy({ left: imageList.clientWidth, behavior: "smooth" });
            });

            // Update scrollbar thumb position
            const updateScrollThumbPosition = () => {
                const scrollPosition = imageList.scrollLeft;
                const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
                scrollbarThumb.style.left = `${thumbPosition}px`;
            };

            imageList.addEventListener("scroll", updateScrollThumbPosition);
        };

        window.addEventListener("resize", initSlider);
        window.addEventListener("load", initSlider);

        