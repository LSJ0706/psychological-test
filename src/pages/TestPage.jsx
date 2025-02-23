import React, { useState } from 'react';
import TestForm from '@features/TestForm';
import { calculateMBTI, mbtiDescriptions } from '@utils/mbtiCalculator';
import { dateCalculator } from '@utils/dateCalculator';
import { createTestResult } from '@apis/testResults';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@store/store';
import { useMutation } from '@tanstack/react-query';

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const { userInfo } = useAuthStore((state) => state);
  const testMutation = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => alert('테스트 완료!'),
    onError: (error) => alert(error.response.data.message)
  });

  const handleTestSubmit = async (answers) => {
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
    const mbtiResult = calculateMBTI(answers);
    const resultData = {
      nickname: userInfo.nickname,
      result: mbtiResult,
      visibility: true,
      data: dateCalculator(),
      userId: userInfo.userId
    };
    testMutation.mutate(resultData);
    setResult(mbtiResult);
  };

  const handleNavigateToResults = () => {
    navigate('/results');
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
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
