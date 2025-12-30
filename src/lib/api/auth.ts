import { base_api, base_url, howl } from "../utils";
import type { loginResponse, UserType } from "@/lib/types/auth";
import type { ApiResponse } from "@/lib/types/base";



export async function loginApi({email,password}:{email:string,password:string}):Promise<ApiResponse<loginResponse>>{
    return howl(`/auth/login`,{method:"POST",body:{email,password}});
}

export async function forgotApi({email}:{email:string}):Promise<ApiResponse<{otp?:string}>>{
    return howl(`/auth/forgot-password`,{method:"POST",body:{email}});
}

export async function verifyOtpApi({email, otp}:{email:string, otp:string}):Promise<ApiResponse<{reset_token:string}>>{
    return howl(`/auth/verify-password-otp`,{method:"POST",body:{email,otp}});
}

export async function changePasswordApi({email,reset_token,password,password_confirmation}:{email:string,reset_token:string,password:string,password_confirmation:string}):Promise<ApiResponse<loginResponse>>{
    return howl(`/auth/reset-password-with-token`,{method:"POST",body:{email,reset_token,password,password_confirmation}});
}

export async function getMeApi(token:string):Promise<{data:UserType}>{
    return howl(`/profile/me`,{token});
}

export async function updateMeApi(
  token: string,
  body: FormData
): Promise<ApiResponse<{ user: UserType }>> {
  const res = await fetch(`${base_url}${base_api}/profile/update`, {
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


export async function updatePass(token:string,body:{
    current_password: string;
    password: string;
    password_confirmation: string;
}):Promise<ApiResponse<{user:UserType}>>{
    return howl(`/update-password`,{token,body,method:"POST"});
}
export async function getAllNotifications(token:string):Promise<ApiResponse<{user:UserType}>>{
    return howl(`/notifications?per_page=20`,{token});
}
