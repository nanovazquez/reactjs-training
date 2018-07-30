# Flux, Redux and Navigation

In this exercise, we will review what we've done in the previous exercise and try to analyze together the limitations of the strategy used to handle state (Parent-Child components and component state). Then, we will propose another tactic best-suited for medium/large applications (Redux), and we'll try to study the tradeoffs of this new approach. Finally, we will add a new functionality all real-world apps have, navigation, and we'll see how easy is to integrate this feature with the new approach for handling state.

## Introduction // A quick recap

> **Note:** for this exercise, you need [Redux devtools in your browser](https://github.com/zalmoxisus/redux-devtools-extension#installation). Follow the steps in the link and install it before continuing with this section.

Let's talk first about what we learned so far. We know that a React application consists of a set of **components** that receive of a set of input, read-only **props** and produce **JSX** code with them. If any of this properties change, new **JSX** may be generated. When users interact with your components, information is passed to the upper levels by executing functions also received via **props**, following the [container and presentational components pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

Take a minute to understand the above paragraph. It can be summarized in these two sentences

* In React, **data is unidirectional**, meaning that it flows in one direction, from parent to child.
* User interaction is translated into **events** that execute our custom code.

![](./assets/images/react-data-flow.png)

### And what about the state?

In Exercise 1, we saw that you could store local state using `this.state` and `this.setState()` and, following the [container and presentational components pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), it's best to centralize this information in a parent component. Now, you should be smart about this, as `this.setState()` would potentially execute a `render()`, **repainting the component and its children**.

Consider the following component structure:

* We have a root component, **A**, in charge of rendering three children: **A.0**, **A.1** and **A.2**.
* Similarly, **A.0** is composed of two components: **A.0.0** and **A.0.1**.
* We did things

![](./assets/images/react-cascading.png)

Now let's analyze the following scenarios:

1. Let's say that we followed the [container and presentational components pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) to the letter and all the logic is held in the **A** parent component (smart) and the rest are just presentational (dumb).

    ![](./assets/images/react-cascading-root.png)

    - When user interactions update the state, the `this.setState()` will be executed at the root level, _forcing a re-render of all five children components_, even if we need only one to change.
    - This behavior of React components, the need to re-render the component and its children, is called **cascading rendering** (or _cascading updates_).
    - It's easy to understand that, by using this approach, performance is lost in favor of code organization.

1. Now, let's say we move some state to **A0**, only causing the re-render of its two children when the `this.setState()` is called.

    ![](./assets/images/react-cascading-improvement.png)

    - This approach **improves the cascading rendering situation a little bit**, only re-rendering two components instead of five when, let's say, we need only one to render.
    - The tradeoff is that we have to split the logic and move it to other places, but this works with short numbers.

Notice that this is just a simple example. You can imagine that a real-world application has dozens of components and having to make this analysis several times in certainly an overkill. At this point you should be asking yourself, is there something that would help me to simplify the state management, avoiding the loss of performance due to the cascading rendering and, at the same time, unifying all the logic in a single place.

There should be a better way, right?

## Section 1: Flux and Redux

### Replace component state with Redux

TBC: Get shopping items from redux state (async action)

### Add another action

TBC: add async action (addItemToCart) and fire it using redux (we'll implement)

### Wrapping up

In this section, we learned the following:

* A
* B
* C

## Section 2: Navigation

### Add new pages to the app

TBC: add home page with option to add items to cart and display all items in cart

### Create a routing mechanism

TBC: add routing

### Test the app!

### Wrapping up

In this section, we learned the following:

* A
* B
* C
