using System;
using System.Collections.Generic;
using System.Text;

namespace Food_vending_machine_prototype.Ingredient
{
    class IngredientContainer : IIngredientContainer
    {
        readonly List<IIngredient> ingredients = new List<IIngredient>();

        public void Load(List<IIngredient> ingredients)
        {
            this.ingredients.AddRange(ingredients);
        }

        public bool RemoveIngredient(IIngredient ingredient)
        {
            foreach(IIngredient i in ingredients)
            {
                if(i.Name() == ingredient.Name())
                {
                    ingredients.Remove(i);
                    return true;
                }
            }
            return false;
        }
    }
}
