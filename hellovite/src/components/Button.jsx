import React from 'react'

const Button = ({children,className="",type="button",textColor="text-green-600", bgColor="bg-red-800",...props}) => {
  return (
    <>
<button className={`px-4 py-2 rounded-lg mx-auto my-2 ${className} ${textColor} ${bgColor} `} {...props}>
{children}
</button>
    </>
  )
}

export default Button