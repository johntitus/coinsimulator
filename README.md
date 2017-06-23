# coinsimulator
Simulates buying crypto-currencies over time.

Using historical data from CoinMarketCap, it runs a strategy against each week of data, buying coins.
At the end of the run, it tells you the value of your holdings.

**Requires Node.js.**

## Default Strategy
Buys the top 50 coins, by market cap, spending a total of $100 each week.  To change the number of coins or the amount spend, 
edit `strategies/top50.js` or create your own strategy and call it via the `-s` option below.

## Install
```
git clone git@github.com:johntitus/coinsimulator.git
cd coinsimulator
npm install
```
## Run
```
node simulate
```
## Options
```
-b, --begin [date] - Start date (YYYY-MM-DD)
-e, --end [date]  - End date(YYYY-MM-DD)
-s, --strategy [name] - Strategy to use // Defaults to top50
```
## Sample output
(runs from June 1, 2016 till present):
```
node simulate.js -b 2016-06-01
...
Spent: $5,500
Value: $75,846.427
Profit: $70,346.427
Growth: 1279.03%
```
