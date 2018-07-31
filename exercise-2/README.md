# State management and Navigation

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

## Section 1: State management

[Redux](https://redux.js.org/introduction/threeprinciples) is a simple library that proposes a very simple approach to manage your state. Although it introduces several new concepts, it can be described in three core concepts (that we kind of already know about):

* **Single source of truth**: The state of your whole application is stored in an object tree within a single store.
* **State is read-only**: The only way to change the state is to emit an action, an object describing what happened.
* **Changes are made with pure functions**: To specify how the state tree is transformed by actions, you write pure reducers.

![](./assets/images/react-redux.png)

In the following section, we will go through the steps neede to migrate from the local component state management to Redux. For this, we will use a simple shopping cart application.

> **Note:** There is a lot to learn about Redux and this course could not cover everything. If you want to know more, we suggest that you should start from the [basics](https://redux.js.org/basics).

### The Shopping cart app

1. Open the _Shopping cart app_ located in the **begin/shopping-app** folder of this Exercise.
1. In the terminal, and navigate to the root folder and run `npm i` to install all the dependencies.
1. While this command is being executed, take a few minutes to analyze the folder structure and the main components.

    - First, we have an _src/index.tsx_ file, the entry point of our app, in charge of rendering the main `<App />` component in the DOM node.
    - The `<App />` component (_src/components/App/index.tsx_ file) holds the main logic of this app, and following the [container and presentational components pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), it's in charge of several things, from displaying the displaying the main presentational components to reacting to user interaction.
    - Then we have two presentational components, `<TopBar />` and `<ShoppingCart />`, that receive everything they need from its parent.
    - Finally, notice that the `<TopBar />` component has sub-components, with clear responsibilities.

1. After everything is installed, open the terminal in the root folder of the app run `npm start`. Click the _Remove_ button and see that both the list and the count indicator at the top right are affected by this.

    ![](./assets/images/shopping-cart-app.png)

Notice that the scenario proposed looks really similar to what we discussed before. To sum it up, if something changes in the `<ShoppingCart />` component, we will re-render everything (although, in this case, we need it). In the next step, we will install Redux and move some of the logic of the `<App />` component to somewhere else.

### Migrate to Redux

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
