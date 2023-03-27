// eslint-disable-next-line require-jsdoc
export async function stableDiffusionApi(inputValue: any) {
  const response = await fetch(
    `https://music-ai-stable-diffusion-api.onrender.com/generate-image/${inputValue}`
  );
  const data = await response.json();
  return data;
}
