import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { StateContext } from "../context/ContextComp";

const BoardList = () => {
  {/* 값을 가져올 때, value에 객체로 들어오지 않았다면 구조화할당을 할 필요 없음 */}
  const boardlist = useContext(StateContext);
  return (
    <div>
        {
        // Ajax와 같이 비동기를 이용하여 값을 가져올 때
        // 값이 없을 때(값을 가져오는 시간 동안)는 출력하지 않거나, 로딩중이라는 ui를 띄워서 오류가 나지 않게 한다
        //  * 빈 데이터의 속성으로 들어가면 타입오류가 생김.
            boardlist && boardlist.map((item)=>(
                <Link to={'/boardlist/'+item.id} key={item.id}>{item.id}</Link>))
        }
      {/* 아울렛을 통해 props 값을 전달할 수 없다 X */}
      {/* props값을 전달할 때는 컴포넌트를 통해서 직접 전달 : App에 있는 컴포넌트로 전달*/}
      <Outlet />
    </div>
  );
}

export default BoardList;