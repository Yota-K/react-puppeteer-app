export interface Results {
  searchResult: boolean | null;
  title: string;
  indexPageNum: number;
  screenshot: string;
  siteInfo: {
    topPageUrl: string;
    topPageTitle: string;
    topPageDescription: string;
  };
}
