import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token"); // IMPORTANT: remove token
    navigate("/");
  };

  return (
    <motion.div
      className="dashboard-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="dashboard-card"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="dashboard-title">
          Welcome to HabitForge 🚀
        </h1>

        <p className="dashboard-subtitle">
          Your discipline journey starts now.
        </p>

        <div className="stats">
          <div className="stat-box">
            <h3>🔥 0</h3>
            <p>Current Streak</p>
          </div>

          <div className="stat-box">
            <h3>📅 0</h3>
            <p>Habits Completed</p>
          </div>

          <div className="stat-box">
            <h3>⏳ 0h</h3>
            <p>Focus Time</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
}