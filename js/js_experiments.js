// ***** Print the date to the console in the following formats: *****
// Friday, September 10, 2017
// Today is Friday, the 10th of September, 2017.

function printDate() {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	const now = new Date();
	const dayOfMonth = now.getDate();
	const dayName = days[now.getDay()];
	const month = months[now.getMonth()];
	const year = now.getFullYear();

	function ordinalIndicator(day) {
		if(day === 1) {
			return `${day}st`;
		} else if(day === 2) {
			return `${day}nd`;
		} else if(day === 3) {
			return `${day}rd`;
		} else {
			return `${day}th`;
		}
	}

	const dateFormat1 = `${dayName}, ${month} ${dayOfMonth}, ${year}`;
	const dateFormat2 = `Today is ${dayName}, the ${ordinalIndicator(dayOfMonth)} of ${month}, ${year}.`;

	return dateFormat1 + '\n' + dateFormat2;
}

console.log(printDate());