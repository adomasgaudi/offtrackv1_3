import { useEffect, useState } from "react"

// Custom hook for using OpenAI
const useOpenAI = () => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false) // Add this line
    const OPENAI_KEY = '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'
    useEffect(() => {
      console.log('isLoading:', isLoading)
    }, [isLoading])
    const fetchData = async (inputValue) => {
      setIsLoading(true) // Set isLoading to true when starting to fetch data
      console.log('isLoading after set to true:', isLoading) // Log isLoading
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo-16k-0613',
          messages: [{ role: 'user', content: inputValue }],
        }),
      })
      const json = await response.json()
      setData(json.choices[0].message.content)
      console.log('isLoading after set to false:', isLoading) // Log isLoading
      setIsLoading(false) // Set isLoading to false when data has been fetched
      return json.choices[0].message.content
    }
  
    return { data, fetchData, isLoading } // Return isLoading
  }
  

export default useOpenAI