function splitAndAdd(digits){
    if(Math.floor(digits/10)==0){
        return digits
    }
    return splitAndAdd(Math.floor(digits/10)) + digits % 10
}