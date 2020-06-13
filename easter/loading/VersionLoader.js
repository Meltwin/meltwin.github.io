/** @class VersionLoader */
class VersionLoader {

    static DEBUG = false;

    constructor() {

        this.loadParameter = new LoadingParameter();
        this.parseQuery();

        // Debugging Startup
        this.checkDebugMode();
        if(VersionLoader.DEBUG) this.startDebuggingMode();

        this.scLoader = undefined;
        this.makePage();
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
    HomePage_1() {
        if (VersionLoader.DEBUG) console.log("  >> Preparing PageMaker");
        this.scLoader = new ScriptLoader();
        this.scLoader.addScript("./pages/Home/HomePageMaker.js");
        this.scLoader.toExecuteAfter(this.HomePage_2);

        this.scLoader.constructScripts();
    }
    HomePage_2() {
        if (VersionLoader.DEBUG) console.log("  >> Making Home Page");
        let home = new HomePageMaker();
    }
    /**
     * Start loaders for the differents pages
     */
    makePage() {
        if (this.loadParameter.keyExist(LoadingParameter.PARAM_PAGE)) { // Si la page est précisée
            switch(this.loadParameter.getValue(LoadingParameter.PARAM_PAGE)) {
                default:
                    this.HomePage_1();
                    break;
            }
        }
        else { // Par défaut on affiche le menu
            this.HomePage_1();
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
        console.log("  >> Page parameters : ");
        console.log("  --------------------");
        for (let i=0; i<this.loadParameter.key.length;i++) {
            console.log("       - "+this.loadParameter.key[i]+" => "+this.loadParameter.value[i]);
        }
    }
}