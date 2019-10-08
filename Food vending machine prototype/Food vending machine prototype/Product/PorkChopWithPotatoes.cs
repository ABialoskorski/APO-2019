using System;
using System.Collections.Generic;
using System.Text;

namespace Food_vending_machine_prototype.Product
{
    class PorkChopWithPotatoes : IProduct, IPreparable
    {
        public void Give()
        {
            Console.WriteLine("Proszę, oto schabowy z ziemniakami.");
        }

        public bool Prepare()
        {
            throw new NotImplementedException();
            Console.WriteLine("*** Przygotowywanie posiłku ***");
        }
    }
}
