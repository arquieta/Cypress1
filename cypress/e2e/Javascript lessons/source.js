  //Arrays, arreglos, matrices

            var nombres = ["Diego Arquieta", "Belinda Rodriguez", "Mauro Mora", "Foo berpiernas"];

            var lenguajes = new Array("PHP", "JS", "go", "java");

            //imprime todo el array
            console.log(nombres);
            console.log('-------------');
            //imprime la posición 3 del array
            console.log(lenguajes[2]);
            console.log('-------------');

            //lenght proporciona la longitud del array
            console.log(nombres.length);

            // //prompt() is a method of the Global window object found in browsers. 
            // It's not part of the JavaScript language. 
            // If you don't run your code in a browser or an environment that supports 
            // the Browser Object Model, window won't be there and if window isn't there, 
            // neither will prompt() be. Run your code in a browser.
            //npm install prompt-sync 
            //const prompt = require("prompt-sync")(); 
            var elemento = parseInt(prompt("Cual elemento del array quieres?", 0));
            alert(nombres[elemento]);