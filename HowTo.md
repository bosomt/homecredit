# homecredit.cz

## Proc testovat
1. homepage spolocnosti je vystavni skrin ktera musi vzbudzovat duveru 
2. homepage musi splnovat legislativni pozadavky v zemi kde podnika /GDPR, cookies, accessibility, zabezpeceni a pod./
3. homepage generuje zisky, tj obsahuje eshop popripade kontakty ktere musi byt jednoduse pristupne

## Jak testovat
1. bezpecnosti testy 
    - obvykle urceno pro dedikovane oddeleni nebo firmu
    - testuji se certifikaty, penetracni testy
2. accessibility testing
    - pristupnost z jinych platforem a browseru
    - pristupnost pro osoby s postizenim
3. performance testing
    - load testing - zatez + rychlost
    - servery jsou zvycejne hostovane na externich servrech ale vidim ze homecredit je hostovan u SiteOne tj urcite je mozne otestovat prostupnost a skalovatelnost sitoveho trafficu
4. end to end testing 
    - testovano manualne a nebo pomoci automatickych testu
    - pomoci test case a user scenarios tak aby se otestovalo "skutecne" spravani zakaznika
    - otestuje se vsechno tj navigace, vyplneni udaju, zaslani dat na server, nacitani ze servru

## jak bych pristupoval k homecedit.cz

1. zakladni navigace
    - potvrzeni cookies
    - nacteni obrazku
    - navigace
    - presmerovani do iOS/Android app store
    - presmerovani na socialni site
    - nutnost otestovat na mobilu i na desktopu aspon v 2 nejrozsirenejsich prohlizecich
2. kontakty
    - zobrazi se kontakty /telefon, email, cislo uctu/
    - zobrazi se mapa a seznam pobocek
3. kalkulacka
    - testovat pravidelne a nejpecliveji, nejdulezitejsi prvek na homecredit.cz
    - vypocet splatek a uroku funguje dle zadani 
    - urcite otestovat boundary values pokud bude kalkulacka podporovat zdavani hodnot a ne jen vyber z moznosti
    - je mozne vyplnit udaje a jsou korektne validovany /datum,RC,sumy,email/
4. chatbot
    - je renderovan korektne a spojeni na server/operatora je navazano
5. vizualni regrese
    - manualni kontrola designu na malem telefonu, velkem monitoru nebo mezni honoty rozliseni kdyz se automaticky prepina mobile/desktop zobrazeni

## poznamky

1. vetsinu testu na homecredit.cz je mozne nebo spise nutne automatizovat a pravidelne opakovat
2. musi se take navrhnout priorita testu /kalkulacka a kontakt ma vyssi prioritu dostupnosti nez link na x.com nebo seznam kariernich pozic
3. napsal jsem jednoduchy automatizovany playwright test ktery overuje funkcnost navigace do a v sekci https://www.homecredit.cz/pujcky viz druhy soubor, nepouzil jsem page object model v pripade zadosti o vice testu bych urcite pouzil 
4. dalsi dotazy rad zodpovim behem pohovoru