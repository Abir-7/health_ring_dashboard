import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import { Upload } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface RHFImageProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;

  className: string;
}

export function RHFImageUpload<T extends FieldValues>({
  name,
  label,

  className,
}: RHFImageProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <label
            className={`relative 
              ${className}
              flex cursor-pointer items-center justify-center overflow-hidden rounded-md border border-dashed border-muted-foreground/50 hover:border-gray-400 `}
          >
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) field.onChange(file);
              }}
            />

            {field.value ? (
              <img
                src={
                  typeof field.value === "string"
                    ? field.value
                    : URL.createObjectURL(field.value)
                }
                alt="Preview"
                className={`object-cover ${className}`}
              />
            ) : (
              <Upload className="h-8 w-8 text-muted-foreground" />
            )}
          </label>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
