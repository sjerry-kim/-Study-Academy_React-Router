import { Outlet } from "react-router-dom";

const Number = () => {
  return (
    <div>
      <h1>NumberPage입니다</h1>
      <Outlet />
    </div>
  );
}

export default Number;