import React from 'react'
import StackIcons from './techStack-compnents/stackIcons'
import StackTitle from './techStack-compnents/stackTitle'

const TechStackContainer = () => {
  return (
    <div className="w-1/2 border aspect-w-4 aspect-h-3 my-4 bg-[#191825]  flex flex-col rounded-xl justify-center h-3/4 p-6 shadow-gray-500 shadow-lg">
      <div>
        <StackTitle/>
        <StackIcons/>
      </div>
    </div>
  )
}

export default TechStackContainer