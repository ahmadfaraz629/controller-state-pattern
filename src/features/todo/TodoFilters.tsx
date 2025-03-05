import React from 'react';
import { todoController } from '../../store/todoController';
import { LastRender } from '../../shared/components/LastRender';

export const TodoFilters = React.memo(() => {
    const { filter } = todoController.useState(['filter']);

    return (
        <div className="relative">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <button
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${filter === 'all' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transform hover:scale-105 active:scale-95`}
                    onClick={() => todoController.setFilter('all')}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${filter === 'active' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transform hover:scale-105 active:scale-95`}
                    onClick={() => todoController.setFilter('active')}
                >
                    Active
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${filter === 'completed' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transform hover:scale-105 active:scale-95`}
                    onClick={() => todoController.setFilter('completed')}
                >
                    Completed
                </button>
            </div>
            <LastRender />
        </div>
    );
})