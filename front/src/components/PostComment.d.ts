/// <reference types="react" />
interface Data {
  id: string;
  creation_time: string;
  post_id: number;
  user_id: string;
  comment_id: number;
  comment: string;
  depth: number;
  parents: string;
}
interface PostCommentProps {
  commentData: Data[];
}
declare const PostComment: ({ commentData }: PostCommentProps) => JSX.Element;
export default PostComment;
