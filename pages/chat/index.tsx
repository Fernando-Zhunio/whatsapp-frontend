import ChatLeftBar from "../../components/chat-left-bar";

export default function Chat() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 divide-x"><ChatLeftBar/></div>
    </div>
  )
}