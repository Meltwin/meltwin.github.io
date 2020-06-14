/**@class HomePageMaker */
class HomePageMaker extends PageMaker {
    constructor() {
        super();

        if (VersionLoader.DEBUG) console.log("  >> Making Home Page");

        this.scripts.push("./gui/Borders/BorderFactory.js");
        this.scripts.push("./gui/DivWrapper.js");
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

        let classic  = document.createElement("button");
        let advanced = document.createElement("button");

        classic.innerHTML = "Classique";
        classic.onclick = ()=>{
            LoadingMask.show();
            setTimeout(()=>{
                document.location.href=`./index.html?=${LoadingParameter.PARAM_PAGE}=${LoadingParameter.PARAM_CLASSIC}`;
            },LoadingMask.ANIMATION_DURATION);
        };
        advanced.innerHTML = "Avancé";
        advanced.onclick = ()=>{
            LoadingMask.show();
            setTimeout(()=>{
                document.location.href=`./index.html?=${LoadingParameter.PARAM_PAGE}=${LoadingParameter.PARAM_ADVANCED}`;
            },LoadingMask.ANIMATION_DURATION);
        };

        wd.inner.appendChild(classic);
        wd.inner.appendChild(advanced);

        document.body.appendChild(wd.div);  

        LoadingMask.hide();
    }
}