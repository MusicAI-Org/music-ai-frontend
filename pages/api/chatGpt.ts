// eslint-disable-next-line require-jsdoc
export async function processMessage(chatMessages: any) {
  console.log("hi from api");

  const systemMessage = {
    role: "system",
    content: "Explain all concepts like I am 10 years old.",
  };
  const apiRequestBody = {
    model: "gpt-3.5-turbo",
    messages: [systemMessage, ...chatMessages],
  };

  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_OPENAI_SECRET_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiRequestBody),
  });
  const responseData = await response.json();
  console.log("chatgpt", responseData);
  return responseData;
}
