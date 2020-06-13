/**
 * @class Border Factory
 * @author Meltwin
 * 
 * Create div border
 */
class BorderFactory {

    static VERT_CLASS = "vertical_border";
    static HORI_CLASS = "horizontal_border";

    /**
     * Return a vertical Border
     * @return {HTMLDivElement} the border
     */
    static makeVertBorder() {
        let border = document.createElement("div");
        border.classList.add(BorderFactory.VERT_CLASS);
        return border;
    }

    /**
     * Return a vertical Border
     * @return {HTMLDivElement} the border
     */
    static makeHoriBorder() {
        let border = document.createElement("div");
        border.classList.add(BorderFactory.HORI_CLASS);
        return border;
    }
}