import { Mistral } from '@mistralai/mistralai'
import { mistralModels } from './models.ts'

const apiKey = process.env.MISTRAL_API_KEY
const client = new Mistral({ apiKey })

const chatResponse = await client.chat.complete({
  model: mistralModels.MistralNemo,
  messages: [
    {
      role: 'user',
      content: 'What is the best french cheese?'
    }
  ]
})

console.debug({ chatResponse: JSON.stringify(chatResponse, null, 2) })
console.log(chatResponse?.choices?.[0].message.content)

