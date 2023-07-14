import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import {useAppSelector} from '../hooks/redux';
import Login from '../pages/Login/Login';
import {useLazyCheckTokenQuery} from '../services/query';
import {navigationData} from '../utils/navigationData';

const Navigation = () => {
	const [trigger] = useLazyCheckTokenQuery();
	const {token} = useAppSelector(state => state.web3.user.infoUser);

	useEffect(() => {
		trigger();
		setInterval(() => {
			trigger();
		}, 30000);
	}, []);

	if (!token) return <Login />;

	return (
		<>
			<Routes>
				{
					navigationData.map((el, i) => (
						<Route key={i} path={el.path} element={el.element}/>
					))
				}
			</Routes>
		</>
	);
};

export default Navigation;
