import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';

function RootLayout() {
  const toket = useLoaderData();
  const submit = useSubmit();

  // const navigation = useNavigation();
  useEffect(() => {
    if (!toket) {
      return;
    }

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post'})
    }, 1 * 60 * 60 * 1000)
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
