import React from 'react'

const Button = ({content, typeColor, bgColor, border, mt, icon, display, items, gap}) => {
  return (
    <div>
        <button style={{padding: '10px 12px', color: typeColor, backgroundColor: bgColor, borderRadius: '3px', border: 'none', border: border, marginTop: mt, display:display, alignItems:items, gap:gap}}>
               {icon} {content}
        </button>
    </div>
  )
}

export default Button