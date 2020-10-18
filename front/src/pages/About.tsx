import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const About: React.FC = () => {
  return (
    <Container>
      <Paper>
        <Container maxWidth="md">
          <Typography variant="h1">運営者情報</Typography>
            <Typography variant="body1">
              アプリケーションについてアプリケーションについてアプリケーションについて
              アプリケーションについてアプリケーションについてアプリケーションについて
              アプリケーションについてアプリケーションについてアプリケーションについて
            </Typography>
          <Typography variant="h2">開発者について</Typography>
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
}

export default About;