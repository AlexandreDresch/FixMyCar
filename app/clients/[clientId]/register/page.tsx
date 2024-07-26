import RegisterForm from "@/components/forms/register-form";
import { getUser } from "@/lib/actions/client.actions";
import Image from "next/image";

export default async function Register({
  params: { clientId },
}: SearchParamProps) {
  const client = await getUser(clientId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Logo"
            className="h10 mb-12 w-fit"
          />

          <RegisterForm client={client} />

          <p className="copyright py-12">© 2024 FixMyCar</p>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-part-two.jpg"
        height={1000}
        width={1000}
        alt="Toolkit"
        className="side-img max-w-[40%]"
      />
    </div>
  );
}
