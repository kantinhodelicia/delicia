class SEOOptimization {
  constructor() {
    this.metaTags = {
      title: "Kantinho Delícia - Pizzaria em Cabo Verde",
      description: "Kantinho Delícia: A melhor pizzaria de Cabo Verde. Oferecemos pizzas deliciosas, entrega em domicílio e uma experiência gastronômica única.",
      keywords: "pizza, cabo verde, restaurante, entrega de pizza, pizzaria, comida deliciosa",
      author: "Kantinho Delícia"
    };
  }

  // Generate meta tags for dynamic pages
  generateMetaTags(pageType, additionalData = {}) {
    let title = this.metaTags.title;
    let description = this.metaTags.description;

    switch(pageType) {
      case 'menu':
        title = "Menu de Pizzas - Kantinho Delícia";
        description = "Descubra nosso menu variado de pizzas. Temos opções para todos os gostos, desde clássicas até especiais da casa.";
        break;
      case 'blog':
        title = "Blog Gastronômico - Kantinho Delícia";
        description = "Artigos, dicas e histórias sobre pizza, culinária e gastronomia.";
        break;
      case 'delivery':
        title = "Entrega de Pizza em Domicílio - Kantinho Delícia";
        description = "Peça sua pizza favorita e receba em casa. Entregamos em várias zonas de Cabo Verde.";
        break;
    }

    return `
      <meta name="description" content="${description}">
      <meta name="keywords" content="${this.metaTags.keywords}">
      <meta name="author" content="${this.metaTags.author}">
      <meta property="og:title" content="${title}">
      <meta property="og:description" content="${description}">
      <meta property="og:type" content="website">
      <meta property="og:url" content="${window.location.href}">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${title}">
      <meta name="twitter:description" content="${description}">
    `;
  }

  // Generate a sitemap for better indexing
  generateSitemap() {
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/blog.html', priority: '0.8', changefreq: 'weekly' },
      { url: '/menu.html', priority: '0.9', changefreq: 'daily' }
    ];

    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pages.forEach(page => {
      sitemapContent += `
      <url>
        <loc>https://kantinhodelicia.cv${page.url}</loc>
        <priority>${page.priority}</priority>
        <changefreq>${page.changefreq}</changefreq>
      </url>`;
    });

    sitemapContent += `
    </urlset>`;

    // Save sitemap
    const blob = new Blob([sitemapContent], {type: 'application/xml'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Add structured data for rich snippets
  generateStructuredData() {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Kantinho Delícia",
      "description": "Pizzaria especializada em pizzas artesanais e delivery em Cabo Verde",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Principal",
        "addressLocality": "Praia",
        "addressCountry": "CV"
      },
      "telephone": "+238 XXX-XX-XX",
      "menu": "https://kantinhodelicia.cv/menu",
      "servesCuisine": ["Pizza", "Cabo-verdiana"],
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "22:00"
      }
    });
  }

  // Performance optimization
  optimizePerformance() {
    // Add lazy loading to images
    document.querySelectorAll('img').forEach(img => {
      img.setAttribute('loading', 'lazy');
    });

    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: 'styles.css', as: 'style' },
      { rel: 'preload', href: 'menu.js', as: 'script' }
    ];

    preloadLinks.forEach(link => {
      const preloadLink = document.createElement('link');
      preloadLink.rel = link.rel;
      preloadLink.href = link.href;
      preloadLink.as = link.as;
      document.head.appendChild(preloadLink);
    });
  }

  init() {
    // Add meta tags to head
    const headElement = document.querySelector('head');
    const metaTagsHTML = this.generateMetaTags('home');
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = this.generateStructuredData();
    
    headElement.innerHTML += metaTagsHTML;
    headElement.appendChild(structuredDataScript);

    // Performance optimization
    this.optimizePerformance();

    // Add sitemap generation option
    const sitemapBtn = document.createElement('button');
    sitemapBtn.textContent = 'Gerar Sitemap';
    sitemapBtn.onclick = () => this.generateSitemap();
    sitemapBtn.style.position = 'fixed';
    sitemapBtn.style.bottom = '20px';
    sitemapBtn.style.right = '20px';
    document.body.appendChild(sitemapBtn);
  }
}

// Initialize SEO optimization when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const seoOptimization = new SEOOptimization();
  seoOptimization.init();
});