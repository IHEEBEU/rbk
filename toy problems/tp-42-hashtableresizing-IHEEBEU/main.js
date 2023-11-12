/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
const getIndexBelowMaxForKey = function(str, max) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };
  
  /**
   *
   * @constructor makeHashTable
   * @return {Object}
   */
 const makeHashTable = function() {
  const result = {};
  const storage = [];
  let storageLimit = 4;
  let size = 0;
  
  // Helper function to resize the hash table
  const resize = (newLimit) => {
    const oldStorage = storage;
    storageLimit = newLimit;
    storage.length = 0;
    size = 0;
    
    for (let i = 0; i < oldStorage.length; i++) {
      if (oldStorage[i]) {
        for (let j = 0; j < oldStorage[i].length; j++) {
          result.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
        }
      }
    }
  };

  result.insert = function(key, value) {
    const index = getIndexBelowMaxForKey(key, storageLimit);

    if (!storage[index]) {
      storage[index] = [];
    }

    let found = false;
    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        storage[index][i][1] = value; // Update existing key
        found = true;
        break;
      }
    }

    if (!found) {
      storage[index].push([key, value]);
      size++;

      if (size >= storageLimit * 0.75) {
        resize(storageLimit * 2); // Double the storage limit
      }
    }
  };

  result.retrieve = function(key) {
    const index = getIndexBelowMaxForKey(key, storageLimit);

    if (storage[index]) {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1]; // Return the value associated with the key
        }
      }
    }

    return undefined; // Key not found
  };

  result.remove = function(key) {
    const index = getIndexBelowMaxForKey(key, storageLimit);

    if (storage[index]) {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index].splice(i, 1); // Remove the key-value pair
          size--;

          if (size <= storageLimit * 0.25 && storageLimit > 4) {
            resize(Math.max(4, Math.floor(storageLimit / 2))); // Halve the storage limit
          }

          break;
        }
      }
    }
  };

  return result;
};



  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //ignore the below code // //
  module.exports = makeHashTable;
  // // // // // // // // // //
  