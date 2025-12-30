import { affirmationsApiResponse, FAQresponse, getAffirmationCategoriesApiResponse, getRecentActivitiesApiResponse, getUserCaloriesApiResponse, getUserSummaryApiResponse, getUserWorkoutApiResponse } from "../types/admin";
import { ApiResponse } from "../types/base";
import { base_api, base_url, howl } from "../utils";



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
export async function getUserSummary(token:string,type:"monthly" | "daily"):Promise<getUserSummaryApiResponse>{
    return howl(`/admin/users/summary?type=${type}`,{token});
}
export async function getAffirmationCategories(
  token: string,
  date?: string
): Promise<ApiResponse<getAffirmationCategoriesApiResponse>> {
  const params = new URLSearchParams({
    include: "affirmationsCount",
  });

  if (date) {
    params.append("date", date);
  }

  return howl(`/admin/affirmation-categories?${params.toString()}`, { token });
}

export async function createAffirmationCategory({name,description}:{name:string,description:string},token:string):Promise<ApiResponse<getAffirmationCategoriesApiResponse>>{
    return howl(`/admin/affirmation-categories`,{token,body:{name,description},method:"POST"});
}
export async function updateAffirmationCategory({id,name,description}:{id:string,name:string,description:string},token:string):Promise<ApiResponse<getAffirmationCategoriesApiResponse>>{
    return howl(`/admin/affirmation-categories/${id}`,{token,body:{name,description,_method:"PUT"},method:"POST"});
}
export async function deleteAffirmationCategory(id:string,token:string):Promise<ApiResponse<getAffirmationCategoriesApiResponse>>{
    return howl(`/admin/affirmation-categories/${id}`,{token,method:"DELETE"});
}
export async function getAffirmations(token:string):Promise<ApiResponse<affirmationsApiResponse>>{
    return howl(`/affirmations?include=user,category`,{token});
}
export async function createAffirmation(text:string,token:string,categoryId?:string):Promise<ApiResponse<affirmationsApiResponse>>{
  return howl(`/affirmations`,{token,body:{text,category_id:categoryId},method:"POST"});
}
export async function updateAffirmation(id:string,text:string,token:string):Promise<ApiResponse<affirmationsApiResponse>>{
    return howl(`/affirmations/${id}`,{token,body:{text,category_id:id,_method:"PUT"},method:"POST"});
  }
  export async function deleteAffirmation(id:string,token:string):Promise<ApiResponse<affirmationsApiResponse>>{
    return howl(`/affirmations/${id}`,{token,method:"DELETE"});
  }
  
  //
  
  export async function getPage(key:string, token:string):Promise<ApiResponse<{
    key: string
    value: string
    group: string
    type: string
    created_at: string
    updated_at: string
  }
  >>{
    return howl(`/settings/view/${key}`,{token});
  }
  export async function updatePage(key:string,value:string,token:string):Promise<ApiResponse<{
    key: string
    value: string
    group: string
    type: string
    created_at: string
    updated_at: string
}
>>{
    return howl(`/admin/settings`,{token,body:{key,value,group:"legal",type:"richtext"},method:"POST"});
  }

  
  export async function createSocial(
    token: string,
    body: FormData
  ): Promise<ApiResponse<any>> {
    const res = await fetch(`${base_url}${base_api}/admin/social-platforms`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
    
    if (!res.ok) {
      const error = await res.json().catch(() => null);
      throw error ?? new Error("Failed to update profile");
    }
    
    return res.json();
  }
  export async function getSocials(token:string):Promise<ApiResponse<{
    current_page: number
    data: Array<{
      id: number
      name: string
      link: string
      icon: string
      sort_order: number
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
>>{
  return howl(`/social-platforms`,{token});
}

export async function deleteSocial(id:string,token:string):Promise<ApiResponse<any>>{
  return howl(`/admin/social-platforms/${id}`,{token,method:"DELETE"});
}
//for faq

export async function getFAQs(token:string):Promise<ApiResponse<FAQresponse>>{
    return howl(`/faqs`,{token});
}
export async function createFAQ(token:string, question:string, answer:string):Promise<ApiResponse<FAQresponse>>{
    return howl(`/faqs`,{token,body:{question,answer},method:"POST"});
}
export async function updateFAQ(id:string, token:string, question:string, answer:string):Promise<ApiResponse<FAQresponse>>{
    return howl(`/faqs/${id}`,{token,body:{question,answer},method:"PUT"});
}
export async function deleteFAQ(id:string, token:string):Promise<ApiResponse<FAQresponse>>{
    return howl(`/faqs/${id}`,{token,method:"DELETE"});
}