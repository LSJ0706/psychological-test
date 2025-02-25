import Button from '@commons/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="grid justify-items-center place-items-center mt-5">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">무료 성격 테스트</h1>
      <p className="text-gray-600 text-sm sm:text-base text-center mt-2">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900">성격 유형 검사</h2>
          <p className="text-gray-600 text-sm mt-2">
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900">성격 유형 이해</h2>
          <p className="text-gray-600 text-sm mt-2">
            다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
          </p>
        </div>
      </div>
      <Button name="성격 유형 검사하기" onClick={() => navigate('/test')} />
    </div>
  );
};

export default Home;
