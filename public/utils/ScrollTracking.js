export function initScrollTracking() {
  const trackedSections = {
    'hero-section': false,
    'features-section': false,
    'testimonials-section': false
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.5 && !trackedSections[entry.target.id]) {
        trackedSections[entry.target.id] = true;
        
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'scroll_engagement',
          section: entry.target.id,
          visibility: Math.round(entry.intersectionRatio * 100) + '%'
        });

        if (typeof gtag === 'function') {
          gtag('event', 'scroll_view', {
            section_name: entry.target.id,
            engagement: 'high'
          });
        }

        if (typeof fbq === 'function') {
          fbq('trackCustom', 'ScrollEngagement', {
            section: entry.target.id
          });
        }
      }
    });
  }, { threshold: [0.1, 0.5, 0.9] });

  Object.keys(trackedSections).forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) observer.observe(section);
  });
}