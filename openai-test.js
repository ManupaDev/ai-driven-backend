import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function modelPrediction() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "ft:gpt-3.5-turbo-0613:stemlink:test-tutorial:8bSsUxUA",
  });
  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content  
}

