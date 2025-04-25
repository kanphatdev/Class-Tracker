const express = require("express");
const {
  createClassroom,
  getMyClassrooms,
  getClassroomDetail,
  updateClassroom,
  deleteClassroom,
  addStudentToClassroom,
  removeStudentFromClassroom,
  getStudentsInClassroom,
  startAttendance,
  endAttendance,
  getAttendanceReport,
  updateAttendanceStatus,
} = require("../controllers/teacherController");

const router = express.Router();

router.post("/classroom", createClassroom);
router.get("/classroom", getMyClassrooms);
router.get("/classroom/:id", getClassroomDetail);
router.put("/classroom/:id", updateClassroom);
router.delete("/classroom/:id", deleteClassroom);

router.post("/classroom/:id/enroll", addStudentToClassroom);
router.delete("/classroom/:id/enroll/:studentId", removeStudentFromClassroom);
router.get("/classroom/:id/students", getStudentsInClassroom);

router.post("/classroom/:id/attendance/start", startAttendance);
router.post("/classroom/:id/attendance/end", endAttendance);
router.get("/classroom/:id/attendance/report", getAttendanceReport);
router.put("/attendance/:attendanceId", updateAttendanceStatus);

module.exports = router;
