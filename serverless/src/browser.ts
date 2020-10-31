import * as chromium from 'chrome-aws-lambda';
import { Browser, LaunchOptions } from 'puppeteer';
import { IS_LOCAL } from './config';

export class BrowserSetup {
  static fontUrl = 'https://raw.githack.com/minoryorg/Noto-Sans-CJK-JP/master/fonts/NotoSansCJKjp-Regular.ttf';

  private async config(): Promise<LaunchOptions> {
    return {
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: IS_LOCAL ? '/usr/bin/chromium-browser' : await chromium.executablePath,
      headless: IS_LOCAL ? IS_LOCAL : chromium.headless,
      ignoreHTTPSErrors: true,
    };
  }

  private loadFont(): Promise<string> {
    const font = chromium.font(BrowserSetup.fontUrl);
    return font;
  }

  public async init(): Promise<Browser> {
    await this.loadFont();

    const config = await this.config();
    const browser: Browser = await chromium.puppeteer.launch(config);

    return browser;
  }
}
