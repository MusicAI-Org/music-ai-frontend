import React from "react";
import { Flex } from "@chakra-ui/react";
// import { Configuration, OpenAIApi } from "openai";

const Chat = () => {
  // const openai = new OpenAIApi(
  //   new Configuration({
  //     apiKey: process.env.NEXT_PUBLIC_OPENAI_SECRET_KEY,
  //   })
  // );

  // const gptResponse = openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Say this is a test",
  //   max_tokens: 7,
  //   temperature: 0,
  //   top_p: 1,
  //   n: 1,
  //   stream: false,
  //   logprobs: null,
  //   stop: "\n",
  // });

  // console.log(gptResponse);

  return (
    <Flex>
      <h1>Chat</h1>
    </Flex>
  );
};

export default Chat;
