import React from 'react';
import { todoController } from '../../store/todoController';
import { LastRender } from '../../shared/components/LastRender';

export const SearchTodo = React.memo(() => {
    const { searchQuery } = todoController.useState(['searchQuery']);



    return (
        <div className="relative flex-1">
            <input
                type="text"
                value={searchQuery}
                placeholder="Search todos..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 shadow-sm"
                onChange={(e) => todoController.setSearchQuery(e.target.value)}
            />
            <LastRender />
        </div>
    );
});