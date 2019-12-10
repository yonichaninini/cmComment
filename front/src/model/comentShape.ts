export interface CommentDataShape {
  id: string;
  creation_time: string;
  post_id: number;
  user: {
    user_id: string;
    loginType: string;
    user_profile_img: string;
    nick_name: string;
  };
  comment_id: number;
  comment: string;
  children: ReplyDataShape[];
}
export interface ReplyDataShape {
  id: string;
  creation_time: string;
  post_id: number;
  user: {
    user_id: string;
    loginType: string;
    user_profile_img: string;
    nick_name: string;
  };
  comment_id: number;
  comment: string;
  parents: number;
}
