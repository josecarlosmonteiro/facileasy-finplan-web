"use client";

import { Input } from "@/components/shared/Forms/Input";
import { Select } from "@/components/shared/Forms/Select";
import {
  EXPENSES_CATEGORIES,
  RELEASE_TRANSITION_TYPES,
  REVENUES_CATEGORIES,
} from "@/constants/releases";
import { TRelease } from "@/types/releases";
import { uniqueId } from "lodash";
import { useForm } from "react-hook-form";

export function AddReleaseForm({
  releaseType,
  submitFn,
}: {
  releaseType: "in" | "out";
  submitFn: (data: TRelease) => void;
}) {
  const categories =
    releaseType === "in" ? REVENUES_CATEGORIES : EXPENSES_CATEGORIES;

  const {
    control,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<TRelease>({
    defaultValues: {
      category: categories[0],
      transferType: RELEASE_TRANSITION_TYPES[0],
    },
  });

  const handleSubmitData = (data: TRelease) => {
    const release: TRelease = {
      ...data,
      type: releaseType,
      value: Number(data.value),
    };

    submitFn(release);

    setFocus("title");
    setValue("title", "");
    setValue("value", 0);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitData)}>
      <div className="grid grid-cols-2 gap-4">
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
          type="number"
          control={control}
          name="value"
          step={0.1}
          errors={errors}
          placeholder="1000"
          rules={{ required: "campo obrigatório" }}
        />
      </div>
      <div className="p-2 mt-2 flex justify-end">
        <button
          type="submit"
          className={`p-2 rounded ${releaseType === "in" ? "bg-emerald-500" : "bg-red-500"
            } text-white`}
        >
          adicionar
        </button>
      </div>
    </form>
  );
}
