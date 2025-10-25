import type { ApiUser, User } from '@/patterns/adapterPattern/types/index.types.ts';

export const userAdapter = (apiUser: ApiUser | null): User | null =>
  !apiUser
    ? null
    : {
        id: apiUser.id,
        name: apiUser.name,
        userName: apiUser.username, // rename key
        email: apiUser.email,
        street: apiUser.address.street,
        city: apiUser.address.city,
        zipcode: apiUser.address.zipcode,
        phone: apiUser.phone,
        website: apiUser.website,
      };
