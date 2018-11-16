import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class OssFile {
    @PrimaryGeneratedColumn()
    fileId: number;
    @Column()
    fileName: string;
    @Column()
    fileUrl: string;
    @Column()
    createTime: Date = new Date()
}