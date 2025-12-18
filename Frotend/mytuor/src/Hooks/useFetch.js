import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      fetchData()
    }, [])

    const fetchData = async() => {
      setLoading(true)
      try{
      const res = await fetch(url)
      if(!res.ok){
        setError("Failed to fetch data")
      }
      const blogData = await res.json()
      setData(blogData)
      setLoading(false)
      }catch(err){
      setError(err.message)
      setLoading(false)
      }
    }
    return {data, error, loading}
 }