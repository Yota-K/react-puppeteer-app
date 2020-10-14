import React from 'react';
import Container from '@material-ui/core/Container';
import SearchForm from '../components/top/SearchForm';

const Home  = () => {
  return (
    <Container maxWidth="sm">
      <SearchForm />
    </Container>
  );
}

export default Home;
