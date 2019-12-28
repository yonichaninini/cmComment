import { CommentDataShape } from '../typeShapes/comentShape';
export declare class CommentManage {
    comment: CommentDataShape[];
    page_url: string;
    constructor(page_url: string);
    getCommentData(): Promise<CommentDataShape[]>;
    createComment(): CommentDataShape[];
    createReply(): CommentDataShape[];
    updateComment(): CommentDataShape[];
    deleateComment(): CommentDataShape[];
}
