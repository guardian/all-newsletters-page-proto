# Newsletters RoundUp Page Design Document

## Context and Scope

The [newsletters round up page][] is currently underwhelming and doesn't do the best job of advertising our newsletters, reflecting the quality of the product or providing a good user experience. In the process of revamping this page, we should look at using more modern technologies for developing and rendering the page. In particular, we want to bring the page in line with other modern Guardian projects by using React.

## Goals and non-Goals

## Design

### Basic building blocks

-   **Cards**: The sign up cards form the basic atomic unit of the page. There will be various differnet approaches to how these are styled, but the concept of having a card per newsletter (either individually or across regions) will remain.
-   **Sections**: We group the newsletters by section/theme. There will most likely be a filter at the top to reduce how many of these are visible at once, and there may also be an additional "Featured" section in addition to the existing ones.
-   **Email input field**: This is currently done per card, but an improvement is to have a single input field and then newsletters can be selected using tick boxes.
-   **Page**: The page and all of its child components. This will probably need to be the single source of truth for state.

### State

What needs holding in state and where does it need to be shared?

-   The selected list of newsletters needs to be shared across the page.
-   Whether an email is valid or not will need holding in state as well

<!-- URL reference links -->

[newsletters round up page]: https://www.theguardian.com/email-newsletters
