import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  h1: {
    fontSize: '36px',
    fontWeight: 'bold'
  },
  h2: {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '12px 0',
  }
});

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Container maxWidth="md">
        <Typography variant="h1" align="center" className={classes.h1}>404 Not Found</Typography>
        <Typography variant="h2" align="center" className={classes.h2}>ページが見つかりませんでした</Typography>
        <Typography variant="body1" align="center">
          アクセスしたURLのページは存在しません。<br/>
          URLが間違っていないか確認をしてください。
        </Typography>
      </Container>
    </Container>
  );
};

export default NotFound;
