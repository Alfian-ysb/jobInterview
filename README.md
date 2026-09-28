# INSTRUCTION

> **Frontend Practical Test**\
> **Topic:** Reusable Product Card Component & Dynamic List Rendering\
> **Role:** Junior Frontend / Software Engineer

---

## Task Objective

Build a reusable React card component for a product catalog and dynamically
render a list of products using array mapping based on the specifications below.

---

## Task Checklist

### 1. Create Component: `Card.jsx`

Create a functional component named `Card` with the following requirements:

#### **Props Specification**

Accept the following props via destructuring:

- `image`
- `name`
- `category`
- `price`
- `description`
- `rating`
- `reviews`
- `badge`

#### **Component Structure Requirements**

**Container:** Use an `<article>` tag with the class `product-card`. **Media
Wrapper (`product-image-wrap`):**

- Render an `<img>` tag using `image` as `src` and `name` as `alt` text with
  class `product-image`.
- Conditionally render a `<span>` with class `product-badge` if the `badge` prop
  exists. **Details Container (`product-details`):** **Header Section
  (`product-heading`):** Display the `category` in a paragraph
  (`product-category`), `name` in an `<h2>`, and formatted `price` inside a
  `<span>` with class `product-price`. **Body:** Display `description` in a
  paragraph with class `product-description`. **Meta Info (`product-meta`):**
  Display the star symbol (`★`) with `rating` (include accessible `aria-label`),
  followed by the `reviews` count. **Action:** Add an "Add to bag" button with
  `type="button"` and class `add-button`.

---

### 2. Dynamic List Rendering

In your main product list container or parent view:

- Iterate through the `products` dataset array using the JavaScript `.map()`
  method.
- For each product object, render the `Card` component and pass all
  corresponding object properties into their matching props (don't forget to
  include a unique `key` prop).

---

## Evaluation Focus

> [!NOTE]
>
> - **Clean Code:** Correct prop destructuring and clean React functional
>   component syntax.
> - **Conditional Rendering:** Proper implementation of short-circuiting (`&&`)
>   for optional elements (`badge`).
> - **Dynamic Mapping:** Correct usage of array iteration (`.map()`) to
>   construct dynamic UI components.
