

export interface getRecentActivitiesApiResponse{
  current_page: number
  data: Array<{
    id: number
    log_name: string
    description: string
    subject_type: string
    event: string
    subject_id: number
    causer_type?: string
    causer_id?: number
    properties: {
      old?: Array<any>
      attributes: any
    }
    batch_uuid: any
    created_at: string
    updated_at: string
    causer?: {
      id: number
      name: string
      avatar: string
      email: string
      gender: string
      date_of_birth?: string
      height_cm: number
      current_weight_kg: number
      target_weight_kg: number
      activity_level: string
      main_goal: string
      diet_type: string
      unit_system: string
      daily_calorie_goal: number
      daily_water_goal_ml: number
      tdee_formula: string
      email_verified_at: string
      is_active: boolean
      created_at: string
      updated_at: string
      stripe_id: any
      pm_type: any
      pm_last_four: any
      trial_ends_at: any
      last_login_at?: string
    }
  }>
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Array<{
    url?: string
    label: string
    page?: number
    active: boolean
  }>
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}

export interface getUserCaloriesApiResponse{
  date: string
  total_users_logged: number
  data: Array<{
    user_id: number
    total_consumed: number
    total_protein: number
    total_carbs: number
    total_fats: number
    user: {
      id: number
      name: string
      email: string
      last_login_at: string
    }
  }>
}
export interface getUserWorkoutApiResponse{
  date: string
  total_users_logged: number
  data: Array<{
    user_id: number
    user: {
      id: number
      name: string
      email: string
    }
    total_burned: number
    total_duration: number
    activities: Array<{
      id: number
      name: string
      burned: number
      duration: number
    }>
  }>
}

export interface getUserSummaryApiResponse{
  type: string
  start_date: string
  end_date: string
  total_users: number
  summary: {
    total_calories_consumed: number
    total_calories_burned: number
    total_workouts_completed: number
    total_water_consumed_ml: number
  }
  data: Array<{
    user: {
      id: number
      name?: string
      email: string
      avatar: string
      last_login?: string
    }
    stats: {
      calories_consumed: number
      calories_burned: number
      workouts_completed: number
      water_consumed_ml: number
      water_glasses: number
    }
  }>
}

export interface getAffirmationCategoriesApiResponse{
  current_page: number
  data: Array<{
    id: number
    name: string
    description: string
    icon: string
    is_active: number
    created_at: string
    updated_at: string
    affirmations_count: number
  }>
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Array<{
    url?: string
    label: string
    page?: number
    active: boolean
  }>
  next_page_url: any
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}

export interface affirmationsApiResponse{
  current_page: number
  data: Array<{
    id: number
    user_id?: number
    category_id: any
    text: string
    is_active: number
    created_at: string
    updated_at: string
    user?: {
      id: number
      name: string
      avatar: string
      email: string
      gender: string
      date_of_birth: any
      height_cm: number
      current_weight_kg: number
      target_weight_kg: number
      activity_level: string
      main_goal: string
      diet_type: string
      unit_system: string
      daily_calorie_goal: number
      daily_water_goal_ml: number
      tdee_formula: string
      email_verified_at: string
      is_active: boolean
      created_at: string
      updated_at: string
      stripe_id: any
      pm_type: any
      pm_last_four: any
      trial_ends_at: any
      last_login_at: string
    }
    category: any
  }>
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Array<{
    url?: string
    label: string
    page?: number
    active: boolean
  }>
  next_page_url: any
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}


export interface FAQresponse{
  current_page: number
  data: Array<{
    id: number
    question: string
    answer: string
    is_active: boolean
    created_at: string
    updated_at: string
  }>
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Array<{
    url?: string
    label: string
    page?: number
    active: boolean
  }>
  next_page_url: any
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}
