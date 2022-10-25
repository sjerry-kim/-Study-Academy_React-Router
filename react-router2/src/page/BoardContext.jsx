import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../context/ContextComp";

const BoardContext = () => {
  // 데이터는 서버에서 구분해서 들고와 준다
  // 지금은 서버를 사용하지 않고 화면 안에서 데이터를 저장하여 사용하고 있기 때문에
  // 전체를 들고와서 구분해서 사용 : 서버의 일을 프론트에서 하는 중
  const boardlist = useContext(StateContext);
  const {id} = useParams();

  // 원하는 id의 값만 가져오는 것 > 서버에서 해야할 일
  const getBoard = ()=>{
    const board = boardlist.find((board)=>(board.id == id))
    return board.context;
  }
  return (
    <div>
      <p>{id}번째 입니다</p>
      <p>{getBoard()}</p>
    </div>
  );
}

export default BoardContext;