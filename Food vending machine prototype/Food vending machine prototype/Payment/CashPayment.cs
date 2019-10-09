using System;
using System.Collections.Generic;
using System.Text;

namespace Food_vending_machine_prototype.Payment
{
    class CashPayment : IPayment
    {
        public bool Pay(IPayable payable)
        {
            Console.WriteLine("Wprowadź " + payable.GetPrize() + " zł.");
            float inputCash = float.Parse(Console.ReadLine());
            return inputCash >= payable.GetPrize();
        }
    }
}
