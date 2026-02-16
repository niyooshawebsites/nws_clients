"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";

export default function LoginPage() {
  const router = useRouter(); // ✅ get router
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    setMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setErr(data.error || "Something went wrong");
        return;
      }

      setMsg("Logged in successfully!");
      form.reset();

      // ✅ Client-side navigation without full page reload
      router.push("/dashboard");
    } catch (error: any) {
      setErr(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-center text-3xl mb-4">NWS CRM</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FieldGroup className="border p-5 rounded-md">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <FieldDescription>Enter your email</FieldDescription>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="john@example.com"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>Enter your password</FieldDescription>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              required
            />
          </Field>

          <Button
            type="submit"
            className="bg-gray-900 text-gray-100 hover:bg-gray-950"
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>

          {msg && <p className="text-green-600 font-medium">{msg}</p>}
          {err && <p className="text-red-600 font-medium">{err}</p>}
        </FieldGroup>
      </form>
    </div>
  );
}
