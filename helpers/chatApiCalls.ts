import { typeText } from './helpers'

export const fetchOpenAiApi = async (data: FormData, interval: NodeJS.Timer, element: HTMLElement) => {
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
    console.log(err)
  }
  return response
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
      console.log(err.message)
    } else {
      throw new Error()
    }
  }
}
