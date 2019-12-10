/// <reference types="react" />
interface ComentProps {
  comment: string;
  creation_time: string;
  user_id: string;
}
declare const Comment: ({
  comment,
  user_id,
  creation_time
}: ComentProps) => JSX.Element;
export default Comment;
