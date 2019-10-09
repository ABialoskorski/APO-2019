using Food_vending_machine_prototype.Payment;
using System;
using System.Collections.Generic;
using System.Text;

namespace Food_vending_machine_prototype.Product
{
    class PorkChopWithPotatoes : IProduct, IPreparable, IPayable
    {
        private bool prepared = false;
        public void Give()
        {
            if(prepared)
            {
                prepared = false;
                Console.WriteLine("Proszę, oto schabowy z ziemniakami.");
            }
        }

        public bool Prepare(IIngredientContainer ingredientContainer)
        {
            bool potato = ingredientContainer.RemoveIngredient(new Ingredient.Potato());
            bool porkchop = ingredientContainer.RemoveIngredient(new Ingredient.PorkChop());
            if (potato && porkchop)
            {
                Console.WriteLine("*** Przygotowywanie posiłku ***");
                prepared = true;
                return true;
            } else
            {
                return false;
            }
                
        }
        public float GetPrize()
        {
            return 13.0f;
        }
    }
}
