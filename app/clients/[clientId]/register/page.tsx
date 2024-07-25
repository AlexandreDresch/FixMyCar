import RegisterForm from "@/components/forms/register-form";
import { getUser } from "@/lib/actions/client.actions";
import Image from "next/image";
import Link from "next/link";

export default async function Register({ params: {clientId}}: SearchParamProps) {
    const client = await getUser(clientId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Logo"
            className="h10 mb-12 w-fit"
          />

          <RegisterForm client={client}/>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 FixMyCar
            </p>

            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.jpg"
        height={1000}
        width={1000}
        alt="Mechanic"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
