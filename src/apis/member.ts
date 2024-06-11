import { LoginFormData, SignupFormData } from '@/types/member';
import instance from './instance';

export const postSignup = async (formData: SignupFormData) => {
  const response = await instance.post('/api/signup', formData);
  return response?.data;
};

export const postEmailCode = async (formData: { email: string }) => {
  const response = await instance.post(`/api/email/send`, formData);
  return response?.data;
};

export const postCheckNickname = async (formData: { nickname: string }) => {
  const response = await instance.post('/api/signup/nickname/check', formData);
  return response?.data;
};

export const postLogin = async (formData: LoginFormData) => {
  const response = await instance.post(`/api/login`, formData);
  return response?.data;
};

export const getMemberInfo = async (nickname?: string) => {
  const response = await instance.get(`/api/members?nickname=${nickname}`);
  return response?.data;
};

export const putMemberEditInfo = async (formData: FormData) => {
  const response = await instance.put(
    `/api/members`, 
    formData
  );
  return response?.data;
};

export const getMyPage = async (nickname?: string) => {
  const response = await instance.get(`/api/mypage?nickname=${nickname}`);
  return response?.data;
};
