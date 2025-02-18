// Unique ID for progress bar
const progressBar = document.getElementById('scroll-progress-bar');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop; 
  const scrollHeight = document.documentElement.scrollHeight; 
  const clientHeight = document.documentElement.clientHeight; 

  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

  progressBar.style.width = `${scrollPercentage}%`;
});

// Chanage text

const texts = [
  {
    chairman: "Chairman of Yuktha Constructions",
    description: "As a co-founder of Yuktha Constructions, I’m proud to lead a company dedicated to delivering high-quality residential, commercial, and industrial projects. We specialize in construction, interior design, smart home solutions, and eco-friendly installations like solar systems. With a focus on quality, timely delivery, and customer satisfaction, we’re creating innovative spaces where people and businesses thrive.",
    activeImage: "yuktha"  
  },
  {
    chairman: "Chairman of Wingherry Technologies",
    description: "Wingherry Technologies delivers innovative software solutions, including web design, mobile app development, e-commerce platforms, and enterprise applications. We leverage SMAC (Social, Mobile, Analytics, and Cloud) technologies to create integrated and scalable digital solutions. With a skilled team of designers and technologists, we focus on building user-centric, reliable, and future-ready services that empower businesses globally.",
    activeImage: "wingherry"  
  }
];

let currentIndex = 0;

function wrapTextInSpans(text) {
  return text.split(' ').map(word => {
    return `<span class="word">${word.split('').map(letter => {
      return `<span class="letter">${letter}</span>`;
    }).join('')}</span>`;
  }).join(' ');
}

function changeText() {
  const chairmanElement = document.getElementById("chairman");
  const chairmanDescElement = document.getElementById("chairman-desc");
  const yukthaImageSection = document.getElementById("yuktha-image-section");
  const wingherryImageSection = document.getElementById("wingherry-image-section");

  chairmanElement.style.opacity = 0;
  chairmanDescElement.style.opacity = 0;
  chairmanElement.classList.remove('zoom-animation');
  chairmanDescElement.classList.remove('zoom-animation');
  yukthaImageSection.classList.remove('scaled');
  wingherryImageSection.classList.remove('scaled');

  setTimeout(() => {
    chairmanElement.innerHTML = wrapTextInSpans(texts[currentIndex].chairman);
    chairmanDescElement.innerHTML = wrapTextInSpans(texts[currentIndex].description);

    if (texts[currentIndex].activeImage === "yuktha") {
      yukthaImageSection.classList.add('scaled');
    } else {
      wingherryImageSection.classList.add('scaled');
    }

    chairmanElement.classList.add('zoom-animation');
    chairmanElement.style.opacity = 1;
    chairmanDescElement.style.opacity = 1;
  }, 0);

  currentIndex = (currentIndex + 1) % texts.length;
}

document.addEventListener("DOMContentLoaded", () => {
  const yukthaImageSection = document.getElementById("yuktha-image-section");
  yukthaImageSection.classList.add('scaled');
});

setInterval(changeText, 5000);

function handleImageClick(event) {
  const yukthaImageSection = document.getElementById("yuktha-image-section");
  const wingherryImageSection = document.getElementById("wingherry-image-section");

  const clickedElement = event.target;

  if (clickedElement && clickedElement.tagName === 'IMG') {
    if (clickedElement.closest('#yuktha-image-section') && yukthaImageSection.classList.contains('scaled')) {
      window.open("http://yukthaa.com/", "_blank");
    } else if (clickedElement.closest('#wingherry-image-section') && wingherryImageSection.classList.contains('scaled')) {
      window.open("https://www.wingherry.com/", "_blank");
    } else {
      event.preventDefault();
    }
  }
}

document.getElementById("yuktha-image-section").addEventListener("click", handleImageClick);
document.getElementById("wingherry-image-section").addEventListener("click", handleImageClick);

// Get in Touch
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("getintouchbtn");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// function checkWordLimit() {
//   var wordCount = document.getElementById("enquireAbout").value.split(/\s+/).length;
//   if (wordCount === 1 && document.getElementById("enquireAbout").value === "") {
//       wordCount = 0;
//   }
//   document.getElementById("wordCount").textContent = "Word count: " + wordCount + "/250";
// }

// // Function to validate form
// document.getElementById('firstName').addEventListener('input', function(event) {
//     event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
// });
// document.getElementById('lastName').addEventListener('input', function(event) {
//   event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
// });
// document.getElementById('organisation').addEventListener('input', function(event) {
//   let value = event.target.value;

//   value = value.replace(/[^a-zA-Z ]/g, '');
//   value = value.replace(/^\s+/, '');

//   event.target.value = value;
// });
// document.getElementById('title').addEventListener('input', function(event) {
//   let value = event.target.value;

//   value = value.replace(/[^a-zA-Z ]/g, '');
//   value = value.replace(/^\s+/, '');

//   event.target.value = value;
// });
// document.getElementById('businessEmail').addEventListener('input', function(event) {
//   event.target.value = event.target.value.replace(/[^a-zA-Z0-9@.-_]/g, '');
// });
// document.getElementById('enquireAbout').addEventListener('input', function(event) {
//   let value = event.target.value;
//   if (value.length === 1 && !/[a-zA-Z]/.test(value.charAt(0))) {
//     event.target.value = '';
//   }
// });

// function validateForm() {
//   var firstName = document.getElementById("firstName").value.trim();
//   var lastName = document.getElementById("lastName").value.trim();
//   var organisation = document.getElementById("organisation").value.trim();
//   var title = document.getElementById("title").value.trim();
//   var businessEmail = document.getElementById("businessEmail").value.trim();
//   var enquireAbout = document.getElementById("enquireAbout").value.trim();

//   removeErrorBorders();

//   if (!firstName || !lastName || !organisation || !title || !businessEmail || !enquireAbout) {
//       alert("Please fill out all required fields.");
//       if (!firstName) {
//           document.getElementById("firstName").classList.add("error");
//       }
//       if (!lastName) {
//           document.getElementById("lastName").classList.add("error");
//       }
//       if (!organisation) {
//           document.getElementById("organisation").classList.add("error");
//       }
//       if (!title) {
//           document.getElementById("title").classList.add("error");
//       }
//       if (!businessEmail) {
//           document.getElementById("businessEmail").classList.add("error");
//       }
//       if (!enquireAbout) {
//           document.getElementById("enquireAbout").classList.add("error");
//       }
//   } else {
//       alert("Form submitted successfully!");
//       modal.style.display = "none";
//       document.getElementById("contactForm").reset();
//   }
// }
// function removeErrorBorders() {
//   var fields = document.querySelectorAll('input, textarea');
//   fields.forEach(function(field) {
//       field.classList.remove("error");
//   });
// }

// // Text area
// function checkWordLimit() {
//   const textarea = document.getElementById('enquireAbout');
//   const wordCountDisplay = document.getElementById('wordCount');
//   const text = textarea.value.trim();
//   const wordCount = text ? text.split(/\s+/).length : 0;
  
//   wordCountDisplay.textContent = `Word count: ${wordCount}/250`;
  
//   if (wordCount > 250) {
//       const words = text.split(/\s+/).slice(0, 250).join(' ');
//       textarea.value = words;
//       wordCountDisplay.textContent = `Word count: 250/250`;
//   }
// }

// Spinner
window.addEventListener("load", () => {
  const loader = document.querySelector(".spin-container");

  setTimeout(() => {
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  }, 0);
});












