# State Controller Pattern Demo

A modern Todo application demonstrating the State Controller Pattern with React.

## Project Structure

```
src/
  ├── features/         # Feature-specific components and logic
  │   └── todo/         # Todo feature components
  │       ├── TodoInput.tsx
  │       ├── TodoList.tsx
  │       ├── TodoItem.tsx
  │       ├── TodoFilters.tsx
  │       └── TodoStats.tsx
  │       └── TodoSearch.tsx
  ├── shared/          # Shared components and utilities
  │   └── components/  # Reusable UI components
  │       └── LastRender.tsx
  ├── store/           # State controllers
  │   ├── stateController.ts   # Base controller
  │   └── todoController.ts     # Todo-specific controller
  └── main.tsx         # Application entry
```

## Component Examples

### TodoInput Component
```tsx
// Only handles adding todos, no state subscription needed
const TodoInput = React.memo(() => {
  const handleAddTodo = () => {
    todoController.addTodo(inputValue.trim());
  };
});
```

### TodoList Component
```tsx
// Subscribes to filtered todos
const TodoList = React.memo(() => {
  const { todos } = todoController.useFilteredTodos();
  return <ul>{todos?.map(todo => <TodoItem todo={todo} />)}</ul>;
});
```

## Folder Structure Benefits

1. **Feature-based Organization**: Components are grouped by feature (todo) making it easier to locate and manage related code.
2. **Shared Components**: Common components like LastRender are placed in a shared directory for reuse across features.
3. **Clear Dependencies**: The structure clearly shows the relationship between components and their controllers.
4. **Scalability**: New features can be added in their own directories without cluttering the main components folder.
