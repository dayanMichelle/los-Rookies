import { AuthContextProvider } from "@/context/AuthContext";
import ProtectedRoute from "./protectedRoute";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <AuthContextProvider>
      <ProtectedRoute>{children}</ProtectedRoute>
    </AuthContextProvider>
  );
}
