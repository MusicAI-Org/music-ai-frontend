// eslint-disable-next-line require-jsdoc
export async function createCommunity({ name, description, user, url }: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/features/create`,
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
export async function joinCommunity({ communityId, userId }: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/features/join`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        communityId,
        user: { _id: userId },
      }),
    }
  );
  const data = await response.json();
  return data;
}

// eslint-disable-next-line require-jsdoc
export async function leaveCommunity({ communityId, userId }: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/features/leave`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        communityId,
        user: { _id: userId },
      }),
    }
  );
  const data = await response.json();
  return data;
}

// eslint-disable-next-line require-jsdoc
export async function deleteCommunity({
  communityId,
  userId,
  // eslint-disable-next-line camelcase
  user_to_transfer_ownership_id,
}: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/features/delete`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        communityId,
        user: { _id: userId },
        user_to_transfer_ownership_id,
      }),
    }
  );
  const data = await response.json();
  return data;
}

// eslint-disable-next-line require-jsdoc
export async function addFriends({ user1Id, user2Id }: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/people/addFriend`,
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
