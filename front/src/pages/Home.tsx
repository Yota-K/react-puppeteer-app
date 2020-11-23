import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchResult from '../components/result/SearchResult';
import Loading from '../components/result/Loading';
import { Results } from '../types';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: '10px',
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  errorMessage: {
    color: '#f44336',
    marginTop: '12px',
  },
});

const Home: React.FC = () => {
  const classes = useStyles();

  const [url, setUrl] = React.useState<string>('');
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const [results, setResults] = React.useState<Results>({
    loading: false,
    searchResult: null,
    title: '',
    indexPageNum: 0,
    screenshot: '',
    siteInfo: {
      topPageUrl: '',
      topPageTitle: '',
      topPageDescription: '',
    },
  });

  const handleClick = () => {
    const reg = new RegExp('(https?://([\\w-]+\\.)+[\\w-]+(/[\\w- .?%&=]*)?)');

    if (url === '') {
      setErrorMessage('入力欄が空です');
      return;
    } else if (!url.match(reg)) {
      setErrorMessage('※正しいURLではありません');
      return;
    } else {
      invokeLamba();
    }
  };

  const invokeLamba = async () => {
    try {
      setUrl('');

      // MEMO: trueに書き換えてローディングを表示
      setResults({ ...results, loading: true, searchResult: null });

      const res = await axios.get(`${process.env.END_POINT_DEV}${url}`);
      const data = await res.data;

      // MEMO: falseに書き換えてローディングを消す
      setResults({ ...results, ...data, loading: false });
    } catch (er) {
      console.error(er);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    setUrl(e.target.value);
  };

  useEffect(() => {
    const limit = setTimeout(() => {
      // MEMO: 45秒以上経っても、チェック結果がtrueの時は処理中断
      if (results.searchResult === false) {
        setResults({ ...results, loading: false, searchResult: false });
      }
    }, 45000);

    /* MEMO: stateが変更されるたびに発火するので、
    新たにタイマーがセットされる前に古いタイマー処理を破棄する */
    return () => {
      clearInterval(limit);
    };
    // MEMO: ローディング用のstateが変更されたときに実行
  }, [results.loading]);

  return (
    <Container maxWidth="sm">
      {results.loading === false && (
        <>
          <Typography align="center" variant="h2" gutterBottom>
            URL・ドメインを入力してください
          </Typography>
          <Paper component="form" className={classes.root}>
            <InputBase onChange={handleChange} value={url} className={classes.input} placeholder="search..." />
            <IconButton onClick={handleClick} aria-label="search" className={classes.iconButton}>
              <SearchIcon />
            </IconButton>
          </Paper>
          <p className={classes.errorMessage}>{errorMessage}</p>
        </>
      )}
      {results.loading === true && <Loading />}
      {results.searchResult !== null && SearchResult(results)}
    </Container>
  );
};

export default Home;
