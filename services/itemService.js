export async function getItems(){
    const request = await fetch("http://localhost:3001/api/items");
    const items = await request.json()

    return items
}

export async function getLatestItem(){
    const items = await getItems();
    return items.slice(0, 3);
}