const makeHashTable = require("./main");

describe('makeHashTable', () => {
    test('should exist', () => {
        expect(makeHashTable).toBeDefined();
    });

    test('should return a hash table', () => {
        let hashTable = makeHashTable();
        expect(hashTable).toStrictEqual(expect.any(Object));
    });

    test('should return different instances of hash tables each time', () => {
        let hashTable1 = makeHashTable();
        expect(hashTable1).toBeDefined();

        let hashTable2 = makeHashTable();
        expect(hashTable2).toBeDefined();

        expect(hashTable1).not.toStrictEqual(hashTable2);
        // `makehashTable()` should create a new hash table object instance
        // everytime but it's not!
    });
});

describe('hashTable', () => {
    describe('#insert', () => {
        test('should exist as a method of hashtable instances', () => {
            const hashTable = makeHashTable();
            expect(hashTable.insert).toStrictEqual(expect.any(Function));
        });

        test('should take exactly two arguments. a key and a value', () => {
            let hashTable = makeHashTable();
            expect(hashTable.insert).toHaveLength(2);

            // hashTable.insert.length.should.equal(2);
            /**
             A Hash Table gets its awesomeness from associating data. It wouldn't be
             very useful if you just gave it data without any association.
             */
        });

        /*    it('should not throw an error with valid input', () =>{
              (() =>{
                let hashTable = makeHashTable();
                hashTable.insert('keanu reeves best movie', 'The Matrix');
                // calling insert should not throw an error
              }).should.not.throw();
            });*/
        test('should allow keys to be reinserted with new values', () =>  {
            let hashTable = makeHashTable();
            expect((() =>  {
                hashTable.insert('keanu reeves best movie', 'Bill & Ted\'s Excellent Adventure');
                hashTable.insert('keanu reeves best movie', 'The Matrix');
            })).not.toThrow();
        });
        /*it('should throw an error if keys are not strings', () => {
          // not a HUGE deal but only strings should be keys. regular objects
          // converted to strings are always '[object Object]'
          let hashTable = makeHashTable();
          (() => {
            hashTable.insert({foo:'bar'}, 'oh no!');
          }).should.throw();
        });*/
    });

    describe('#retrieve', () => {
        test('should be a method of hashTable instances', () => {
            const hashTable = makeHashTable();
            expect(hashTable.retrieve).toStrictEqual(expect.any(Function));
        });

        test('should take exactly one argument', () => {
            const hashTable = makeHashTable();
            // the retrieve function should only take a single `key` argument
            expect(hashTable.retrieve).toHaveLength(1);
        });

        test('should return values previously inserted', () => {
            const hashTable = makeHashTable();
            hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
            const value = hashTable.retrieve('William Shatner\'s most well known role');
            expect(value).toBeDefined();
            expect(value).toBe('Captain Kirk');
        });

        test('should return undefined for unknown keys', () => {
            const hashTable = makeHashTable();
            expect(hashTable.retrieve('echo?')).not.toBeDefined();
        });
    });

    describe('#insert', function() {
        test('should allow valus to be updated', () => {
            let hashTable = makeHashTable();
            hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
            hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
            let value = hashTable.retrieve('Tarantino\'s best movie');
            expect(value).toBeDefined();
            expect(value).toBe('Pulp Fiction');
        });
    });

    describe('#remove', () => {
        test('should exist as a method of the hashTable instance', () => {
            let hashTable = makeHashTable();
            expect(hashTable.remove).toStrictEqual(expect.any(Function));
        });

        test('should take exactly one argument', () => {
            let hashTable = makeHashTable();
            // the remove function should only take a single `key` argument
            expect(hashTable.remove).toHaveLength(1);
        });

        test('should allow values to be removed', () => {
            let hashTable = makeHashTable();
            hashTable.insert('Spielberg\'s best movie', 'Jaws');
            hashTable.remove('Spielberg\'s best movie');
            let value = hashTable.retrieve('Spielberg\'s best movie');
            expect(value).not.toBeDefined();
        });
    });

    describe('#insert', () => {
        test('should handle collisions', () => {
            const hashTable = makeHashTable();
            expect((function() {
                let n = 1000;
                for (let i = 0; i < n; i++) {
                    hashTable.insert('userid:' + (i++), 'Jamie Hyneman');
                }
            })).not.toThrow()
        });
    });
    test('should be able to resize', () => {
        // If your hashtable isn't resizing, its going to start running more
        // and more slowly with a large number of inserts and retrievals.
        let hashTable = makeHashTable();
        let n = 10;
        let id = 0;
        let diffs = [];
        let endTime;
        let startTime;
        for (let i = 0; i <= n; i++) {
            startTime = new Date();
            for (let j = 0; j < 1000; j++) {
                hashTable.insert('userid:' + (id++), 'Syd Mead');
            }
            for (let j = 0; j < 100; j++) {
                hashTable.retrieve('userid:' + Math.floor(Math.random() * i));
            }
            endTime = new Date();
            diffs.push(endTime - startTime);
        }
        let sum = arr => {
            let total = 0;
            for (let i = 0; i < arr.length; i++) {
                total += arr[i];
            }
            return total;
        };
        // We should expect the first iteration to take up roughly 1 / n
        // of the total time. We give it some wiggle room by letting it be as
        // low as a 1 / (n*2) of the total duration.
        const ratio = (diffs[0] / sum(diffs));
        expect(ratio).toBeGreaterThan(1 / ( n * 2 ));
    });
});
