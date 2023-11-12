function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}

function filter(array, predicate) {
	var acc = [];
	each(array, function (element, i) {
		if (predicate(element, i)) {
			acc.push(element);
		}
	});
	return acc;
}

function map(array, func) {
	var acc = [];
	each(array, function (element, i) {
		acc.push(func(element, i));
	});
	return acc;
}

function reduce(array, f, acc) {
	if (acc === undefined) {
		acc = array[0];
		array = array.slice(1);
	}
	each(array, function (element, i) {
		acc = f(acc, element, i);
	});
	return acc;
}

var kids = [
	{
		name: "Adib",
		age: 10,
		heightInInches: 52,
	},
	{
		name: "Houssy",
		age: 9,
		heightInInches: 45,
	},
	{
		name: "Eya",
		age: 10,
		heightInInches: 55,
	},
	{
		name: "Khouloud",
		age: 11,
		heightInInches: 48,
	},
];

// ⚠️⚠️⚠️ you can only use each of the high order functions once for each exercice function, and even once in that function too!!
//it means that you will be using each, map, filter and reduce only one time inside the following functions.

var tallest = function (kids) {
	var tall = kids[0];
	each(kids, function (e, i) {
		if (tall.heightInInches < e.heightInInches) {
			tall = e;
		}
	});
	return tall;
};

var oldEnough = function (kids) {
	//return an array of the kids old enough to get in the rides(min 10 years old)
	var arr = [];
	each(kids, function (e, i) {
		if (e.age <= 10) {
			arr.push(e);
		}
	});
	return arr;
};
var names = function (kids) {
	var namess = [];
	each(kids, function (e, i) {
		namess.push(e.name);
	});
	return namess;
};

var totalHeight = function (kids) {
	var heighttotal = 0;
	each(kids, function (e, i) {
		heighttotal += e.heightInInches;
	});
	return heighttotal;
};
