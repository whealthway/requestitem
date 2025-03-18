import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header";
// import ItemRequest from "./pages/itemrequest/ItemRequest";
function App() {
  return (
    <div className="bg-[#eef5f9] font-poppins h-auto 2xl:h-screen">
      <Header />
      <link rel="stylesheet" href="index.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      <main className="p-[10px] m-[15px] md:p-[15px] md:m-[20px] lg:p-[20px] lg:m-[30px] xl:p-[30px] xl:m-[40px] rounded-md min-w-[550px] border-2 bg-[#eef5f9]">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
