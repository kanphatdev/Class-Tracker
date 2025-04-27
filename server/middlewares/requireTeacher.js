module.exports = (req, res, next) => {
    const user = req.user;
  
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    if (user.role !== "TEACHER") {
      return res.status(403).json({ error: "Access denied. Teacher only." });
    }
  
    next();
  };
  