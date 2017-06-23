# coinsimulator
Simulates buying crypto-currencies over time.

Using historical data from CoinMarketCap, it runs a strategy against each week of data, buying coins.
At the end of the run, it tells you the value of your holdings.

**Requires Node.js.**

To install:
```
git clone git@github.com:johntitus/coinsimulator.git
cd coinsimulator
npm install
```
To run:
```
node simulate
```
Options:
```
-b, --begin [date] - Start date (YYYY-MM-DD)
-e, --end [date]  - End date(YYYY-MM-DD)
-s, --strategy [name] - Strategy to use // Defaults to top50
```
Sample output (runs from June 1, 2016 till present):
```
node simulate.js -b 2016-06-01
...
Spent: $5,500
Value: $80,460.411
Profit: $74,960.411
Growth: 1362.92%
```
