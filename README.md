# อร่อยเด็ด Restaurant Website (Next.js)

A responsive restaurant website built with Next.js, React, and CSS. This project showcases a restaurant's menu, contact information, and social media presence.

## Features

- Built with Next.js and React
- Responsive design that works on mobile, tablet, and desktop
- Interactive menu with category filtering
- Featured dishes slider on the homepage
- Contact form with validation
- Google Maps integration
- Social media links
- Mobile-friendly navigation

## Project Structure

```
restaurant-website/
├── app/                  # Next.js app directory
│   ├── page.js           # Homepage
│   ├── menu/             # Menu page
│   │   └── page.js       # Menu page component
│   ├── contact/          # Contact page
│   │   └── page.js       # Contact page component
│   ├── globals.css       # Global styles
│   └── layout.js         # Root layout
└── public/               # Static assets
    ├── dishes/           # Food images
    └── background/       # Background images
```

## Pages

1. **Homepage (app/page.js)**
   - Hero section with call-to-action
   - Featured dishes slider
   - About section

2. **Menu Page (app/menu/page.js)**
   - Category filtering (Main dishes, Appetizers, Desserts, Beverages)
   - Menu items with images, descriptions, and prices

3. **Contact Page (app/contact/page.js)**
   - Contact information
   - Contact form
   - Google Maps location
   - Reservation information

## How to Run

1. Make sure you have Node.js installed
2. Install dependencies:
   ```
   npm install
   ```
3. Add your own images to the `public` directory (see `public/README.md` for details)
4. Run the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Changing Colors

The website uses CSS variables for colors, making it easy to change the color scheme. Open `app/globals.css` and modify the following variables in the `:root` section:

```css
:root {
    --primary-color: #e74c3c;    /* Main accent color */
    --secondary-color: #2c3e50;  /* Secondary color */
    --accent-color: #f39c12;     /* Hover/highlight color */
    --text-color: #333;          /* Main text color */
    --light-color: #f8f9fa;      /* Light background color */
    --dark-color: #343a40;       /* Dark background color */
    --gray-color: #6c757d;       /* Gray text color */
    --border-color: #dee2e6;     /* Border color */
}
```

### Adding Menu Items

To add new menu items, edit the `app/menu/page.js` file and add new items following the existing structure.

### Updating Contact Information

To update the contact information, edit the relevant sections in `app/contact/page.js` and the footer sections in all page components.

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Resources and Credits

- Fonts: Google Fonts (Prompt, Sarabun)
- Icons: Font Awesome
- Maps: Google Maps Embed API
- Framework: Next.js

## License

This project is available for personal and educational use.

## Author

Project350

---

Made with ❤️ for university project
