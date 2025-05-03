import React from 'react'

export default function Button(props) {
    const {text, func} = props
  return (
    <button className='px-8 mx-auto px-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200' onClick={func}>
        <p>{text}</p>
    </button>
  )
}
