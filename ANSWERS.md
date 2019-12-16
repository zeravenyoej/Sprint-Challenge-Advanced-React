- [ ] Why would you use class component over function components (removing hooks from the question)?

  Firstly, they have been the industry standard for a long while, and so our comfort with them is crucial. Moreover, they give us access to lifecycle methods (some of whose functionality would later be captured in functional components’ side effects method.

- [ ] Name three lifecycle methods and their purposes.

1. componentDidMount, which is called only once (during the mounting phase). This is only fired once in the life cycle -right after the first time the render method is called. This is where we fetch asynchronous data and set it to state. Initial values for state, meanwhile, are instantiated on the constructor function, typically. 
2. componentDidUpdate, which can be called an infinite number of times during the updating phrase. Here we can call any methods that need to be fired once state changes after user interaction.
3. componentWillUnmount, which is called only once, right before a component is about to die or unmount. It essentially used to deal with any clean up.


- [ ] What is the purpose of a custom hook?

They are re-usable chunks of code that we can customize to whatever need. They typically deal with behavior unrelated to what actually appears on the DOM, such as stateful logic (a function that deals with state in a component). For example, they can handle controlled inputs, manage event listeners, watch for key presses, etc.

- [ ] Why is it important to test our apps?

Because not testing risks malfunction. It also encourages the writing of smaller chunks of code and the anticipation of edge cases.