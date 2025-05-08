import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="mt-2 text-lg text-gray-600">Oops! The page you are looking for does not exist.</p>
      <Link href="/dashboard/overview" className="mt-4 inline-block rounded-xl bg-primary px-4 py-2 text-white 
      hover:bg-secondary duration-400 transition-colors">
        Go Home
      </Link>
    </div>
  );
}
