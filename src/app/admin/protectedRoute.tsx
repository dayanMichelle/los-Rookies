"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

type ProtectedRoute = {
  children: React.ReactNode;
};
export default function ProtectedRoute({ children }: ProtectedRoute) {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user, router]);

  return <>{children}</>;
}
