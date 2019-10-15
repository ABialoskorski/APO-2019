var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);

const choosedOne = {
	id: 100,
	nazwa: "",
	cena: 0,
};

const Products = [
	{
		id: 0,
		nazwa: "Kitkat",
		cena: 3.2,
		ilosc: 20,
	},
	{
		id: 1,
		nazwa: "Sok pomarańczowy",
		cena: 2,
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
		cena: 4.6,
		ilosc: 10,
	},
	{
		id: 4,
		nazwa: "10 Czekoladek",
		cena: 6,
		ilosc: 0,
	},
	{
		id: 5,
		nazwa: "Coca-Cola",
		cena: 3,
		ilosc: 1,
	},
];

let Choose = () => {
	console.log("Lista dostępnych produktów:");
	console.log(Products);
	rl.question(
		`
    Wybierz produkt po numerze id: `,
		number => {
			if (number > 5) {
				console.log("Brak takiego produktu");
				process.exit();
			}

			if (Products[number].ilosc <= 0) {
				console.log(
					"Brak zapasów tego produktu, wysłano zgłoszenie do magazynu"
				);
				process.exit();
			}

			let leftAmount = Products[number].ilosc - 1;

			if (leftAmount <= 0) {
				console.log(
					"Twój produkt jest ostatnim tego typu, brawo szczęśliwcu, wysłaliśmy zgłoszenie po kolejne zapasy"
				);
			}

			choosedOne.id = number;
			choosedOne.nazwa = Products[number].nazwa;
			choosedOne.cena = Products[number].cena;

			console.log(
				`Wybrano ${choosedOne.nazwa}, cena wynosi ${choosedOne.cena}zł`
			);
			if (choosedOne.id == Products[3].id) {
				console.log(
					"Ponieważ wybrano ciepły posiłek, automat przywołuje obsługę serwisową"
				);
			}

			rl.question(
				`Wybierz sposób płatności: karta lub gotówka
        `,
				payment => {
					if (payment == "karta") {
						console.log(
							`Wybrano płatność kartą, do zapłaty: ${choosedOne.cena}zł
							Proszę przyłoyć kartę`
						);
						setTimeout(() => {
							console.log(`Produkt jest gotowy, do zobaczenia`);
						}, 2000);
					} else if (payment == "gotowka") {
						console.log(
							`Wybrano płatność gotówką, do zapłaty: ${choosedOne.cena}zł`
						);
						rl.question(
							`Ile masz pieniędzy?
						`,
							money => {
								console.log(
									"reszta wynosi: " +
										(money - choosedOne.cena)
								);
								setTimeout(() => {
									console.log(
										`Produkt jest gotowy, do zobaczenia`
									);
								}, 2000);
							}
						);
					}
				}
			);
		}
	);
};

Choose();
