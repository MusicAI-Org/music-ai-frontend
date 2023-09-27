// eslint-disable-next-line require-jsdoc
export async function processMessage(chatMessages: string) {
  console.log("cchhh", chatMessages);
  const apiRequestBody = {
    query: chatMessages,
  };
  const response = await fetch(
    `https://music-ai-search-engine.onrender.com/chatbot_query`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    }
  );
  console.log(response);
  const responseData = await response.json();
  console.log("chatgpt", responseData);
  return responseData;
}
