import { useState } from "react";
import { Link, Outlet} from "react-router-dom";

const Board = () => {
  const [list, setList] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [memolist, setMemolist] = useState([
    {id : 1, memo : "첫번째 내용 입니다"},
    {id : 2, memo : "두번째 내용 입니다"},
])

  return (
    <div>
      {
        memolist.map((item)=>(
          <Link to={"/board/"+item.id}>{item.id}</Link>
        ))
      }
      <Outlet />
    </div>
  );
}

export default Board;