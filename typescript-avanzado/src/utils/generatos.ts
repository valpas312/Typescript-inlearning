function* tryCounter(): Iterator<number> {
    let index = 0;
    while(index < 4){
        yield index++;
    }
}

let secureTry = tryCounter();

export default secureTry;