// Išspausdinti mokinio vardą ir pažymį, kuris turi prasčiausią pažymį.
// Išspausdinti mokinio vardą ir pažymį, kuris turi geriausią pažymį.
// Išspausdinti mokinio vardą ir pažymiu vidurkį, kuris turi prasciausią pažymių vidurkį.
// Išspausdinti mokinio vardą ir pažymiu vidurkį, kuris turi geriausią pažymių vidurkį.
// Išspausdinti mokinio vardą, jei jis turi pažymį 8.
// Išspausdinti mokinio vardą, jei jis neturi pažymio 7.
// PASTABA: jei kazkurį reikalavimą atitinka daugiau nei vienas mokinys, spausdinti visus.
document.write ("<h2>SAVARANKIŠKAS DARBAS NR. 1<h2><h3>UŽDUOTYS</h3><p>Pagal duotą duomenų masyvą:<br>1. Išspausdinti mokinio, kuris turi prasčiausią pažymį, vardą ir pažymį.<br>2. Išspausdinti mokinio, kuris turi geriausią pažymį, vardą ir pažymį.<br>3. Išspausdinti mokinio, kuris turi prasčiausią pažymių vidurkį, vardą ir pažymių vidurkį.<br>4. Išspausdinti mokinio, kuris turi geriausią pažymių vidurkį, vardą ir pažymių vidurkį.<br>5. Išspausdinti mokinio vardą, jei jis turi pažymį 8.<br>6. Išspausdinti mokinio vardą, jei jis neturi pažymio 7.<br><br>PASTABA: jei kazkurį reikalavimą atitinka daugiau nei vienas mokinys, spausdinti visus.<h3>DUOMENYS</h3><p>Duomenų masyvas:<br>I. const data = [<br>{name: 'Jonas', marks: [10, 2, 8, 4, 6]},<br>{name: 'Maryte', marks: [3, 7, 9, 5]},<br>{name: 'Petras', marks: [7, 7, 7]},<br>{name: 'Ona', marks: [10, 9, 8, 7, 6]},<br>]</p><h3>JAVASCRIPT PROGRAMOS REZULTATAS: </h3>");
const data = [
    {name: 'Jonas', marks: [10, 2, 8, 4, 6]},
    {name: 'Maryte', marks: [3, 7, 9, 5]},
    {name: 'Petras', marks: [7, 7, 7]},
    {name: 'Ona', marks: [10, 9, 8, 7, 6]},
]
const data1  = [
    {name: 'Jonas', marks: [10, 2, 8, 4, 6]},
    {name: 'Maryte', marks: [3, 7, 9, 5]},
    {name: 'Petras', marks: [7, 7, 7]},
    {name: 'Ona', marks: [10, 9, 8, 7, 6]},
]
//TEST TEST TEST
// data1  = [
//     {name: 'Jonas', marks: [10, 10, 8, 4, 6]},
//     {name: 'Maryte', marks: [9, 7, 9, 5]},
//     {name: 'Petras', marks: [7, 7, 7]},
//     {name: 'Ona', marks: [10, 9, 8, 7, 1]},
// ]
function rastiNeteisingusDuomenis (data){
    document.write ("<br>1. Duomenys teisingi, jei žemiau nenurodyta kitaip.<br><small>(Pvz.:<i>Neteisingi duomenys: </i>Vardas, pažymys;<br>Ištaisykite neteisingus duomenis, kitaip sekančios funkcijos pateiks klaidingus duomenis arba jų nepateiks).</small>")
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (Number.isInteger(data[i].marks[j]) === false || data[i].marks[j]<1 || data[i].marks[j]>10) {
            document.write ("<br><i>Neteisingi duomenys: </i>"+data[i].name+", "+data[i].marks[j]+";");
            }
        }    
    }
}
function rastiZemiausiaPazymi (data) {
    let zemiausiasPazymys = 10;
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1){
            if (data1[i].marks[j]<zemiausiasPazymys) {
            zemiausiasPazymys=data1[i].marks[j]
            }
        }
    }
    return zemiausiasPazymys
}
console.log (rastiZemiausiaPazymi (data1));

function rastiMokiniSuZemiausiuPazymiu (data){
    document.write ("<br>2. Mokinys(-iai) su mažiausiu pažymiu "+rastiZemiausiaPazymi (data)+":");
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (data[i].marks[j] === rastiZemiausiaPazymi (data)){
                document.write ("<br><em>"+data[i].name+";</em>")
                break;
            }
        }    
    }
}
function rastiAuksciausiaPazymi (data) {
    let auksciausiasPazymys = 1;
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1){
            if (data1[i].marks[j]>auksciausiasPazymys) {
            auksciausiasPazymys=data1[i].marks[j]
            }
        }
    }
    return auksciausiasPazymys
}
console.log (rastiAuksciausiaPazymi (data1));

function rastiMokiniSuAuksciausiuPazymiu (data){
    document.write ("<br>3. Mokinys(-iai) su aukščiausiu pažymiu "+rastiAuksciausiaPazymi (data)+":");
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (data[i].marks[j] === rastiAuksciausiaPazymi (data)){
                document.write ("<br><em>"+data[i].name+";</em>")
                break;
            }
        }    
    }
}
function rastiMokiniSuZemiausiuPazymiuVidurkiu (data) {
    let suma = 0;
    let vidurkis;
    let maziausiasVidurkis = 10;
    document.write ("<br>4. Mokinys(-iai) su mažiausiu pažymių vidurkiu: ");
    for (let i=0; i<data.length; i=i+1) {
        for (let j=0; j<data[i].marks.length; j=j+1) {   
            suma += data[i].marks[j];
            vidurkis = suma/data[i].marks.length;
        }
        if (vidurkis < maziausiasVidurkis) {
            maziausiasVidurkis = vidurkis;
        }
        suma = 0;
        if (vidurkis === maziausiasVidurkis) {
            document.write ("<br><em>"+data[i].name+" (vidurkis "+maziausiasVidurkis+")</em>")
        }
    }
    return maziausiasVidurkis
}
// console.log (rastiZemiausiaPazymiuVidurki (data1));
// function rastiMokiniSuZemiausiuPazymiuVidurkiu (data){
//     document.write ("<br>4. Mokinys(-iai) su mažiausiu pažymių vidurkiu "+rastiZemiausiaPazymiuVidurki (data)+":");
//     for (let i=0; i<data.length; i=i+1){

//     }
// }
function rastiMokiniSuPazymiu8 (data) {
    document.write ("<br>6. Mokinys(-iai) su pažymiu 8:");
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (data[i].marks[j] === 8){
                document.write ("<br><em>"+data[i].name+";</em>")
                break;
            }
        }    
    }
}
function rastiMokiniBePazymio7 (data){
    document.write ("<br>7. Mokinys(-iai) be pažymio 7:");
    for (let i=0; i<data.length; i=i+1){
        if (data[i].marks.indexOf(7) === -1) {
            document.write ("<br><em>"+data[i].name+";</em>");
        }    
    }
}
rastiNeteisingusDuomenis (data1);
rastiMokiniSuZemiausiuPazymiu (data1);
rastiMokiniSuAuksciausiuPazymiu (data1);
rastiMokiniSuZemiausiuPazymiuVidurkiu (data1)
rastiMokiniSuPazymiu8 (data1);
rastiMokiniBePazymio7 (data1);