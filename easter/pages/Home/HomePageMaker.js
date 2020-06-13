/**@class HomePageMaker */
class HomePageMaker extends PageMaker {
    constructor() {
        super();

        this.scripts.push("./gui/Borders/BorderFactory.js");
        this.scripts.push("./gui/GUI_Win01/GUI_Win01.js");

        this.css.push("./gui/Borders/border.css");
        this.css.push("./gui/GUI_Win01/GUI_Win01.css");
        this.css.push("./pages/Home/Home.css");

        this.construct = this.constructStruct;


        this.loadScripts();
    }
    constructStruct() {
        if (VersionLoader.DEBUG) console.log("     + Creating DOM");
        // Construct the DOM of the page
        let wd = new GUI_Win01();
        wd.createDiv();
        document.body.appendChild(wd.div);

        
    }
}