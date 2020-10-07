import { Context } from 'aws-lambda';
import { main } from './main';
import { LambdaEvent } from './types';

export const handler = async (event: LambdaEvent, context: Context) => {
  const {url}= event;

  if (!url) throw new Error('イベントが設定されていません');

  const result = await main(url);

  return context.succeed(result);
};
