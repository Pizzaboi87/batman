import { useQuery } from 'react-query'

const useGetData = (url) => {
    const getData = async () => {
		const res = await fetch(url)
		return res.json() 
	}
	
	const {data, error, isLoading} = useQuery(`data${url}`, getData);

    return {data, error, isLoading}
}

export default useGetData;