import Knex from 'knex';
import {
  CreateManyBuilder,
  CreateOneBuilder,
  DeleteByIdBuilder,
  DeleteManyBuilder,
  FindByIdBuilder,
  FindManyBuilder,
  FindOneBuilder,
  PaginateBuilder,
  UpdateByIdBuilder,
  UpdateManyBuilder
} from 'sqlmancer';

export type ID = number | string;
export type JSON = boolean | number | string | null | JSONArray | JSONObject;
export interface JSONObject {
  [key: string]: JSON;
}
export type JSONArray = JSON[];

export type UserFields = {
  username: string;
}

export type UserIds = unknown;

export type UserEnums = unknown;

export type UserAssociations = {
  hobbies: [HobbyFindManyBuilder, HobbyPaginateBuilder];
}

export type UserCreateFields = {
  username: string;
};

export type UserUpdateFields = {
  username?: string;
};

export type UserFindOneBuilder<TSelected extends Pick<UserFields, any> = UserFields> = FindOneBuilder<
  'postgres',
  UserFields,
  UserIds,
  UserEnums,
  UserAssociations,
  TSelected
>

export type UserFindManyBuilder<TSelected extends Pick<UserFields, any> = UserFields> = FindManyBuilder<
  'postgres',
  UserFields,
  UserIds,
  UserEnums,
  UserAssociations,
  TSelected
>

export type UserFindByIdBuilder<TSelected extends Pick<UserFields, any> = UserFields> = FindByIdBuilder<
  UserFields,
  UserIds,
  UserEnums,
  UserAssociations,
  TSelected
>

export type UserPaginateBuilder = PaginateBuilder<'postgres', UserFields, UserIds, UserEnums, UserAssociations>

export type UserDeleteManyBuilder = DeleteManyBuilder<
  'postgres',
  UserFields,
  UserIds,
  UserEnums,
  UserAssociations
>

export type UserDeleteByIdBuilder = DeleteByIdBuilder

export type UserCreateManyBuilder = CreateManyBuilder<UserCreateFields>

export type UserCreateOneBuilder = CreateOneBuilder<UserCreateFields>

export type UserUpdateManyBuilder = UpdateManyBuilder<
  'postgres',
  UserUpdateFields,
  UserFields,
  UserIds,
  UserEnums,
  UserAssociations
>

export type UserUpdateByIdBuilder = UpdateByIdBuilder<UserUpdateFields>

export type HobbyFields = {
  title: string;
}

export type HobbyIds = unknown;

export type HobbyEnums = unknown;

export type HobbyAssociations = {
  user: [UserFindOneBuilder, UserPaginateBuilder];
}

export type HobbyCreateFields = {
  title: string;
};

export type HobbyUpdateFields = {
  title?: string;
};

export type HobbyFindOneBuilder<TSelected extends Pick<HobbyFields, any> = HobbyFields> = FindOneBuilder<
  'postgres',
  HobbyFields,
  HobbyIds,
  HobbyEnums,
  HobbyAssociations,
  TSelected
>

export type HobbyFindManyBuilder<TSelected extends Pick<HobbyFields, any> = HobbyFields> = FindManyBuilder<
  'postgres',
  HobbyFields,
  HobbyIds,
  HobbyEnums,
  HobbyAssociations,
  TSelected
>

export type HobbyFindByIdBuilder<TSelected extends Pick<HobbyFields, any> = HobbyFields> = FindByIdBuilder<
  HobbyFields,
  HobbyIds,
  HobbyEnums,
  HobbyAssociations,
  TSelected
>

export type HobbyPaginateBuilder = PaginateBuilder<'postgres', HobbyFields, HobbyIds, HobbyEnums, HobbyAssociations>

export type HobbyDeleteManyBuilder = DeleteManyBuilder<
  'postgres',
  HobbyFields,
  HobbyIds,
  HobbyEnums,
  HobbyAssociations
>

export type HobbyDeleteByIdBuilder = DeleteByIdBuilder

export type HobbyCreateManyBuilder = CreateManyBuilder<HobbyCreateFields>

export type HobbyCreateOneBuilder = CreateOneBuilder<HobbyCreateFields>

export type HobbyUpdateManyBuilder = UpdateManyBuilder<
  'postgres',
  HobbyUpdateFields,
  HobbyFields,
  HobbyIds,
  HobbyEnums,
  HobbyAssociations
>

export type HobbyUpdateByIdBuilder = UpdateByIdBuilder<HobbyUpdateFields>

export type SqlmancerClient = Knex & {
  models: {
    User: {
      findById: (id: ID) => UserFindByIdBuilder;
      findMany: () => UserFindManyBuilder;
      findOne: () => UserFindOneBuilder;
      paginate: () => UserPaginateBuilder;
    };
    Hobby: {
      findById: (id: ID) => HobbyFindByIdBuilder;
      findMany: () => HobbyFindManyBuilder;
      findOne: () => HobbyFindOneBuilder;
      paginate: () => HobbyPaginateBuilder;
    };
  };
};
