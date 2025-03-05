import { todoController } from '../../store/todoController';
import { TodoInput } from './TodoInput';
import { TodoFilters } from './TodoFilters';
import { TodoItem } from './TodoItem';
import { SearchTodo } from './TodoSearch';

export const TodoList = () => {
    const { todos } = todoController.useFilteredTodos();

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
            <div className="relative space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <div className="w-full sm:flex-1">
                        <TodoInput />
                    </div>
                    <div className="w-full sm:w-auto">
                        <SearchTodo />
                    </div>
                </div>

                <TodoFilters />

                <ul className="space-y-4 sm:space-y-6">
                    {todos?.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            </div>
        </div>
    );
};