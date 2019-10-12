var readline = require("readline");

var prompts = readline.createInterface(process.stdin, process.stdout);
const Products = [
	{
		id: 0,
		nazwa: "Kitkat",
		cena: 2,
	},
	{
		id: 1,
		nazwa: "Sok pomarańczowy",
		cena: 1,
	},
	{
		id: 2,
		nazwa: "Kawa",
		cena: 2,
	},
	{
		id: 3,
		nazwa: "Ciepły kubek knorr",
		cena: 4,
	},
	{
		id: 4,
		nazwa: "10 Czekoladek",
		cena: 6,
	},
	{
		id: 5,
		nazwa: "Coca-Cola",
		cena: 3,
	},
];

let Welcome = () => {
	prompts.question(
		"Witaj, wybierz produkt po id z automatu spożywczego.",
		number => {
			console.log(Products);
			switch (number) {
				case 0:
					console.log(
						`Wybrano ${Products[0].nazwa} cena wynosi ${Products[0].cena} zł.`
					);
					break;
				case 1:
					console.log(
						`Wybrano ${Products[1].nazwa} cena wynosi ${Products[1].cena} zł.`
					);
					break;
				case 2:
					console.log(
						`Wybrano ${Products[2].nazwa} cena wynosi ${Products[2].cena} zł.`
					);
					break;
				case 3:
					console.log(
						`Wybrano ${Products[3].nazwa} cena wynosi ${Products[3].cena} zł.`
					);
					break;
				case 4:
					console.log(
						`Wybrano ${Products[4].nazwa} cena wynosi ${Products[4].cena} zł.`
					);
					break;
				case 5:
					console.log(
						`Wybrano ${Products[5].nazwa} cena wynosi ${Products[5].cena} zł.`
					);
					break;
			}
		}
	);
	process.exit();
};

Welcome();
