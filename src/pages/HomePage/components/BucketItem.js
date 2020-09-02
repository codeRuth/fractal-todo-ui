import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';

export const BucketItem = ({name, count, done, id, date, color}) => {
  const dispatch = useDispatch();

  return (
    <ListItem onClick={() => dispatch(push(`/bucket/${id}`))}>
      <ListItemAvatar>
        <Avatar style={{backgroundColor: color}}>{count - done}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={<Typography style={{fontWeight: 'bold'}}>{name}</Typography>}
        secondary={
          <Typography style={{fontSize: 14, color: 'grey'}}>
            {count} Todos • {new Date(date).toDateString()}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
