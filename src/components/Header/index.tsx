import todoLogo from "../../assets/todoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddTaks: (taskTitle: string) => void;
}

export function Header({ onAddTaks }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTaks(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todoLogo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={onChangeTitle}
        />
        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
