'use client'

import {    
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { ReactNode } from 'react'




export function ReactQueryProvider({children}:{children:ReactNode}) {
  const queryClient = new QueryClient()
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}