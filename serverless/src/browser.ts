import * as chromium from 'chrome-aws-lambda';
import { Browser, LaunchOptions } from 'puppeteer';
import { IS_LOCAL } from './config';

export class BrowserSetup {
  static fontUrl = 'https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf';

  private async config(): Promise<LaunchOptions> {
    return {
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: IS_LOCAL ? '/usr/bin/chromium-browser' : await chromium.executablePath,
      headless: IS_LOCAL ? IS_LOCAL : chromium.headless,
      ignoreHTTPSErrors: true,
    }
  }

  private async loadFont(): Promise<string> {
    const font = await chromium.font(BrowserSetup.fontUrl);
    return font;
  }

  public async init(): Promise<Browser> {
    this.loadFont();

    const config = await this.config();
    const browser: Browser = await chromium.puppeteer.launch(config)

    return browser;
  }
}
