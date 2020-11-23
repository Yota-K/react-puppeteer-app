import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  resultTitle: {
    fontSize: '28px',
    marginBottom: '20px',
    color: 'red',
  },
  h2: {
    marginBottom: '10px',
  },
});

const Failure: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" align="center" className={classes.resultTitle}>
        検索に失敗しました
        <br />
        URLが間違っていないか確認してください
      </Typography>
    </>
  );
};

export default Failure;
