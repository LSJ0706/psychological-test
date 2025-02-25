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
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="bg-white rounded-lg p-6 md:p-8 max-w-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
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
            <Button name="결과 페이지로 이동하기" onClick={() => navigate('/result')} />
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
