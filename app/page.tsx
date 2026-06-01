import { DownloadApp } from "@/components/landing/download-app";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { Services } from "@/components/landing/services";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
}
