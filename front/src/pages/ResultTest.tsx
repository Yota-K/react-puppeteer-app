import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  ProgressContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  resultTitle: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  h2: {
    marginBottom: '10px',
  },
  h3: {
    margin: '18px 0',
  },
});

const ResultTest = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" className={classes.resultTitle}>
          検索を行っています
        </Typography>
        <Container className={classes.ProgressContainer}>
          <CircularProgress />
        </Container>
      </Container>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" className={classes.resultTitle}>
          検索結果
        </Typography>
        <Card className={classes.root}>
          <Typography variant="h2" className={classes.h2}>
            サイトのタイトル
          </Typography>
          <Typography variant="h3" className={classes.h3}>
            戦闘力: 1280000
          </Typography>
          <CardMedia
            className={classes.media}
            image="https://images.microcms-assets.io/protected/ap-northeast-1:4e1ce5b7-3cdc-47cb-b3a0-9c403488fea6/service/karukichi-tech-blog/media/laravel-img.jpg"
            title="スクリーンショット"
          />
          <CardContent>
            <Typography variant="h3" className={classes.h3}>
              <Link href="/">検索を行ったページの情報</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              デスクリプションデスクリプションデスクリプションデスクリプションデスクリプション
              デスクリプションデスクリプションデスクリプションデスクリプションデスクリプション
              デスクリプションデスクリプションデスクリプションデスクリプションデスクリプション
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default ResultTest;
