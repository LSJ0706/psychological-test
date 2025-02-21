import React from 'react';
import { useAuthStore } from '../store/store';

const home = () => {
  const { userInfo, userSignOut } = useAuthStore((state) => state); // token 값 직접 가져오기
  return (
    <div>
      {userInfo.token ? (
        <h1>
          로그인 성공! <button onClick={() => userSignOut()}>로그아웃</button>
        </h1>
      ) : (
        <h1>로그인 상태 아님</h1>
      )}
    </div>
  );
};

export default home;
