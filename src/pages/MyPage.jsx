import React from 'react';
import { getUser, patchUserProfile } from '@apis/auth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../store/store';
import Form from '@commons/Form';
import { useEffect } from 'react';

const MyPage = () => {
  const queryClient = useQueryClient();
  const { userInfo, userNicknameUpdate } = useAuthStore((state) => state);
  const { data, isLoading } = useQuery({
    queryKey: ['userInfo', userInfo.token],
    queryFn: () => getUser(userInfo.token)
  });

  const changeNicknameMutation = useMutation({
    mutationFn: (newNickname) => patchUserProfile(userInfo.token, newNickname),
    onSuccess: (_, newNickname) => {
      alert('프로필 변경 성공!');
      queryClient.invalidateQueries(['userInfo']);
      userNicknameUpdate(newNickname.nickname);
    },
    onError: (error) => alert(error.response.data.message)
  });

  useEffect(() => {}, [userInfo.nickname]);

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
