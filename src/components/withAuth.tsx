'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return function WithAuthComponent(props: any) {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
      const checkAuth = () => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('userData');

        if (!token || !userData) {
          router.push('/auth/signin');
          return;
        }

        // Check if user is admin for dashboard access
        const user = JSON.parse(userData);
        if (window.location.pathname.includes('/dashboard') && user.level_user !== 'admin') {
          router.push('/');
          return;
        }

        setIsAuthorized(true);
      };

      checkAuth();
    }, [router]);

    // Show nothing while checking authorization
    if (!isAuthorized) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
