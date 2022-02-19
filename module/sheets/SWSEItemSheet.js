export class SWSEItemSheet extends ItemSheet {
    get template() {
        const path = "systems/swse-foundryvtt/templates/sheets";

        return `${path}/${this.item.data.type}-sheet.html`;
    };

    getData() {
        const baseData = super.getData();
        let sheetData = {
            owner: this.item.owner,
            editable: this.editable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.SWSE
        }

        return sheetData;
    }
}
