import Image from "next/image";
import { ItemChat as ChatItem } from "../interfaces/chat";
import React from "react";
import styles from '../styles/components/item-chat.module.scss';
export default function ItemChat({id, name, last_message, time, isOnline, image}: ChatItem) {
  return (
    <div className={`${styles['item-chat']}`}>
      <div>
        <Image width={50} height={50} src={image} alt={`image ${name}`} />
      </div>
      <div>
        <div className={styles.name}>{name}</div>
        <div>{last_message}</div>
        <small className="text-stone-400">{time}</small>
      </div>
    </div>
  )
}