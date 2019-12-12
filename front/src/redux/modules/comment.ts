/* Ducks 패턴 으로 작성할거임 */
import { CommentDataShape } from "../../model/comentShape";

/*액션 type 선언*/
export const ADD_COMMENT = "ADD_COMMENT" as const;
export const ADD_REPLY = "ADD_REPLY" as const;
export const UPDATE_COMMENT = "UPDATE_COMMENT" as const;
export const DELETE_COMMENT = "DELETE_COMMENT" as const;

/*FSA 규칙을 따르는 액션 생성 함수 정의*/

//댓글 작성
export const add_comment = (comment: string) => ({
  type: ADD_COMMENT,
  payload: comment
});
//대댓글 작성
export const add_reply = ({
  parents_id,
  comment
}: {
  parents_id: number;
  comment: string;
}) => ({
  type: ADD_REPLY,
  payload: { parents_id, comment }
});
//댓글 수정
export const update_comment = ({
  comment_id,
  comment
}: {
  comment_id: number;
  comment: string;
}) => ({
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

type Action =
  | ReturnType<typeof add_comment>
  | ReturnType<typeof update_comment>
  | ReturnType<typeof delete_comment>;

interface initialState {
  commentData: CommentDataShape[];
}
const initialState: initialState = {
  commentData: [
    {
      id: "www.test.com",
      creation_time: "2019-07-11 오전 11시 30분",
      post_id: 1,
      user: {
        user_id: "cksal5911",
        loginType: "kakao",
        user_profile_img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s",
        nick_name: "윤이찬미"
      },

      comment_id: 1,
      comment: "댓글테스트 기능",
      children: [
        {
          id: "www.test.com",
          creation_time: "2019-10-11 오전 08시 30분",
          post_id: 1,
          user: {
            user_id: "wldud5911",
            loginType: "kakao",
            user_profile_img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s",
            nick_name: "민지"
          },
          comment_id: 3,
          comment: "찬미한테 대댓글테스트 기능",
          parents: 1
        },
        {
          id: "www.test.com",
          creation_time: "2019-10-11 오전 08시 30분",
          post_id: 1,
          user: {
            user_id: "jojo5911",
            loginType: "kakao",
            user_profile_img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s",
            nick_name: "주영"
          },
          comment_id: 4,
          comment: "찬미한테 대댓글테스트 기능",
          parents: 1
        }
      ]
    },
    {
      id: "www.test.com",
      creation_time: "2019-10-11 오전 03시 30분",
      post_id: 1,
      user: {
        user_id: "jojo5911",
        loginType: "kakao",
        user_profile_img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s",
        nick_name: "주영"
      },
      comment_id: 2,
      comment: "댓글테스트 기능",
      children: [
        {
          id: "www.test.com",
          creation_time: "2019-10-11 오전 08시 30분",
          post_id: 1,
          user: {
            user_id: "jiwoo5911",
            loginType: "kakao",
            user_profile_img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s",
            nick_name: "지우"
          },
          comment_id: 8,
          comment: "희수한테 대댓글테스트 기능",
          parents: 1
        }
      ]
    }
  ]
};

function comment(state: initialState = initialState, action: Action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state
      };
  }
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state
      };
  }
  switch (action.type) {
    case DELETE_COMMENT:
      return {
        ...state
      };
  }
}
export default comment;
