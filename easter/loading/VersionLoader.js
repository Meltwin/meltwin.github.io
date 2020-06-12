/** @class VersionLoader */
class VersionLoader {

    static DEBUG = false;

    constructor() {

        this.loadParameter = new LoadingParameter();
        this.parseQuery();

        // Debugging Startup
        this.checkDebugMode();
        if(VersionLoader.DEBUG) this.startDebuggingMode();

        this.returnPageMaker()();
    }
    /**
     * Parse queries and make the LoadParameter
     */
    parseQuery() {
        let paramString = document.location.search.substr(1); // Remove the ? 
        let toParse = paramString.split("&");

        // Parse all the parameters
        for (let i =0; i<toParse.length; i++) {
            if (toParse[i].length === 0) continue;
            let string = toParse[i];

            let strT = string.split("=");
            this.loadParameter.addParam(strT[0],strT[1]);
        }
    }
    /**
     * Make the menu page (choosing between the differents versions)
     */
    makeChooseGame() {

    }
    /**
     * Start loaders for the differents pages
     * @return {Function}
     */
    returnPageMaker() {
        if (this.loadParameter.keyExist(LoadingParameter.PARAM_PAGE)) { // Si la page est précisée
            switch(this.loadParameter.getValue(LoadingParameter.PARAM_PAGE)) {
                default:
                    return this.makeChooseGame;
            }
        }
        else { // Par défaut on affiche le menu
            return this.makeChooseGame;
        }
    }
    /*
        ####################################
                    DEBUGGING
        ####################################
    */
    checkDebugMode() {
        VersionLoader.DEBUG = this.loadParameter.keyExist(LoadingParameter.PARAM_DEBUG);
    }
    /** 
     *  Start Debuggings properties
     */ 
    startDebuggingMode() {
        console.log("#######################################################");
        console.log("               Starting Debugging Motor                ");
        console.log("#######################################################");

        this.checkParamDebug();
    }
    checkParamDebug() {
        console.log("  >> Printing passed parameters : ");
        console.log("  -------------------------------");
        for (let i=0; i<this.loadParameter.key.length;i++) {
            console.log("       - "+this.loadParameter.key[i]+" => "+this.loadParameter.value[i]);
        }
    }
}