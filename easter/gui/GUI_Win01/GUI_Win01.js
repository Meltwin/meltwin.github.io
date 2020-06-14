/**
 * @class GUI_Win01
 * @author Meltwin
 * A windows with wood border
 */
class GUI_Win01 {

    static CLASS = "Gui_Win01";
    static ROW_CLASS = "row";
    static INNER_CLASS = "inner";

    constructor() {
        //HTMLDivElement.new();
        this.row = undefined;

        this.createDiv();
    }
    createDiv() {
        if (VersionLoader.DEBUG) console.log("       - Creating GUI_Win01");
        // Container
        this.div = document.createElement("div");
        this.div.classList.add(GUI_Win01.CLASS);

        // Content
        this.div.appendChild(BorderFactory.makeHoriBorder());
            this.createMiddleDiv();
        this.div.appendChild(BorderFactory.makeHoriBorder());
    }
    createMiddleDiv() {
        this.row = document.createElement("div");
        this.row.classList.add(GUI_Win01.ROW_CLASS);

        this.row.appendChild(BorderFactory.makeVertBorder());
            this.inner = document.createElement("div");
            this.inner.classList.add(GUI_Win01.INNER_CLASS);
            this.row.appendChild(this.inner);
        this.row.appendChild(BorderFactory.makeVertBorder());

        this.div.appendChild(this.row);
    }
}