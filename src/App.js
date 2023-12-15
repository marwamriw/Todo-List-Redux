import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { motion } from "framer-motion"


//root component
function App() {
  return (
    <div className="App">
      <motion.h1 whileHover={{ scale: 1.3 }}> TO-DO-LIST</motion.h1>
    <AddTask/>
    <ListTask/>
    </div>
  );
}

export default App;
