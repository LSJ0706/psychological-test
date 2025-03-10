import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '@apis/auth';
import { useAuthStore } from '../store/store';
import Form from '@commons/Form';

const SignInPage = () => {
  const userSignIn = useAuthStore((state) => state.userSignIn);
  const navigate = useNavigate();

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      alert('로그인 성공');
      userSignIn({ token: data.accessToken, userId: data.userId, nickname: data.nickname });
      navigate('/');
    },
    onError: (error) => alert(error.response.data.message)
  });

  const inputs = [
    { name: 'id', type: 'email', placeholder: '이메일을 입력해주세요' },
    { name: 'password', type: 'password', placeholder: '비밀번호를 입력해주세요' }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <Form
        title="로그인"
        inputs={inputs}
        buttonText="로그인"
        onSubmit={signInMutation.mutate}
        linkText="회원가입 하러 가기"
        linkHref="/sign-up"
      />
    </div>
  );
};

export default SignInPage;
