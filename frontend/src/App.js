import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header";
// import ItemRequest from "./pages/itemrequest/ItemRequest";
function App() {
  return (
    <>
      <Header />
      <main className="p-[10px] m-[15px] md:p-[15px] md:m-[20px] lg:p-[20px] lg:m-[30px] xl:p-[30px] xl:m-[40px] border border-gray-200 rounded-md min-w-[550px]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
