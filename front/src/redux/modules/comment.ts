/* Ducks 패턴 으로 작성할거임 */
import { CommentDataShape } from "../../model/comentShape";
import { UserDataShape } from "../../model/userDataShape";
/*액션 type 선언*/
export const ADD_COMMENT = "ADD_COMMENT" as const;
export const ADD_REPLY = "ADD_REPLY" as const;
export const UPDATE_COMMENT = "UPDATE_COMMENT" as const;
export const DELETE_COMMENT = "DELETE_COMMENT" as const;

//댓글 등록 대댓글 등록 수정 interface
interface add_comment {
  post_id: number;
  comment: string;
  user: UserDataShape;
  creation_time: string;
  parents_id: number;
}
interface add_reply {
  post_id: number;
  comment: string;
  user: UserDataShape;
  creation_time: string;
  parents_id: number;
}
interface update_comment {
  comment_id: number;
  comment: string;
}
//댓글 작성
export const add_comment = ({
  post_id,
  comment,
  user,
  creation_time
}: add_comment) => ({
  type: ADD_COMMENT,
  payload: { post_id, comment, user, creation_time }
});
//대댓글 작성
export const add_reply = ({
  post_id,
  parents_id,
  comment,
  user,
  creation_time
}: add_reply) => ({
  type: ADD_REPLY,
  payload: { post_id, parents_id, comment, user, creation_time }
});
//댓글 수정
export const update_comment = ({ comment_id, comment }: update_comment) => ({
  type: UPDATE_COMMENT,
  payload: {
    comment,
    comment_id
  }
});
//댓글 삭제
export const delete_comment = (comment_id: number) => ({
  type: DELETE_COMMENT,
  payload: comment_id
});

//action type지정
type Action =
  | ReturnType<typeof add_comment>
  | ReturnType<typeof add_reply>
  | ReturnType<typeof update_comment>
  | ReturnType<typeof delete_comment>;

//초깃값지정
type initialState = CommentDataShape[];

const initialState: initialState = [
  {
    comment_id: 1,
    creation_time: "2019-07-11 오전 11시 30분",
    post_id: 1,
    user: {
      user_id: "cksal5911",
      loginType: "kakao",
      user_profile_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s",
      nick_name: "윤이찬미"
    },
    comment: "댓글테스트 기능",
    children: [
      {
        comment_id: 3,
        creation_time: "2019-10-11 오전 08시 30분",
        post_id: 1,
        user: {
          user_id: "wldud5911",
          loginType: "kakao",
          user_profile_img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s",
          nick_name: "민지"
        },
        comment: "찬미한테 대댓글테스트 기능",
        parents: 1
      },
      {
        comment_id: 4,
        creation_time: "2019-10-11 오전 08시 30분",
        post_id: 1,
        user: {
          user_id: "jojo5911",
          loginType: "kakao",
          user_profile_img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s",
          nick_name: "주영"
        },
        comment: "찬미한테 대댓글테스트 기능",
        parents: 1
      }
    ]
  },
  {
    comment_id: 2,
    creation_time: "2019-10-11 오전 03시 30분",
    post_id: 1,
    user: {
      user_id: "jojo5911",
      loginType: "kakao",
      user_profile_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s",
      nick_name: "주영"
    },
    comment: "댓글테스트 기능",
    children: [
      {
        comment_id: 8,
        creation_time: "2019-10-11 오전 08시 30분",
        post_id: 1,
        user: {
          user_id: "jiwoo5911",
          loginType: "kakao",
          user_profile_img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s",
          nick_name: "지우"
        },
        comment: "희수한테 대댓글테스트 기능",
        parents: 1
      }
    ]
  }
];

function comment(state: initialState = initialState, action: Action) {
  switch (action.type) {
    case ADD_COMMENT:
      const nextCommentId = Math.max(...state.map(c => c.comment_id)) + 1;
      return state.push({
        comment_id: nextCommentId,
        creation_time: action.payload.creation_time,
        post_id: action.payload.post_id,
        user: action.payload.user,
        children: [],
        comment: action.payload.comment
      });
    case ADD_REPLY:
      const nextReplyId = Math.max(...state.map(c => c.comment_id)) + 1;
      const replyLessState = state.filter(
        r => r.comment_id !== action.payload.parents_id
      );
      const replyObject = state.find(
        r => r.comment_id === action.payload.parents_id
      );
      if (replyObject) {
        replyObject.children.push({
          comment_id: nextReplyId,
          creation_time: action.payload.creation_time,
          post_id: action.payload.post_id,
          user: action.payload.user,
          comment: action.payload.comment,
          parents: action.payload.parents_id
        });
      }
      return [...replyLessState, replyObject];

    case UPDATE_COMMENT:
      return {
        ...state
      };

    case DELETE_COMMENT:
      return state.filter(
        commentData => commentData.comment_id !== action.payload
      );
    default:
      return state;
  }
}
export default comment;
