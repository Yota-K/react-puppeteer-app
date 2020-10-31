import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useStyles } from './Styles';
import { Results } from '../../types'

interface Props {
  results: Results;
}

const Success: React.FC<Props> = ({ results }) => {
  const classes = useStyles();

  const dataImage = `data:image/png;base64,${results.screenshot}`;

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" className={classes.resultTitle}>
        検索結果
      </Typography>
      <Card className={classes.root}>
        <Typography variant="h2" className={classes.h2}>
          サイト名: {results.title}
        </Typography>
        <Typography variant="h3" className={classes.h3}>
          戦闘力: {results.indexPageNum}
        </Typography>
        <CardMedia className={classes.media} image={dataImage} title={`${results.title}のスクリーンショット`} />
        <CardContent>
          <Typography variant="h3" className={classes.h3}>
            <Link href={results.siteInfo.topPageUrl}>{results.siteInfo.topPageTitle}</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {results.siteInfo.topPageDescription}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Success;
