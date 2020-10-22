import React from 'react';
import { useParams } from 'react-router-dom';

interface ParamType {
  url: string;
}

const Result = () => {
  // MEMO: URLに含まれる文字列の中で、動的に変化する部分を取得できる
  const { url } = useParams<ParamType>();

  return (
    <>
      <p>Result</p>
      <p>{url}</p>
    </>
  );
}

export default Result;
