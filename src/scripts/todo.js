export function createTodo(title, description, dueDate, priority, notes = "") {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    completed: false,
    toggleComplete() {
      this.completed = !this.completed;
    },
  };
}
