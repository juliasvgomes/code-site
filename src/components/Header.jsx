import 'boxicons/css/boxicons.min.css';

const Header = () => {

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu')

    if(mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  }


  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20"> 
      <h1 className="text-3x1 md:text-4x1 lg:text-5x1 font-light m-0">
        CODE
      </h1>

      <nav className="hidden md:flex itens-center gap-12">
        <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#"> 
          COMPANY
        </a>

        <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#"> 
          FEATURES
        </a>

        <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#"> 
          RESOURCES
        </a>

        <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#"> 
          DOCS
        </a>
        
      </nav>

      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer ">
        SIGNIN
      </button>

      <button onClick={toggleMobileMenu} className='md:hidden text-3x1 p-2 z-50'>
        <i className='bx bx-menu'></i>
      </button>

      <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
      <nav className="flex flex-col items-center gap-6">
        <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#"> 
          COMPANY
        </a>

        <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#"> 
          FEATURES
        </a>

        <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#"> 
          RESOURCES
        </a>

        <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#"> 
          DOCS
        </a>
        
      </nav>        
      </div>




    </header>
  )
}

export default Header