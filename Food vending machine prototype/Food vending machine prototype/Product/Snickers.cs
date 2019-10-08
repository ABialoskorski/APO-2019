using System;
using System.Collections.Generic;
using System.Text;

namespace Food_vending_machine_prototype.Product
{
    class Snickers : IProduct
    {
        public void Give()
        {
            Console.WriteLine("Proszę, oto Snickers.");
        }
    }
}
