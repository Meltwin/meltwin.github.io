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
        this.loop();
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
        script.href = href;
        script.addEventListener("load",(e)=>this.cssEndLoad(e,src),false);
        document.head.appendChild(script); 
    }
    /**
     * Wait for the script to be loaded
     * @param {Event} e the loading event
     * @param {String} src the path of the script
     */
    cssEndLoad(e,src) {
        if (e.eventPhase == 2) {
            let index = this.getSheetIndex(src);
            if (index != -1) this.waiting[index] = false;
        }
    }
    /**
     * Is loading ended ?
     */
    isLoadingEnded() {
        let b = true;
        for (let i=0;i<this.waiting.length;i++) {
            b = !this.waiting[i]&&b;
        }
        return b;
    }
    /**
     * Loop function while script are loading
     */
    loop() {
        if (this.isLoadingEnded()) {
            this.toExec();
        }
        else {
            setTimeout(()=>this.loop(),CSSLoader.LOOP_INTERVAL);
        }
    }
}