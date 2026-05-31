# Accessibility and Performance Rules

## Purpose

Every website must be usable, responsive, and reasonably performant.

## Accessibility Basics

Use:

- Semantic HTML
- Proper heading order
- Accessible buttons and links
- Labels for forms
- Visible focus states
- Keyboard-friendly interactions
- Meaningful alt text
- Sufficient color contrast
- Reduced-motion support for major animation

## Do Not

- Use divs as fake buttons without keyboard support
- Remove focus outlines without replacement
- Put important text only inside images
- Use animation that blocks usability
- Create forms without labels
- Use low-contrast text
- Make mobile users fight the layout

## Performance Basics

Use:

- Optimized images
- Lazy loading where appropriate
- Minimal dependencies
- Clean CSS
- Avoid unnecessary re-renders
- Avoid huge animation libraries unless needed
- Avoid layout shift
- Avoid unused components

## Responsive Requirements

Check:

- 320px mobile
- 375px/390px mobile
- 768px tablet
- 1024px desktop
- 1440px desktop

The mobile layout should feel designed, not squeezed.
