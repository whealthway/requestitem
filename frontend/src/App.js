import "./App.css";
// import Header from "./components/custom/Header";
import Button from "./components/ui/Button";
import Label from "./components/ui/Label";
import ItemRequest from "./page/ItemRequest/ItemRequest";
function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="p-[10px] m-[15px] md:p-[15px] md:m-[20px] lg:p-[20px] lg:m-[30px] xl:p-[30px] xl:m-[40px] border border-gray-200 rounded-md min-w-[300px]">
        <ItemRequest />
      </div>
    </>
  );
}

export default App;
