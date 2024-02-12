import React,{useEffect, useRef} from 'react'

function UseRef() {
    const titleRef = useRef()
    const titleReff = useRef("Initial state")
    
    useEffect(()=>{
        titleRef.current.focus()
        setTimeout(()=>{
            titleReff.current.textContent = "Text Changed"
        },3000)
    },[])

  return (
    <div>
        <h3 className='text-center' ref={titleReff}>Original Text</h3>
        <input 
        type='text'
        ref={titleRef}
        value={titleRef.current?.value}
        placeholder='Enter your Name'
        />

    </div>
  )
}

export default UseRef