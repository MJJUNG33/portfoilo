import React from 'react'

function SkillList({src, title}) {
  return (
    <span>
    {/* <img className="skillIcon" src={src} alt="CheckMark icon"/> */}
    <img src={src} alt="tech skill icon"/>
    <p>{title}</p>
</span>
  )
}

export default SkillList