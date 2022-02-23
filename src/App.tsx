import "./App.css";
import { useState } from "react";
import Carousel from "./components/Carousel";

function App() {
  const [images] = useState([
    "https://images.unsplash.com/photo-1523459178261-028135da2714?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTU3NzI4NA&ixlib=rb-1.2.1&q=80&w=600",
    "https://images.unsplash.com/photo-1643188389404-5a10e50023bf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTU3NzI5OQ&ixlib=rb-1.2.1&q=80&w=600",
    "https://images.unsplash.com/photo-1644251787786-7900294784af?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTU3NzMwMw&ixlib=rb-1.2.1&q=80&w=600",
    "https://images.unsplash.com/photo-1644132767458-979cb1c28f7d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTY0Nzk4OA&ixlib=rb-1.2.1&q=80&w=600",
    "https://images.unsplash.com/photo-1644965143793-222fd8107b51?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTY0ODAzMw&ixlib=rb-1.2.1&q=80&w=600",
  ]);
  return (
    <div className="App">
      <div className="container"> 
        <h1 className="title">Tlacaelel Leon Villaseñor</h1>
        <div className="center">
          <Carousel images={images} delay={2000} /> 
        </div>
      </div>
    </div>
  );
}

export default App;
