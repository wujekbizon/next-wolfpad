import { typeText } from './helpers'
import { toast } from 'react-toastify'

export const fetchOpenAiApi = async (data: FormData, interval: NodeJS.Timer, element: HTMLElement) => {
  try {
    const response = await fetch('api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: data.get('prompt')
      })
    })

    clearInterval(interval)
    element.innerHTML = ' '

    if (response.ok) {
      const data = await response.json()
      const parsedData = data.bot.trim()

      typeText(element, parsedData)
    } else {
      const err = await response.text()
      element.innerHTML = 'Something went wrong'
      toast.error(err)
    }
    return response
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message)
    } else {
      console.log(err)
    }
  }
}

export const fetchCodeReview = async (content: string) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        codeReview: content
      })
    })

    // if (response.ok) {
    //   console.log(response)
    // }
    return response
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message)
    } else {
      console.log(err)
    }
  }
}
