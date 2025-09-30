import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] overflow-hidden">
        <Outlet />
      </div>
    </>
  );
}

export default App;
