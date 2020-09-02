import React from 'react';
import {useStyles} from './styles';
import NavMenuBar from '../../components/NavMenuBar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import {BucketItem} from './components/BucketItem';
import AddBucketDialog from './components/AddBucketDialog';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
function HomePage() {
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
      icon: <SearchIcon />,
    },
  ];

  return (
    <div className={classes.root}>
      <NavMenuBar heading="Fractal Todo" actions={getActions} />
      <List className={classes.root}>
        <BucketItem
          color="#ffab00"
          count={23}
          done={10}
          id={23455}
          name="Katy Perry"
          date={Date.now()}
        />
      </List>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <CreateIcon onClick={handleClickOpen} className={classes.addIcon} />
      </Fab>
      <AddBucketDialog handleClose={handleClose} open={open} />
    </div>
  );
}

export default HomePage;
