import React from 'react';
import {useStyles} from '../styles';
import {push} from 'connected-react-router';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import DoneIcon from '@material-ui/icons/Done';

function BucketsDetailPage({date, name, done}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem>
        <ListItemAvatar onClick={() => {}}>
          <Avatar
            style={{
              border: '2px solid grey',
              width: 28,
              height: 28,
              backgroundColor: '#FFFFFF',
            }}
          >
            {done ? (
              <DoneIcon style={{color: 'grey', height: 18, width: 18}} />
            ) : (
              ''
            )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              style={{fontWeight: 'bold', textDecoration: 'line-through'}}
            >
              {name}
            </Typography>
          }
          secondary={
            date && (
              <Typography style={{fontSize: 14, color: 'grey'}}>
                {new Date(date).toDateString()}
              </Typography>
            )
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}

export default BucketsDetailPage;
