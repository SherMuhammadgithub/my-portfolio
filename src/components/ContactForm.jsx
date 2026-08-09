"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        subject: `Request for ${serviceParam} Service`,
      }));
    }
  }, [serviceParam]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  const inputClasses =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#8c56fb] transition-colors";

  if (status === "success") {
    return (
      <div className="text-center py-16 space-y-4 rounded-2xl border border-[#8c56fb]/30 bg-white/[0.03]">
        <CheckCircle2 className="w-14 h-14 text-[#a78bfa] mx-auto" />
        <h2 className="text-2xl font-bold text-white">Message sent</h2>
        <p className="text-white/60 max-w-sm mx-auto">
          Thanks for reaching out — I'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/15 hover:bg-white/5 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {serviceParam && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#8c56fb]/20 border border-[#8c56fb]/40 text-[#c4b5fd]">
          Regarding: {serviceParam}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-white/60 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/60 mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className={inputClasses}
        />
      </div>

      <div>
        <label className="block text-sm text-white/60 mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className={`${inputClasses} resize-none`}
        ></textarea>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
        style={{
          background: "linear-gradient(135deg, #8c56fb 0%, #693dc3 100%)",
        }}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
