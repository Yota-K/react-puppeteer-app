import React from 'react';
import Success from './Success';
import Failure from './Failure';
import { Results } from '../../types';

const SearchResult: React.FC<Results> = (results) => {
  return (
    <>
      {results.searchResult === true && <Success results={results} />}
      {results.searchResult === false && <Failure />}
    </>
  );
};

export default SearchResult;
