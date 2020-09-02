import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},
  fab: {
    position: 'fixed',
    bottom: 16,
    right: 16,
    backgroundColor: theme.palette.accent,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.palette.accent,
    },
  },
  addIcon: {
    color: '#FFFFFF',
  },
}));
