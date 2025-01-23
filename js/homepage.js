// Unique ID for progress bar
const progressBar = document.getElementById('scroll-progress-bar');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop; // Amount scrolled
  const scrollHeight = document.documentElement.scrollHeight; // Total height of the page
  const clientHeight = document.documentElement.clientHeight; // Visible height of the viewport

  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

  // Update the unique progress bar's width
  progressBar.style.width = `${scrollPercentage}%`;
});
