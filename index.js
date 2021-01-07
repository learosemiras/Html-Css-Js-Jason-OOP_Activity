const section = document.querySelector("section");

let para1 = document.createElement('p')
let para2 = document.createElement('p')

let motherInfo;
let kittenInfo;

fetch('https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/tasks/json/sample.json')
.then(response => response.json())
.then(json => displayCatInfo(json))
.catch(err => console.log(err))

function displayCatInfo(catString) {
	let total = 0;
	let male = 0;	
	let female = 0;

	catString.forEach(cat => {

		cat.kittens.forEach(kitten => {
			if(kitten.gender === 'f') {
				female ++;
			} else {
				male ++;
			}
			total ++
		})
	})

	motherInfo = `Mother's name: ${catString[0].name}, ${catString[1].name}, ${catString[2].name}`
	kittenInfo = `Kittens: ${male} male and ${female} female, total of ${total} kittens`

	para1.textContent = motherInfo;
	para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
