import React, { useState } from 'react'
import "../admin.css"
import Sidebar from '../utils/Sidebar'
import { Box } from '@mui/material';
const AdminCreate = () => {
    const [isSidebar, setIsSidebar] = useState(true);
  return (
   <>

<div className="admin">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Box m="20px">
            <div className='login-form-container'>
            <div className='login-register-form'>
                <form 
                // onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <input
                            type='text'
                        
                            placeholder='product name'
                        />
                       
                    </div>
                    <div>
                        <input
                            type='text'
                         
                            placeholder=''
                        />
                     
                    </div>
                  
                    <div className='button-box'>
                        <button type='submit'>
                            <span>Register</span>
                        </button>
                    </div>
                </form>
                <div className='mt-3 d-flex justify-content-center'>
                    {/* <GoogleSignIn /> */}
                </div>
            </div>
        </div></Box>  
            </main>
        </div>
 
   </>
  )
}

export default AdminCreate