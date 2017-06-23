'use strict';

const program = require('commander');
const moment = require('moment');

const data = require('./data/snapshots.json');
const dateFormat = 'YYYY-MM-DD';

let holdings = {};
let latestPrices = {};

program
	.version('0.1.0')
	.option('-b, --begin [date]', 'Start date (YYYY-MM-DD)')
	.option('-e, --end [date]', 'End date(YYYY-MM-DD)')
	.option('-s, --strategy [name]', 'Strategy to use')
	.parse(process.argv);

let startDate = (program.begin) ? moment(program.begin, dateFormat) : moment('20140101', dateFormat);
let endDate = (program.end) ? moment(program.end, dateFormat) : moment();
let strategy = (program.strategy) ? require('./strategies/' + program.strategy) : require('./strategies/top50');

function showResults(holdings){
	let spent = 0;
	let value = 0;
	let profit = 0;
	let growth = 0.0;

	Object.keys(holdings).forEach(coinName => {
		let coin = holdings[coinName];
		spent += coin.spent;
		value += coin.value;
	});

	profit = value - spent;
	growth = profit / spent * 100;

	console.log('');
	console.log('Spent: $' + spent.toLocaleString());
	console.log('Value: $' + value.toLocaleString());
	console.log('Profit: $' + profit.toLocaleString());
	console.log('Growth: ' + growth.toFixed(2) + '%');
}

data.forEach(week => {
	if (moment(week.date, dateFormat).isAfter(startDate) && moment(week.date, dateFormat).isBefore(endDate)) {
		console.log('');
		console.log('Week of ' + week.date);
		holdings = strategy(holdings, week.coins);
	}
});

showResults(holdings);