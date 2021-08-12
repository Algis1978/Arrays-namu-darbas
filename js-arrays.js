// Išspausdinti mokinio vardą ir pažymį, kuris turi prasčiausią pažymį.
// Išspausdinti mokinio vardą ir pažymį, kuris turi geriausią pažymį.
// Išspausdinti mokinio vardą ir pažymiu vidurkį, kuris turi prasciausią pažymių vidurkį.
// Išspausdinti mokinio vardą ir pažymiu vidurkį, kuris turi geriausią pažymių vidurkį.
// Išspausdinti mokinio vardą, jei jis turi pažymį 8.
// Išspausdinti mokinio vardą, jei jis neturi pažymio 7.
// PASTABA: jei kazkurį reikalavimą atitinka daugiau nei vienas mokinys, spausdinti visus.
document.write ("<h2>SAVARANKIŠKAS DARBAS NR. 1<h2><h3>UŽDUOTYS</h3><p>Pagal duotą duomenų masyvą:<br>1. Išspausdinti mokinio, kuris turi prasčiausią pažymį, vardą ir pažymį.<br>2. Išspausdinti mokinio, kuris turi geriausią pažymį, vardą ir pažymį.<br>3. Išspausdinti mokinio, kuris turi prasčiausią pažymių vidurkį, vardą ir pažymių vidurkį.<br>4. Išspausdinti mokinio, kuris turi geriausią pažymių vidurkį, vardą ir pažymiu vidurkį.<br>5. Išspausdinti mokinio vardą, jei jis turi pažymį 8.<br>6. Išspausdinti mokinio vardą, jei jis neturi pažymio 7.<br><br>PASTABA: jei kazkurį reikalavimą atitinka daugiau nei vienas mokinys, spausdinti visus.<h3>DUOMENYS</h3><p>Duomenų masyvas:<br>I. const data = [<br>{name: 'Jonas', marks: [10, 2, 8, 4, 6]},<br>{name: 'Maryte', marks: [3, 7, 9, 5]},<br>{name: 'Petras', marks: [7, 7, 7]},<br>{name: 'Ona', marks: [10, 9, 8, 7, 6]},<br>]</p><h3>JAVASCRIPT PROGRAMOS REZULTATAS: </h3>");
const data = [
    {name: 'Jonas', marks: [10, 2, 8, 4, 6]},
    {name: 'Maryte', marks: [3, 7, 9, 5]},
    {name: 'Petras', marks: [7, 7, 7]},
    {name: 'Ona', marks: [10, 9, 8, 7, 6]},
]
document.write (data[0].name);
document.write (data[3].marks[3]);
function arrayUzduotis1 (data){
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            let z = data[i].marks[j];
            let maziausias = [];
                document.write (z);
        }    
    }
}
arrayUzduotis1 (data);

    //         // if (data[i].marks[j] === Number || (data[i].marks[j] >= 0 && data[i].marks[j] <= 10)) {
    //         //     document.write ("Teisingas rezultatas");
    //         // }
    //         // else {
    //         //    return document.write ("Teisingas funkcijos vykdymas negalimas, nes bent vienas iš parametrų įvestas neteisingai");
    //         // }
    //         if (data[i].mark[j]<= k){
    //             k = data[i].mark[j]
    //             document.write ("Mažiausias pažimys - "+data[i].mark[j]+", jį gavo "+data[i]+".")
    //         }
    //     }
    // }
    // for (let i=0; i<data.length; i=i+1){
    //     for (let j=0; j<data[i].marks.length; j=j+1) {
    //         if (data[i].marks[j] !== Number || data[i].marks[j] < O || data[i].marks[j] !== integer || data[i].marks[j] > 10){
    //            document.write ("Teisinga funkcija")
    //         }
    //         else {
    //             document.write ("Teisingas funkcijos rezultatas negalimas, nes bent vienas iš duomenų pateiktas klaidingai")
    //         }
    //     }
    // }