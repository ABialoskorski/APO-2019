# Artur Białoskórski

Use Case 4: Kupno gotowego produktu
=====================

**Aktor podstawowy:** Klient


Główni odbiorcy i oczekiwania względem systemu:
-----------------------------------------------

- Klient: Oczekuje szybkiego zakupu wybranego produktu, przy jak najmniejszej liczbie wykonanych czynności.

- Właściciel automatu: Chce poprawnie zrealizowanego procesu kupna produktu przez klientów. Chce zadowolenia klientów.

- Dostawca: Chce nieskomplikowanej autoryzacji i dostępu do automatu spożywczego w celu uzupełnienia produktow.

Warunki wstępne:
----------------
Klient jest zdecydowany na produkt dostępny w automacie i posiada odpowiednią sumę pieniędzy potrzebną do zakupu.

Warunki końcowe:
----------------
Klient zapłacił wymaganą kwotę w przypadku płatności kartą, lub jeśli płatność była gotówką otrzymał w razie potrzeby należną resztę.
Automat wydał klientowi wybrany przez niego produkt.

Scenariusz główny (ścieżka podstawowa):
---------------------------------------

  1. Klient podchodzi do automatu spożywczego z chęcią zakupu produktów.
  2. Klient wybiera produkt i wpisuje w terminalu numer produktu odpowiadający numerom rozpisanym przy danych produktach.
  3. Automat wyświetla na ekranie informacje o wybranym produkcie i jego cenę.
  4. Automat wyświetla na ekranie okno wyboru typu płatności.
  5. Klient wybiera metodę płatności - kartą lub gotówką.
  6. Klient wybrał płatność kartą i przyłożył kartę do terminala w celu płatności.
  7. Klient wpisuje kod PIN karty w terminalu.
  8. Automat wysyła zapytanie o autoryzację transakcji do Systemu Bankowego i żąda potwierdzenia możliwości zrealizowania transakcji.
  9. Automat wyświetla informację o udanej płatności kartą.
  10. Automat drukuje pokwitowanie z banku.
  11. Automat wydaje wybrany produkt do podajnika.

Rozszerzenia (ścieżki alternatywne):
------------------------------------

 2. Klient wpisał do terminala numer, do którego nie ma przypisanego żadnego produktu.
    1. Automat wyświetla komunikat o błędnym wyborze.
    2. Automat jeszcze raz wyświetla okno wyboru produktu.

 2. Klient rezygnuje z kupna produktu i wybiera opcję zakończ.
    1. Automat powraca do stanu przed wyborem produktu.
    
 5. Klient wybrał płatność gotówka.
    1. Klient wprowadza gotówkę do przeznaczonego i oznaczonego miejsca.
    2. Automat wskazuje kwotę wprowadzoną i resztę należną klientowi.
    3. Automat do koszyka na pieniądze wydaje resztę.
    

Wymagania specjalne:
--------------------

  - Niezbędny ekran dotykowy, kolory muszą być kontrastowe.

  - Możliwość interfejsu wielojęzycznego

Wymagania technologiczne oraz ograniczenia na wprowadzane dane:
---------------------------------------------------------------

 2. Numer produktu wprowadzony przez ekran dotykowy musi odpowiadać numerom rozpisanym przy produktach.

 2b. 

 3a. 

Kwestie otwarte:
----------------

  - ...

  - ...
 
  - ...
