module.exports = (req, res, next) => {
    const user = req.user;
  
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    if (user.role !== "STUDENT") {
      return res.status(403).json({ error: "Access denied. Student only." });
    }
  
    next();
  };
  