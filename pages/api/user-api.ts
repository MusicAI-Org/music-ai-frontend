// eslint-disable-next-line require-jsdoc
export async function createModel(data: any) {
  const response = await fetch(
    `https://music-ai-backend.onrender.com/api/auth/createmodel`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const responseData = await response.json();
  return responseData;
}

// eslint-disable-next-line require-jsdoc
export async function editModel(data: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/editmodel`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const responseData = await response.json();
  return responseData;
}

// eslint-disable-next-line require-jsdoc
export async function deleteModel(data: any) {
  console.log(data);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/deletemodel`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: data._id,
        email: data.email,
      }),
    }
  );
  const responseData = await response.json();
  return responseData;
}

// eslint-disable-next-line require-jsdoc
export async function disableModel(data: any) {
  console.log(data);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/disablemodel`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: data._id,
        email: data.email,
      }),
    }
  );
  const responseData = await response.json();
  return responseData;
}

// eslint-disable-next-line require-jsdoc
export async function followUser(data: any) {
  console.log(data);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/followuser`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: data._id,
        follow_id: data.follow_id,
      }),
    }
  );
  const responseData = await response.json();
  return responseData;
}

// eslint-disable-next-line require-jsdoc
export async function unfollowUser(data: any) {
  console.log(data);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/unfollowuser`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: data._id,
        unfollow_id: data.unfollow_id,
      }),
    }
  );
  const responseData = await response.json();
  return responseData;
}
