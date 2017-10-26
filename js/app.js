// Old Code

// let str = 'There are x days until Halloween!';

// let halloweenDate = new Date(new Date().getFullYear(), 9, 31);

// let complexStr = str.replace('x', dayCount(new Date, halloweenDate));

// console.log(complexStr);

// function dayCount(start, end) {
//   return Math.round((end - start)/(1000*60*60*24)); // (ms*sec*min*hr)
// }

// New Code

function SpecialDay(name, day, month) {
	this.name = name;
	this.day = day;
	this.month = month;
	this.date = new Date(new Date().getFullYear(), this.day, this.month);
}

const halloween = new SpecialDay('Halloween', 9, 31);
const thanksgiving = new SpecialDay('Thanksgiving', 11, 25);
const christmas = new SpecialDay('Christmas', 12, 25);

function daysTillHoliday(specialDay) {

	function dayCount(start, end) {
		return Math.round((end - start)/(1000*60*60*24)); // (ms*sec*min*hr)
	}

	const daysLeft = dayCount(new Date, specialDay.date);

	return `There are ${daysLeft} days until ${specialDay.name}`;
}
console.log(daysTillHoliday(halloween));
console.log(daysTillHoliday(thanksgiving));
console.log(daysTillHoliday(christmas));