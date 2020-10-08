import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    marginBottom: '40px',
  },
  heading: {
    fontWeight: 'bold',
    letterSpacing: '0.6px',
  }
});

const AppHeader = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h1" className={classes.heading}>
            Website Bounty
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AppHeader;
