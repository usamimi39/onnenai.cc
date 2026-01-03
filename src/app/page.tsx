import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] bg-[size:24px_24px]" />
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        {/* Content here */}
      </main>
    </div>
  );
}
