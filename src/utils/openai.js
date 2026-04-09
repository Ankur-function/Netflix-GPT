import OpenAI from 'openai'; 
import { OPENAI_KEY } from './constants';

// instead i am usign groq apis below because gpt apis are paid.
const gpt_client = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true
});

export default gpt_client;