using Food_vending_machine_prototype.Payment;
using System;
using System.Collections.Generic;
using System.Text;

namespace Food_vending_machine_prototype.Product
{
    class Snickers : IProduct, IPayable
    {
        public void Give()
        {
            Console.WriteLine("Proszę, oto Snickers.");
        }
        public float GetPrize()
        {
            return 2.5f;
        }
    }
}
