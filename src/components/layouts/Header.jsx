import React from 'react';
import { useAuthStore } from '../../store/store';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@commons/Button';

const Header = () => {
  const { userInfo, userSignOut } = useAuthStore((state) => state);
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center px-10 py-4 bg-gray-100 shadow-lg">
      <Link to="" className="text-purple-500 hover:font-bold text-lg">
        홈
      </Link>
      <nav>
        {userInfo.token ? (
          <>
            <Link to="my-page" className="text-purple-500 hover:font-bold transition mr-4">
              프로필
            </Link>
            <Link to="test" className="text-purple-500 hover:font-bold mr-4">
              테스트
            </Link>
            <Link to="result" className="text-purple-500 hover:font-bold mr-4">
              결과보기
            </Link>
            <Button
              name="로그아웃"
              type="button"
              onClick={userSignOut}
              className="px-2 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            />
          </>
        ) : (
          <Button
            name="로그인"
            type="button"
            onClick={() => navigate('sign-in')}
            className="px-2 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
