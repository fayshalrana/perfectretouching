# Perfect Retouching Website

A modern, responsive React web application for a professional photo editing and retouching service. The project is designed with a strong focus on UI/UX, modular components, and scalability.

## Project Structure

```
src/
  components/
    screen/
      Home/
        Hero.jsx           // Hero section with typing effect and image collage
        AboutSection.jsx   // About section with features and blurbs
        PricingSection.jsx // Pricing plans with selector and responsive layout
        TrustSection.jsx   // Testimonials/slider section
        ...
    shared/
      Navbar/
      Footer/
      LanguageSelector/
      ...
  assets/
    images/
    ...
  styles/
    ...
```

- **screen/Home/**: Main homepage sections as modular React components.
- **shared/**: Reusable UI components (navbar, footer, language selector, etc.).
- **assets/**: Static images and icons.
- **styles/**: Global and component-specific styles.

## Key Features

- **Responsive UI/UX**: All sections adapt to mobile, tablet, and desktop.
- **Hero Section**: Animated typing effect, image collage, and feature highlights.
- **About Section**: Service overview, feature grid, and brand blurbs.
- **Pricing Section**: Interactive plan selector, feature comparison, and custom price box.
- **Testimonials (TrustSection)**: Slick slider with 3-cards-per-slide layout, responsive.
- **Language Selector**: Dropdown with country flags, two-column layout.
- **Mega Menu**: Services menu with icons and multi-column design.
- **Sticky Header**: Main navigation remains visible on scroll.
- **Image Collage**: Responsive, hover-grow effect for images.
- **Custom Buttons & Icons**: Consistent use of react-icons and styled buttons.
- **CSS Variables**: Uses CSS custom properties for easy theming.

## Working Flow

1. **Landing (Hero) Section**: Users see a dynamic headline, typing effect, and a visually engaging image collage. They can enter their email to get started.
2. **About Section**: Users learn about the company's services, values, and unique selling points via a feature grid and blurbs.
3. **Pricing Section**: Users select a pricing plan from a sidebar. The main area updates to show plan details, features, and a prominent price box. The layout is fully responsive.
4. **Testimonials**: Users view client testimonials in a slider, with 3 cards visible per slide on desktop, adapting to fewer on smaller screens.
5. **Navigation**: The sticky header and mega menu allow users to explore services and switch languages easily.
6. **Shared Components**: Footer, language selector, and other shared UI elements provide a consistent experience across the site.

## How to Use

- **Browse**: Scroll through the homepage to view all sections.
- **Select Plan**: Use the pricing selector to compare plans and see details.
- **Read Testimonials**: Swipe or click through client reviews.
- **Change Language**: Use the language selector in the navbar.
- **Contact/Start**: Use the email form in the Hero section or the Get Started buttons in pricing.

---

**Tech Stack:** React, Tailwind CSS, react-icons, react-slick, flagcdn.com (for flags), and custom CSS.

For development or customization, see the code in the `src/components/screen/Home/` and `src/components/shared/` folders.
