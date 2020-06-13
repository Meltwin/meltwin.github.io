/**
 * @class CSS Loader : 
 * Use CSSLoader.addSheet(<src>) to add a stylesheet on the queue
 * Then use CSSLoader.constructSheets to make them
*/
class CSSLoader {

    static LOOP_INTERVAL = 500; // en ms

    constructor() {
        this.toConstruct = [];
        this.waiting = [];
        this.toExec = this.nothing;
    }
    nothing() {}
    /**
    * Add a script to be construct
    * @param {String} src
    */
    addSheet(src) {
        this.toConstruct.push(src);
    }
    /**
     * Get the index of a file
     * @param {String} src the path of the file
     * @return {number} the index
     */
    getSheetIndex(src) {
        for (let i=0; i<this.toConstruct.length;i++) {
            if (this.toConstruct[i] == src) return i;
        }
        return -1;
    }
    /**
     * Function to execute after the loading
     * @param {Method} funct the method to be executed after having loading
     */
    toExecuteAfter(funct) {
        this.toExec = funct;
    }
    /**
    * Construct all the given scripts
    */
    constructSheets() {
        if (VersionLoader.DEBUG) console.log(this);
        for (let i=0 ; i<this.toConstruct.length; i++) {
            this.waiting.push(true);
            this.makeSheet(this.toConstruct[i]);
        }
        this.toExec();
    }
    /**
    * Create a <script> element and append it in <head>
    * @param {String} src the path of the script
    */
    makeSheet(src) {
        // Debug
        if(VersionLoader.DEBUG) console.log("       - Loading script '"+src+"'");

        // Fonction
        let script = document.createElement("link");
        script.href = src;
        script.rel = "stylesheet";
        script.type = "text/css"
        document.head.appendChild(script); 
    }
}