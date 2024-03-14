const Header = () => {
    return (
        <div className='px-10 py-5 bg-slate-50 flex justify-between items-center'>
            <div>
                <button className='text-3xl font-bold' onClick={()=>location.reload()}>Grocery</button>
            </div>
            <div>
                <ul className='flex text-md'>
                    <li className='hover:bg-slate-200 hover: rounded-lg hover:cursor-pointer hover:px-3 hover:py-1 px-3 py-1'>Home</li>
                    <li className='hover:bg-slate-200 hover: rounded-lg hover:cursor-pointer hover:px-3 hover:py-1 px-3 py-1'>Blog</li>
                    <li className='hover:bg-slate-200 hover: rounded-lg hover:cursor-pointer hover:px-3 hover:py-1 px-3 py-1'>About</li>
                    <li className='hover:bg-slate-200 hover: rounded-lg hover:cursor-pointer hover:px-3 hover:py-1 px-3 py-1'>Contact</li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <img className='w-10' src="../../../public/images/favicon/carts.png" alt="" />
                <button className='py-2 px-4 bg-teal-600 rounded-md text-white font-semibold hover:scale-105 active:scale-100'>Log In</button>
            </div>
        </div>
    );
};

export default Header;