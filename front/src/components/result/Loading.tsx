import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './Styles';

const Loading: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" className={classes.resultTitle}>
        検索を行っています
      </Typography>
      <Container className={classes.ProgressContainer}>
        <CircularProgress />
      </Container>
    </Container>
  );
};

export default Loading;
