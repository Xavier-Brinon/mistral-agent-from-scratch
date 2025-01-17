import assert from 'node:assert/strict'
import { Mistral } from '@mistralai/mistralai'
import { mistralModels } from './models.ts'

const apiKey = process.env.MISTRAL_API_KEY
const client = new Mistral({ apiKey })

export const runLLM = async (userInput: string) => {
  assert.ok(userInput !== '', 'User did not provide a prompt')

  const chatResponse = await client.chat.complete({
    model: mistralModels.MistralNemo,
    messages: [
      {
	role: 'user',
	content: userInput
      }
    ]
  })

  assert.ok(chatResponse.id !== null, 'mistral failed to respond')
  return chatResponse
}
