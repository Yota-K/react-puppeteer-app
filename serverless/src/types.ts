export interface LambdaEvent {
  url: string;
}

export interface ResultObj {
  searchUrlTitle: string,
  indexPageNum: number;
  siteInfo: {
    topPageUrl: string;
    topPageTite: string;
    topPageDescription: string;
  };
}
