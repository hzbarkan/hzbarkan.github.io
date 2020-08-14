import React, { useEffect, useState } from 'react'
import Loader from './components/loader'
import Main from './pages/Main'

const App = () => {
  const [isLoading, setLoader] = useState(true)
  useEffect(() => {
    setLoader(document.readyState === 'complete')
  }, [])

  return (
    <>
      {isLoading && <Loader.FullscreenLoaderInit />}
      {!isLoading && <Main />}
    </>
  )
}

export default App
