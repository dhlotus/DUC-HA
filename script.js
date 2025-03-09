// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Header scroll effect
  const header = document.getElementById('header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      header.classList.add('scrolled');
      
      if (scrollTop > lastScrollTop) {
        header.classList.add('header-hidden');
      } else {
        header.classList.remove('header-hidden');
      }
    } else {
      header.classList.remove('scrolled');
      header.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop;
    
    // Activate elements when scrolled into view
    activateOnScroll();
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Gallery functionality
  setupGallery();
  
  // Idol tabs functionality
  setupIdolTabs();
  
  // Initialize animations for elements in the viewport
  activateOnScroll();
});

// Gallery setup
function setupGallery() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const featuredImages = document.querySelectorAll('.featured-image-container img');
  const dots = document.querySelectorAll('.gallery-dots .dot');
  
  // Function to update active image
  function setActiveImage(index) {
    // Update thumbnails
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    const activeThumbnailIndex = index % 4; // Since we only have 4 thumbnails
    if (thumbnails[activeThumbnailIndex]) {
      thumbnails[activeThumbnailIndex].classList.add('active');
    }
    
    // Update featured image
    featuredImages.forEach(img => img.classList.remove('active'));
    if (featuredImages[index]) {
      featuredImages[index].classList.add('active');
    }
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) {
      dots[index].classList.add('active');
    }
  }
  
  // Click events for thumbnails
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'), 10);
      setActiveImage(index);
    });
  });
  
  // Click events for dots
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'), 10);
      setActiveImage(index);
    });
  });
  
  // Auto-rotate gallery images
  let currentIndex = 0;
  const galleryInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % featuredImages.length;
    setActiveImage(currentIndex);
  }, 5000);
}

// Idol tabs functionality
function setupIdolTabs() {
  const idolTabs = document.querySelectorAll('.idol-tab');
  const idolCards = document.querySelectorAll('.idol-card');
  
  idolTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs and cards
      idolTabs.forEach(t => t.classList.remove('active'));
      idolCards.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding card
      const idolId = this.getAttribute('data-idol');
      this.classList.add('active');
      
      const correspondingCard = document.querySelector(`.idol-card[data-idol="${idolId}"]`);
      if (correspondingCard) {
        correspondingCard.classList.add('active');
      }
    });
  });
}

// Animation on scroll
function activateOnScroll() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  animatedElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.classList.add('visible');
      
      // Add delay classes if present
      if (element.classList.contains('delay-1')) {
        element.classList.add('visible-delay-1');
      } else if (element.classList.contains('delay-2')) {
        element.classList.add('visible-delay-2');
      } else if (element.classList.contains('delay-3')) {
        element.classList.add('visible-delay-3');
      } else if (element.classList.contains('delay-4')) {
        element.classList.add('visible-delay-4');
      } else if (element.classList.contains('delay-5')) {
        element.classList.add('visible-delay-5');
      }
    }
  });
}

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && event.key === "I") ||  
        (event.ctrlKey && event.shiftKey && event.key === "J") ||  
        (event.ctrlKey && event.key === "U") 
       ) {
        event.preventDefault(); 
    }
});
// u
document.addEventListener('keydown', function (event) {
if (event.ctrlKey && event.key.toLowerCase() === 'u') {
    event.preventDefault(); 
    return false; 
}
});