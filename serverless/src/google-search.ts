import { Page } from 'puppeteer';

export const googleSearch = async (page: Page, url: string) => {
  page.goto('https://www.google.co.jp', {
    waitUntil: 'domcontentloaded',
  });
  console.info('browser start');

  // MEMO: 検索窓のinput要素のクラス
  const inputClassName = '.gLFyf';

  await page.waitForSelector(inputClassName);
  console.info('Chromeのinput要素を確認');

  await page.type(inputClassName, `site:${url}`, {
    delay: 200
  });
  await page.keyboard.press('Enter');

  const getResultElement = await page
    .waitForSelector('#result-stats', {
      timeout: 2000,
    })
    .catch((er) => {
      // MEMO: 最大20秒待っても要素が確認できない場合は例外として処理
      console.info(er);
      console.info(`インデックスされたページが0件です。`);

      return undefined;
    });

  return getResultElement;
};
