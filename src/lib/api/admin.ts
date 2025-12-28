import { getAffirmationCategoriesApiResponse, getRecentActivitiesApiResponse, getUserCaloriesApiResponse, getUserWorkoutApiResponse } from "../types/admin";
import { ApiResponse } from "../types/base";
import { howl } from "../utils";



export async function getStateApi(token:string):Promise<ApiResponse<{
  total_users: number
  active_users: number
  workouts_last_30_days: number
  meals_last_30_days: number
}>>{
    return howl(`/admin/dashboard/stats`,{token});
}
export async function getRecentActivitiesApi(token:string):Promise<getRecentActivitiesApiResponse>{
    return howl(`/admin/dashboard/activities`,{token});
}
export async function getUserCalories(token:string, date: string):Promise<getUserCaloriesApiResponse>{
    return howl(`/admin/users/daily-calories?date=${date}`,{token});
}
export async function getUserWorkout(token:string, date: string):Promise<getUserWorkoutApiResponse>{
    return howl(`/admin/users/daily-workout?date=${date}`,{token});
}
export async function getAffirmationCategories(token:string, date: string):Promise<ApiResponse<getAffirmationCategoriesApiResponse>>{
    return howl(`/admin/affirmation-categories?include=affirmationsCount&date=${date}`,{token});
}