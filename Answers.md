1. What problem does the context API help solve?
    The context API helps to simplify state management by eliminating prop-drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are data that can be dispatched to our reducer and then be able to update state according to the action type.
    Reducers are pure functions that take in an action and current state as arguments and return an updated state. This new state is sent to the store. 
    Store is an object that holds all application level state. It is known as a 'single source of truth' because it holds all app level state and is immutable. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is globally accessible by multiple components within the app. Component state is only accessible at the component(local) level and will not be use by other places within the app.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a middleware that allows us to handle async operations. Our action-creators can now retutrn thunks(a function that is returned by another function) and access dispach function. This allows us to run async functions and dispatch a new action based on the result of the thunk.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    I like redux. There is a lot of boiler plate, but I like how neatly the actions and reducers are set up. 
