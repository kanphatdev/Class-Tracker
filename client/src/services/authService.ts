import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const loginUser = async (data: {
  email: string;
  password: string;
  name: string;
  role: string;
}) => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};

export const registerUser = async (data: {
    email: string;
    password: string;
    name: string;
    role: string;
  }) => {
    const response = await axios.post(`${API_URL}/auth/signup`, data);
    return response.data;
  };




export const getProfile = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'ไม่สามารถดึงข้อมูลผู้ใช้ได้');
  }
};
