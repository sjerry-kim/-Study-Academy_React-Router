import { useParams } from "react-router-dom";

const NumberId = () => {
  {/* 주소를 통해서 값 전달 : params - 객체형태로 들어옴 */}
  const params = useParams();

  return (
    <div>
      {/* 객체형태로 들어오기에 .을 통해서 접근 */}
      {/* id에 모든 값이 들어갈 수 있기에 주의 : 문자열로 들어감 */}
      <p>{params.id}</p>
    </div>
  );
}

export default NumberId;