import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { signal } from './abortController.ts'
import assert from 'node:assert/strict'
import { runLLM } from './runLLM.ts'

const cli = readline.createInterface({ input, output })

const userInput = await cli.question('What do you want to ask the agent? ', { signal })
assert.ok(userInput !== '', 'User did not provide a prompt')

cli.close()

const chatResponse = await runLLM(userInput, { fetchOptions: {signal} })

console.info(chatResponse?.choices?.[0].message.content)
