                        🍹**Eliq-drinks angular app**

This project is a single-page application built with Angular 19 that allows users to browse and discover a wide variety of cocktail drinks using the TheCocktailDB API. It supports a modular UI architecture driven by configuration, allowing for white-labeling and dynamic interface control via a JSON-based configuration object.

# JSON-Driven UI Configuration

A core design decision was to make the UI behavior and visibility configurable via a JSON object, retrieved at runtime through a service (e.g., ConfigService). This allows easy white-labeling for different clients or environments without modifying the source code.

    ## Sample Config Structure
        {
            "components": {
                "drinkList": {
                "showBanner": true,
                "paginationStyle": "modern",
                "cardsPerRow": 2,
                "enableSearch": true
                },
                "drinkDetail": {
                "showIngredients": true,
                "languageOptions": ["en", "es", "de"]
                }
            }
        }

    ## How it works
        - Banner visibility (showBanner): Controls whether the hero banner is shown on the homepage.
        - Pagination style (paginationStyle): Applies a specific style class to change pagination appearance (classic, modern, minimal).
        - Cards per row (cardsPerRow): Dynamically adjusts grid layout (e.g., 2 or 3 columns).
        - Ingredient toggle: Users can hide/show ingredient lists via configuration.
        - Multi-language support: Instruction languages are driven by the config’s languageOptions field.

# Design Decisions & Trade-Offs

    - White-label ready: Easy to adapt for different clients or brands.
    - Low maintenance overhead: UI elements can be toggled or adjusted without new deployments.
    - Reusability: Components are loosely coupled and configuration-driven.
    - Removed Owl Carousel due to buggy animation dependencies.

# Future improvements with wider timeline

    - Allow real-time switching between light/dark/custom themes via JSON config.
    - Enable toggling visibility of navbar, banner, or footer through JSON.
    - Cover core components and services using Karma/Jasmine or Jest.

# Deployment url

    - https://kavusalyamr.github.io/Eliq-drinks-app-Kavusalya/

# Issues with deployment url

    - I followed the following steps to deploy the app to github pages
        - Correctly configured the <base href> in the Angular application to match the repository name using the --base-href flag during the build process: ng build --configuration production --base-href /Eliq-drinks-app-Kavusalya/
        - Verified that the index.html file in the dist/eliq-drinks-app folder contains the correct <base href>.
        - Used the angular-cli-ghpages package to automate the deployment to the gh-pages branch:
            npx angular-cli-ghpages --dir=dist/eliq-drinks-app
        - Inspected the gh-pages branch to confirm that the built application files ( index.html, JavaScript, CSS, assets) were located at the root of the branch, and not within a subfolder.

    - But I still can not see the running application on the deployment url
