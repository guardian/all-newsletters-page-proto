# Newsletters RoundUp Page Design Document

## Context and Scope

The [newsletters round up page][] is currently underwhelming and doesn't do the best job of advertising our newsletters, reflecting the quality of the product or providing a good user experience. In the process of revamping this page, we should look at using more modern technologies for developing and rendering the page.
`frontend` as a project is moving away from rendering more generally. IT therefore makes sense for this particular page to live elsewhere and there is a benefit in bringing the page in line with other modern Guardian projects that already use React.

## Goals and non-Goals

-   Improve user experience by making the all newsletters roundup page easier to use.
-   Improve the design and flow of the page to reflect the product it is advertising.
-   Improve developer experience by using the right tool for the job (a frontend technology in this case).

## Design

### Basic building blocks

-   **Cards**: The sign up cards form the basic atomic unit of the page. There will be various differnet approaches to how these are styled, but the concept of having a card per newsletter (either individually or across regions) will remain.
-   **Sections**: We group the newsletters by section/theme. There will most likely be a filter at the top to reduce how many of these are visible at once, and there may also be an additional "Featured" section in addition to the existing ones.
-   **Email input field**: This is currently done per card, but an improvement is to have a single input field and then newsletters can be selected using tick boxes.
-   **Page**: The page and all of its child components. This will probably need to be the single source of truth for state.

### State

What needs holding in state and where does it need to be shared?

-   The selected list of newsletters needs to be shared across the page.
-   Whether a user is signed in and their current newsletter subscriptions.
-   Whether an email is valid or not will need holding in state as well, only in the sign in form.

<!-- URL reference links -->

[newsletters round up page]: https://www.theguardian.com/email-newsletters
