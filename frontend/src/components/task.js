import { useState } from "react";
import "../css/task.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import AssignmentIcon from "@mui/icons-material/Assignment";
const Task = ({ task }) => {
  const [open, setOpen] = useState(false);

  const handleExpandClick = () => {
    setOpen(!open);
  };

  return (
    <div data-testid="task" className="">
      {/* <IconButton aria-label="delete" size="small">
        <ExpandCircleDownIcon
          fontSize="inherit"
          color="secondary"
          onClick={() => expendTask(task)}
        />
      </IconButton> */}
      <ListItemButton onClick={handleExpandClick}>
        <ListItemIcon>{<AssignmentIcon color="primary" />}</ListItemIcon>
        {/* <ListItemText primary={task?.title} /> */}
        <ListItemText
          primary={
            <Typography type="body2" className="title-text">
              {task?.title}
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              className="description-text"
              primary={task?.description}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  );
};

export default Task;
