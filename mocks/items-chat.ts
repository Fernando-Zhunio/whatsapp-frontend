import { ItemChat } from "../interfaces/chat";

// create export function of 30 items with random data and images from https://picsum.photos/
export function getItemsChat(): ItemChat[] {
    let items: ItemChat[] = [];
    for (let i = 0; i < 30; i++) {
        items.push({
            id: i,
            name: "Name " + i,
            last_message: "Last message " + i,
            time: "Time " + i,
            isOnline: Math.random() > 0.5,
            image: "https://picsum.photos/200/300?random=" + i
        });
    }
    return items;
}
