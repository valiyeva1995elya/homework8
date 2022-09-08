for( let i = 0; i < 1; i++){
    let obj = {
        name: prompt("name"),
        age: +prompt("age"),
        country: prompt("country"),
    }
    console.log(obj)
    function toArr(obj){
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let result = []
    for (let i = 0; i < keys.length; i++){
        result.push(keys[i], values[i])
    }
return result
}
console.log(toArr(obj))
}



function objTwo(){
    let arr = [];
    for( let i = 0; i < 5; i++){
        let objTwo = {
            name: prompt("name"),
            age: +prompt("age"),
            
        }
        arr.push(objTwo)
    }
    console.log(arr)
    arr.sort(function(a, b){  
        return a.age-b.age
    }
    )
}
objTwo()


