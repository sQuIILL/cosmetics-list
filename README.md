# COSMETIC LIST SPA
Project called "Cosmetic List" is single page application about displaying and filtering products from https://makeup-api.herokuapp.com/ using API,
this project was bootstrapped with Create React App.

In the project directory, you can run:

npm install

npm start

##### When using the site, it is recommended to browse in resolution near 1700px. Application is not yet responsive.

#### Tech-Stack:
React, Flexbox, Axios, Contex

## Author notes in polish.
Z powodu braku czasu zdecydowałem się na użycie inline-css. Było to dla mnie wygodniejsze i zaoszczędziło mi dużo czasu.
Projekt był wymagający przez swoje endpointy i dane. Zdjęcia nie były ustandaryzowane a niestety nie miałem na tyle czasu aby skorzystać z bibliotek które ułatwiłyby mi z tym prace.
Dużą zaletą bylo poznanie przy tym projekcie Contexu. Zdecydowanie latwiej się tak zarządza stanem aplikacji na mniejszej skali.
Dużą wadą tego makeup-api jest to że cześć infromacji czyli takich jak np brand, type, categories trzeba samemu wpisać jako stałą wartość.
Nie mogłem sprawdzić wszystkich produktów i w jaki sposób każdy się prezentuje.
Uważam że najlepiej prezentują się produkty: "No Filter Foundation","Lippie Pencil".
Widzę kilka rzeczy do poprawnienia od najważniejszego priorytetu:

~~1. Paginacja, aktualnie strona może wyświetlać tylko 30 produktów a api pobiera wszystkie przez co dłużej ładuje się strona.~~
        
**Jest zrobiona prymitywna paginacja**

2. Responsywność kompontentów produktu, w podglądzie może się zdażyć że będzie pusto i za dużo miejsca a na liście wyświetla sie maksymalnie 8 produktów(przy duzej rozdzielczości).

3. Możliwość wyszukiwania marki aby szybciej odnaleźć produkt.

No i jeszcze jest kilka mniejszych które można łatwo rozwiązać przy rozwijaniu tego projektu.

Dałem z siebie dużo a u mnie ambicje rosną wraz z zadaniami.

Wolałbym pracować nad czymś co mnie rozwinie. :D

Dziękuje za przeczytanie notatki ;)
