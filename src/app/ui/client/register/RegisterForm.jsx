"use client";
import { register } from "@/lib/db/user.action.js";
import { useRouter } from "next/navigation.js";
import { useFormState } from "react-dom";
const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  if (state?.success) {
    router.push("/login");
  }

  return (
    <div className="flex flex-col gap-3 w-[650px] min-h-[260px] p-3 bg-bgPrimarySoft rounded-lg">
      <h3 className="text-2xl font-semibold text-center">Inscription</h3>
      <form action={formAction} className="flex flex-col gap-2">
        <div className="flex justify-between gap-3 ">
          <input
            type="text"
            name="name"
            placeholder="Nom complet *"
            className="p-3 rounded-md w-1/2 bg-bgPrimary border-none outline-none"
          />
          <input
            type="text"
            placeholder="Pseudo *"
            name="username"
            className="p-3 rounded-md w-1/2 bg-bgPrimary border-none outline-none"
          />
        </div>
        <div className="flex justify-between gap-3 ">
          <input
            type="email"
            placeholder="Email *"
            name="email"
            className="p-3 rounded-md w-1/2 bg-bgPrimary border-none outline-none"
          />
          <input
            type="text"
            placeholder="Téléphone *"
            name="phone"
            className="p-3 rounded-md w-1/2 bg-bgPrimary border-none outline-none"
          />
        </div>
        <div className="flex justify-between gap-3 ">
          <input
            type="password"
            placeholder="mot de passe *"
            name="password"
            className="p-3 rounded-md w-1/2 bg-bgPrimary border-none outline-none"
          />
          <input
            type="password"
            placeholder="Confimer mot de passe *"
            className="p-3 rounded-md w-1/2 bg-bgPrimary border-none outline-none"
          />
        </div>
        <textarea
          name="address"
          id=""
          rows={3}
          placeholder="Adresse"
          className="p-3 rounded-md w-full bg-bgPrimary border-none outline-none"
        ></textarea>
        <div className="flex justify-between gap-3 ">
          <input
            type="file"
            name="image"
            className="p-3 rounded-md w-1/2  border-none outline-none cursor-pointer"
          />
          <input type="hidden" name="userId" value={""} />
        </div>
        <input
          type="submit"
          value="S'inscrire"
          className="p-3 rounded-md w-full bg-purple-700 border-none outline-none font-semibold text-base cursor-pointer"
        />
      </form>
    </div>
  );
};

export default RegisterForm;
