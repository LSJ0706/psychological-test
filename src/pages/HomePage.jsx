import React from 'react';
import { getTestResults, createTestResult, deleteTestResult, updateTestResultVisibility } from '@apis/testResults';
const home = () => {
  const getHandler = async () => {
    const data = await getTestResults();
    console.log(data);
  };
  const postHandler = async () => {
    const resultData = {
      nickname: '닉네임',
      result: 'MBTI 유형',
      visibility: true
    };
    console.log(await createTestResult(resultData));
  };
  const deleteHandler = async () => {
    console.log(await deleteTestResult('유저 ID'));
  };
  const patchHandler = async () => {
    console.log(await updateTestResultVisibility(6086, { visibility: false }));
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-200 ">
      <h2>무료 성격 테스트</h2>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.</p>
      <br />
      <button onClick={getHandler} className="bg-blue-500 hover:bg-fuchsia-500">
        get 해보기
      </button>
      <br />
      <button onClick={postHandler}>post 해보기</button>
      <br />
      <button onClick={deleteHandler}>delete 해보기</button>
      <br />
      <button onClick={patchHandler}>patch 해보기</button>
    </div>
  );
};

export default home;
