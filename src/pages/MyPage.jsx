import React from 'react';
import { getUser, patchUserProfile } from '@apis/auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store/store';
import Form from '@commons/Form';

const MyPage = () => {
  const { userInfo } = useAuthStore((state) => state);
  const { data, isLoading } = useQuery({
    queryKey: ['userInfo', userInfo.token],
    queryFn: () => getUser(userInfo.token)
  });

  const changeNicknameMutation = useMutation({
    mutationFn: (newNickname) => {
      return patchUserProfile(userInfo.token, newNickname);
    },
    onSuccess: () => alert('프로필 변경 성공!'),
    onError: (error) => alert(error.response.data.message)
  });

  return (
    <div>
      <h2 className="bg-gray-200">마이페이지</h2>
      {isLoading ? (
        <div>로딩중....</div>
      ) : (
        <Form
          title="마이페이지"
          inputs={[{ name: 'nickname', type: 'text', value: data.nickname }]}
          onSubmit={changeNicknameMutation.mutate}
          buttonText="닉네임 변경"
        />
      )}
    </div>
  );
};

export default MyPage;
