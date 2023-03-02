(function teste1() {
    const defaultArray = [ 'a', 10, 'b','hola' , 122, 15];
    const stringArray = [];
    const numberArray = [];

    for (let i = 0; i < defaultArray.length; i++) {
        const element = defaultArray[i];
        
        if( typeof(element) === typeof 'test' ) stringArray.push(element);
        if ( typeof(element) === typeof 10 ) numberArray.push(element);

    }
    
    console.log(stringArray);
    console.log(numberArray);
    console.log( Math.max(...numberArray) );
})()