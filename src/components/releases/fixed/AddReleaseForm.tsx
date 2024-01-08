"use client";

import { Input } from "@/components/shared/Forms/Input";
import { Select } from "@/components/shared/Forms/Select";
import { EXPENSES_CATEGORIES, RELEASE_TRANSITION_TYPES, REVENUES_CATEGORIES } from "@/constants/releases";
import { TRelease } from "@/types/releases";
import { useForm } from "react-hook-form";

export function AddReleaseForm({ releaseType }: { releaseType: "in" | "out" }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TRelease>();

  const categories =
    releaseType === "in" ? REVENUES_CATEGORIES : EXPENSES_CATEGORIES;

  return (
    <form onSubmit={handleSubmit((data) => console.log("submit data:", data))}>
      <div className="p-2 grid grid-cols-2 gap-4">
        <Select
          label="Categoria"
          control={control}
          name="category"
          errors={errors}
        >
          {categories.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>

        <Select
          label="Tipo de transferência"
          control={control}
          name="transferType"
          errors={errors}
        >
          {RELEASE_TRANSITION_TYPES.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>

        <Input
          label="Título do lançamento"
          control={control}
          name="title"
          errors={errors}
          placeholder="salário, aluguel, netflix..."
          rules={{ required: "campo obrigatório" }}
        />

        <Input
          label="Valor (R$)"
          control={control}
          name="value"
          errors={errors}
          placeholder="1000"
          rules={{ required: "campo obrigatório" }}
        />

        <div className="col-span-2">
          <button
            type="submit"
            className={`p-2 rounded ${
              releaseType === "in" ? "bg-emerald-500" : "bg-red-500"
            } text-white`}
          >
            adicionar
          </button>
        </div>
      </div>
    </form>
  );
}
