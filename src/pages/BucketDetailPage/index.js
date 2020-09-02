import React from 'react';
import {useStyles} from './styles';
import NavMenuBar from '../../components/NavMenuBar';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import List from '@material-ui/core/List';
import {BucketItem} from '../HomePage/components/BucketItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TodoItem from './components/TodoItem';
import AddTodoDialog from './components/AddTodoDialog';
import Typography from '@material-ui/core/Typography';

function BucketsDetailPage() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getActions = [
    {
      icon: <DeleteOutlineIcon />,
    },
    {
      icon: <DoneAllIcon />,
    },
  ];
  return (
    <div className={classes.root}>
      <NavMenuBar back heading="Bucket Detail" />
      <Typography
        style={{marginTop: 16, marginLeft: 16, fontWeight: 600, fontSize: 14}}
      >
        {23} Todos
      </Typography>
      <List className={classes.root}>
        <TodoItem name="Get Weight Training" done={true} />
      </List>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon onClick={handleClickOpen} className={classes.addIcon} />
      </Fab>
      <AddTodoDialog open={open} handleClose={handleClose} />
    </div>
  );
}

export default BucketsDetailPage;
