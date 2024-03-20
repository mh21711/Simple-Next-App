'use client';
import { useRef, useState } from "react";
import styles from "./page.module.css";

function Home() {
  const [Things, SetThings] = useState([]);
  const Inputref = useRef<HTMLInputElement>(null);
  const HandleClick = () => {
    const Text = Inputref.current?.value;
    const Item = { Completed: false, Text}
    SetThings([...Things, Item])
    Inputref.current.value = "";
  }
  const HandleItemDone = (index: number) => {
    const NewItem = [...Things];
    NewItem[index].Completed = !NewItem[index].Completed;
    SetThings(NewItem);
  }
  const HandleItemDelete = (index: number) => {
    const NewItem = [...Things];
    NewItem.splice(index, 1);
    SetThings(NewItem);
  }
  let counter = 1;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>List To Do</h1>
      <ul className={styles.ul}>
        {Things.map((item, index) => {
          return (
            <div key={counter++} className={styles.item}>
              <li key={index} onClick={() => HandleItemDone(index)} className={item.Completed ? styles.done : ""}>{item.Text}</li>
              <span key={item} className={styles.delete} onClick={() => HandleItemDelete(index)}>❌</span>
            </div>
          )
        })}
      </ul>
      <input ref={Inputref} type="text" className={styles.input}  />
      <button className={styles.button} onClick={HandleClick}>Add</button>
    </div>
  );  
}

export default Home;
