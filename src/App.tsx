import { TodoList } from "./features/todo/TodoList";
import { TodoStats } from "./features/todo/TodoStats";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6 md:mb-8">
          State Controller Pattern Demo
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
          This demo showcases the State Controller pattern, where components can selectively subscribe to specific parts of the state.
          Notice how TodoList and TodoStats components independently update when their respective state changes.
        </p>
        <TodoList />
        <TodoStats />
      </div>
    </div>
  );
}

export default App;
