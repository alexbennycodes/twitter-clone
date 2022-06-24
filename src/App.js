import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="App mx-auto max-w-7xl grid grid-cols-12 h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
