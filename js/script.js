// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    // Slider variables
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Function to show slide
    function showSlide(n) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Show the current slide
        slides[n].classList.add('active');
        dots[n].classList.add('active');
    }

    // Function to move to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Initialize Google Map
    function initMap() {
        const restaurantLocation = { lat: 50.4501, lng: 30.5234 }; // Координати Києва
        
        const mapOptions = {
            zoom: 15,
            center: restaurantLocation,
            styles: [
                {
                    featureType: "all",
                    elementType: "geometry",
                    stylers: [{ color: "#242f3e" }]
                },
                {
                    featureType: "all",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#242f3e" }]
                },
                {
                    featureType: "all",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#746855" }]
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#17263c" }]
                }
            ]
        };

        const map = new google.maps.Map(
            document.getElementById('google-map'),
            mapOptions
        );

        // Add marker
        new google.maps.Marker({
            position: restaurantLocation,
            map: map,
            title: 'Art Food Restaurant & Bar',
            animation: google.maps.Animation.DROP
        });
    }

    // Load Google Maps API
    if (typeof google === 'undefined') {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        window.initMap = initMap;
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('nav');

    if (mobileMenuButton && nav) {
        mobileMenuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;
        img.src = src;
        img.removeAttribute('data-src');
    }

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            preloadImage(entry.target);
            observer.unobserve(entry.target);
        });
    }, imageOptions);

    images.forEach(image => imageObserver.observe(image));

    // Header scroll effect
    const header = document.querySelector('header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Booking modal functionality
    const bookingModal = document.getElementById('bookingModal');
    const bookTableBtn = document.querySelector('.book-table-btn');
    const closeModal = document.querySelector('.close-modal');
    const bookingForm = document.getElementById('bookingForm');

    bookTableBtn.addEventListener('click', () => {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Language switching functionality
    let currentLang = localStorage.getItem('language') || 'en';
    const languageSelect = document.querySelector('.language-select');

    // Set initial language
    languageSelect.value = currentLang;
    updateContent(currentLang);

    // Language change handler
    languageSelect.addEventListener('change', function(e) {
        currentLang = e.target.value;
        localStorage.setItem('language', currentLang);
        updateContent(currentLang);
    });

    // Function to update content based on selected language
    function updateContent(lang) {
        document.documentElement.lang = lang;
        
        // Update elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            let translation = translations[lang];
            
            // Handle nested keys (e.g., 'dishes.salmon.title')
            key.split('.').forEach(k => {
                translation = translation[k];
            });
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update about items list
        const aboutItems = document.getElementById('aboutItems');
        if (aboutItems) {
            aboutItems.innerHTML = translations[lang].aboutItems
                .map(item => `<li>${item}</li>`)
                .join('');
        }
    }

    // Update booking form submission alert
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(translations[currentLang].bookingModal.thankYou);
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
        bookingForm.reset();
    });

    // Intersection Observer for animations
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Add animation classes to elements
    document.querySelectorAll('.dish, .menu-item').forEach(el => {
        el.classList.add('scale-in');
        animateOnScroll.observe(el);
    });

    document.querySelectorAll('.about, .wine-test, .gallery img').forEach(el => {
        el.classList.add('fade-in');
        animateOnScroll.observe(el);
    });

    // Gallery functionality
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const imageModal = document.querySelector('.image-modal');
    const modalImage = document.querySelector('.modal-image');
    const closeImageModal = document.querySelector('.close-image-modal');
    const likeBtns = document.querySelectorAll('.like-btn');
    const likesCounters = document.querySelectorAll('.likes-count');

    // Set initial random likes (min 33)
    likesCounters.forEach(counter => {
        counter.textContent = Math.floor(Math.random() * 467) + 33;
    });

    // Open image modal
    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            imageModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close image modal
    closeImageModal.addEventListener('click', () => {
        imageModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle likes
    likeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const counter = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            
            if (btn.classList.contains('liked')) {
                btn.classList.remove('liked');
                icon.classList.remove('fas');
                icon.classList.add('far');
                counter.textContent = parseInt(counter.textContent) - 1;
            } else {
                btn.classList.add('liked');
                icon.classList.remove('far');
                icon.classList.add('fas');
                counter.textContent = parseInt(counter.textContent) + 1;
            }
        });
    });

    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            imageModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Dish modal functionality
    const dishes = document.querySelectorAll('.dish');
    const dishModal = document.querySelector('.dish-modal');
    const closeDishModal = dishModal.querySelector('.close-modal');

    dishes.forEach(dish => {
        dish.addEventListener('click', () => {
            const dishType = dish.dataset.dish;
            const dishData = translations[currentLang].dishes[dishType];
            
            // Update modal content
            dishModal.querySelector('.dish-modal-image img').src = dish.querySelector('img').src;
            dishModal.querySelector('.dish-modal-image img').alt = dish.querySelector('img').alt;
            dishModal.querySelector('.dish-title').textContent = dishData.title;
            dishModal.querySelector('.dish-full-desc').textContent = dishData.fullDesc;
            dishModal.querySelector('.dish-ingredients').textContent = dishData.ingredients;
            dishModal.querySelector('.dish-calories').textContent = dishData.calories;
            dishModal.querySelector('.dish-protein').textContent = dishData.protein;
            dishModal.querySelector('.dish-fats').textContent = dishData.fats;
            dishModal.querySelector('.dish-carbs').textContent = dishData.carbs;

            // Show modal
            dishModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close dish modal
    closeDishModal.addEventListener('click', () => {
        dishModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    dishModal.addEventListener('click', (e) => {
        if (e.target === dishModal) {
            dishModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close dish modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dishModal.classList.contains('active')) {
            dishModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Menu modal functionality
    const menuItems = document.querySelectorAll('.menu-item');
    const menuModal = document.querySelector('.menu-modal');
    const closeMenuModal = menuModal.querySelector('.close-modal');
    const menuTitle = menuModal.querySelector('.menu-title');
    const menuBody = menuModal.querySelector('.menu-modal-body');

    // Function to generate menu HTML
    function generateMenuHTML(menuData) {
        return Object.values(menuData.categories).map(category => `
            <div class="menu-category">
                <h3 class="menu-category-title">${category.title}</h3>
                <div class="menu-items">
                    ${category.items.map(item => `
                        <div class="menu-item-card">
                            <div class="menu-item-info">
                                <h4 class="menu-item-name">${item.name}</h4>
                                <p class="menu-item-description">${item.description}</p>
                            </div>
                            <div class="menu-item-price">${item.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Add click handlers to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Fix: Get the correct menu type from data-translate attribute
            const menuType = item.querySelector('h3').getAttribute('data-translate').split('.')[1];
            let menuTypeKey;
            
            // Map menu types to their corresponding keys in translations
            switch(menuType) {
                case 'main':
                    menuTypeKey = 'mainMenu';
                    break;
                case 'wine':
                    menuTypeKey = 'wineList';
                    break;
                case 'desserts':
                    menuTypeKey = 'desserts';
                    break;
                case 'bar':
                    menuTypeKey = 'bar';
                    break;
            }
            
            const menuData = translations[currentLang].menuModal[menuTypeKey];
            
            menuTitle.textContent = menuData.title;
            menuBody.innerHTML = generateMenuHTML(menuData);
            
            menuModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close menu modal
    closeMenuModal.addEventListener('click', () => {
        menuModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    menuModal.addEventListener('click', (e) => {
        if (e.target === menuModal) {
            menuModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close menu modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuModal.classList.contains('active')) {
            menuModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}); 