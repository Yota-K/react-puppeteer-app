export interface LambdaEvent {
  url?: string;
  queryStringParameters?: {
    url: string;
  },
}

export interface ResultObj {
  searchResult: boolean;
  title: string,
  indexPageNum: number;
  screenshot: string;
  siteInfo: {
    topPageUrl: string;
    topPageTite: string;
    topPageDescription: string;
  };
}
