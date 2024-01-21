interface Props {
  children: React.ReactNode
}

// Note: add simple navbar and footer?
const AuthLayout = ({ children }: Props) => {
  return (
    <div className='min-h-[calc(100vh_-_60px)] flex items-center justify-center px-1.5'>
      {children}
    </div>
  )
}

export default AuthLayout
