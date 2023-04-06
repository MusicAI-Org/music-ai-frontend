// eslint-disable-next-line require-jsdoc
export async function createModel(data: any) {
  const response = await fetch(`http://localhost:8000/api/auth/createmodel`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData;
}
