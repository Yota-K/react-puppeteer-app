import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { Results } from '../types'
import Loading from '../components/result/Loading';
import Success from '../components/result/Success';

const Result = () => {
  const [results, setResults] = React.useState<Results>({
    searchResult: null,
    title: '',
    indexPageNum: 0,
    screenshot: '',
    siteInfo: {
      topPageUrl: '',
      topPageTitle: '',
      topPageDescription: '',
    },
  });

  // MEMO: パスの名前とかクエリパラメータとか取得できる
  const location = useLocation();
  const parseParameter = queryString.parse(location.search);
  const url = parseParameter.q;

  useEffect(() => {
    // Memo: 一定時間(1分以上たったら)検索に失敗したことがわかるような文言を表示できるようにする
    const main = async () => {
      try {
        const res = await axios.get(`${process.env.END_POINT_DEV}${url}`);
        const data = await res.data;
        setResults({ ...results, ...data });
      } catch (er) {
        console.error(er);
        setResults({ ...results, searchResult: false });
      }
    };

    main();
  }, []);

  return (
    <>
      {results.searchResult === null && <Loading />}
      {results.searchResult === true && <Success results={results} />}
    </>
  );
};

export default Result;
