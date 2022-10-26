const array = [4,7,9,5,9,4,7,5,2];
let lonely = array.filter((item,index)=>{
    return array.indexOf(item) === array.lastIndexOf(item)
});
document.write(lonely);
console.log(lonely);