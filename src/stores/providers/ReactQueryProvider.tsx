'use client'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


type Props = {
    children: string | React.ReactNode | React.JSX.Element | React.JSX.Element[];
}

const queryClient = new QueryClient()

const ReactQueryProvider = ({children}: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
