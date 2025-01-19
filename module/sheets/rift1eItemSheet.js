export default class rift1eItemSHeet extends ItemSheet{
    get template(){
        return `systems/rift1e/templates/sheets/${this.item.data.type}-sheet.html`;
    }
    getData(){
        const data= super.getData();
        data.config=CONFIG.rift1e;
        return data;
    }
}
//Finall?