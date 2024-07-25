"use client";

import { userSchema } from "@/schemas/user-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import CustomFormField from "../custom-form-field";
import SubmitButton from "../submit-button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/client.actions";
import { Client } from "node-appwrite";
import { FormFieldType } from "./user-form";

export default function RegisterForm({ client }: { client: Client }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit({ name, email, phone }: z.infer<typeof userSchema>) {
    setIsLoading(true);

    try {
      const userData = {
        name,
        email,
        phone,
      };

      const user = await createUser(userData);

      if (user) {
        router.push(`/clients/${user.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-12"
      >
        <section className="space-y-4">
          <h1 className="header">Welcome</h1>
          <p className="text-dark-700">
            First, let us know more about yourself.
          </p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>
        </section>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          icon="/assets/icons/user.svg"
          iconAlt="Person Icon"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            label="Email"
            name="email"
            placeholder="Enter your email address"
            icon="/assets/icons/email.svg"
            iconAlt="Email Icon"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.PHONE_INPUT}
            label="Phone Number"
            name="phone"
            placeholder="Phone Number"
          />
        </div>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          label="Address"
          name="address"
          placeholder="14th Street, Example City"
        />

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Vehicle Information</h2>
          </div>
        </section>

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
}
