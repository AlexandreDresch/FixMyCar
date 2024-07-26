import UserForm from "@/components/forms/user-form";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

          <UserForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="copyright">
              © 2024 FixMyCar
            </p>

            <Link href="/?admin=true" className="text-dark-700 hover:text-dark-600">
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
        className="side-img max-w-[40%]"
      />
    </div>
  );
}
