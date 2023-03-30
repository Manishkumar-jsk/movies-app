export const movieOptions = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d080149a2mshc6e1c192298ca16p1d0baajsn3ef1c2ceeb4a',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

export const fetchData = async (url,options) => {
    const res = await fetch(url,options);
    const data = await res.json();
    return data;
}