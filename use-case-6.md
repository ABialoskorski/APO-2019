# Wiktor Bałaban
//wnioski ogólne: wywalić przeprowadzenie naprawy, skupić się na różnych przypadkach testowania
automatu

Use Case 6: Przeprowadzenie przeglądu maszyny
=====================

**Aktor podstawowy:** Serwisant


Główni odbiorcy i oczekiwania względem systemu:
-----------------------------------------------

- Klient: oczekuje szybkiego serwisu, ponieważ podczas serwisu nie może kupować produktów

- Serwisant: oczekuje jasnych komunikatów z automatu, co jest nie tak, albo co działa dobrze

- Serwisant chce być bezpieczny podczas przeglądu maszyny

Warunki wstępne:
----------------

Automat działa, Serwisant ma przy sobie części potrzebne do naprawy uprzednio wykrytych
usterek i klucz do uwierzytelniania

Warunki końcowe:
----------------

Automat działa, stan magazynowy produktów w systemie i w automacie jest taki sam,
produkty nie uległy uszkodzeniu ani skażeniu, Automat nie został ubrudzony

Scenariusz główny (ścieżka podstawowa):
---------------------------------------

  1. Serwisant dokonuje uwierzytelnienia.
  2. Automat otwiera się.
  3. Serwisant przełącza automat w tryb serwisowy.
  4. Automat potwierdza przełączenie się w stan serwisowy
  5. Serwisant testuje część mechaniczną automatu.
  6. Automat przekazuje informacje o ewentualnych ustarkach.
  7. Serwisant na bazie informacji uzyskanych od automatu, bądź na bazie własnego doświadczenia,
     dokonuje drobnej naprawy jeśli jest wymgana (np: naoliwienie, dokręcenie śrubki,
     przeczyszczenie). //to nie w chodzi w skład przeglądu
  8. Serwisant potwierdza w systemie "zaliczenie" danej części mechanicznej
  --Serwisant wykonuje kroki 5, 6, 7, 8 dla każdej części mechanicznej uwzględnionej w serwisie
  9. Automat potwierdza pomyślne zakończenie serwisu.
  10. Serwisant zamyka automat.
  11. Automat wyłącza tryb serwisowy.
  12. Serwisant wysyła raport.// poza zakresem

Rozszerzenia (ścieżki alternatywne):
------------------------------------

 *a. W dowolnym momencie system może się zawiesić.
     Ponieważ serwisy wykonywane są rzadko, w przypadku takiego błędu trzeba będzie zacząć pracę
	 od nowa.
	 1. Serwisant resetuje automat.
	 2. Serwisant rozpoczyna procedurę serwisu od początku.
	 
 *b. W dowolnym momencie automat może się wyłączyć z przyczyn zewnętrznych (np: brak zasilania)
     Ponieważ serwisy wykonywane są rzadko, w przypadku takiego błędu trzeba będzie zacząć pracę
	 od nowa.
	 1. Serwisant czeka na przywrócenie zasilania.
	 2. Automat włącza się.
	 3. Serwisant rozpoczyna procedurę serwisu od początku.

 7a. Serwisant nie jest w stanie naprawić usterki.
	 1. Serwisant zamieszcza w raporcie informacje o nie naprawionej usterce.
	 2a. Serwisant zna rozwiązanie problemu, zamieszcza to też w raporcie.
	     1a. Serwisant potrafi naprawić ustarkę jeśli będzie posiadał część wymienną
		 2a. Serwisant wpisuje do raportu jaka część jest potrzebna do naprawy.
		 3. Obejście usterki jeśli to możliwe
     2b. Serwisant nie zna rozwiązanie problemu, zamieszcza to też w raporcie.
	 
 7b. Serwisant musi dokonać wymiany części
     1. Serwisant zakłada gumowe rękawice
	 2. Serwisant wymienia część

Wymagania specjalne:
--------------------

  - Serwisant podczas wymiany części podłączonych do prądu nosi gumowe rękawice

  - Można testować przygotowywanie produktów (np. przez wykonanie testowej małej
  porcji produktu (np herbaty))

Wymagania technologiczne oraz ograniczenia na wprowadzane dane:
---------------------------------------------------------------

 1a. Uwierzytelnianie za pomocą klucza

 7b. Części zamienne mają być ogólnie dostępne

Kwestie otwarte:
----------------

  - Zakres napraw dokonywanych przez Serwisanta

  - Zwiększenie bezpieczeństwa przez wyłączenie prądu podczas wymiany części podłączonych
  do prądu
 
  - Informacja o możliwości usterki przed jej wystąpieniem
