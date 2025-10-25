import type { FC } from 'react';
import type { User } from '@/patterns/adapterPattern/types/index.types.ts';

export const UserCard: FC<User> = ({
  id,
  name,
  userName,
  email,
  street,
  city,
  zipcode,
  phone,
  website,
}) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{userName}</p>
      <p>{email}</p>
      <p>{street}</p>
      <p>{city}</p>
      <p>{zipcode}</p>
      <p>{phone}</p>
      <a href={website} target="_blank">
        {website}
      </a>
    </div>
  );
};
