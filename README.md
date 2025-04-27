### Student
| **Feature**                              | **Description**                                                                 | **Theme**                  |
|------------------------------------------|---------------------------------------------------------------------------------|----------------------------|
| **Sign Up**                              | Allows students to create a new account.                                        | Account Management         |
| **Login**                                | Enables students to log in to their accounts.                                   | Account Management         |
| **View Class Schedule**                  | Displays the schedule or registered classes for the student.                    | Class Management           |
| **Check-in for Class**                   | Allows students to check in for a class on the specified date (if still valid). | Attendance Management      |
| **View Attendance History**              | Shows attendance history (Present / Absent / Late).                             | Attendance Management      |
| **Edit Profile**                         | Enables students to update their personal information.                          | Account Management         |

### Teacher
| **Feature**                              | **Description**                                                                 | **Theme**                  |
|------------------------------------------|---------------------------------------------------------------------------------|----------------------------|
| **Sign Up / Login**                      | Allows teachers to sign up and log in to their accounts.                        | Account Management         |
| **Create Class**                         | Enables teachers to create classes with details such as name, schedule, and student list. | Class Management           |
| **View Teaching Subjects**               | Displays the list of subjects or classes the teacher is teaching.               | Class Management           |
| **View Student List per Class**          | Shows the list of students in each class.                                       | Class Management           |
| **Enable/Disable Attendance Check-in**   | Allows teachers to enable or disable attendance check-in for a class based on time. | Attendance Management      |
| **View Attendance Reports**              | Provides attendance reports for students on a daily, weekly, or individual basis. | Attendance Management      |
| **Edit Attendance Records**              | Enables teachers to update attendance records in case of errors.                | Attendance Management      |


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

### Backend Dependencies

| **Dependency**       | **Version** | **Description**                                                                 |
|-----------------------|-------------|---------------------------------------------------------------------------------|
| **@prisma/client**    | ^6.6.0      | Prisma Client for database interaction.                                         |
| **bcrypt**            | ^5.1.1      | Library for hashing passwords securely.                                         |
| **cors**              | ^2.8.5      | Middleware for enabling Cross-Origin Resource Sharing.                          |
| **express**           | ^5.1.0      | Web framework for building REST APIs.                                           |
| **jsonwebtoken**      | ^9.0.2      | Library for creating and verifying JSON Web Tokens (JWT).                       |
| **morgan**            | ^1.10.0     | HTTP request logger middleware for Node.js.                                     |
| **nodemon**           | ^3.1.10     | Tool for automatically restarting the server during development.                |
| **prisma**            | ^6.6.0      | ORM for database schema management and migrations.                              |


## Endpoint Teacher

| **Feature**                     | **Description**                                                | **Endpoint**                                              | **Method** | **Theme**              |
|----------------------------------|----------------------------------------------------------------|----------------------------------------------------------|------------|------------------------|
| **Sign Up / Login**              | Allows teachers to sign up and log in to their accounts.       | `/api/auth/register` / `/api/auth/login`                 | POST       | Account Management     |
| **Create Class**                 | Enables teachers to create a new class.                       | `/api/teacher/classroom`                                 | POST       | Class Management       |
| **View Teaching Subjects**       | Displays the list of subjects the teacher is teaching.         | `/api/teacher/classroom`                                 | GET        | Class Management       |
| **View Student List per Class**  | Shows the list of students in each class.                     | `/api/teacher/classroom/:id/students`                   | GET        | Class Management       |
| **Enable/Disable Attendance**    | Allows enabling/disabling attendance check-in for a class.    | `/api/teacher/classroom/:id/attendance/start`           | POST       | Attendance Management  |
|                                  |                                                                | `/api/teacher/classroom/:id/attendance/end`             | POST       | Attendance Management  |
| **View Attendance Reports**      | Provides daily/weekly/individual reports.                     | `/api/teacher/classroom/:id/attendance/report`          | GET        | Attendance Management  |
| **Edit Attendance Records**      | Enables editing attendance records.                           | `/api/teacher/attendance/:attendanceId`                 | PUT        | Attendance Management  |


## Endpoint Student

| **Feature**               | **Description**                                                                 | **Endpoint**                                | **Method** | **Theme**              |
|---------------------------|---------------------------------------------------------------------------------|--------------------------------------------|------------|------------------------|
| **Sign Up**               | Allows students to create a new account.                                        | `/api/auth/register`                        | POST       | Account Management     |
| **Login**                 | Enables students to log in to their accounts.                                   | `/api/auth/login`                           | POST       | Account Management     |
| **View Class Schedule**   | Displays the schedule or registered classes for the student.                    | `/api/student/classroom`                    | GET        | Class Management       |
| **Check-in for Class**    | Allows students to check in for a class on the specified date (if still valid). | `/api/student/classroom/:id/attendance`     | POST       | Attendance Management  |
| **View Attendance History** | Shows attendance history (Present / Absent / Late).                           | `/api/student/attendance/history`           | GET        | Attendance Management  |
| **Edit Profile**          | Enables students to update their personal information.                          | `/api/auth/profile`                         | PUT        | 
Account Management     |

### Environment Variables

| **Variable**       | **Description**                              |
|---------------------|----------------------------------------------|
| `DATABASE_URL`      | Connection string for the database.          |
| `JWT_SECRET`        | Secret key used for signing JSON Web Tokens. |
| `PORT`              | Port number on which the server runs.        |
