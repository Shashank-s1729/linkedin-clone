import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shashank's LinkedIn Clone",
  description: "Log in to LinkedIn to see who you know, leverage your professional network, and get hired.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add iframe busting code */}
        <style dangerouslySetInnerHTML={{
          __html: `
            iframe[src*="same-app"] { display: none !important; }
            iframe[title*="same"] { display: none !important; }
            [id*="same-button"], [class*="same-button"] { display: none !important; }
            [id*="__same"], [class*="__same"] { display: none !important; }
          `
        }} />

        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function hideButton() {
                const sameButtons = document.querySelectorAll('[id*="same-button"], [class*="same-button"], [id*="__same"], [class*="__same"]');
                sameButtons.forEach(button => {
                  if (button) button.style.display = 'none';
                });

                // Also try to find by fixed position at bottom right
                const possibleButtons = document.querySelectorAll('div[style*="position: fixed"][style*="bottom"][style*="right"]');
                possibleButtons.forEach(el => {
                  if (el) el.style.display = 'none';
                });
              }

              // Run immediately and then periodically
              hideButton();
              setInterval(hideButton, 500);

              // Also run when DOM changes
              if (typeof MutationObserver !== 'undefined') {
                const observer = new MutationObserver(hideButton);
                observer.observe(document.documentElement, { childList: true, subtree: true });
              }

              // Run when window loads
              window.addEventListener('load', hideButton);
            })();
          `
        }} />
      </head>
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
