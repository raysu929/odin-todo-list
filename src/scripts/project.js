export function createNewProject(name) {
  return {
    name,
    todos: [],
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  };
}
