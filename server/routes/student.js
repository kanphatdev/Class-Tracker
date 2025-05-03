const express = require("express");
const {
  getMyClassrooms,
  checkIn,
  getAttendanceHistory,
  getAttendanceByClass,
  editClassroom,
  editAttendance,
  softDeleteClassroom,
} = require("../controllers/studentController");
const requireStudent = require("../middlewares/requireStudent");



const router = express.Router();

// ✅ Apply middleware to all student routes
router.use(requireStudent);

router.get("/classroom", getMyClassrooms); 
router.post("/classroom/:id/attendance", checkIn);
router.get("/attendance/history", getAttendanceHistory);
router.get("/attendance/classroom/:id", getAttendanceByClass);

// 👇 ใหม่: แก้ไขห้องเรียน
router.put("/classroom/:id", editClassroom);

// 👇 ใหม่: แก้ไขการเช็กชื่อ
router.put("/attendance/:id", editAttendance);

// 👇 ลบห้องเรียนแบบ soft delete
router.delete("/classroom/:id", softDeleteClassroom);

module.exports = router;
