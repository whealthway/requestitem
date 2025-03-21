import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header";
// import ItemRequest from "./pages/itemrequest/ItemRequest";
function App() {
  return (
    <div className="bg-[#eef5f9] font-poppins min-h-screen">
      <Header />
      <main className="p-[8px] mt-[8px] md:p-[10px] md:mt-[10px] lg:p-[15px] lg:mt-[15px] xl:p-[20px] xl:mt-[20px] rounded-md min-w-[550px] bg-[#eef5f9] bg-inherit h-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
