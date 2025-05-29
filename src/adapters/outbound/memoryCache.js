class MemoryCache {
    /**
 * Creates an instance of MemoryCache.
 *
 * @constructor
 */
constructor() {
      this.cache = new Map();
    }
  
    /**
 * Description placeholder
 *
 * @param {*} key 
 * @returns {*} 
 */
get(key) {
      return this.cache.get(key);
    }
  
    /**
 * Description placeholder
 *
 * @param {*} key 
 * @param {*} value 
 */
set(key, value) {
      this.cache.set(key, value);
    }
  
    /**
 * Description placeholder
 *
 * @param {*} key 
 * @returns {*} 
 */
has(key) {
      return this.cache.has(key);
    }
  }
  
  module.exports = MemoryCache;
  