import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  const gridPattern = `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23d1d5db' stroke-width='1'/%3E%3C/svg%3E")`;
  
  return (
    <div
      className="min-h-screen bg-slate-50">
      <header className="flex min-h-screen items-center justify-center">
        <><Header /></>
      </header>
    </div>
  );
}
