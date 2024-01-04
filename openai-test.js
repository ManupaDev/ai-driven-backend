import OpenAI from "openai";

const openai = new OpenAI({apiKey:"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"});

export async function modelPrediction() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "ft:gpt-3.5-turbo-0613:stemlink:test-tutorial:8bSsUxUA",
  });
  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content
}

