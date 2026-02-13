import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldDescription, FieldLabel } from "@/components/ui/field"

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl">NWS CRM</h1>
      <form className="max-w-md mx-auto p-4">
        <FieldGroup className="border p-5 rounded-md">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <FieldDescription>Enter your email.</FieldDescription>
            <Input type="email" id="email" placeholder="john@example.com" />
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>Enter your password</FieldDescription>
            <Input type="password" id="password" placeholder="***********" />
          </Field>

          <Button type="submit" variant="secondary" className="bg-gray-900 text-gray-100 hover:bg-gray-950 hover:cursor-pointer">Sign in</Button>
        </FieldGroup>
      </form>
    </>

  );
}
