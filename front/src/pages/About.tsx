import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  margin: {
    marginTop: '12px',
    marginBottom: '12px',
  },
});

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Paper>
        <Container maxWidth="md">
          <Typography variant="h1">このアプリケーションについて</Typography>
          <Typography variant="body1" className={classes.margin}>
            ウェブサイトの強さを計測するお遊びアプリケーションです。<br />
            Reactとpuppeteerを使って何か作りたいと思い開発しました。<br />
            サイトの強さはsite:でGoogle検索を行った際に表示されるサイトのインデックス数を取得して、<br />
            サイトにインデックスしているページの数をそのまま戦闘力として表示してるだけです。
          </Typography>
        </Container>
      </Paper>
    </Container>
  );
};

export default About;
