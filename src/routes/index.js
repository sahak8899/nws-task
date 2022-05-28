import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './config';

const RouteBuilder = () => {
	return (
		<div>
			<Suspense fallback={"...loading"}>
				<Routes>
					{routes.map(({ component: Component, path, exact }) => (
						<Route key={path} exact={!!exact} path={`${path}`} element={<Component/>} />
					))}
				</Routes>
			</Suspense>
		</div>
	);
};

export default memo(RouteBuilder);
