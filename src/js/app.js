/**
 * --------------------------------------------------------------------------
 * Tailbone v0.1.0: app.js
 * Licensed under MIT (https://github.com/mkfizi/tailbone/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

(function () {
    'use strict';

    const app = {};

    app.name = 'Tailbone';

    app.element = {
        footerCurrentYear: document.getElementById('footer-year'),
        footerAppName: document.getElementById('footer-app-name'),
    }

    app.view = {
        footer: {
            
            // Initialize footer content with current year, app name and version
            init: () => {
                if (app.element.footerCurrentYear) {
                    app.element.footerCurrentYear.innerHTML = new Date().getFullYear();
                }

                if (app.element.footerAppName) {
                    app.element.footerAppName.innerHTML = app.name;
                }
            }
        },

        // Initialize view
        init: () => {
            app.view.footer.init();
        }
    }

    app.init = () => {
        app.view.init();
    }

    app.init();
})();