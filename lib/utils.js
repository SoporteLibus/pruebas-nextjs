import { getItems } from "../services/itemService";

export async function getPathsFromIds(){
    const items = await getItems();
    const ids = items.map(item => {
        return {
            params: {
                id: item.id,
            }
        }
    });
return ids;
}

export async function getItemData(id){
    const item = await getItems();
    const product = item.find((item) => item.id == id);
    return {
        id: id,
        data: product,
    }
}