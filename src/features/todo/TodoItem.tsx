import React from 'react';
import { todoController } from '../../store/todoController';
import { LastRender } from '../../shared/components/LastRender';
import { type Todo } from '../../store/todoController';


type TodoItemProps = {
    todo: Todo;
};

export const TodoItem = React.memo(({ todo }: TodoItemProps) => {
    return (
        <li className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-200 ${todo.completed ? 'opacity-75' : ''}`}>
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => todoController.toggleTodo(todo.id)}
                    className="w-5 h-5 text-blue-500 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                />
                <span className={`flex-1 text-sm font-medium break-words ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {todo.text}
                </span>
            </div>
            <button
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 ml-auto"
                onClick={() => todoController.deleteTodo(todo.id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            <LastRender />
        </li>
    );
})