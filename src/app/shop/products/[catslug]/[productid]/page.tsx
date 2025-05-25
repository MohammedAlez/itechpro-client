

import React from 'react'

import { PageContent } from './components/PageContent';




export default async function page({params}:{params:Promise<{productid:string}>}) {

  const {productid} = (await params)

  return (
        <PageContent productId={productid} />
  )
}
