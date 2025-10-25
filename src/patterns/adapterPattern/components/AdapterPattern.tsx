import { useEffect, useState } from 'react';

import { getRandomUser } from '@/patterns/adapterPattern/api';
import { userAdapter } from '@/patterns/adapterPattern/utils';
import type { ApiUser } from '@/patterns/adapterPattern/types/index.types.ts';
import { UserCard } from '@/patterns/adapterPattern/components/UserCard.tsx';

export const AdapterPattern = () => {
  const [userData, setUserData] = useState<ApiUser | null>(null);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 10) + 1; // random 1–10

    getRandomUser(randomId, setUserData);
  }, []);

  return (
    <div>
      <h2>
        <b>Adapter Pattern</b>
        <p>
          Adapter — это шаблон проектирования, который позволяет “адаптировать” несовместимые
          интерфейсы, чтобы они могли работать вместе.
        </p>
      </h2>
      <UserCard {...userAdapter(userData)} />
    </div>
  );
};
