// generateID is a *function* that, when invoked, returns a number representing
// an ID.
var generateID = makeCounter();
// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.

// Try the following at your console:

// generateID(); // => ?

// What does it return? Try invoking generateID a few more times to be certain
// of how it works.

// EXERCISE 1
var todos = [];var count = 0;
function todoFactory(task) {
  return {
    task: task,
    complete: false,            // todos always start as incomplete
    id:function  generateID() {
      
      var t = count;
      count = count + 1 
return t;
  },
  display: function displayTodo() {
    return  todoFactory.task+  todoFactory.complete +todoFactory.id
    }
}
}
// EXERCISE 2
//function displayTodo(todo) {
  display: function displayTodo() {
    for (var i=0;i<todos.length;i++){
  console.log(todos[i].task)
      console.log(todos[i].complete)
          console.log(todos[i].id)
      
  
}
//}

// var myTodoList = makeTodoList(???);

// makeTodoList accepts an *array* of todo objects as a parameter, and returns
// an object with methods for manipulating todos
function makeTodoList(initialTodos) {
  var todos = initialTodos;

  return {
    display: function displayTodo() {
      for (var i=0;i<todos.length;i++){
    console.log(todos[i].task)
        console.log(todos[i].complete)
            console.log(todos[i].id)
    }},
    add: function(task) {
    
        todos.push(task)
     }
    }
  };
}

// =============================================================================
// HELPER FUNCTIONS

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}
