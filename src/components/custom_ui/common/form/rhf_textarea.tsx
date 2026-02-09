import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface TextareaFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  className?: string;
  labelStyle?: string;
  readonly?: boolean;
  rows?: number; // optional rows
}

export function RHFTextarea<T extends FieldValues>({
  name,
  label,
  placeholder,
  className,
  labelStyle,
  readonly = false,
  rows = 4,
}: TextareaFieldProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className={labelStyle}>{label}</FormLabel>}
          <FormControl>
            <Textarea
              {...field}
              readOnly={readonly}
              rows={rows}
              placeholder={placeholder}
              className={`${className} ${
                readonly ? "pointer-events-none" : ""
              } focus-within:ring-0 focus-visible:ring-0`}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
