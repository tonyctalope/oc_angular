import { Comment } from "../../core/models/comment.model";

export class Post {
    id!: number;
    userId!: number;
    title!: string;
    createdDate!: Date;
    content!: string;
    comments!: Comment[];
    imageUrl!: string;
}