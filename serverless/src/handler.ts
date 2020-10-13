import { Context } from 'aws-lambda';
import { main } from './main';

// MEMO: 型は後で直す
export const handler = async (event: any, context: Context) => {
  let url;

  // API Gatewayから呼び出された場合
  if (event.queryStringParameters && event.queryStringParameters.url) {
    url = event.queryStringParameters.url;
  } else {
    url = event.url;
  }

  console.info(`event: ${url}`);

  if (!url) throw new Error('イベントが設定されていません');

  const result = await main(url);

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' 
    },
    body: JSON.stringify(result),
  }

  return response;
};
