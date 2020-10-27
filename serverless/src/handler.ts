import { Context } from 'aws-lambda';
import { main } from './main';
import { LambdaEvent } from './types';

export const handler = async (event: LambdaEvent, context: Context) => {
  let url;

  // API Gatewayから呼び出された場合とLambda経由で呼ばれた場合の分岐
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
      'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    },
    body: JSON.stringify(result),
  }

  return response;
};
