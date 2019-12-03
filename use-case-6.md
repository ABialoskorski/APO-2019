# Wiktor Bałaban

Use Case 6: Przeprowadzenie przeglądu maszyny
=====================

**Aktor podstawowy:** Serwisant


Główni odbiorcy i oczekiwania względem systemu:
-----------------------------------------------

- Klient: oczekuje szybkiego serwisu, ponieważ podczas serwisu nie może kupować produktów

- Serwisant: oczekuje jasnych komunikatów z automatu, co jest nie tak, albo co działa dobrze

Warunki wstępne:
----------------

Automat działa

Warunki końcowe:
----------------

Automat działa, stan magazynowy produktów w systemie i w automacie jest taki sam

Scenariusz główny (ścieżka podstawowa):
---------------------------------------

  1. Serwisant dokonuje uwierzytelnienia.
  2. Serwisant otwiera autoamat.
  3. Serwisant przełącza automat w tryb serwisowy.
  4. Automat potwierdza przełączenie się w tryb serwisowy.
  5. Serwisant testuje część mechaniczną automatu.
  6. Automat przekazuje informacje o ewentualnych ustarkach.
  7. Serwisant zapisuje w raporcie ewentualne usterki
  8. Serwisant potwierdza w systemie "zaliczenie" danej części mechanicznej
  *Serwisant wykonuje kroki 5, 6, 7, 8 dla każdej części mechanicznej uwzględnionej w serwisie*
  9. Automat potwierdza pomyślne zakończenie serwisu.
  10. Serwisant zamyka automat.
  11. Automat wyłącza tryb serwisowy.
  12. Serwisant wysyła raport.

Rozszerzenia (ścieżki alternatywne):
------------------------------------

 *a. W dowolnym momencie system może się zawiesić.
     Ponieważ serwis ma być wykonany jak najsprawiniej, automat "pamięta" kiedy zatrzymany został przegląd.
	 1. Serwisant resetuje automat.
	 2. Automat ponownie uruchamia się.
	 3. Automat przełącza się w tryb serwisowy.
	 4. Automat potwierdza przełączenie się w tryb serwisowy.
	 5. Serwisant przechodzi do 5. w którym przerwał.
	 
 *b. W dowolnym momencie automat może się wyłączyć z przyczyn zewnętrznych (np: brak zasilania)
     Ponieważ serwis ma być wykonany jak najsprawiniej, automat "pamięta" kiedy zatrzymany został przegląd.
	 1. Serwisant czeka na przywrócenie zasilania.
	 2. Automat włącza się.
	 3. Automat przełącza się w tryb serwisowy.
	 4. Automat potwierdza przełączenie się w tryb serwisowy.
	 5. Serwisant przechodzi do 5. w którym przerwał.
	
 2a. Automat nie otwiera się
     Nie możliwe jest kontynuowanie serwisu.
	 
 6a. Brak błędu. Automat przekazuje komunikat o braku błędu.

 6b. Wystąpił błąd znany dla automatu. Automat przekazuje komunikat z kodem błędu który wystąpił.
 
 6c. Wystąpił błąd nieznany dla automatu. Automat przekazuje komunikat o nieznanym błędzie.
 
 9b. Automat zamknięty zanim zostanie ukończony pomyślnie serwis.
	Automat przywraca się do stanu przed zakończeniem serwisu

Wymagania specjalne:
--------------------

  - Można testować przygotowywanie produktów (np. przez wykonanie testowej porcji produktu)

Wymagania technologiczne oraz ograniczenia na wprowadzane dane:
---------------------------------------------------------------

 1a. Uwierzytelnianie za pomocą klucza
 
 6. Automat wyświetla komunikaty na Ekranie

 4,9. Potwierdzenie poprzez zapalenie lampki

Kwestie otwarte:
----------------
 
  - Informacja o możliwości usterki przed jej wystąpieniem
  
  - Wybór części do testowania przed rozpoczęciem testów
  
  - Automatyczne generowanie raportu i wysyłanie go przez Komunikator automatu
