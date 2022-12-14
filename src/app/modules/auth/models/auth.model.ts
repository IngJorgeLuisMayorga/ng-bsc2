export interface IAuth{
    token: string;
    email: string;
    state: string;
    role: IRole;
    update_at: Date;
}

export type IRole = 'RoleAnon' | 'RoleUser' | 'RoleAdmin' ;
export const DefaultRole:IRole  = 'RoleAnon';
