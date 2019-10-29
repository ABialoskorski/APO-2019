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

Serwisant dokonywuje uwierzytelnienia.
Serwisant przełącza automat w tryb serwisowy.
Serwisant testuje częsci mechaniczne automatu.
Serwisant zamyka automat.
Serwisant wyłącza tryb serwisowy.
Serwisant wysyła raport.