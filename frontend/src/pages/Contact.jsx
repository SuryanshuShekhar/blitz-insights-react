import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { site } from "../data/site";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
});

export default function Contact() {
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data) {
    setStatus(null);
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main id="main" className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Get in touch</h1>
      <p className="text-gray-700 mt-2">We’d love to learn about your goals.</p>

      <form
        className="mt-6 grid gap-4"
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Contact form"
      >
        <label className="grid gap-1">
          <span className="text-sm">Name</span>
          <input
            className="rounded-md border px-3 py-2"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-sm text-red-600">{errors.name.message}</span>
          )}
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Email</span>
          <input
            className="rounded-md border px-3 py-2"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-sm text-red-600">{errors.email.message}</span>
          )}
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Company</span>
          <input
            className="rounded-md border px-3 py-2"
            {...register("company")}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Message</span>
          <textarea
            rows="6"
            className="rounded-md border px-3 py-2"
            {...register("message")}
          />
          {errors.message && (
            <span className="text-sm text-red-600">
              {errors.message.message}
            </span>
          )}
        </label>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-2xl bg-slate-900 text-white px-4 py-2"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
          <span className="text-sm text-gray-600">
            or email{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </span>
        </div>

        {status === "success" && (
          <div className="text-green-600 mt-2">Message sent — thank you!</div>
        )}
        {status === "error" && (
          <div className="text-red-600 mt-2">
            Failed to send. Try again later.
          </div>
        )}
      </form>

      <div className="mt-8 text-sm text-gray-700">
        <div>
          <strong>Phone:</strong>{" "}
          <a className="underline" href={`tel:${site.phone}`}>
            {site.phone}
          </a>
        </div>
        <div className="mt-1">
          <strong>Address:</strong> {site.address}
        </div>
      </div>
    </main>
  );
}
