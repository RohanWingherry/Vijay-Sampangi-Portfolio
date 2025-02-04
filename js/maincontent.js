document.addEventListener('DOMContentLoaded', () => {
    const triangles = document.querySelectorAll('.viewdetails');
    const sidebar = document.querySelector('.sidebar');
    const sidebarText = document.getElementById('sidebar-text');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const overlay = document.querySelector('.overlay');

    // Function to open the sidebar with specific content
    const openSidebar = (content) => {
        sidebarText.innerHTML = content; // Populate sidebar with HTML content
        sidebar.classList.add('active'); // Show the sidebar
        overlay.classList.add('active'); // Show the overlay
    };

    // Function to close the sidebar
    const closeSidebar = () => {
        sidebar.classList.remove('active'); // Hide the sidebar
        overlay.classList.remove('active'); // Hide the overlay
    };

    // Attach click events to each "View Details" button
    triangles.forEach(triangle => {
        triangle.addEventListener('click', () => {
            const detailsId = triangle.getAttribute('data-details-id'); // Get the ID of the hidden details
            const detailsContent = document.getElementById(detailsId).innerHTML; // Get the content of the hidden details
            openSidebar(detailsContent); // Open sidebar with the fetched content
        });
    });

    // Close the sidebar when clicking the "OK" button
    closeSidebarButton.addEventListener('click', closeSidebar);

    // Close sidebar when clicking outside of it (on the overlay)
    overlay.addEventListener('click', closeSidebar);
});
