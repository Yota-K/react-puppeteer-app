import { Page } from 'puppeteer';

export const getResultElementText = async (
  page: Page, 
  className: string
) => {
  const element = await page.waitForSelector(className);
  const textContent = await element.getProperty('textContent');
  const text = await textContent.jsonValue() as string;

  if (className.indexOf('#result') > -1) {
    const indexPageNum = await conversionIndexPageNum(text);

    if (!indexPageNum) return;

    return parseInt(indexPageNum, 10);
  }

  return text;
};

const conversionIndexPageNum = async (indexPageNum: string) => {
  const foundText = indexPageNum.match(/\d.+(?= 件)/g);

  if (foundText === null) return;

  return foundText[0];
};
