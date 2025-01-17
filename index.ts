import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import assert from 'node:assert/strict'
import { runLLM } from './runLLM.ts'

const rl = readline.createInterface({ input, output })

const userInput = await rl.question('What do you want to ask the agent? ')
assert.ok(userInput !== '', 'User did not provide a prompt')

rl.close()

const chatResponse = await runLLM(userInput)

console.debug({ chatResponse: JSON.stringify(chatResponse, null, 2) })
console.log(chatResponse?.choices?.[0].message.content)
