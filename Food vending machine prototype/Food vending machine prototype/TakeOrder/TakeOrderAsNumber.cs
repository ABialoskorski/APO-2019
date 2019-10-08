using System;
using System.Collections.Generic;
using System.Text;

namespace Food_vending_machine_prototype.TakeOrder
{
    class TakeOrderAsNumber : ITakeOrder
    {
        readonly private Dictionary<int, IProduct> products = new Dictionary<int, IProduct>()
        {

        };

        public IProduct ChooseProduct()
        {
            Console.WriteLine("Wpisz numer produktu który chcesz zamówić");
            int productKey = Convert.ToInt32(Console.ReadLine());
            return products[productKey];
        }
    }
}
