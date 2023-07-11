// eslint-disable-next-line require-jsdoc, camelcase
export async function likeMusic({ _id, music_id }: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/music/like`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        music_id,
      }),
    }
  );
  const data = await response.json();
  return data;
}

// eslint-disable-next-line require-jsdoc, camelcase
export async function dislikeMusic({ _id, music_id }: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/music/dislike`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        music_id,
      }),
    }
  );
  const data = await response.json();
  return data;
}

// eslint-disable-next-line require-jsdoc, camelcase
export async function viewMusic({ music_id }: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/music/views`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        music_id,
      }),
    }
  );
  const data = await response.json();
  return data;
}

// eslint-disable-next-line require-jsdoc, camelcase
export async function deleteMusic({ music_id }: any) {
  const response = await fetch(
    // eslint-disable-next-line camelcase
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/music/delete/${music_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}
