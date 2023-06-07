import "./sidebar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded,
} from "@material-ui/icons";
import Item from "./component/Item";
import { useState } from "react";
function Sidebar() {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "5rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "7rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "5rem",
    },
  };
  return (
    <div className="App">
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgb(255,255,255)",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255,255,255,0.3)",
              boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgb(255,255,255)",
              cursor: "pointer",
            }}
          >
            <img
              src="/public/man.png"
              alt="profile_img"
            />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0, width: open ? "auto" : 0 }}
              >
                ANALYTICS
              </motion.h3>
              <Item icon={<DashboardRounded />} name="Dashboard" />
              <Item icon={<BarChartRounded />} name="Products" />
            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0, width: open ? "auto" : 0 }}
            >
              Content
            </motion.h3>
            <Item icon={<AttachMoneyRounded />} name="Sales" />
            <Item icon={<AssignmentTurnedInRounded />} name="Checklist" />{" "}
            <Item icon={<AccountCircleRounded />} name="Customers" />
          </div>
          {/* group 3 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0, width: open ? "auto" : 0 }}
            >
              CUSTOMIZATION
            </motion.h3>
            <Item icon={<SettingsRemoteRounded />} name="Segments" />
            <Item icon={<ColorLensRounded />} name="Themems" />
          </div>
        </motion.div>
      </motion.div>
      <div className="body_container">

      </div>
    </div>
  );
}

export default Sidebar;
