'use client';

import { useEffect } from 'react';

export default function HideButton() {
  useEffect(() => {
    function hideButton() {
      // Try to find by id and class
      const sameButtons = document.querySelectorAll('[id*="same-button"], [class*="same-button"], [id*="__same"], [class*="__same"]');
      sameButtons.forEach(button => {
        if (button) {
          (button as HTMLElement).style.display = 'none';
          (button as HTMLElement).style.visibility = 'hidden';
          (button as HTMLElement).style.opacity = '0';
          (button as HTMLElement).style.pointerEvents = 'none';
        }
      });

      // Look for fixed positioned elements at bottom right
      const possibleButtons = document.querySelectorAll('div[style*="position: fixed"][style*="bottom"][style*="right"]');
      possibleButtons.forEach(el => {
        if (el) {
          (el as HTMLElement).style.display = 'none';
          (el as HTMLElement).style.visibility = 'hidden';
        }
      });

      // Look for any elements with "same" in their id or class
      const sameElements = document.querySelectorAll('[id*="same"], [class*="same"]');
      sameElements.forEach(el => {
        // Check if it's positioned fixed and at the bottom
        const style = window.getComputedStyle(el);
        if (style.position === 'fixed' &&
            (style.bottom === '0px' || parseInt(style.bottom) < 30) &&
            parseInt(style.right) < 100) {
          (el as HTMLElement).style.display = 'none';
          (el as HTMLElement).style.visibility = 'hidden';
        }
      });
    }

    // Run immediately
    hideButton();

    // Run again after a short delay to catch elements that load later
    const timers = [
      setTimeout(hideButton, 500),
      setTimeout(hideButton, 1000),
      setTimeout(hideButton, 2000),
      setTimeout(hideButton, 5000)
    ];

    // Setup interval to keep checking
    const interval = setInterval(hideButton, 1000);

    // Setup mutation observer to detect DOM changes
    const observer = new MutationObserver(hideButton);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    // Clean up
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null;
}
