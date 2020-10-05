import { BrowserSetup } from './browser';
import { getResultElementText } from './functions';
import { googleSearch } from './google-search';
import { ResultObj } from './types';

export const main = async (url: string) => {
  let browser = null;

  const baseResult: ResultObj = {
    indexPageNum: 0,
    siteInfo: {
      topPageUrl: '',
      topPageTite: '',
      topPageDescription: '',
    },
  };

  try {
    // MEMO: Pageインスタンスを生成する
    const browserSetup = new BrowserSetup();
    browser = await browserSetup.init();
    const page = await browser.newPage();

    const resultElement = await googleSearch(page, url);

    // MEMO: waitForSelector()は要素が見つからない場合はnullを返す
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
    const topPageDescriptionClassName = '#search .g:first-child';
    const topPageDescription = await getResultElementText(page, topPageDescriptionClassName);

    return {
      ...baseResult,
      indexPageNum: indexPageNum,
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
