import Counter from "./Counter";
import Greeting from "./Greeting";
import React, { useState } from "react";
// import TodoList from "./ToDoList";

function Example() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <br />
      
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />

      <input type="number" placeholder="Umur" value={age} onChange={handleAgeChange} />

      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />

      <p>
        {name} berumur {age} tahun dan emailnya adalah {email}.
      </p>
    </div>
  );
}

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Daftar Tugas</h2>
      <input
        type="text"
        placeholder="Tambahkan tugas"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Tambah</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDeleteTask(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Komponen Header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Komponen Main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya!</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  );
}

// Komponen Footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Aplikasi React Saya</p>
    </footer>
  );
}

// Kommponen App yang menggunakan Header, Main, dan Footer
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="John" />
      <Counter />
      <Example />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
