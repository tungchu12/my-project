function demham(){
    let dem =0;
    function dem2(){
        return  dem++ ;
    }
    return dem2;
}

const dem = demham();
console.log(dem());
console.log(dem());
console.log(dem());



//--------
