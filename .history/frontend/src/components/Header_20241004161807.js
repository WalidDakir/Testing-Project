import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchDropdown from './SearchProduct';
import SummaryApi from '../common/index';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

function Header() {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(prev => !prev);
  };

  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if(data.error){
      toast.error(data.message)
    }
  }

  return (
    <header className="bg-black text-white relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="text-center lg:text-left flex-grow lg:flex-grow-0">
            <Link to="/" className="text-2xl font-bold tracking-wider">
              SAINT LAURENT
            </Link>
          </div>

          <nav
            className={`hidden lg:flex space-x-6 ${isMenuOpen ? "block" : ""}`}
          >
            <span className="text-sm tracking-wide">WOMEN</span>
            <span className="text-sm tracking-wide">MEN</span>
            <span className="text-sm tracking-wide">COLLECTIONS</span>
            <Link to="/gifts" className="text-sm tracking-wide">
              GIFTS
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <button aria-label="Search" onClick={toggleSearch}>
              <Search size={20} />
            </button>
            <Link to="/cart" aria-label="Shopping bag">
              <ShoppingBag size={20} />
            </Link>
            <div className="relative">
              {user?._id ? (
                <div>
                  <button
                    onClick={toggleUserMenu}
                    className="flex items-center space-x-1 px-3 py-1 rounded-full text-white bg-black hover:bg-gray-800 transition-all"
                  >
                    <User size={20} />
                    <ChevronDown size={16} />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg py-1 z-10">
                      {user?.role === ROLE.ADMIN && (
                        <Link
                          to="/admin-panel/all-users"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Admin Panel
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsUserMenuOpen(false);
                        }}
                        className="block w-full text-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  aria-label="Login"
                  className="flex items-center space-x-1 px-2 py-1 rounded-full text-white bg-black hover:bg-gray-800 transition-all"
                >
                  <User size={20} />
                  <span className="hidden md:inline text-sm">Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 mt-4">
              <Link
                to="/women"
                className="hover:underline text-sm tracking-wide"
              >
                WOMEN
              </Link>
              <Link to="/men" className="hover:underline text-sm tracking-wide">
                MEN
              </Link>
              <Link
                to="/collections"
                className="hover:underline text-sm tracking-wide"
              >
                COLLECTIONS
              </Link>
              <Link
                to="/gifts"
                className="hover:underline text-sm tracking-wide"
              >
                GIFTS
              </Link>
            </div>
          </nav>
        )}
      </div>

      {isSearchOpen && (
        <SearchDropdown onClose={() => setIsSearchOpen(false)} />
      )}
    </header>
  );
}

export default Header;