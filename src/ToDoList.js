// import React, { useState } from "react";

// function TodoList() {
//   const [tasks, setTasks] = useState([]);
//   const [taskInput, setTaskInput] = useState("");

//   // Fungsi untuk menangani perubahan input
//   const handleInputChange = (e) => {
//     setTaskInput(e.target.value);
//   };

//   // Fungsi untuk menambahkan tugas baru
//   const handleAddTask = () => {
//     if (taskInput.trim() === "") return; // Cegah tugas kosong
//     setTasks([...tasks, taskInput]);
//     setTaskInput(""); // Reset input setelah menambahkan tugas
//   };

//   // Fungsi untuk menghapus tugas berdasarkan index
//   const handleDeleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   };

//   return (
//     <div>
//       <h2>Daftar Tugas</h2>
//       <input
//         type="text"
//         placeholder="Tambahkan tugas baru..."
//         value={taskInput}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleAddTask}>Tambah</button>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task} 
//             <button onClick={() => handleDeleteTask(index)}>Hapus</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;