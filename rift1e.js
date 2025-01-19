import { rift1e } from "./module/config";
import rift1eItemSHeet from "./module/sheets/rift1eItemSheet.js";

Hooks.once("init", function(){
    game.rift1e={
        rift1eActor,
        rift1eItem,
        rollItemMacro
    },
    console.log("rift1e | Initialising Rift system");
    CONFIG.rift1e=rift1e;
    CONFIG.Item.documentClass = rift1eItem;
    CONFIG.Actor.documentClass = rift1eActor;
    Items.unregisterSheet("core",ItemSheet);
    Items.registerSheet("rift1e",rift1eItemSHeet,{makeDefault: true});
});