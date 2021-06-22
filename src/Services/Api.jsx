import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../Components/Products';

export default function Data() {

	const [itemsRes, setItemsRes] = useState([]);
	const [errorItems, setErrorItems] = useState('Ops! Nenhum resultado foi encontrado :/')

	useEffect(() => {
		async function FetchData() {
			await axios.get(`https://60d1574f5b017400178f374d.mockapi.io/api/products`)
			.then((response) => {
				return setItemsRes(response.data);
			})
			.catch(() => setErrorItems('Algo deu errado! Tente novamente em alguns instantes.'));
		}
		FetchData()
	}, [])

	return (
		<React.Fragment>
			<Products data={itemsRes} errorMsg={errorItems} />
		</React.Fragment>
		)
}