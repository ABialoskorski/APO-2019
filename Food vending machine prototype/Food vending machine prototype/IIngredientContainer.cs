using System;
using System.Collections.Generic;
using System.Text;

namespace Food_vending_machine_prototype
{
    interface IIngredientContainer
    {
        void Load(List<IIngredient> ingredients);

        bool RemoveIngredient(IIngredient ingredient);
    }
}
