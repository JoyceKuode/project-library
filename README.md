# Project A11y

This assignment was focused on making one of my previous projects super accessible. I chose to work on **Project Library**. 

### Lighthouse Accessibility Score:
When I started, the project scored 94 in Accessibility on Lighthouse (Google's Accessibility tool). The warnings from Lighthouse were:

- Select elements do not have associated label elements.
- Heading elements are not in a sequentially-descending order.

After implementing several accessibility improvements, the site scored 100 in Accessibility on Lighthouse.

### Accessibility Improvements:
In the code, I have added comments labeled **"Changes for Accessibility"** to show what changes were made. Below is a selection of the changes:

#### **HTML:**
- Changed \`<span>\` to \`<button>\`.
- Replaced \`<div>\` with \`<nav>\` for navigation buttons.
- Used \`<section>\` instead of \`<div>\` for the filter panel.
- Updated heading elements to follow the correct sequential order.
- Added aria-labels to describe links and buttons for screen readers.

#### **CSS:**
- Set a darker background color to improve contrast.
- Applied min-width and min-height of 44px to buttons and clickable areas to meet the recommended touch target size.

#### **JavaScript:**
- Added descriptive alt attributes to images for better screen reader accessibility.

## Live Demo:
- **Improved Accessibility version**: https://a11yjojolialbumlibrary.netlify.app/
- **Original version**: https://jojolialbumlibrary.netlify.app/
