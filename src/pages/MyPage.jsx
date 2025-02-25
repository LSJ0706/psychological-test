import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUser, patchUserProfile } from '@apis/auth';
import { useAuthStore } from '../store/store';
import Form from '@commons/Form';
import Loading from '@commons/Loading';
import Error from '@commons/Error';

const MyPage = () => {
  const queryClient = useQueryClient();
  const { userInfo, userNicknameUpdate } = useAuthStore((state) => state);

  const { data, isLoading, isError } = useQuery({
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-100">
      {isLoading && <Loading />}
      {isError && <Error />}
      <Form
        title="마이페이지"
        inputs={[{ name: 'nickname', type: 'text', value: userInfo.nickname }]}
        onSubmit={changeNicknameMutation.mutate}
        buttonText="닉네임 변경"
      />
    </div>
  );
};

export default MyPage;
