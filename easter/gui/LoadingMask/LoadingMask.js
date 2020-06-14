/**
 * @class LoadingMask
 * @author Meltwin
 * Control for the loading Mask
 */
class LoadingMask {

    static ANIMATION_DURATION = 750-10;


    static hide() {
        let mask = document.getElementById("loadingMask");

        mask.classList.remove("show");
        mask.classList.add("hide");

        setTimeout(LoadingMask.displayHide,LoadingMask.ANIMATION_DURATION);
    }
    static displayHide() {
        let mask = document.getElementById("loadingMask");
        mask.style.display = "none";
    }

    static show() {
        let mask = document.getElementById("loadingMask");

        mask.style.display = "flex";

        mask.classList.add("show");
        mask.classList.remove("hide");
    }
}