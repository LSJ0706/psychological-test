import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTestResults } from '@apis/testResults';
import { useAuthStore } from '@store/store';
import Loading from '@commons/Loading';
import Error from '@commons/Error';
import TestResultItem from './TestResultItem';

const TestResultList = () => {
  const userId = useAuthStore((state) => state.userInfo.userId);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['results'],
    queryFn: getTestResults
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const filteredResults = data.filter((result) => result.visibility || result.userId === userId);

  return (
    <div>
      {filteredResults.map((result) => (
        <div key={result.id}>
          <TestResultItem result={result} userId={userId} />
        </div>
      ))}
    </div>
  );
};

export default TestResultList;
