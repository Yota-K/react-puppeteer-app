export interface LambdaEvent {
  url: string;
}

export interface ResultObj {
  indexPageNum: number;
  siteInfo: {
    topPageUrl: string;
    topPageTite: string;
    topPageDescription: string;
  };
}
