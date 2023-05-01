import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { loadPyodide } from 'pyodide'

type PyodideProps = {
  pythonCode: any
  loadingMessage?: string
  evaluatingMessage?: string
}

const Pyodide = ({ pythonCode, loadingMessage = 'loading…', evaluatingMessage = 'evaluating…' }: PyodideProps) => {
  const indexURL = 'https://cdn.jsdelivr.net/pyodide/v0.23.1/full/'
  const pyodide = useRef<any>(null)
  const [isPyodideLoading, setIsPyodideLoading] = useState(true)
  const [pyodideOutput, setPyodideOutput] = useState(evaluatingMessage)

  useEffect(() => {
    ;(async function () {
      if (!pyodide.current) {
        return
      }
      pyodide.current = await loadPyodide({ indexURL })
      setIsPyodideLoading(false)
    })()
  }, [pyodide])

  useEffect(() => {
    if (!isPyodideLoading) {
      const evaluatePython = async (pyodide: any, pythonCode: string) => {
        try {
          return await pyodide.runPython(pythonCode)
        } catch (error) {
          if (error instanceof Error) {
            console.error(error.message)
            return 'Error evaluating Python code. See console for details.'
          }
        }
      }
      ;(async function () {
        setPyodideOutput(await evaluatePython(pyodide.current, pythonCode))
      })()
    }
  }, [isPyodideLoading, pyodide, pythonCode])

  return (
    <>
      <Head>
        <Script src={`${indexURL}pyodide.js`} />
      </Head>
      <div ref={pyodide}>Pyodide Output: {isPyodideLoading ? loadingMessage : pyodideOutput}</div>
    </>
  )
}
export default Pyodide
