import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-6 left-8 right-8 h-14 z-50 max-w-7xl mx-auto px-8 bg-white/80 backdrop-blur-sm shadow-md rounded-full">
      <div className="flex items-center h-full">
        <div className="flex-shrink-0">
          <Image
            src="/image/ONNENAI.svg"
            alt="ONNENAI"
            width={120}
            height={40}
            className="h-8 w-auto sm:h-10 [filter:brightness(0)_saturate(100%)]"
            priority
          />
        </div>
      </div>
    </header>
  );
}
