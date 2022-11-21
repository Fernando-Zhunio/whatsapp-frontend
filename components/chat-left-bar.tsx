import { getItemsChat } from "../mocks/items-chat"
import ItemChat from "./item-chat";

export default function ChatLeftBar() {
    const itemsChats = getItemsChat();
    return (
        <div>
            <h2 className="text-4xl font-bold">Chats</h2>
            <div>
                {
                    itemsChats.map((item) => {
                        return <ItemChat key={item.id}
                            id={item.id}
                            name={item.name}
                            last_message={item.last_message}
                            time={item.time}
                            isOnline={item.isOnline}
                            image={item.image}
                        />
                    })
                }
            </div>
        </div>
    )
}