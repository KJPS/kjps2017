# KJPS 2017

Uzdevums ir izveidot programmu, kura kontrolē HakMan spēles spēlētāju. Programma ir jāveido JavaScript (Node.JS) valodā.

## HakMan

Spēle sastāv no četrām komponentēm:

- Labirints.
- Spoki.
- Spēlētāji.
- Monētas.

Spēles mērķis ir savākt pēc iespējas vairāk monētas.

Spēlē valda sekojoši noteikumi:

- Spokam noķerot spēlētāju tam spēle ir beigusies.
- Monētas (atkarībā no iestatījumiem) var būt ar dažādām vērtībām.
- Spēlētājiem un spokiem neeksistē savstarpējā sadursme.
- Spoki (atkarībā no iestatījumiem) maina savu mērķi pēc randoma.
- Sienas ierobežo spēlētāju un spoku kustību.

## HakMan tehniskā puse

Spēlētājiem kods jāraksta JavaScript jeb Node.JS valodā. Node.JS ir servera puses javascripts - [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/). Programmai ir ievaddati, kurus var nolasīt no STDIN un izvaddati, kurus var izvadīt STDOUT.

### Programmas ievaddati

### Programmas izvaddati

Programmai ir jāizvada vērtība no 0 līdz 3, kura apzīmē spēlētāja kustības virzienu nākamajā iterācijā.

0 - uz uagšu.
1 - pa labi.
2 - uz leju.
3 - pa kreisi.

## P.S.

Lūdzu neizmantojiet serveri ļaunprātīgi - atmiņas pārpildīšana tīši, neatļautu failu lasīšana un citas nevēlamas rīcības.
