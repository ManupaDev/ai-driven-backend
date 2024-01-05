// const registerUser = async (request, response) => {
//     const user = new User(request.body);

import { modelPrediction } from "./openai-test.js";

  
//     try {
//       await user.save();
//       response.send(user);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   };
  
export const predict = async (request, response)=>{
    const res = await modelPrediction()
    response.send(res)
}