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
    /*
        ####################################
                      HOME PAGE
        ####################################
    */
    /**
     * Make the menu page (choosing between the differents versions)
     */
    HomePage() {
        if (VersionLoader.DEBUG) console.log("  >> Preparing PageMaker");
        this.scLoader = new ScriptLoader();
        this.scLoader.addScript("./pages/Home/HomePageMaker.js");
        this.scLoader.toExecuteAfter(()=>{
            new HomePageMaker();
        });

        this.scLoader.constructScripts();
    }
    /*
        ####################################
                    CLASSIC PAGE
        ####################################
    */
    ClassicPage() {
        this.scLoader = new ScriptLoader();
        this.scLoader.addScript("./pages/ClassicGame/ClassicPageMaker.js");
        this.scLoader.toExecuteAfter(()=>{

        });
        this.scLoader.constructScripts();
    }
    /**
     * Start loaders for the differents pages
     */
    makePage() {
        if (this.loadParameter.keyExist(LoadingParameter.PARAM_PAGE)) { // Si la page est précisée
            switch(this.loadParameter.getValue(LoadingParameter.PARAM_PAGE)) {
                case LoadingParameter.PARAM_CLASSIC:
                    this.ClassicPage();
                    break;
                default:
                    this.HomePage();
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