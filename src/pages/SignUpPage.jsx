import { useMutation } from '@tanstack/react-query';
import { signUp } from '@apis/auth';
import Form from '@commons/Form';

const SignUpPage = () => {
  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => alert('회원가입 성공!'),
    onError: (error) => alert(error.response.data.message)
  });

  const inputs = [
    { name: 'id', type: 'email', placeholder: '이메일을 입력해주세요', value: '' },
    { name: 'password', type: 'password', placeholder: '비밀번호를 입력해주세요', value: '' },
    { name: 'confirmPassword', type: 'password', placeholder: '비밀번호를 다시 입력해주세요', value: '' },
    { name: 'nickname', type: 'text', placeholder: '닉네임을 입력해주세요', value: '' }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-100">
      <Form title="회원가입" inputs={inputs} buttonText="회원가입" onSubmit={signUpMutation.mutate} />
    </div>
  );
};

export default SignUpPage;
