using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Food_vending_machine_prototype.Payment
{
    class CardPayment : IPayment
    {
        public bool Pay(IPayable payable)
        {
            Console.WriteLine("Wprowadź kartę kredytową poprzez wciśnięcie 1");
            int cardInput = Convert.ToInt32(Console.ReadLine());
            bool result = false;
            if (cardInput==1)
            {
                Console.WriteLine("Przetwarzanie...");
                Thread.Sleep(2000);
                Random r = new Random();
                double rDouble = r.NextDouble();
                result = rDouble < 0.9d;
                string resultText = result ? "Transakcja przebiegla pomyślnie" : "Transakcja odrzucona";
            }
            return result;
        }
    }
}
