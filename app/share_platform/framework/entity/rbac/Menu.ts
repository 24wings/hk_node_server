import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, } from 'typeorm';
// import { Role } from './Role';
// import { MenuTypeEnum } from '../../enum/MenuType.enum';
import { Role } from './Role';
import { MetaEntity } from '../../util/metadata/MetaEntity';
import { Prop } from '../../util/metadata/Field';

@Entity()
@MetaEntity()

export class Menu {
    @PrimaryGeneratedColumn()
    @Prop()
    menuId: number;
    @Column({ nullable: false })
    text: string;
    @Column({ nullable: true, length: 10 })
    i18n: string;
    @Column({ nullable: true })
    parentId: number;
    @Column({ nullable: true, length: 64 })
    link: string;
    @Column({ nullable: true, length: 64 })
    externalink: string;
    @Column({ nullable: true, length: 10 })
    target: string;
    @Column({ nullable: true, length: 40 })
    icon: string;
    @Column({ nullable: true })
    badge: number;
    @Column({ nullable: true })
    badge_dot: boolean;
    @Column({ nullable: true, length: 20 })
    badge_status: string;
    @Column({ nullable: true })
    hide: boolean;
    @Column({ nullable: true })
    hideInBreadcrumb: string;
    acl: string;
    @Column({ nullable: true })
    shortcut: number;
    @Column({ nullable: true })
    shortcut_root: number;
    @Column({ nullable: true })
    reuse: number;
    // @Column({ nullable: false })
    // menuType: number;
    @Column({ nullable: true })
    creatorId: number;
    @Column({ nullable: true, length: 2000 })
    config: string;
    @Column({ nullable: true })
    menuCode: number;
    // @ManyToMany(_ => Role, role => role.menus)
    // roles: Role[];

}
