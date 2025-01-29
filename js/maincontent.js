document.addEventListener('DOMContentLoaded', () => {
    const triangles = document.querySelectorAll('.viewdetails');
    const sidebar = document.querySelector('.sidebar');
    const sidebarText = document.getElementById('sidebar-text');
    const closeSidebarButton = document.getElementById('close-sidebar');

    // Function to open the sidebar with specific content
    const openSidebar = (content) => {
        sidebarText.innerHTML = content; // Populate sidebar with HTML content
        sidebar.classList.add('active'); // Show the sidebar
    };

    // Function to close the sidebar
    const closeSidebar = () => {
        sidebar.classList.remove('active'); // Hide the sidebar
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

    // Close sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !e.target.classList.contains('viewdetails')) {
            closeSidebar();
        }
    });
});



