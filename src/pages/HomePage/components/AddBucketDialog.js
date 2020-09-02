import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {ColorSelector} from './ColorSelector';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddBucketDialog({open, handleClose}) {
  const [value, setValue] = React.useState('');
  // const [color, setColor] = React.useState('#FFFFFF');
  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>Create New Bucket</DialogTitle>
      <DialogContent style={{paddingTop: 0}}>
        <TextField
          required
          label="Bucket Name"
          placeholder="New Year Plans"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{width: '100%'}}
        />
        {/*<Typography style={{marginBottom: 8, marginTop: 16, fontWeight: 600}}>*/}
        {/*  Select Color*/}
        {/*</Typography>*/}
        {/*<ColorSelector color={color} setColor={setColor} />*/}
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
