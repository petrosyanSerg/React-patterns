import type { ApiUser } from "@/patterns/adapterPattern/types/index.types";

export const getRandomUser = (
  randomId: number,
  setUserData: (user: ApiUser) => void
): void => {
  fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
    .then((res) => res.json())
    .then((data: ApiUser) => setUserData(data))
    .catch((err) => console.error("Fetch error:", err));
};
