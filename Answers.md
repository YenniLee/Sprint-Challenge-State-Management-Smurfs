1. What problem does the context API help solve?'
    Context API allows ups to pass props where needed without prop drilling through intermediary components. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are data from the application that can be dispatched to make changes to the store. 
    Reducers in redux will take in the current state and action, and return a new state once the actions have been applied. 
    Store is an object that holds the application's state logic. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is held in the store and can be accessed throughout the application (global), and commponent state is local inside the specific component and can be passed down to child components through props. It depends on how many components will need to share state, and the size/structure of the app. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    'redux-thunk' is a middleware that allows us to make async actions in our app. When action-creators are called, the function either returns an action or another function(thunk). If it is an action, it is then sent to the reducer. If it tis a thunk, it will be passed to a dispatch function as an argument. This process is what makes async actions possible.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    I don't have a favorite state management system. It is still pretty confusing ...