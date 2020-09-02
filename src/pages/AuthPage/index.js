import React from 'react';
import {useStyles} from './styles';
import NavMenuBar from '../../components/NavMenuBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function AuthPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{paddingLeft: 16, paddingRight: 16}}>
        <div style={{textAlign: 'center'}}>
          <Typography style={{fontSize: 24, fontWeight: 600}}>
            Fractal Todo
          </Typography>
          <Typography style={{color: 'grey'}}>
            Create Buckets and Todos with few taps
          </Typography>
        </div>
        <TextField
          label="Username"
          required
          style={{width: '100%', marginBottom: 16}}
        />
        <TextField
          label="Password"
          required
          style={{width: '100%', marginBottom: 24}}
        />
        <Button
          fullWidth
          style={{
            boxShadow: 'none',
            paddingTop: 10,
            paddingBottom: 10,
            fontWeight: 600,
            fontSize: 16,
          }}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
        <Button
          fullWidth
          style={{
            marginTop: 16,
            boxShadow: 'none',
            fontWeight: 600,
          }}
          color="primary"
        >
          Need an Account? Register Now
        </Button>
      </div>
    </div>
  );
}

export default AuthPage;
