import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDutation } from '../util/auth';

function RootLayout() {
  const toket = useLoaderData();
  const submit = useSubmit();

  // const navigation = useNavigation();
  useEffect(() => {
    if (!toket) {
      return;
    }

    if (toket === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post'});
      return;
    }

    const tokenDuration = getTokenDutation();

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post'})
    }, tokenDuration)
  }, [toket, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
