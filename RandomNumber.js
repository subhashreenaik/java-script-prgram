//creating array named randoms
const randoms = [10];

//Generating 3 digits 10 random numbers
for(let i=0;i<11;i++){
    let random = Math.floor(Math.random()*(999-100+1)+100);
    console.log(random);
    //store random values into array randoms
    randoms[i] = random;
    console.log(randoms[i]);
}

