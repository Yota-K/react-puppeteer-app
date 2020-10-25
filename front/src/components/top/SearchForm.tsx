import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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

const SearchForm = () => {
  const classes = useStyles();

  const [url, setUrl] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }

  // MEMO: ページ遷移に使用。
  const history = useHistory();

  return (
    <>
      <Typography align="center" variant="h2" gutterBottom>URL・ドメインを入力してください</Typography>
      <Paper component="form" className={classes.root}>
        <InputBase 
          onChange={handleChange}
          value={url}
          className={classes.input} 
          placeholder="search..." 
        />
        <IconButton onClick={() => history.push(`/result/url?q=${url}`)} aria-label="search" className={classes.iconButton}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default SearchForm;
