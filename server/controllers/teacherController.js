// server/controllers/teacherController.js
const prisma = require("../config/prisma");

// 👉 POST /api/teachers/classrooms
exports.createClassroom = async (req, res) => {
  const { name, subject } = req.body;
  const teacherId = req.user.userId;

  try {
    const classroom = await prisma.classroom.create({
      data: {
        name,
        subject,
        teacherId,
      },
    });

    res.status(201).json({ message: "Classroom created", classroom });
  } catch (error) {
    res.status(500).json({ error: "Failed to create classroom", detail: error.message });
  }
};

// 👉 GET /api/teachers/classrooms
exports.getMyClassrooms = async (req, res) => {
  const teacherId = req.user.userId;

  try {
    const classrooms = await prisma.classroom.findMany({
      where: { teacherId, deleted: false },
    });

    res.json({ classrooms });
  } catch (error) {
    res.status(500).json({ error: "Failed to get classrooms", detail: error.message });
  }
};

// 👉 GET /api/teachers/classrooms/:id
exports.getClassroomDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const classroom = await prisma.classroom.findUnique({
      where: { id },
      include: {
        enrollments: {
          include: {
            student: { select: { id: true, name: true } },
          },
        },
      },
    });

    if (!classroom) return res.status(404).json({ error: "Classroom not found" });
    res.json({ classroom });
  } catch (error) {
    res.status(500).json({ error: "Failed to get classroom detail", detail: error.message });
  }
};

// 👉 PUT /api/teachers/classrooms/:id
exports.updateClassroom = async (req, res) => {
  const { id } = req.params;
  const { name, subject } = req.body;

  try {
    const updated = await prisma.classroom.update({
      where: { id },
      data: { name, subject },
    });

    res.json({ message: "Classroom updated", classroom: updated });
  } catch (error) {
    res.status(500).json({ error: "Failed to update classroom", detail: error.message });
  }
};

// 👉 DELETE /api/teachers/classrooms/:id (Soft delete)
exports.deleteClassroom = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await prisma.classroom.update({
      where: { id },
      data: { deleted: true },
    });

    res.json({ message: "Classroom soft-deleted", classroom: deleted });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete classroom", detail: error.message });
  }
};

// 👉 POST /api/teachers/classrooms/:id/students
exports.addStudentToClassroom = async (req, res) => {
  const { id } = req.params;
  const { studentId } = req.body;

  try {
    const enrollment = await prisma.enrollment.create({
      data: {
        classroomId: id,
        studentId,
      },
    });

    res.json({ message: "Student added", enrollment });
  } catch (error) {
    res.status(500).json({ error: "Failed to add student", detail: error.message });
  }
};

// 👉 DELETE /api/teachers/classrooms/:id/students/:studentId
exports.removeStudentFromClassroom = async (req, res) => {
  const { id, studentId } = req.params;

  try {
    await prisma.enrollment.deleteMany({
      where: {
        classroomId: id,
        studentId,
      },
    });

    res.json({ message: "Student removed from classroom" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove student", detail: error.message });
  }
};

// 👉 GET /api/teachers/classrooms/:id/students
exports.getStudentsInClassroom = async (req, res) => {
  const { id } = req.params;

  try {
    const students = await prisma.enrollment.findMany({
      where: { classroomId: id },
      include: {
        student: {
          select: { id: true, name: true },
        },
      },
    });

    res.json({ students });
  } catch (error) {
    res.status(500).json({ error: "Failed to get students", detail: error.message });
  }
};

// 👉 POST /api/teachers/classrooms/:id/attendance/start
exports.startAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    // Optional: Add logic to mark the class as "open for attendance"
    res.json({ message: `Started attendance for class ${id}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to start attendance", detail: error.message });
  }
};

// 👉 POST /api/teachers/classrooms/:id/attendance/end
exports.endAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    // Optional: Add logic to mark the class as "closed for attendance"
    res.json({ message: `Ended attendance for class ${id}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to end attendance", detail: error.message });
  }
};

// 👉 GET /api/teachers/classrooms/:id/attendance/report
exports.getAttendanceReport = async (req, res) => {
  const { id } = req.params;

  try {
    const records = await prisma.attendance.findMany({
      where: { classroomId: id },
      include: {
        student: { select: { id: true, name: true } },
      },
      orderBy: {
        timestamp: "desc",
      },
    });

    res.json({ classroomId: id, records });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch attendance report", detail: error.message });
  }
};

// 👉 PUT /api/teachers/attendance/:attendanceId
exports.updateAttendanceStatus = async (req, res) => {
  const { attendanceId } = req.params;
  const { status } = req.body;

  try {
    const updated = await prisma.attendance.update({
      where: { id: attendanceId },
      data: { status },
    });

    res.json({ message: "Attendance status updated", attendance: updated });
  } catch (error) {
    res.status(500).json({ error: "Failed to update attendance", detail: error.message });
  }
};
