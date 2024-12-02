function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    const numberOfStars = 450;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            animation: twinkle ${2 + Math.random() * 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        starsContainer.appendChild(star);
    }
}

function initializeServiceModals() {
    const modal = document.getElementById('serviceModal');
    const closeBtn = document.querySelector('.close-modal');
    const serviceButtons = document.querySelectorAll('.service-card .btn-ripple');

    const serviceFormData = {
        'AI/ML Solutions': {
            types: ['Predictive Analytics', 'Machine Learning Implementation', 'Data Processing', 'AI Model Training', 'Natural Language Processing']
        },
        'Software Development': {
            types: ['Web Applications', 'Mobile Applications', 'Desktop Software', 'API Development', 'Custom Software Solutions']
        },
        'Cryptography': {
            types: ['Encryption System', 'Security Audit', 'Protocol Design', 'Private Key Management', 'Blockchain Security']
        },
        'Quantum Computing': {
            types: ['Quantum Algorithm Development', 'Quantum Cryptography', 'Quantum Simulation', 'Circuit Optimization', 'Quantum Machine Learning']
        },
        'Crypto Wallet Recovery': {
            types: ['Bitcoin Wallet Recovery', 'Ethereum Wallet Recovery', 'BIP39 Mnemonic Recovery', 'Multi-coin Wallet Recovery', 'Hardware Wallet Recovery']
        },
        'Full Stack Development': {
            types: ['E-commerce Solutions', 'Social Media Platforms', 'Enterprise Systems', 'Custom Web Solutions', 'Content Management Systems']
        },
        'Debugging & Optimization': {
            types: ['Code Debugging', 'Algorithm Optimization', 'Performance Tuning', 'Error Resolution', 'Complex Bug Fixing']
        },
        'Frontend Development': {
            types: ['Responsive Design', 'UI/UX Development', 'JavaScript Frameworks', 'Frontend Optimization', 'Cross-Browser Compatibility']
        },
        'Backend Development': {
            types: ['Server-Side Logic', 'Database Management', 'API Integration', 'Authentication Systems', 'Data Security']
        }
    };
    

    if (serviceButtons) {
        serviceButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const serviceCard = this.closest('.service-card');
                const serviceName = serviceCard.querySelector('h3').textContent;
                
                document.getElementById('modalTitle').textContent = `Request ${serviceName}`;
                const projectTypeSelect = document.getElementById('projectType');
                projectTypeSelect.innerHTML = serviceFormData[serviceName].types
                    .map(type => `<option value="${type}">${type}</option>`)
                    .join('');
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    const form = document.getElementById('serviceForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            console.log('Form submitted:', Object.fromEntries(formData));
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            form.reset();
        });
    }
}

function rotateGallery(direction = 'next') {
    const items = document.querySelectorAll('.gallery-item');
    if (!items.length) return;

    const totalItems = items.length;
    const activeItem = document.querySelector('.gallery-item.active');
    const currentIndex = Array.from(items).indexOf(activeItem);
    
    const newIndex = direction === 'next' 
        ? (currentIndex + 1) % totalItems 
        : (currentIndex - 1 + totalItems) % totalItems;
    
    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');
        
        if (index === newIndex) {
            item.classList.add('active');
        } else if (index === (newIndex + 1) % totalItems) {
            item.classList.add('next');
        } else if (index === (newIndex - 1 + totalItems) % totalItems) {
            item.classList.add('prev');
        }
    });
}

function toggleDetails(projectId) {
    const details = document.getElementById(`${projectId}-details`);
    if (!details) return;

    const allDetails = document.querySelectorAll('.project-details');
    
    allDetails.forEach(detail => {
        if (detail.id !== `${projectId}-details`) {
            detail.style.display = 'none';
            detail.style.opacity = '0';
        }
    });

    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        setTimeout(() => details.style.opacity = '1', 10);
        document.body.style.overflow = 'hidden';
    } else {
        details.style.opacity = '0';
        setTimeout(() => {
            details.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.code-text')) {
        typeWriter();
    }
    createStars();
    initializeServiceModals();
    
    // Start gallery rotation
    setInterval(() => rotateGallery('next'), 5000);
    
    // Initialize expertise section observer
    const expertiseSection = document.querySelector('.expertise');
    if (expertiseSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(expertiseSection);
    }

    // Initialize smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
class QuantumSphere {
    constructor() {
        this.sphere = document.querySelector('.quantum-sphere');
        this.initParticles();
        this.initConnections();
        this.animate();
    }

    initParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        
        for(let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random 3D position
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const r = 150 + Math.random() * 50;
            
            particle.style.transform = `translate3d(
                ${r * Math.sin(phi) * Math.cos(theta)}px,
                ${r * Math.sin(phi) * Math.sin(theta)}px,
                ${r * Math.cos(phi)}px
            )`;
            
            particlesContainer.appendChild(particle);
        }
        
        this.sphere.appendChild(particlesContainer);
    }

    initConnections() {
        const connectionsContainer = document.createElement('div');
        connectionsContainer.className = 'neural-connections';
        
        for(let i = 0; i < 30; i++) {
            const connection = document.createElement('div');
            connection.className = 'connection';
            
            // Random position and rotation
            const length = 50 + Math.random() * 100;
            const x = -200 + Math.random() * 400;
            const y = -200 + Math.random() * 400;
            const z = -200 + Math.random() * 400;
            const rotation = Math.random() * 360;
            
            connection.style.width = `${length}px`;
            connection.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rotation}deg)`;
            
            connectionsContainer.appendChild(connection);
        }
        
        this.sphere.appendChild(connectionsContainer);
    }

    animate() {
        // Add interactive animations based on mouse movement
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX - window.innerWidth / 2) / 20;
            const y = (e.clientY - window.innerHeight / 2) / 20;
            
            this.sphere.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuantumSphere();
});
class TypeEffect {
    constructor(element, text, speed = 100, delay = 1000) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.delay = delay;
        this.currentText = '';
        this.letterIndex = 0;
    }

    async type() {
        while (this.letterIndex < this.text.length) {
            await this.waitForMs(this.speed);
            this.currentText += this.text.charAt(this.letterIndex);
            this.element.textContent = this.currentText;
            this.letterIndex++;
        }
    }

    async waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

class HeroAnimator {
    constructor() {
        this.init();
    }

    init() {
        const introText = document.querySelector('.intro-text');
        const nameText = document.querySelector('h1');
        const roleText = document.querySelector('h2');
        const taglineText = document.querySelector('.hero-text p');

        // Add cursor effect
        [introText, nameText, roleText, taglineText].forEach(el => {
            el.style.borderRight = '3px solid #00ffff';
        });

        // Initial state
        nameText.textContent = '';
        roleText.textContent = '';
        taglineText.textContent = '';
        introText.textContent = '';

        this.startAnimation(introText, nameText, roleText, taglineText);
    }

    async startAnimation(introText, nameText, roleText, taglineText) {
        // Create typing instances
        const intro = new TypeEffect(introText, "Hi, I'm", 100);
        const name = new TypeEffect(nameText, "Hamza Shah", 150);
        const role = new TypeEffect(roleText, "Python Developer & AI Specialist", 80);
        const tagline = new TypeEffect(taglineText, "Transforming ideas into intelligent solutions", 50);

        // Sequence the animations
        await this.waitForMs(500);
        await intro.type();
        
        await this.waitForMs(400);
        introText.style.borderRight = 'none';
        await name.type();
        
        await this.waitForMs(400);
        nameText.style.borderRight = 'none';
        await role.type();
        
        await this.waitForMs(400);
        roleText.style.borderRight = 'none';
        await tagline.type();
        
        await this.waitForMs(400);
        taglineText.style.borderRight = 'none';

        // Add fade-in animation for buttons
        const buttons = document.querySelector('.hero-buttons');
        buttons.style.opacity = '0';
        buttons.style.transition = 'opacity 1s ease';
        await this.waitForMs(200);
        buttons.style.opacity = '1';
    }

    waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroAnimator();
});

function downloadCV() {
    if (confirm("Would you like to download Hamza Shah's CV?")) {
        const link = document.createElement('a');
        link.href = 'Document.pdf'; // Update this path to your actual CV file location
        link.download = 'HamzaShah-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
// Enhanced copy email functionality
function copyEmail() {
    const email = 'hs.456.king@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const copyBtn = document.querySelector('.copy-email-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#4a90e2';
        copyBtn.style.color = '#fff';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = 'transparent';
            copyBtn.style.color = '#4a90e2';
        }, 2000);
    });
}

// Add click event listener
document.querySelector('.copy-email-btn').addEventListener('click', copyEmail);


function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}


 // Contact form
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch(`${config.apiUrl}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to send message');
        }

        const result = await response.json();
        showNotification('Success!', 'Message sent successfully', 'success');
        e.target.reset();
    } catch (error) {
        console.error('Error:', error);
        showNotification('Error', error.message || 'Failed to send message', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});

// Service request form
document.getElementById('serviceForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    
    const formData = {
        name: document.getElementById('serviceFormName').value,
        email: document.getElementById('serviceFormEmail').value,
        projectType: document.getElementById('projectType').value,
        timeline: document.getElementById('timeline').value,
        description: document.getElementById('description').value,
        budget: document.getElementById('budget').value
    };

    try {
        const response = await fetch(`${config.apiUrl}/api/service-request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to submit service request');
        }

        const result = await response.json();
        showNotification('Success!', 'Service request submitted successfully', 'success');
        e.target.reset();
        document.getElementById('serviceModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    } catch (error) {
        console.error('Error:', error);
        showNotification('Error', error.message || 'Failed to submit request', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Request';
    }
});

// Add mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Add notification system
function showNotification(title, message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <h4>${title}</h4>
        <p>${message}</p>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }, 100);
}
