import { useSession } from 'next-auth/react';

const ProtectedPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>You are not authenticated. Please log in.</div>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      
    </div>
  );
};

export default ProtectedPage;
