import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const EditTask = ({ isOpen, handleCloseDialog, handleUpdateDialog }) => {
  const [newDescriptionValue, setNewDescriptionValue] = useState("");

  const handleDescriptionChange = (event) => {
    setNewDescriptionValue(event.target.value);
  };

  const handleClose = () => {
    handleCloseDialog();
  };

  const handleUpdate = () => {
    handleUpdateDialog(newDescriptionValue);
    handleCloseDialog();
  };

  return (
    <Dialog data-testid="editTask" open={isOpen} onClose={handleClose}>
      <DialogTitle>Update Task</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>To subscribe</DialogContentText> */}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="New Description"
          type="text"
          fullWidth
          onChange={handleDescriptionChange}
          value={newDescriptionValue}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleUpdate}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTask;
