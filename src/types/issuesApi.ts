// request data (query param, path param)
type SortStates = 'created' | 'updated' | 'comments';
export type GetIssuesQueryParam = { sort?: SortStates; per_page?: number; page?: number };
export type GetIssuesPathParam = { owner: string; repo: string };

// response data type
export type IssueSchema = {
  id: number;
  number: number;
  title: string;
  userId: string;
  createdAt: string;
  comments: number;
  avatar_url: string;
  body: string;
};

export type IssueListSchema = IssueSchema[];