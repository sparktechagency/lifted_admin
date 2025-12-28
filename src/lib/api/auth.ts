import { howl } from "../utils";
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

export async function updateMeApi(token:string,body:FormData):Promise<ApiResponse<{user:UserType}>>{
    return howl(`/profile/update`,{token,body,method:"POST"});
}

export async function updatePass(token:string,body:{
    current_password: string;
    password: string;
    password_confirmation: string;
}):Promise<ApiResponse<{user:UserType}>>{
    return howl(`/update-password`,{token,body,method:"POST"});
}
