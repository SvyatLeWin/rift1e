export default class rift1eItemSHeet extends ItemSheet{
    // static get defaultOptions(){
    //     return mergeObject(super.defaultOptions,{
    //         width: 530,
    //         height: 340,
    //         classes:["rift1e","sheet","item"]
    //         });
        
    // }
    get template(){
        return `systems/rift1e/templates/sheets/${this.item.data.type}-sheet.html`;
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
