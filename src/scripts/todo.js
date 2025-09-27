export function createTodo(title, description, dueDate, notes = "", priority) {
  return {
    title,
    description,
    dueDate,
    notes,
    priority,
    completed: false,
    toggleComplete() {
      this.completed = !this.completed;
    },
  };
}
