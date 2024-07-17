const marvels_heros= ["thor","irronman","spiderman"]
const dc_heros=["superman","flash","batman"]



//Note:push jo ha wo existing array py hi push krta ha


// marvels_heros.push(dc_heros)
// console.log(marvels_heros);


//Note:concat return new array

const all_herros=marvels_heros.concat(dc_heros)
// console.log(all_herros);

//Note:   ...means speared
const all_newherros=[...marvels_heros, ...dc_heros]
// console.log(all_newherros);

const another_array=[1,2,3,4,[5,6,7],8,[9,10,[11]]]
const real_another_array= another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("fatima"));
console.log(Array.from("fatima"));
console.log(Array.from({name:"fatima"})); //interesting


  let score1 =  100
  let score2 =  200
  let score3 =  300

  console.log(Array.of(score1,score2,score3));

