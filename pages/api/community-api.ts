// eslint-disable-next-line require-jsdoc
export async function createCommunity({ name, description, user, url }: any) {
  const response = await fetch(
    `https://music-ai-backend.onrender.com/api/community/features/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        user,
        url,
      }),
    }
  );
  const data = await response.json();
  return data;
}

// eslint-disable-next-line require-jsdoc
export async function addFriends({ user1Id, user2Id }: any) {
  const response = await fetch(
    `https://music-ai-backend.onrender.com/api/community/people/addFriend`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user1Id,
        user2Id,
      }),
    }
  );
  const data = await response.json();
  return data;
}
