
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

app.post('/code/show', async (req, res, next) => {

	try {
			let { content, } = req.body

			let prompt = `### Du är en senior programmerare som tydligt förklarar hur man kan koda en lösning baserat på frågan som ställs\n\n` +
			`# Text\n` + 
			`Hur printar jag "Hello World"?\n` + 
			`# Förklaring för utförande:\n` + 
			"Du kan printa Hello World i Python med funktionen print('Hello World')\n\n" 

			let inputRaw = `# Text\n` + 
			`${content}\n` +
			`# Tydlig förklaring av vad koden gör\n1.`

			prompt += inputRaw

			const gptResponse = await openai.complete({
				engine: 'davinci-codex',
				prompt,
				maxTokens: 1000,
				temperature: 0.5,
				topP: 1,
				frequencyPenalty: 0,
				presencePenalty: 0,
				bestOf: 1,
				user: req.user._id,
				stream: false,
				stop: ['# Code','# Explanation', "<|endoftext|>" ],
			});

			// let output = `${gptResponse.data.choices[0].text}`

			let outputs = []

			if(gptResponse.data.choices[0].text){
				// Split break lines
				outputs = `1.${gptResponse.data.choices[0].text}`.split('\n')
		
				// remove entries with spaces or empty
				outputs = outputs.filter(function(output) {
					return (!(output === "" || output === " " || output === "\n"))
				})
		
				// remove numbers and spaces
				for (let i = 0; i < outputs.length; i++) {
					outputs[i] = outputs[i].substring(3)
					outputs[i] = outputs[i].replace(/^\s+|\s+$/g, '')
				}
				// remove duplicates
				outputs = outputs.filter((item, pos, self) => self.indexOf(item) === pos)
			}

			req.locals.input = prompt
			req.locals.inputRaw = inputRaw
			req.locals.outputs = outputs

			next();

		} catch(err){
			console.log(err)
		}
	
  })

module.exports = app