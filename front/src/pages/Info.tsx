import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  margin: {
    marginTop: '12px',
    marginBottom: '12px',
  },
});

const Info: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Paper>
        <Container maxWidth="md">
          <Typography variant="h1">運営者情報</Typography>
          <Typography variant="h2" className={classes.margin}>
            開発者について
          </Typography>
          <Typography variant="body1">
            <Link href="https://twitter.com/karukichi_yah">運営者Twitter</Link>
          </Typography>
          <Typography variant="body1">
            <Link href="https://karukichi-blog.netlify.app/">技術ブログ</Link>
          </Typography>
        </Container>
      </Paper>
    </Container>
  );
};

export default Info;
