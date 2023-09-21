const prompt = require("prompt-sync")()
function 
      iniciar(){ 
        console.log("\nCalculadora\n")
		let num1
		let num2
		let result
		let sinal 

		console.log("Digite o sinal da operação:")
		sinal = prompt()

		console.log("Digite o num1:")
	     num1 = parseFloat(prompt())
	     console.log("Digite o num2:")
	     num2 = parseFloat(prompt())

         switch(sinal){
         case '+':
		 result = num1 + num2	    
	     console.log("O resultado é:", result, "\n")
	     break

	     case '-':
	     console.log("o resultado é:", num1 - num2)
	     break

	     case '*':
	     console.log("o resultado é:", num1 * num2)
	     break

	     case'/':
	     console.log("o resultado é:", num1 / num2)
	     break

	    
		}

	}

	iniciar()