function calcul(prixA,qtA,operation,totalA){
    let prix =document.getElementById(prixA).innerHTML.split("DZ").join(" ");
    console.log(prix);

    let qt = parseInt(document.getElementById(qtA).innerHTML);
    console.log(qt);

    let total=document.getElementById(totalA).innerHTML.split("DZ").join(" ");
    console.log(total);

     let totalCart = document.getElementById("totalCart").innerHTML.split("DZ").join(" ");
    if(operation==="+"){
        document.getElementById(qtA).innerHTML = qt+1;
        total=(qt+1)*prix;
        document.getElementById(totalA).innerHTML = total + " DZ";
        console.log(total);
        document.getElementById("totalCart").innerHTML = parseInt(totalCart) + parseInt(prix) +" DZ"
    }
    if(operation==="-"){
        if(qt>0){
            document.getElementById(qtA).innerHTML = qt-1;
            total=(qt-1)*prix;
            document.getElementById(totalA).innerHTML = total+"DZ";
            console.log(total);
            document.getElementById("totalCart").innerHTML = parseInt(totalCart) - parseInt(prix) +" DZ"
        }
    }
}
