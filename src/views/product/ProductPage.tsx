import React, { useState } from "react";
import "./ProductPage.css";

// Key features data (Notion Requirement: At least 3 features)
const KEY_FEATURES = [
  {
    id: 1,
    icon: "🛡️",
    title: "Military-Grade Biometrics",
    description:
      "Integrated EAL6+ cryptographic security element paired with an ultra-fast optical fingerprint sensor for instant hardware authentication."
  },
  {
    id: 2,
    icon: "⚡",
    title: "14-Day Battery & Qi Charging",
    description:
      "Powered by an ultra-efficient dual-core processor delivering up to two weeks of continuous performance with 30-minute rapid wireless warp recharge."
  },
  {
    id: 3,
    icon: "💎",
    title: "Sapphire Crystal AMOLED",
    description:
      "Scratch-proof synthetic sapphire glass protecting a brilliant 1,000-nit always-on retina display with razor-sharp outdoor clarity."
  },
  {
    id: 4,
    icon: "🌊",
    title: "Aerospace Titanium & 50M Water Resistance",
    description:
      "Precision-machined Grade-5 titanium chassis engineered to withstand deep dives, extreme temperatures, and rigorous daily adventures."
  }
];

// Product image gallery list
const PRODUCT_IMAGES = [
  {
    id: "main",
    label: "Midnight Titanium",
    url: "/images/product-watch.jpg",
    thumb: "/images/product-watch.jpg"
  },
  {
    id: "device",
    label: "Smart Sensor Hub",
    url: "/images/product-device.jpg",
    thumb: "/images/product-device.jpg"
  },
  {
    id: "audio",
    label: "Acoustic Edition",
    url: "/images/product-audio.jpg",
    thumb: "/images/product-audio.jpg"
  }
];

const ProductPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(PRODUCT_IMAGES[0]);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="product-page-container">
      {/* ========================================================
          1. HEADER SECTION (Display Product Name Clearly)
          ======================================================== */}
      <header className="product-header-section">
        <div className="header-content-wrapper">
          <div className="product-badge-row">
            <span className="product-category-badge">Flagship Innovation</span>
            <span className="product-status-badge">
              <span className="status-dot"></span> In Stock & Ready to Ship
            </span>
          </div>
          <h1 className="product-main-title">Yam Pulse Pro</h1>
          <p className="product-tagline">
            The next-generation biometric smartwatch and decentralized hardware security key.
            Engineered for elite performance, uncompromising privacy, and everyday elegance.
          </p>
        </div>
      </header>

      {/* ========================================================
          2 & 3. HERO SECTION (Product Image & Description)
          ======================================================== */}
      <main className="product-hero-wrapper">
        <section className="product-hero-grid" aria-label="Product Showcase">
          {/* Column 1: Product Image Gallery */}
          <div className="product-media-column">
            <div className="product-image-container">
              <img
                src={selectedImage.url}
                alt={`Yam Pulse Pro - ${selectedImage.label}`}
                className="product-main-img"
              />
              <span className="image-tag-overlay">{selectedImage.label}</span>
            </div>

            {/* Thumbnail Navigation */}
            <div className="thumbnail-row" role="tablist" aria-label="Product views">
              {PRODUCT_IMAGES.map((img) => (
                <button
                  key={img.id}
                  type="button"
                  className={`thumbnail-btn ${selectedImage.id === img.id ? "active" : ""}`}
                  onClick={() => setSelectedImage(img)}
                  title={`View ${img.label}`}
                >
                  <img src={img.thumb} alt={img.label} />
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Product Description & Overview */}
          <div className="product-details-column">
            <div className="details-header">
              <div className="rating-row">
                <span className="rating-stars">★★★★★</span>
                <span>4.9 / 5.0</span>
                <span className="review-count">(1,248 verified reviews)</span>
              </div>
              <h2 className="product-display-name">Yam Pulse Pro (Titanium Edition)</h2>
              <div className="price-row">
                <span className="current-price">$349.00</span>
                <span className="original-price">$449.00</span>
                <span className="discount-pill">Save $100 (22% OFF)</span>
              </div>
            </div>

            {/* Concise Product Description */}
            <div className="description-box">
              <div className="description-title">Product Overview</div>
              <p className="product-description-text">
                Yam Pulse Pro is a state-of-the-art wearable combining health intelligence,
                military-grade biometric authentication, and multi-network cryptographic security.
                Crafted from forged aerospace titanium and shielded by synthetic sapphire glass, it seamlessly
                bridges enterprise hardware safety with refined luxury aesthetics.
              </p>
            </div>

            {/* Quick Spec Highlights */}
            <div className="spec-highlights-list">
              <div className="spec-item">
                <span className="spec-icon">🛡️</span>
                <span>EAL6+ Hardware Security</span>
              </div>
              <div className="spec-item">
                <span className="spec-icon">🔋</span>
                <span>14 Days Battery Endurance</span>
              </div>
              <div className="spec-item">
                <span className="spec-icon">💧</span>
                <span>50-Meter Waterproof Rating</span>
              </div>
              <div className="spec-item">
                <span className="spec-icon">📶</span>
                <span>Bluetooth 5.3 & NFC Tap</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="cta-group">
              <button
                type="button"
                className="btn-primary-action"
                onClick={handleAddToCart}
              >
                {addedToCart ? "✓ Added to Order" : "Pre-Order Yam Pulse Pro"}
              </button>
              <button
                type="button"
                className="btn-secondary-action"
                onClick={() => {
                  const elem = document.getElementById("key-features");
                  if (elem) elem.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Features
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================
          4. KEY FEATURES SECTION (At least three features)
          ======================================================== */}
      <section id="key-features" className="features-section" aria-label="Key Features">
        <div className="section-headline-wrapper">
          <div className="section-mini-tag">Crafted for Excellence</div>
          <h2 className="section-main-heading">Key Features & Breakthroughs</h2>
          <p className="section-subheading">
            Every component of the Yam Pulse Pro has been engineered with obsessive attention to detail
            and industry-leading standards.
          </p>
        </div>

        <div className="features-grid">
          {KEY_FEATURES.map((feature) => (
            <article key={feature.id} className="feature-card">
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. FOOTER SECTION (Clear Contact Information)
          ======================================================== */}
      <footer className="product-footer-section">
        <div className="footer-inner-container">
          <div className="footer-columns-grid">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <h3 className="footer-brand-title">Yam Pulse Pro</h3>
              <p className="footer-brand-desc">
                Leading the frontier of decentralized security, biometric engineering, and
                luxury wearable technology. Designed with precision, built for lifetime endurance.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="footer-nav-col">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-links-list">
                <li><a href="#key-features">Key Features</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/sell">Exchange</a></li>
                <li><a href="/login">User Portal</a></li>
              </ul>
            </div>

            {/* Contact Information Column (Mandatory Notion Requirement) */}
            <div className="footer-contact-col">
              <h4 className="footer-heading">Contact Information</h4>
              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email:</strong> support@yamtoken.io
                  </div>
                </li>
                <li className="contact-info-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone:</strong> +1 (800) 826-0199
                  </div>
                </li>
                <li className="contact-info-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Address:</strong> 20550 Townsen Blvd, Humble, TX 77338
                  </div>
                </li>
                <li className="contact-info-item">
                  <span className="contact-icon">🕒</span>
                  <div>
                    <strong>Support Hours:</strong> Mon – Fri, 9:00 AM – 6:00 PM EST
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="footer-bottom-bar">
            <span>© {new Date().getFullYear()} Yam Pulse Pro. All rights reserved.</span>
            <span>Frontend Developer Test • 0xconvey Assignment</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;

