import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';

interface Results {
  searchResult: boolean;
  title: string,
  indexPageNum: number;
  siteInfo: {
    topPageUrl: string;
    topPageTite: string;
    topPageDescription: string;
  };
}

const Result = () => {
  const [results, setResults] = React.useState<Results>({
    searchResult: false,
    title: '',
    indexPageNum: 0,
    siteInfo: {
      topPageUrl: '',
      topPageTite: '',
      topPageDescription: '',
    },
  });

  // MEMO: パスの名前とかクエリパラメータとか取得できる
  const location = useLocation();
  const parseParameter = queryString.parse(location.search);
  const url = parseParameter.q;

  useEffect(() => {
    const main = async () => {
      try {
        const res = await axios.get(`${process.env.END_POINT_DEV}${url}`, {
          headers: {
            'X-API-KEY': `${process.env.API_KEY_DEV}`,
          }
        });
        const data = res.data;
        console.log(data);
      } catch(er) {
        console.error(er);
      }
    }

    main();
  }, []);

  return (
    <>
      <p>Result</p>
      <p>{url}</p>
    </>
  );
}

export default Result;
