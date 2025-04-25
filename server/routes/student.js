const express = require("express");
const { getMyClassrooms, checkIn, getAttendanceHistory, getAttendanceByClass } = require("../controllers/studentController");


const router = express.Router();

router.get("/classroom", getMyClassrooms);
router.post("/classroom/:id/attendance", checkIn);
router.get("/attendance/history", getAttendanceHistory);
router.get("/attendance/classroom/:id", getAttendanceByClass);

module.exports = router;
