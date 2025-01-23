export default class rift1eItemSHeet extends ItemSheet{
    // static get defaultOptions(){
    //     return mergeObject(super.defaultOptions,{
    //         width: 530,
    //         height: 340,
    //         classes:["rift1e","sheet","item"]
    //         });
        
    // }
    get template(){
        console.log("this.item",this.item);

        return `systems/rift1e/templates/sheets/${this.item.type}-sheet.html`;
    }
    // getData(){
    //     const baseData= super.getData();
    //     let sheetData={
    //         owner:this.item.isOwner,
    //         editable:this.isEditable,
    //         item:baseData.item,
    //         data:baseData.item.data.data,
    //         config: CONFIG.rift1e
    //     };
    //     return sheetData;
    // }
}
const attackTypes = {
    none: "",
    fencing: "rift1e.attack.fencing",
    shooting: "rift1e.attack.shooting",
    aesperForce: "rift1e.attack.aesperForce"
};

const attackOptions = Object.keys(attackTypes).map(key => {
    return {
        name: key, // или attackTypes[key] если хотите использовать значение
        value: attackTypes[key]
    };
});

this.set('attackOptions', attackOptions);