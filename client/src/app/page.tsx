import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-10 max-w-6xl">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Students learning in a classroom"
            width={500}
            height={400}
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl capitalize font-bold mb-4 text-primary">
            Welcome to class tracker App
          </h1>
          <p className="text-lg text-secondary mb-6">
            Manage classroom attendance easily for both teachers and students. Sign in or create an account to get started.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/login" className="btn btn-primary w-full sm:w-auto">
              Login
            </Link>
            <Link href="/register" className="btn btn-outline btn-primary w-full sm:w-auto">
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
