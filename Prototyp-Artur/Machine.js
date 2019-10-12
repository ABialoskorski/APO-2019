var readline = require("readline");

var prompts = readline.createInterface(process.stdin, process.stdout);

const Products = [
	{
		id: 0,
		nazwa: "Kitkat",
		cena: 2,
		ilosc: 20,
	},
	{
		id: 1,
		nazwa: "Sok pomarańczowy",
		cena: 1,
		ilosc: 300,
	},
	{
		id: 2,
		nazwa: "Kawa",
		cena: 2,
		ilosc: 2,
	},
	{
		id: 3,
		nazwa: "Ciepły kubek knorr",
		cena: 4,
		ilosc: 10,
	},
	{
		id: 4,
		nazwa: "10 Czekoladek",
		cena: 6,
		ilosc: 600,
	},
	{
		id: 5,
		nazwa: "Coca-Cola",
		cena: 3,
		ilosc: 16,
	},
];

let Choose = () => {
	console.log("Lista dostępnych produktów:");
	console.log(Products);
	prompts.question("Wybierz produkt po numerze id: ", number => {
		if (number == 0) {
			console.log(
				`Wybrano ${Products[0].nazwa} cena wynosi ${Products[0].cena} zł.`
			);
		}
		if (number == 1) {
			console.log(
				`Wybrano ${Products[1].nazwa} cena wynosi ${Products[1].cena} zł.`
			);
		}
		if (number == 2) {
			console.log(
				`Wybrano ${Products[2].nazwa} cena wynosi ${Products[2].cena} zł.`
			);
		}
		if (number == 3) {
			console.log(
				`Wybrano ${Products[3].nazwa} cena wynosi ${Products[3].cena} zł.`
			);
			console.log(
				"Wybrano ciepły posiłek, automat przywołuje obsługę serwisową"
			);
		}
		if (number == 4) {
			console.log(
				`Wybrano ${Products[4].nazwa} cena wynosi ${Products[4].cena} zł.`
			);
		}
		if (number == 5) {
			console.log(
				`Wybrano ${Products[5].nazwa} cena wynosi ${Products[5].cena} zł.`
			);
		}
		let Pay = () => {
			prompts.question(
				`Wybierz sposób płatności:
            1) karta  
            2) gotówka
            `,
				payment => {
					if (payment == 1) {
						console.log(`Wybrano płatność kartą`);
					}
					if (payment == 2) {
						console.log(`Wybrano płatność gotówką`);
					}
				}
			);
		};
		process.exit();
	});
};

Choose();
