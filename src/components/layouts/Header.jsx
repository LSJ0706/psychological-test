import { useAuthStore } from '../../store/store';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@commons/Button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { userInfo, userSignOut } = useAuthStore((state) => state);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="w-full px-6 py-4 bg-gray-100 shadow-lg flex justify-between items-center">
      <Link to="" className="text-purple-500 hover:font-bold text-lg">
        홈
      </Link>
      <nav className="hidden md:flex gap-6 items-center">
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
            <Button name="로그아웃" type="button" onClick={userSignOut} />
          </>
        ) : (
          <Button name="로그인" type="button" onClick={() => navigate('sign-in')} />
        )}
      </nav>

      {/* 모바일 버튼 */}
      <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* 모바일 네비게이션 (햄버거 메뉴) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-lg flex flex-col gap-4 p-4 items-center">
          {userInfo.token ? (
            <>
              <Link
                to="my-page"
                className="text-purple-500 hover:font-bold transition"
                onClick={() => setMenuOpen(false)}
              >
                프로필
              </Link>
              <Link to="test" className="text-purple-500 hover:font-bold" onClick={() => setMenuOpen(false)}>
                테스트
              </Link>
              <Link to="result" className="text-purple-500 hover:font-bold" onClick={() => setMenuOpen(false)}>
                결과보기
              </Link>
              <Button name="로그아웃" type="button" onClick={userSignOut} />
            </>
          ) : (
            <Button name="로그인" type="button" onClick={() => navigate('sign-in')} />
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
