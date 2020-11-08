import React, { useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchResult from '../components/result/SearchResult';
import { Results } from '../types'

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
});

const Home: React.FC = () => {
  const classes = useStyles();

  const [url, setUrl] = React.useState<string>('');
  const [results, setResults] = React.useState<Results>({
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

  const invokeLamba = async () => {
    try {
      setUrl('');

      // MEMO: falseに書き換えてローディングを表示
      setResults({ ...results, searchResult: false });

      const res = await axios.get(`${process.env.END_POINT_DEV}${url}`);
      const data = await res.data;

      setResults({ ...results, ...data });
    } catch (er) {
      console.error(er);

      setResults({ ...results, searchResult: false });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      {results.searchResult === null &&
      <>
        <Typography align="center" variant="h2" gutterBottom>
          URL・ドメインを入力してください
        </Typography>
        <Paper component="form" className={classes.root}>
          <InputBase
            onChange={handleChange}
            value={url}
            className={classes.input}
            placeholder="search..."
          />
          <IconButton
            onClick={invokeLamba}
            aria-label="search"
            className={classes.iconButton}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </>}

      {results.searchResult !== null && SearchResult(results)}
    </Container>
  );
};

export default Home;
