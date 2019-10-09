using Food_vending_machine_prototype.Ingredient;
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
            while (true)
            {
                IProduct chosenProduct = takeOrderAsNumber.ChooseProduct();
                if (chosenProduct as IPreparable != null)
                {
                    (chosenProduct as IPreparable).Prepare(ingredientContainer);
                }
                chosenProduct.Give();
            }
        }
    }
}
