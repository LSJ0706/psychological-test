import React from 'react';
import { signUp } from '@apis/auth';
import AuthForm from '../components/commons/AuthForm';
const SignUpPage = () => {
  const inputs = [
    { name: 'id', type: 'email', placeholder: '이메일을 입력해주세요' },
    { name: 'password', type: 'password', placeholder: '비밀번호를 입력해주세요' },
    { name: 'confirmPassword', type: 'password', placeholder: '비밀번호를 다시 입력해주세요' },
    { name: 'nickname', type: 'text', placeholder: '닉네임을 입력해주세요' },
    { name: 'avatar', type: 'file', placeholder: '사진을 입력해주세요' }
  ];
  return (
    <div>
      <AuthForm title="회원가입" inputs={inputs} buttonText="회원가입" onSubmit={signUp}></AuthForm>
    </div>
  );
};

export default SignUpPage;
