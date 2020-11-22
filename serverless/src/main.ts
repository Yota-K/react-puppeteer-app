import { BrowserSetup } from './browser';
import { getResultElementText } from './functions';
import { googleSearch } from './google-search';
import { ResultObj } from './types';

export const main = async (url: string) => {
  let browser = null;

  const baseResult: ResultObj = {
    searchResult: false,
    title: '',
    indexPageNum: 0,
    screenshot: '',
    siteInfo: {
      topPageUrl: '',
      topPageTite: '',
      topPageDescription: '',
    },
  };

  try {
    // Pageインスタンスを生成する
    const browserSetup = new BrowserSetup();
    browser = await browserSetup.init();
    let page = await browser.newPage();

    // 入力されたURLのタイトルを取得
    const eventUrl = await page.goto(url, {
      waitUntil: 'networkidle2',
    })
    .catch((er) => {
      console.error(er);
    });

    // 存在しないURLの場合はその後の処理を行わない
    if (!eventUrl) return baseResult;

    const title = await getResultElementText(page, 'title');
    const screenshot = await page.screenshot({
      encoding: 'base64'
    });

    await page.close();

    // site:をつけて検索を行う
    page = await browser.newPage();
    const resultElement = await googleSearch(page, url);

    // Google検索に失敗した場合も処理を中断
    if (!resultElement) return baseResult;

    // インデックスされたページの数
    const indexPageNumClassName = '#result-stats';
    const indexPageNum = await getResultElementText(page, indexPageNumClassName);

    // 一番上に表示されているページのURL
    const topPageUrlClassName = '#search .g:first-child a';
    const topPageUrl = await page.$eval(topPageUrlClassName, (el) => el.href);

    // 一番上に表示されているページのタイトル
    const topPageTiteClassName = '#search .g:first-child h3';
    const topPageTite = await getResultElementText(page, topPageTiteClassName);

    // 一番上に表示されているページのデスクリプション
    const topPageDescriptionClassName = '#search .g:first-child .aCOpRe';
    const topPageDescription = await getResultElementText(page, topPageDescriptionClassName);

    return {
      ...baseResult,
      searchResult: true,
      title: title,
      indexPageNum: indexPageNum,
      screenshot: screenshot,
      siteInfo: {
        topPageUrl: topPageUrl,
        topPageTitle: topPageTite,
        topPageDescription: topPageDescription,
      },
    };
  } catch (er) {
    console.error(er);

    throw new Error(er);
  } finally {
    if (browser !== null) browser.close();
  }
};
