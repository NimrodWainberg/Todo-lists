import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const EditTask = ({ isOpen, handleCloseDialog }) => {
  const handleClose = () => {
    handleCloseDialog();
  };
  // debugger;
  console.log(isOpen);
  return (
    <Dialog open={isOpen} onClose={handleClose}>
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
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTask;
