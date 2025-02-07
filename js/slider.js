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
            const imageList = document.querySelector(".slider-wrapper .image-list");
            const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
            const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
            const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
            
            // Handle scrollbar thumb drag
            scrollbarThumb.addEventListener("mousedown", (e) => {
                const startX = e.clientX;
                const thumbPosition = scrollbarThumb.offsetLeft;
                const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
                
                // Update thumb position on mouse move
                const handleMouseMove = (e) => {
                    const deltaX = e.clientX - startX;
                    const newThumbPosition = thumbPosition + deltaX;
        
                    // Ensure the scrollbar thumb stays within bounds
                    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
                    
                    scrollbarThumb.style.left = `${boundedPosition}px`;
                    imageList.scrollLeft = scrollPosition;
                }
        
                // Remove event listeners on mouse up
                const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                }
        
                // Add event listeners for drag interaction
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
            });
        
            // Slide images according to the slide button clicks
            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "prev-slide" ? -1 : 1;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
                });
            });
        
             // Show or hide slide buttons based on scroll position
            const handleSlideButtons = () => {
                slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
                slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
            }
        
            // Update scrollbar thumb position based on image scroll
            const updateScrollThumbPosition = () => {
                const scrollPosition = imageList.scrollLeft;
                const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
                scrollbarThumb.style.left = `${thumbPosition}px`;
            }
        
            // Call these two functions when image list scrolls
            imageList.addEventListener("scroll", () => {
                updateScrollThumbPosition();
                handleSlideButtons();
            });
        }
        
        window.addEventListener("resize", initSlider);
        window.addEventListener("load", initSlider);

        

        document.querySelectorAll(".image-container").forEach((container) => {
            container.addEventListener("mouseenter", function () {
              let iframe = this.querySelector("iframe");
              if (iframe) {
                iframe.src = this.getAttribute("data-video");
              }
            });
          
            container.addEventListener("mouseleave", function () {
              let iframe = this.querySelector("iframe");
              if (iframe) {
                iframe.src = iframe.src.split("?")[0]; // Reset video
              }
            });
          });
          