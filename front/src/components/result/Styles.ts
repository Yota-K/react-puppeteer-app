import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
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
