# Javascript setTimeout Tester

To run: `npm start`

Uses vanilla Javascript methods to simulate millions of setTimeout requests.

The example output below shows that after 5 hours, memory usage reaches around 1.00 to 1.10 GiB. The test used node `v6.11.4`, and had a maximum random timeout of 10 minutes (_600 seconds_). The 1,809,376 outstanding work tasks represent `setTimeout` calls that have yet to return. I estimate that each timeout takes up approximately ~550 bytes of memory. I was able to half the amount of memory usage per outstanding request by removing an anonymous function closure passed directly into the `setTimeout` method.

Over the 5 hour period, we can see that over 11,000,000 work jobs have been completed for the hovercraft category. In total 69,233,300 work items were completed, at a rate of 3,846 work items per-second on average.

10 minutes into working:
```
Work report at: 10/20/2017 10:02am Outstanding Work: 1727346 items
...
```

5 hours later:
```
Work report at: 10/20/2017 2:02pm Outstanding Work: 1809376
```
```json
{
 "hovercraft": {
   "count": 11607161,
   "totalTimeSpentSeconds": 3450515329.575148,
   "minimum": 44,
   "maximum": 39,
   "sum": 508517247
 },
 "car": {
   "count": 3525585,
   "totalTimeSpentSeconds": 1049498342.481977,
   "minimum": 37,
   "maximum": 32,
   "sum": 129780836
 },
 "truck": {
   "count": 5700602,
   "totalTimeSpentSeconds": 1695728486.263806,
   "minimum": 39,
   "maximum": 34,
   "sum": 221244410
 },
 "bicycle": {
   "count": 8022651,
   "totalTimeSpentSeconds": 2387764697.581733,
   "minimum": 41,
   "maximum": 36,
   "sum": 327412899
 },
 "tram": {
   "count": 4670999,
   "totalTimeSpentSeconds": 1389958979.5209723,
   "minimum": 38,
   "maximum": 33,
   "sum": 176615166
 },
 "motorcycle": {
   "count": 11642972,
   "totalTimeSpentSeconds": 3458359122.0658345,
   "minimum": 44,
   "maximum": 39,
   "sum": 510080200
 },
 "aeroplane": {
   "count": 10255927,
   "totalTimeSpentSeconds": 3048745339.6126666,
   "minimum": 43,
   "maximum": 38,
   "sum": 439061425
 },
 "train": {
   "count": 5744836,
   "totalTimeSpentSeconds": 1709068926.3921614,
   "minimum": 39,
   "maximum": 34,
   "sum": 222964186
 },
 "van": {
   "count": 3459425,
   "totalTimeSpentSeconds": 1027931395.6629624,
   "minimum": 37,
   "maximum": 32,
   "sum": 127342834
 },
 "ship": {
   "count": 4603142,
   "totalTimeSpentSeconds": 1369033734.5880346,
   "minimum": 38,
   "maximum": 33,
   "sum": 174048891
 }
}
```
