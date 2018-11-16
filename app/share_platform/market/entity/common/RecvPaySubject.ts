import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class RecvPaySubject {
    @PrimaryGeneratedColumn()
    subjectId: number;
    @Column({ nullable: false, length: 40 })
    subjectName: string;
    @Column()
    parentId: number;
    @Column({ nullable: false, length: 11 })
    subjectCode: string;
    @Column({ nullable: true })
    subjectLinkId: number;
    @Column()
    mktId: number = 0;


}
