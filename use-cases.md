Opis skrócony przypadków użycia
===============================

Aktorzy procesu i ich cele
--------------------------

Aktor                   Cel 
----------- -----------------------------
Dostawca                Dodanie brakujących produktów
Klient                  Kupno produktu
Serwisant               Przeprowadza przegląd maszyny
Komunikator automatu    Powiadomienie dostawcy
Komunikator automatu    Powiadomienie serwisanta

Słownik
-------

Hasło       Opis
----------- -----------------------------
Dostawca                  Dostawca to podmiot zajmujący się uzupełnianiem towarów w automacie
Komunikator automatu      Urządzenie wysyłające powiadomienia do odpowiednich podmiotów
Ekran                     Ekran musi wyświetlać minimum 3 cyfry w wielkości i kontraście który widoczny
                          jest dla przeciętnej osoby z odległości 50 cm.
Podajnik:                 Urządzenie do wydawania gotowycj produktów. W jednym
                          podajniku jest jeden rodzaj produktu.
Pojemnik na monety:	      Każdy nominał ma swój pojemnik				  
Pojemnik na banknoty:     Każdy nominał banknota ma swój pojemnik
produkt gotowy:           Np baton, czy puszka napoju
produkt do przygotowania: Produkt wymagający przygotowania w podgrzewaczu	

Przypadki użycia
----------------

### Use case 1: Uzupełnienie brakujących produktów

Dostawca otwiera automat.
Dostawca Przełącza automat w tryb serwisowy.
Dostawca uzupełnia brakujące towary.
Dostawca zamyka automat i wyłącza tryb serwisowy.

### Use case 2: Powiadomienie o braku towaru

Komunikator automatu wysyła powiadomienie do dostawcy o braku towaru.

### Use case 3: Powiadomienie o usterce

Komunikator automatu wysyła powiadomienie do serwisanta o usterce.

### Use case 4: Kupno gotowego produktu

Klient wybiera produkt.
Klient wybiera metodę płatności.
Klient realizuje płatność za pomocą karty lub gotówki.
Automat wydaje produkt.
Automat wydaje resztę lub pokwitowanie z banku.

### Use case 5: Kupno przygotowywanego produktu

Klient wybiera przygotowywany produkt.
Klient wybiera metodę płatności.
Klient realizuje płatność za pomocą karty lub gotówki
Automat przygotowuje produkt.
Automat wyświetla pozostały czas do przygotowania produktu.
Automat wydaje produkt.
Automat wydaje resztę lub pokwitowanie z banku.

### Use case 6: Przeprowadzenie przeglądu maszyny

Serwisant dokonuje uwierzytelnienia.
Serwisant otwiera autoamat
Serwisant przełącza automat w tryb serwisowy.
Automat potwierdza przełączenie się w stan serwisowy
Serwisant testuje część mechaniczną automatu.
Automat przekazuje informacje o ewentualnych ustarkach.
Serwisant zapisuje w raporcie ewentualne usterki
Serwisant potwierdza w systemie "zaliczenie" danej części mechanicznej
Automat potwierdza pomyślne zakończenie serwisu.
Serwisant zamyka automat.
Automat wyłącza tryb serwisowy.
Serwisant wysyła raport.