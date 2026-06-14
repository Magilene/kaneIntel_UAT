// KaneIntel Business Automation - Site JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initCalculator();
  initLazyLoad();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (toggle && navLinks) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      this.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });
    
    // Close menu when link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Close menu on outside click
    document.addEventListener('click', function() {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/**
 * Revenue Recovery Calculator
 */
function initCalculator() {
  const calcForm = document.getElementById('loss-calc');
  
  if (!calcForm) return;
  
  const inputs = {
    leads: document.getElementById('monthly-leads'),
    missed: document.getElementById('missed-rate'),
    value: document.getElementById('customer-value'),
    conversion: document.getElementById('conversion-rate')
  };
  
  const output = document.getElementById('loss-output');
  
  if (!inputs.leads || !inputs.missed || !inputs.value || !inputs.conversion) return;
  
  function updateCalculation() {
    const leads = parseFloat(inputs.leads.value) || 0;
    const missedRate = parseFloat(inputs.missed.value) || 0;
    const customerValue = parseFloat(inputs.value.value) || 0;
    const conversionRate = parseFloat(inputs.conversion.value) || 0;
    
    // Calculate: (leads × missed% × customer value × conversion%) per month
    const missedLeads = leads * (missedRate / 100);
    const recoveredRevenue = missedLeads * customerValue * (conversionRate / 100);
    
    output.textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(recoveredRevenue);
  }
  
  // Add event listeners to all inputs
  Object.values(inputs).forEach(input => {
    if (input) {
      input.addEventListener('input', updateCalculation);
      input.addEventListener('change', updateCalculation);
    }
  });
  
  // Calculate on load
  updateCalculation();
}

/**
 * Lazy Load Images (for future optimization)
 */
function initLazyLoad() {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

/**
 * Smooth Scroll Helper
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/**
 * Track outbound links (for analytics)
 */
window.trackOutboundLink = function(url, newWindow) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      'event_category': 'outbound',
      'event_label': url,
      'transport_type': 'beacon'
    });
  }
  
  if (newWindow) {
    window.open(url);
  } else {
    document.location = url;
  }
};

/**
 * Initialize active nav links
 */
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

initActiveNav();

// Export for external use
window.KaneIntel = {
  trackOutboundLink: trackOutboundLink,
  initCalculator: initCalculator,
  initMobileMenu: initMobileMenu
};
