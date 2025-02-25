import "./App.css";
import Header from "./components/custom/Header";
import CreateRequestItem from "./components/page/CreateRequestItem";
function App() {
  return (
    <>
      <Header />
      <div className="m-4 p-4 flex border border-gray-400 rounded-md min-w-[172px]">
        <CreateRequestItem />
      </div>
    </>
  );
}

export default App;
