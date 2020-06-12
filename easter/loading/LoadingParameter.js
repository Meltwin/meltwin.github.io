/** @class LoadingParameter */
class LoadingParameter {

    static PARAM_PAGE = "page";
    static PARAM_DEBUG = "debug";


    constructor() {
        this.key = [];
        this.value = [];
    }
    /**
     * Add a loading parameter
     * 
     * @param {String} key
     * @param {String} value
     */
    addParam(key,value) {
        this.key.push(key);
        this.value.push(value);
    }
    /**
     * Check if the key exist
     * @param {String} key
     * @return {Boolean}
     */ 
    keyExist(key) {
        for (let i = 0; i<this.key.length;i++) {
            if (this.key[i] == key) return true;
        }
        return false;
    }
    /**
     * Return the value bound to the key
     * @param {String} key 
     * @return {String} the value
     */
    getValue(key) {
        let index = this.key.findIndex(key);
        return this.value[index];
    }
}