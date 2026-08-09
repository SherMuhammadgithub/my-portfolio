"use client";
import { Suspense } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050709] text-white pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-[45px]">
              Let's{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #a78bfa 0%, #693dc3 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Work Together
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#693dc3]/50"></span>
              <span className="w-2 h-2 rotate-45 bg-[#a78bfa]"></span>
              <span className="h-px w-12 bg-[#693dc3]/50"></span>
            </div>
            <p className="text-base md:text-lg text-white/70">
              Tell me about your project and I'll get back to you as soon as
              possible.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50 pt-2">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                muhammadiqbalshermuhammad@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Lahore, Pakistan
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#8c56fb]/30 bg-white/[0.03] p-6 md:p-8">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
