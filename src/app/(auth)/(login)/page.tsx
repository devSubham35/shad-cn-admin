import ThemeToggler from "@/components/ThemeToggler";
import { Login } from "@/features/auth/components/Login";

export default function Page() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <Login />
      </div>
      <div className="absolute top-5 right-5">
        <ThemeToggler />
      </div>
    </div>
  )
}
