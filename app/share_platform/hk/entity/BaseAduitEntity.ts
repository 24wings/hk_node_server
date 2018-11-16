import { Column } from 'typeorm';

// @Entity()

export abstract class BaseAduitEntity {
    @Column({ name: "created_by", nullable: false, length: 50 })
    createdBy: string;
    @Column({ name: "created_date", nullable: false })
    createdDate: Date = new Date()

    @Column({ name: "last_modified_by", length: 50 })
    modifiedBy: string;

    @Column({ name: "last_modified_date" })

    modifiedDate: Date = new Date();
}
// @Column({ name: "created_by", nullable: false, length: 50, updatable: false })
// createdBy: string;

// @Column({ name: "created_date", nullable: false, updatable: false })
// createdDate: Date = new Date()
