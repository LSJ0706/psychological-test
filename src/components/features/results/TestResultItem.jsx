import React from 'react';
import { mbtiDescriptions } from '@utils/mbtiCalculator';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTestResult, updateTestResultVisibility } from '@apis/testResults';
import '@styles/TestResult.css';

const TestResultItem = ({ result, userId }) => {
  const queryClient = useQueryClient();

  const deleteResultMutation = useMutation({
    mutationFn: ({ id }) => deleteTestResult(id),
    onSuccess: () => {
      alert('삭제 완료!');
      queryClient.invalidateQueries(['results']);
    },
    onError: (error) => alert(error.response.data.message)
  });

  const patchResultMutation = useMutation({
    mutationFn: ({ id, visibility }) => updateTestResultVisibility(id, visibility),
    onSuccess: () => {
      alert('변경 완료!');
      queryClient.invalidateQueries(['results']);
    },
    onError: (error) => alert(error.response.data.message)
  });

  const handleChangeVisibility = () => {
    patchResultMutation.mutate({ id: result.id, visibility: !result.visibility });
  };

  const handleDeleteResult = () => {
    deleteResultMutation.mutate({ id: result.id });
  };

  return (
    <div className="container">
      <div className="test-result">
        <p>
          <span>{result.nickname}</span> {result.date}
        </p>
        <div>
          <h2 className="test-title">{result.result}</h2>
          <p className="test-description">{mbtiDescriptions[result.result]}</p>
          {userId === result.userId ? (
            <div>
              <button type="button" className="bg-red-500 button-red" onClick={handleChangeVisibility}>
                {result.visibility ? '비공개로 전환' : '공개로 전환'}
              </button>
              <button type="button" className="bg-red-500 button-red" onClick={handleDeleteResult}>
                삭제
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestResultItem;
