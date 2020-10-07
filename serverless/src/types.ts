export interface LambdaEvent {
  url: string;
}

export interface ResultObj {
  searchResult: boolean;
  title: string,
  indexPageNum: number;
  siteInfo: {
    topPageUrl: string;
    topPageTite: string;
    topPageDescription: string;
  };
}
