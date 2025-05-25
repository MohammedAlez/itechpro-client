


import React from 'react'

export function Info({product}:{product:Product|undefined}) {

  
  return (
    <div className="flex flex-col gap-4">
        <p className="text-gray-500 font-medium text-sm first-letter:capitalize">{product?.sub_category?.name}</p>
        <h1 className="text-3xl font-bold">
            {product?.name}
        </h1>
        <p className="text-gray-800 font-medium ">
          {product?.description}
        </p>
        <h2 className="text-4xl font-bold">DA {product?.price}</h2>
    </div>
  )
}
