import { getProviders, getSession, getCsrfToken, signIn } from 'next-auth/react';

export default async (req, res) => {
  const { provider } = await getProviders();
  const session = await getSession({ req });

  if (session) {
    // If a user is already authenticated, redirect them to the home page
    res.redirect('/');
    return;
  }

  if (provider === null) {
    res.status(404).end('Not Found');
    return;
  }

  if (req.method === 'POST') {
    const csrfToken = await getCsrfToken({ req });
    await signIn(provider.id, { callbackUrl: '/', csrfToken });
  }

  res.end();
};
