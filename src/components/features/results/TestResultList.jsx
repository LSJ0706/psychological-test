import React from 'react';
import TestResultItem from './TestResultItem';
import { useQuery } from '@tanstack/react-query';
import { getTestResults } from '@apis/testResults';
import { useAuthStore } from '@store/store';

const TestResultList = () => {
  const userId = useAuthStore((state) => state.userInfo.userId);
  const { data, isPending, isError } = useQuery({
    queryKey: ['results'],
    queryFn: getTestResults
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  return (
    <div>
      {data
        .filter((result) => result.visibility || result.userId === userId)
        .map((result) => (
          <div key={result.id}>
            <TestResultItem result={result} userId={userId} />
          </div>
        ))}
    </div>
  );
};

export default TestResultList;
