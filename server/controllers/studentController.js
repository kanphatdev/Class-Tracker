// server/controllers/studentController.js

exports.getMyClassrooms = (req, res) => {
    res.json({ message: "All classrooms I enrolled in" });
  };
  
  exports.checkIn = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Checked in to classroom ${id}` });
  };
  
  exports.getAttendanceHistory = (req, res) => {
    res.json({ message: "My attendance history" });
  };
  
  exports.getAttendanceByClass = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Attendance for classroom ${id}` });
  };
  