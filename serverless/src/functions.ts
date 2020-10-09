import { Page } from 'puppeteer';

export const getResultElementText = async (
  page: Page, 
  selector: string
) => {
  const element = await page.waitForSelector(selector);
  const textContent = await element.getProperty('textContent');
  const text = await textContent.jsonValue() as string;

  if (selector.indexOf('#result') > -1) {
    const indexPageNum = await conversionIndexPageNum(text);

    if (!indexPageNum) return;

    return indexPageNum;
  }

  return text;
};

const conversionIndexPageNum = async (indexPageNum: string) => {
  const foundText = indexPageNum.match(/\d.+(?= 件)/g);

  if (foundText === null) return;

  const indexPageNumResult = await removeComma(foundText);

  return indexPageNumResult;
};

const removeComma = async (numbers: string[]) => {
  const indexPageNum = numbers[0].replace(/,/g, '');
  return parseInt(indexPageNum);
};
