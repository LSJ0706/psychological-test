import React from 'react';
import Button from '@commons/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button name="성격 유형 검사하기" onClick={() => navigate('/test')} />
    </div>
  );
};

export default Home;
