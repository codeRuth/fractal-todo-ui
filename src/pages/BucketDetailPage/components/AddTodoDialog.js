import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddTodoDialog({open, handleClose}) {
  const [value, setValue] = React.useState('');
  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>New Todo</DialogTitle>
      <DialogContent style={{paddingTop: 0}}>
        <TextField
          required
          label="Todo"
          placeholder="Get Weight Training"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{width: '100%'}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
