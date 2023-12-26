import React from 'react'
import { AiOutlineSend, AiFillMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <p>mailto:<a href="mailto:prudhvichinnam101@gmail.com">prudhvichinnam101@gmail.com</a> <AiFillMail color='white'/></p>
      <a href="mailto:prudhvichinnam101@gmail.com">send <AiOutlineSend color='white' /></a>
    </div>
  )
}

export default Contact