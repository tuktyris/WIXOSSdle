const date = new Date();

today = mulberry32(date.getFullYear() + "" + date.getMonth() + date.getDate());

console.log(today);

fetch('./cards.json')
	.then(results => results.json())
	.then(console.log);


function mulberry32(seed) {
	let value = seed;
	let z = (seed += 0x6D2B79F5);
	z = Math.imul(z ^ (z >>> 15), z | 1);
	z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
	value = ((z ^ (z >>> 14)) >>> 0) / 4294967296;
	
	value = Math.floor(value * 2000);
    return value;
  }

