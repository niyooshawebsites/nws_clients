"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";

import { useActionState } from "react";
import { signup } from "@/app/actions/createUser";

const initialState = {
  error: undefined,
  success: undefined,
};

export default function Home() {
  const [state, formAction] = useActionState(signup, initialState);

  return (
    <>
      <h1 className="text-center text-3xl">NWS CRM</h1>
      <form className="max-w-md mx-auto p-4" action={formAction}>
        <FieldGroup className="border p-5 rounded-md">
          <Field>
            <FieldLabel htmlFor="email">Name</FieldLabel>
            <FieldDescription>Enter your name.</FieldDescription>
            <Input type="text" name="name" id="name" placeholder="John Doe" />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <FieldDescription>Enter your email.</FieldDescription>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="john@example.com"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>Enter your password</FieldDescription>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="***********"
            />
          </Field>

          <Button
            type="submit"
            variant="secondary"
            className="bg-gray-900 text-gray-100 hover:bg-gray-950 hover:cursor-pointer"
          >
            Sign up
          </Button>
        </FieldGroup>
        {state.error && <p className="text-red-500">{state.error}</p>}
        {state.success && <p className="text-green-500">{state.success}</p>}
      </form>
    </>
  );
}
