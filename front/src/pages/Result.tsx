import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';

interface Results {
  searchResult: boolean;
  title: string,
  indexPageNum: number;
  screenshot: string;
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
    screenshot: '',
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
        const data = await res.data;
        setResults({...results, ...data});
      } catch(er) {
        console.error(er);
      }
    }

    main();
  }, []);

  const dataImage = `data:image/png;base64,${results.screenshot}`;

  return (
    <>
      <p>Result</p>
      <p>{url}</p>
      <p>{results.indexPageNum}</p>
      <img src={dataImage} alt="" />
    </>
  );
}

export default Result;
