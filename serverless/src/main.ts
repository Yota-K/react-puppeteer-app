import { BrowserSetup } from './browser';

export const main = async (url: string) => {
  let browser = null;

  try {
    // Pageインスタンスを生成する
    const browserSetup = new BrowserSetup();
    browser = await browserSetup.init();
    const page = await browser.newPage();

    await page.goto(url);
    const result = await page.title();

    return result;
  } catch (er) {
    console.error(er);

    return undefined;
  } finally {
    if (browser !== null) browser.close();
  }
};
