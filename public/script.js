// Load Cars Gallery
function loadCarsGallery() {
    const gallery = document.getElementById('carsGallery');
    
    carsData.forEach((car, index) => {
        const carCard = document.createElement('div');
        carCard.className = 'col-md-4';
        carCard.innerHTML = `
            <div class="car-card" data-delay="${index * 100}" onclick="openCarModal(${car.id})">
                <img src="${car.images[0]}" alt="${car.name}" class="car-image">
                <div class="car-card-body">
                    <div class="car-brand">${car.brand}</div>
                    <h3 class="car-name">${car.name}</h3>
                    <p class="text-muted mb-2">${car.model} • ${car.mileage}</p>
                    <div class="car-price">${car.price}</div>
                    <span class="car-status">${car.status}</span>
                    <p class="text-muted mt-2 mb-0"><i class="fas fa-map-marker-alt"></i> ${car.destination}</p>
                </div>
            </div>
        `;
        gallery.appendChild(carCard);
    });
}

// Load Testimonials
function loadTestimonials() {
    const container = document.getElementById('testimonialsContainer');
    
    testimonialsData.forEach((testimonial, index) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'col-md-6';
        testimonialCard.innerHTML = `
            <div class="testimonial-card" data-delay="${index * 150}">
                <div class="testimonial-header">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <div class="testimonial-country">
                            <i class="fas fa-globe me-1"></i> ${testimonial.country}
                        </div>
                    </div>
                </div>
                <div class="testimonial-rating">
                    ${'★'.repeat(testimonial.rating)}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-car">
                    <i class="fas fa-car me-2"></i>${testimonial.car}
                </div>
            </div>
        `;
        container.appendChild(testimonialCard);
    });
}

// Open Car Modal
function openCarModal(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
    
    // Set modal title
    document.getElementById('carModalTitle').textContent = `${car.brand} ${car.name} (${car.model})`;
    
    // Load carousel images
    const carouselInner = document.getElementById('carouselInner');
    carouselInner.innerHTML = '';
    
    car.images.forEach((image, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `<img src="${image}" class="d-block w-100" alt="${car.name}">`;
        carouselInner.appendChild(carouselItem);
    });
    
    // Load car details
    const carDetails = document.getElementById('carDetails');
    carDetails.innerHTML = `
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-tag me-2"></i>Brand</span>
            <span class="detail-value">${car.brand}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-car me-2"></i>Model</span>
            <span class="detail-value">${car.name} ${car.model}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-dollar-sign me-2"></i>Price</span>
            <span class="detail-value">${car.price}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-tachometer-alt me-2"></i>Mileage</span>
            <span class="detail-value">${car.mileage}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-cog me-2"></i>Engine</span>
            <span class="detail-value">${car.engine}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-sync-alt me-2"></i>Transmission</span>
            <span class="detail-value">${car.transmission}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-palette me-2"></i>Color</span>
            <span class="detail-value">${car.color}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-calendar-plus me-2"></i>Ordered Date</span>
            <span class="detail-value">${car.orderedDate}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-ship me-2"></i>Exported Date</span>
            <span class="detail-value">${car.exportedDate}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-check-circle me-2"></i>Received Date</span>
            <span class="detail-value">${car.receivedDate}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-map-marker-alt me-2"></i>Destination</span>
            <span class="detail-value">${car.destination}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label"><i class="fas fa-info-circle me-2"></i>Status</span>
            <span class="detail-value">${car.status}</span>
        </div>
        <div class="mt-4 text-center">
            <a href="https://wa.me/817084447791?text=I'm interested in ${car.brand} ${car.name}" 
               class="btn btn-danger btn-lg" target="_blank">
                <i class="fab fa-whatsapp me-2"></i>Contact Us About This Vehicle
            </a>
        </div>
    `;
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('carModal'));
    modal.show();
}

// Scroll to contact section
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Counter animation
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load content
    loadCarsGallery();
    loadTestimonials();
    
    // Observe feature cards
    setTimeout(() => {
        document.querySelectorAll('.feature-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
    
    // Observe car cards
    setTimeout(() => {
        document.querySelectorAll('.car-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
    
    // Observe testimonial cards
    setTimeout(() => {
        document.querySelectorAll('.testimonial-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
    
    // Observe process steps
    document.querySelectorAll('.process-step').forEach(step => {
        observer.observe(step);
    });
    
    // Counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stats-counter').forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / 800);
        }
    });
});