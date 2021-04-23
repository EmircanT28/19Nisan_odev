function stilRenk(){
    var renkler="0123456789ABCDEF";
    renkler=renkler.split("");
    var rasgele;
    var renk="#";
    var sayac=0;
    while(sayac<6){
        rastgele=Math.round(Math.random() *15);
        renk+=renkler[rastgele];
        console.log(renk);
        sayac++;
    }
    document.getElementById("paragraf").style.color=renk;
    document.getElementById("paragraf").style.fontFamily="Verdana";
}