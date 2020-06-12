/**@class PageMaker */
class PageMaker {
    constructor() {
        this.scripts = [];
        this.css = [];
    }
    /**
    * Launch the making of the loading of js files
    */
    loadScripts() {
        if (this.scripts.length != 0) {
            let scLoader = new ScriptLoader();
            for (let i=0; i<this.scripts.length;i++) {
                scLoader.addScript(this.scripts[i]);
            }
            scLoader.toExecuteAfter(this.loadCssFiles);
    
            scLoader.constructScripts();
        }
        else {
            if (VersionLoader.DEBUG) console.log("     + No script need to be loaded");
            this.loadCssFiles();
        }
        
    }
    /**
    * Launch the making of the loading of css files
    */
    loadCssFiles() {
        if (this.css.length != 0) {
            let cssLoader = new CSSLoader();
            for (let i=0; i<this.css.length;i++) {
                cssLoader.addSheet(this.css[i]);
            }
            cssLoader.toExecuteAfter(this.endOfLoading);
    
            cssLoader.constructSheets();
        }
        else {
            if (VersionLoader.DEBUG) console.log("     + No stylesheet need to be loaded");
            this.endOfLoading()
        }
    }
    endOfLoading() {

    }
}