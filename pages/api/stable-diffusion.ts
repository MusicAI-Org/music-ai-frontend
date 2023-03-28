// eslint-disable-next-line require-jsdoc
export async function stableDiffusionApi(inputValue: any) {
  const response = await fetch(
    `http://localhost:8000/generate-image/${inputValue}`
  );
  const data = await response.json();
  return data;
}
