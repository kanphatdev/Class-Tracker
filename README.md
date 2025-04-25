## Functional Requirements

### Student
| **Feature**                              | **Description**                                                                 | **Theme**                  |
|------------------------------------------|---------------------------------------------------------------------------------|----------------------------|
| **สมัครสมาชิก / ลงทะเบียน (Sign up)**   | Allows students to create a new account.                                        | Account Management         |
| **เข้าสู่ระบบ (Login)**                  | Enables students to log in to their accounts.                                   | Account Management         |
| **ดูตารางเรียน/คลาสที่ลงทะเบียนไว้**    | Displays the schedule or registered classes for the student.                    | Class Management           |
| **เช็คชื่อเข้าชั้นเรียนในวันที่กำหนด**   | Allows students to check in for a class on the specified date (if still valid). | Attendance Management      |
| **ดูสถานะการเช็คชื่อย้อนหลัง**           | Shows attendance history (Present / Absent / Late).                             | Attendance Management      |
| **แก้ไขข้อมูลส่วนตัว**                   | Enables students to update their personal information.                          | Account Management         |

### Teacher
| **Feature**                              | **Description**                                                                 | **Theme**                  |
|------------------------------------------|---------------------------------------------------------------------------------|----------------------------|
| **ลงทะเบียน / เข้าสู่ระบบ**             | Allows teachers to sign up and log in to their accounts.                        | Account Management         |
| **สร้างคลาสเรียน**                      | Enables teachers to create classes with details such as name, schedule, and student list. | Class Management           |
| **ดูรายวิชาที่สอน**                      | Displays the list of subjects or classes the teacher is teaching.               | Class Management           |
| **ดูรายชื่อนักเรียนในแต่ละคลาส**        | Shows the list of students in each class.                                       | Class Management           |
| **เปิด/ปิดการเช็คชื่อในคลาสตามเวลา**    | Allows teachers to enable or disable attendance check-in for a class based on time. | Attendance Management      |
| **ดูรายงานการเข้าเรียนของนักเรียน**      | Provides attendance reports for students on a daily, weekly, or individual basis. | Attendance Management      |
| **แก้ไขสถานะการเช็คชื่อย้อนหลัง**        | Enables teachers to update attendance records in case of errors.                | Attendance Management      |


## Non-Functional Requirements

- The system must include Authentication and Authorization mechanisms separated by roles.
- The system must manage attendance check-in times (e.g., only available during class hours).
- The system must support both mobile and desktop platforms.
- The UI must be user-friendly for both students and teachers.

## Tech Stack

### Backend
| **Technology**   | **Description**                              |
|-------------------|----------------------------------------------|
| **Express.js**    | Used to create REST APIs.                   |
| **Prisma**        | ORM for database management.                |
| **Workbench**     | Tool for viewing DB structure and managing data. |

### Frontend
| **Technology**   | **Description**                              |
|-------------------|----------------------------------------------|
| **Next.js**       | Frontend framework.                         |
| **Tailwind CSS**  | Used for UI styling.                        |
| **DaisyUI**       | UI components library integrated with Tailwind. |
| **Lucide-react**  | Provides beautiful icons for the UI.        |