import {
	ChevronRightIcon,
} from '@heroicons/react/solid'

import {
	EyeIcon,
} from '@heroicons/react/outline'



const obj = {

	title: "Få Exempelkod",
	desc: "Ange Språk & Behov, Få En Förklaring",
	category: "Programmering",
	Icon: EyeIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "gray-800",
	toColor: "gray-600",

	to: "/ai/code/show",
	api: "/ai/code/show",

	output: {
		title: "Hur gör jag detta i kod?",
		desc: "Såhär gör du:",
		Icon: ChevronRightIcon,
		color: "gray",
	},

	prompts: [{
		title:"Kodexempel",
		desc: "Ange Detaljer Om Din Kod Nedan",
		// n: 1,
		prompts: [
			{ 
				title: "Språk", 
				attr: "language",  
				value: "", 
				placeholder: "Python...", 
				label: "Dethär Kommer Enablea MarkUp Nedan",
				type: "text",
				maxLength: 400,
				// options: [{ title: "2nd Grader", value: "2nd Grader", desc: "Explain this like I'm 5 years old", Icon: AnnotationIcon },],
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: `JavaScript`,
			},
			{ 
				title: "Kodredigerare", 
				attr: "content",  
				value: "", 
				placeholder: "function Name(attr){...", 
				label: "Klistra In Din Kod..",
				type: "code",
				maxLength: 2000,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: `function HelloWorld(text){ 
	let text || "Hello World"; 
	console.log(text);
}`,
			},
		],
		example: {
			output: ``,
			outputs: [
				"The code above is a function definition.",
				"It defines a new function called `HelloWorld` that takes a single argument called `text`",
				"The body of the function is a single line of code that prints out the value of `text` if it is defined, or `Hello World` if it is not defined."
			],
			// Icon: TerminalIcon,
			// color: "gray",
		}
	}]
		
}

export default obj

