import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { Head } from "@inertiajs/react";

export default function Dashboard({
  auth,
  totalPendingTasks,
  myPendingTasks,
  myInProgressTasks,
  totalInProgressTasks,
  totalCompletedTasks,
  myCompletedTasks,
  activeTasks,
}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-600 text-2xl font-semibold">
                Pending Tasks
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{myPendingTasks}</span>/
                <span className="ml-2">{totalPendingTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-blue-600 text-2xl font-semibold">
                In Progress Tasks
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{myInProgressTasks}</span>/
                <span className="ml-2">{totalInProgressTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-green-600 text-2xl font-semibold">
                Completed Tasks
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{myCompletedTasks}</span>/
                <span className="ml-2">{totalCompletedTasks}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8b mt-4">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-gray-200 text-xl font-semibold">
                My Active Tasks
              </h3>

              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 boder-gray-500">
                  <tr className="">
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Project Name</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTasks.data.map((task) => (
                    <tr key={task.id}>
                      <td className="px-3 py-3">{task.id}</td>
                      <td className="px-3 py-3">{task.project_name}</td>
                      <td className="px-3 py-3">{task.name}</td>
                      <td className="px-3 py-3">
                        <span
                          className={
                            "px-2 py-1 rounded text-white " +
                            TASK_STATUS_CLASS_MAP[task.status]
                          }
                        >
                          {TASK_STATUS_TEXT_MAP[task.status]}
                        </span>
                      </td>
                      <td className="px-3 py-3">{task.due_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
