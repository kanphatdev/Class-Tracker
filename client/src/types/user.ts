// types/user.ts
export interface BaseProfile {
    id: string;
    email: string;
    name: string;
    role: 'STUDENT' | 'TEACHER';
  }
  
  export interface StudentProfile extends BaseProfile {
    classIds: string[]; // รายวิชาที่เรียน
    // เพิ่ม field อื่น ๆ ตาม schema จริง
  }
  
  export interface TeacherProfile extends BaseProfile {
    subjectIds: string[]; // รายวิชาที่สอน
    // เพิ่ม field อื่น ๆ ตาม schema จริง
  }
  export interface UserProfile {
    id: number;
    name: string;
    email: string;
    role: 'STUDENT' | 'TEACHER';
  }