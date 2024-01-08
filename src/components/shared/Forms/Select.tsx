import { SelectHTMLAttributes } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

interface Props<T extends FieldValues>
  extends SelectHTMLAttributes<HTMLSelectElement> {
  control: Control<T, any>;
  name: Path<T>;
  label?: string;
  rules?: RegisterOptions;
  errors: FieldErrors<T>;
}

export function Select<T extends FieldValues>({
  control,
  name,
  className,
  required,
  label,
  rules,
  errors,
  ...rest
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-xs font-semibold text-gray-400 italic"
          >
            {label} {label && required && "*"}
          </label>
          <select
            className="p-1 h-9 bg-gray-100 border-b-2 border-gray-400 focus:border-blue-400 duration-200"
            {...field}
            {...rest}
          />
          <span className="text-red-500 text-sm font-semibold">
            {errors[name]?.message as string}
          </span>
        </div>
      )}
    />
  );
}
