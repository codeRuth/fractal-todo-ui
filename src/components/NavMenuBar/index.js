import React from 'react';
import {useStyles} from './styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useDispatch} from 'react-redux';
import {goBack} from 'connected-react-router';

const NavMenuBar = ({heading, back, actions}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
        style={{paddingLeft: back ? 0 : 16}}
      >
        <Toolbar>
          {back ? (
            <IconButton onClick={() => dispatch(goBack())}>
              <ArrowBackIcon />
            </IconButton>
          ) : (
            <></>
          )}
          <Typography variant="h6" className={classes.title}>
            {heading}
          </Typography>
          {actions &&
            actions.map((val, index) => (
              <IconButton key={index} onClick={() => dispatch(goBack())}>
                {val.icon}
              </IconButton>
            ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavMenuBar;
