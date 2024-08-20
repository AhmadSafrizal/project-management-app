<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $myPendingTasks = Task::query()->where('assigned_user_id', $user->id)->where('status', 'pending')->count();
        $totalPendingTasks = Task::query()->where('status', 'pending')->count();
        $myInProgressTasks = Task::query()->where('assigned_user_id', $user->id)->where('status', 'in_progress')->count();
        $totalInProgressTasks = Task::query()->where('status', 'in_progress')->count();
        $myCompletedTasks = Task::query()->where('assigned_user_id', $user->id)->where('status', 'completed')->count();
        $totalCompletedTasks = Task::query()->where('status', 'completed')->count();
        $activeTasks = Task::query()->where('status', ['pending', 'in_progress'])->limit(10)->get();
        $activeTasks = TaskResource::collection($activeTasks);

        return inertia('Dashboard', compact('myPendingTasks', 'totalPendingTasks', 'totalInProgressTasks', 'totalCompletedTasks', 'myCompletedTasks', 'myInProgressTasks', 'activeTasks'));
    }
}
