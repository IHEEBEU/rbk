/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)
It is possible to make £2 in the following way:
1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?
example usage of `makeChange`:
// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2
p piece
makeChange(2) === 2
*/

    
    const makeChange = function (total) {
    const coinValues = [1, 2, 5, 10, 20, 50, 100, 200];
    const ways = new Array(total + 1).fill(0);
    ways[0] = 1; // There's one way to make 0 pence, using no coins.

    for (const coin of coinValues) {
        for (let i = coin; i <= total; i++) {
            ways[i] += ways[i - coin];
        }
    }

    return ways[total];
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = makeChange;
// // // // // // // // // //
