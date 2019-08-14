//--------------------- THIS IS REDUX -------------------//
let globalCounter = 0;
// INITIAL STATE
const initialState = {
  todos: []
}

// ACTIONS
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const addTodo = text => ({
  "type": ADD_TODO,
  "payload": { text }
})

const toggleTodo = id => ({
  "type": TOGGLE_TODO,
  "payload": { id }
})

// REDUCERS

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload.text,
            isDone: false,
            id: ++globalCounter
          }
        ]
      }

    case "TOGGLE_TODO":
      let todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isDone: !todo.isDone } : todo)

      return {
        ...state,
        todos: todos
      }

    default: return state;
  }
}
// STORE
const store = Redux.createStore(todoReducer, initialState)

// LOGGING 
store.subscribe(() => console.log(store.getState()))

// DISPATCH YOUR ACTIONS BELOW
//
store.dispatch(addTodo("Visit Spain"));
store.dispatch(addTodo("Visit Argentina"));
store.dispatch(addTodo("Visit Brazil"));
store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(1));
