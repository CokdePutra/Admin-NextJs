import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/auth/me", { withCredentials: true });
        if (res.data.user) {
          setIsAuthenticated(true);
        } else {
          router.push("/login"); // Redirect jika tidak login
        }
      } catch (error) {
        router.push("/login"); // Redirect jika error
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  return { isAuthenticated, loading };
};
