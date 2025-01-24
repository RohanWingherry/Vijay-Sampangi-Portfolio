document.addEventListener('DOMContentLoaded', () => {
    const triangles = document.querySelectorAll('.viewdetails');
    const sidebar = document.querySelector('.sidebar');
    const sidebarText = document.getElementById('sidebar-text');
    const closeSidebarButton = document.getElementById('close-sidebar');

    // Function to open sidebar with specific content
    const openSidebar = (content) => {
        sidebarText.textContent = content;
        sidebar.classList.add('active');
    };

    // Function to close the sidebar
    const closeSidebar = () => {
        sidebar.classList.remove('active');
    };

    // Attach click events to each triangle
    triangles.forEach(triangle => {
        triangle.addEventListener('click', () => {
            const fullDetails = triangle.getAttribute('data-full-details');
            openSidebar(fullDetails);
        });
    });

    // Close sidebar on clicking the OK button
    closeSidebarButton.addEventListener('click', closeSidebar);

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !e.target.classList.contains('viewdetails')) {
            closeSidebar();
        }
    });
});
