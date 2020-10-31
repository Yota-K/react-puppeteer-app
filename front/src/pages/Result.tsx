import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
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
    marginBottom: '20px'
  },
  h2: {
    marginBottom: '10px'
  },
  h3: {
    margin: '18px 0'
  }
});

interface Results {
  searchResult: boolean | null;
  title: string,
  indexPageNum: number;
  screenshot: string;
  siteInfo: {
    topPageUrl: string;
    topPageTite: string;
    topPageDescription: string;
  };
}

const Result = () => {
  const classes = useStyles();

  const [results, setResults] = React.useState<Results>({
    searchResult: null,
    title: '',
    indexPageNum: 0,
    screenshot: '',
    siteInfo: {
      topPageUrl: '',
      topPageTite: '',
      topPageDescription: '',
    },
  });

  // MEMO: パスの名前とかクエリパラメータとか取得できる
  const location = useLocation();
  const parseParameter = queryString.parse(location.search);
  const url = parseParameter.q;

  useEffect(() => {
    const main = async () => {
      try {
        const res = await axios.get(`${process.env.END_POINT_DEV}${url}`);
        const data = await res.data;
        setResults({...results, ...data});
      } catch(er) {
        console.error(er);
      }
    }

    main();
  }, []);

  const dataImage = `data:image/png;base64,${results.screenshot}`;

  return (
    <>
      {results.searchResult === null &&
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" className={classes.resultTitle}>検索を行っています</Typography>
          <Container className={classes.ProgressContainer}>
            <CircularProgress />
          </Container>
        </Container>
      }
      {results.searchResult === true &&
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" className={classes.resultTitle}>検索結果</Typography>
          <Card className={classes.root}>
            <Typography variant="h2" className={classes.h2}>{results.title}</Typography>
            <Typography variant="h3" className={classes.h3}>戦闘力: {results.indexPageNum}</Typography>
            <CardMedia
              className={classes.media}
              image={dataImage}
              title={`${results.title}のスクリーンショット`}
            />
            <CardContent>
              <Typography variant="h3" className={classes.h3}>
                <Link href={results.siteInfo.topPageUrl}>{results.siteInfo.topPageTite}</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {results.siteInfo.topPageDescription}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      }
    </>
  );
}

export default Result;
