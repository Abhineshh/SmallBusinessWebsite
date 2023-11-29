import React from 'react';

import {Link} from 'react-router-dom';


function Navbar() {
   

    return (
        <div className="flex bg-slate-400  h-12 justify-evenly font-mono">
           <div className=" w-full m-2 ml-7 flex-1">
            <h1 className=" text-indigo-700 text-2xl font-mono">Flame Kaiser</h1>
          </div >
                <ul Type='none' className=' flex-row-reverse flex flex-1 '>    
                    <li className=' bg-slate-200 m-2 p-3 pt-1 pb-1 rounded hover:bg-indigo-700 hover:text-white'><Link to={'/About'}>About</Link></li>
                    <li className=' bg-slate-200 m-2 p-3 pt-1 pb-1 rounded hover:bg-indigo-700 hover:text-white'><Link to={'/ProducT'}>Services</Link></li>
                    <li className=' bg-slate-200 m-2 p-3 pt-1 pb-1 rounded hover:bg-indigo-700 hover:text-white'><Link to={'/Contact'}>Contact</Link></li>
                    <li className=' bg-slate-200 m-2 p-3 pt-1 pb-1 rounded hover:bg-indigo-700 hover:text-white'><Link to={'/'}>Home</Link></li>
                </ul>
        </div>
         
    
    );
}



export default Navbar;