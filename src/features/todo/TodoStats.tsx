import { todoController } from '../../store/todoController';

export const TodoStats = () => {
  const stats = todoController.useTodoStats();

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Todo Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-blue-600 font-medium">Total Todos</p>
          <p className="text-2xl font-bold text-blue-700">{stats?.total || 0}</p>
        </div>
        <div className="p-4 bg-green-50 rounded-xl">
          <p className="text-sm text-green-600 font-medium">Active Todos</p>
          <p className="text-2xl font-bold text-green-700">{stats?.active || 0}</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-xl">
          <p className="text-sm text-purple-600 font-medium">Completed Todos</p>
          <p className="text-2xl font-bold text-purple-700">{stats?.completed || 0}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        This component demonstrates selective state subscription by only listening to the 'stats' portion of the state,
        making it more efficient than traditional useState approaches.
      </p>
    </div>
  );
};