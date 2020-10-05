import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    letterSpacing: '0.6px',
  }
});

const AppHeader = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" className={classes.heading}>
            ウェブサイトチェッカー
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AppHeader;
