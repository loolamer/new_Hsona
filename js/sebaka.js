document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.close-button');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');

            modalImage.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.classList.add('active'); // Show modal
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        });
    });

    // Close modal when close button is clicked
    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});