import React from 'react';
import { todoController } from '../../store/todoController';
import { LastRender } from '../../shared/components/LastRender';

export const TodoInput = React.memo(() => {
    const [inputValue, setInputValue] = React.useState('');

    // This component only needs to handle adding todos, no state subscription needed

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            todoController.addTodo(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <div className="relative">
            <div className="flex gap-2 sm:gap-3">
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Add a new todo"
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleAddTodo();
                        }
                    }}
                />
                <button
                    onClick={handleAddTodo}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white text-sm font-medium rounded-lg sm:rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
                >
                    Add
                </button>
            </div>
            <LastRender />
        </div>
    );
});