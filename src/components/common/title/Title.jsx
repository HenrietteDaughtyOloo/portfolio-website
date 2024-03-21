import React from 'react'

const Title = ({subtitle,title}) => {
  return (
    <>
      <div id="heading">
      <h1>{subtitle}</h1>
      <h3>{title}</h3>
      <br />

      </div>
    </>
  )
}

export default Title
