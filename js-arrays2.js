// Išspausdinti mokinio vardą ir pažymį, kuris turi prasčiausią pažymį.
// Išspausdinti mokinio vardą ir pažymį, kuris turi geriausią pažymį.
// Išspausdinti mokinio vardą ir pažymiu vidurkį, kuris turi prasciausią pažymių vidurkį.
// Išspausdinti mokinio vardą ir pažymiu vidurkį, kuris turi geriausią pažymių vidurkį.
// Išspausdinti mokinio vardą, jei jis turi pažymį 8.
// Išspausdinti mokinio vardą, jei jis neturi pažymio 7.
// PASTABA: jei kazkurį reikalavimą atitinka daugiau nei vienas mokinys, spausdinti visus.

const data = [
    {name: 'Tomas', marks: [10, "2a", 8, 4, 6]},
    {name: 'Ieva', marks: [3, 7, 9, true]},
    {name: 'Pranas', marks: [7, -7, 7]},
    {name: 'Daiva', marks: [Infinity, 9, 8, , 6]},
    {name: 'Aurelija', marks: [12, null, 8, 7, 6]},
]
// const data = [
//     {name: 'Tomas', marks: [10, 5, 8, 4, 6]},
//     {name: 'Ieva', marks: [3, 7, 9, 1]},
//     {name: 'Pranas', marks: [7, 10, 8]},
//     {name: 'Daiva', marks: [2, 9, 8, 1, 6]},
//     {name: 'Aurelija', marks: [5, 6, 8, 7, 6]},
//]
function rastiNeteisingusDuomenis (data){
    document.write ("<br>1. Pažymių duomenys teisingi, jei žemiau nenurodyta kitaip.<br><small>(Pvz.:<i>Neteisingas pažymys: </i>Mokinio vardas, neteisingas pažymys;)</small>")
    let isvestiPerspejima
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (Number.isInteger(data[i].marks[j]) === false || data[i].marks[j]<1 || data[i].marks[j]>10) {
            document.write ("<br><i>Neteisingas pažymys: </i>"+data[i].name+", "+data[i].marks[j]+";");
            isvestiPerspejima = true;
            }
        }
    }
    if (isvestiPerspejima===true){
        alert ("Tarp nurodytų pažymių yra klaidingų. Ištaisykite juos!")
    }
}

function rastiZemiausiaPazymi (data) {
    let zemiausiasPazymys = 10;
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1){
            if (data[i].marks[j]<zemiausiasPazymys) {
            zemiausiasPazymys=data[i].marks[j]
            }
        }
    }
    return zemiausiasPazymys
}

function rastiMokiniSuZemiausiuPazymiu (data){
    document.write ("<br>2. Mokinys(-iai) su mažiausiu pažymiu:");
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (data[i].marks[j] === rastiZemiausiaPazymi (data)){
                document.write ("<br><em>"+data[i].name+" (mažiausias pažymys "+rastiZemiausiaPazymi (data)+");</em>")
                break;
            }
        }    
    } 
}
function rastiAuksciausiaPazymi (data) {
    let auksciausiasPazymys = 1;
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1){
            if (data[i].marks[j]>auksciausiasPazymys) {
            auksciausiasPazymys=data[i].marks[j]
            }
        }
    }
    return auksciausiasPazymys
}

function rastiMokiniSuAuksciausiuPazymiu (data){
    document.write ("<br>3. Mokinys(-iai) su aukščiausiu pažymiu: "); 
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (data[i].marks[j] === rastiAuksciausiaPazymi (data)){
                document.write ("<br><em>"+data[i].name+" (aukščiausias pažymys "+rastiAuksciausiaPazymi (data)+");</em>")
                break;
            }
        }    
    }
}
function rastiMokiniSuZemiausiuPazymiuVidurkiu (data) {
    let zemiausiasVidurkis=10;
    let suma = 0;
    let vidurkis;
    for (let i=0; i<data.length; i=i+1){
        suma = 0; 
        for (let j=0; j<data[i].marks.length; j=j+1){
            suma +=data[i].marks[j];
        }   
        vidurkis = suma/data[i].marks.length;      
        if (vidurkis<zemiausiasVidurkis){
            zemiausiasVidurkis = vidurkis;
        }
    }
    document.write ("<br>4. Mokinys(-iai) su mažiausiu pažymių vidurkiu: ");
    for (let i=0; i<data.length; i=i+1){
        suma = 0; 
        for (let j=0; j<data[i].marks.length; j=j+1){
            suma +=data[i].marks[j];
        }
        vidurkis = suma/data[i].marks.length;   
        if (vidurkis===zemiausiasVidurkis) {
            document.write ("<br><em>"+data[i].name+" (vidurkis "+zemiausiasVidurkis.toFixed (2)+");</em>")
        }
    }
    return zemiausiasVidurkis    
}
function rastiMokiniSuAuksciausiuPazymiuVidurkiu (data) {
    let auksciausiasVidurkis=1;
    let suma = 0;
    let vidurkis;
    for (let i=0; i<data.length; i=i+1){
        suma = 0; 
        for (let j=0; j<data[i].marks.length; j=j+1){
            suma +=data[i].marks[j];
        }   
        vidurkis = suma/data[i].marks.length;      
        if (vidurkis>auksciausiasVidurkis){
            auksciausiasVidurkis = vidurkis;
        }
    }
    document.write ("<br>5. Mokinys(-iai) su aukščiausiu pažymių vidurkiu: ");
    for (let i=0; i<data.length; i=i+1){
        suma = 0; 
        for (let j=0; j<data[i].marks.length; j=j+1){
            suma +=data[i].marks[j];
        }
        vidurkis = suma/data[i].marks.length;   
        if (vidurkis===auksciausiasVidurkis) {
            document.write ("<br><em>"+data[i].name+" (vidurkis "+auksciausiasVidurkis.toFixed (2)+");</em>")
        }
    }
    return auksciausiasVidurkis    
}

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
rastiNeteisingusDuomenis (data);
rastiMokiniSuZemiausiuPazymiu (data);
rastiMokiniSuAuksciausiuPazymiu (data);
rastiMokiniSuZemiausiuPazymiuVidurkiu (data);
rastiMokiniSuAuksciausiuPazymiuVidurkiu (data);
rastiMokiniSuPazymiu8 (data);
rastiMokiniBePazymio7 (data);