/*
        Lobo sin generator
        100% Gratis
        Javascript / NodeJS
*/

function generator(max)
{
        //hoved array

        let settning = [];

        //lag arrays

        let substantiv = ["den","en","ei","eller","et","jeg","vi","dere","dem","han","hun"];
        let verb = ["og","å"];
        let ting = ["spille","game","jobbe","fiske"];

        for (let i = 0; i < max; i++)
        {
                //velg random fra arrays

                let rand_substantiv = substantiv[Math.floor(Math.random() * substantiv.length)];
                let rand_verb = verb[Math.floor(Math.random() * verb.length)];
                let rand_ting = ting[Math.floor(Math.random() * ting.length)];

                //push til array

                settning.push(`${rand_substantiv} ${rand_verb} ${rand_ting}`);
        }

        //return array

        return settning;

}

//console log funksjonen

console.log( generator(1000) )
