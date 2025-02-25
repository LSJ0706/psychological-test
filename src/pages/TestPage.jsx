import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import TestForm from '@features/tests/TestForm';
import Button from '@commons/Button';
import { calculateMBTI, mbtiDescriptions } from '@utils/mbtiCalculator';
import { dateCalculator } from '@utils/dateCalculator';
import { createTestResult } from '@apis/testResults';
import { useAuthStore } from '@store/store';

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const userInfo = useAuthStore((state) => state.userInfo);

  const testMutation = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      alert('테스트 완료!');
    },
    onError: (error) => alert(error.response.data.message)
  });

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    const resultData = {
      nickname: userInfo.nickname,
      result: mbtiResult,
      visibility: true,
      date: dateCalculator(),
      userId: userInfo.userId
    };
    setResult(mbtiResult);
    testMutation.mutate(resultData);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">MBTI 테스트</h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">테스트 결과: {result}</h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] || '해당 성격 유형에 대한 설명이 없습니다.'}
            </p>
            <Button
              name="결과 페이지로 이동하기"
              onClick={() => navigate('/result')}
              className="w-full px-2 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
