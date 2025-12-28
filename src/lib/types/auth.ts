
export interface loginResponse{
  access_token: string
  token_type: string
  user: UserType
}

export interface UserType {
    id: number
    name: string
    avatar: string
    email: string
    gender: string
    date_of_birth: Date
    height_cm: number
    current_weight_kg: number
    target_weight_kg: any
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
    roles: Array<{
      id: number
      name: string
      guard_name: string
      created_at: string
      updated_at: string
      pivot: {
        model_type: string
        model_id: number
        role_id: number
      }
    }>
    permissions: Array<any>
  }
