using Food_vending_machine_prototype.Ingredient;
using Food_vending_machine_prototype.Payment;
using Food_vending_machine_prototype.TakeOrder;
using System;
using System.Collections.Generic;

namespace Food_vending_machine_prototype
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Automat spożywczy rozpoczyna pracę");
            IngredientContainer ingredientContainer = new IngredientContainer();
            ingredientContainer.Load(new List<IIngredient>()
            {
                new Potato(),
                new Potato(),
                new Potato(),
                new PorkChop(),
                new PorkChop(),
            });
            TakeOrderAsNumber takeOrderAsNumber = new TakeOrderAsNumber();
            CashPayment cashPayment = new CashPayment();
            CardPayment cardPayment = new CardPayment();
            while (true)
            {
                IProduct chosenProduct = takeOrderAsNumber.ChooseProduct();

                Console.WriteLine("Płatność gotówką wpisz 1, płatność kartą wpisz 2");
                int paymentType = Convert.ToInt32(Console.ReadLine());
                IPayment payment = paymentType == 1 ? cashPayment as IPayment : cardPayment as IPayment;
                bool paymentResult = payment.Pay(chosenProduct as IPayable);
                if (paymentResult)
                {
                    if (chosenProduct as IPreparable != null)
                    {
                        (chosenProduct as IPreparable).Prepare(ingredientContainer);
                    }
                    chosenProduct.Give();
                } else
                {
                    Console.WriteLine("Zła kwota");
                }
            }
        }
    }
}
