// server/controllers/studentController.js

const prisma = require("../config/prisma");

// 👉 GET /api/students/classrooms
exports.getMyClassrooms = async (req, res) => {
  const userId = req.user.userId;

  try {
    const classrooms = await prisma.classroom.findMany({
      where: {
        deletedAt: null, // ⛔ ignore deleted
        enrollments: {
          some: { studentId: userId },
        },
      },
      include: {
        teacher: {
          select: { id: true, name: true },
        },
      },
    });
    

    res.json({ classrooms });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch classrooms", detail: error.message });
  }
};

// 👉 POST /api/students/checkin/:id
exports.checkIn = async (req, res) => {
  const userId = req.user.userId;
  const { id: classroomId } = req.params;

  try {
    const attendance = await prisma.attendance.create({
      data: {
        studentId: userId,
        classroomId,
        status: "PRESENT", // can be dynamic in the future
      },
    });

    res.json({ message: `Checked in`, attendance });
  } catch (error) {
    res.status(500).json({ error: "Failed to check in", detail: error.message });
  }
};

// 👉 GET /api/students/attendance
exports.getAttendanceHistory = async (req, res) => {
  const userId = req.user.userId;

  try {
    const records = await prisma.attendance.findMany({
      where: { studentId: userId },
      include: {
        classroom: true,
      },
      orderBy: {
        timestamp: "desc",
      },
    });

    res.json({ attendanceHistory: records });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch attendance", detail: error.message });
  }
};

// 👉 GET /api/students/attendance/:id
exports.getAttendanceByClass = async (req, res) => {
  const userId = req.user.userId;
  const { id: classroomId } = req.params;

  try {
    const records = await prisma.attendance.findMany({
      where: {
        classroomId,
        studentId: userId,
      },
      orderBy: {
        timestamp: "desc",
      },
    });

    res.json({ classroomId, records });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch attendance for classroom", detail: error.message });
  }
};
// 👉 PUT /api/classrooms/:id
exports.editClassroom = async (req, res) => {
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
// 👉 PUT /api/attendances/:id
exports.editAttendance = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updated = await prisma.attendance.update({
      where: { id },
      data: { status },
    });

    res.json({ message: "Attendance updated", attendance: updated });
  } catch (error) {
    res.status(500).json({ error: "Failed to update attendance", detail: error.message });
  }
};
// 👉 DELETE /api/classrooms/:id (Soft delete classroom)
exports.softDeleteClassroom = async (req, res) => {
  const { id } = req.params;

  try {
    const classroom = await prisma.classroom.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    res.json({ message: "Classroom soft-deleted", classroom });
  } catch (error) {
    res.status(500).json({ error: "Failed to soft delete classroom", detail: error.message });
  }
};
