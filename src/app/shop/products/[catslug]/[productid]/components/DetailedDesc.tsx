'use client'
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';



import React from 'react'

export default function DetailedDesc({content}:{content:BlocksContent}) {
  return (
    <article  className="prose detailed-desc min-w-full">
        <BlocksRenderer content={content} />
    </article >
  )
}
