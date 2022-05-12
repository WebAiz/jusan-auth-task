import {handleRoute} from "./modules/routes";

const root = document.querySelector("#root");

if (typeof window !== undefined) {
    handleRoute()
}