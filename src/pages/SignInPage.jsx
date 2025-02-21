import React from 'react';
import { signIn } from '@apis/auth';
import Form from '@commons/Form';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../store/store';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const { userSignIn } = useAuthStore((state) => state);
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
    <div>
      <Form title="로그인" inputs={inputs} buttonText="로그인" onSubmit={signInMutation.mutate} />
    </div>
  );
};

export default SignInPage;
