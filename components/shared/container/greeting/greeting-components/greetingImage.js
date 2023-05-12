import React from 'react'
import Image from 'next/image'

const GreetingImage = ({image}) => {
  return (
    <div div className="w-1/3 flex items-center justify-center ">
              {image && (
                <div className="h-64 w-64 flex justify-center items-center  relative ">
                  <Image
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #D8BFD8",
                    }}
                    src={image}
                    alt="profile picture"
                    fill={true}
                    className="shadow-sm shadow-purple-600"
                  />
                </div>
              )}
            </div>
  )
}

export default GreetingImage