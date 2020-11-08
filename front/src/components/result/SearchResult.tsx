import React from 'react';
import Loading from './Loading';
import Success from './Success';
import { Results } from '../../types'

const SearchResult: React.FC<Results> = ( results ) => {
  return (
    <>
      {results.searchResult === true ? <Success results={results} /> : <Loading />}
    </>
  );
};

export default SearchResult;
