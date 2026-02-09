import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import { Upload, Trash2 } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

interface RHFImageProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  className: string;
}

export function RHFImageUploadWithDelete<T extends FieldValues>({
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
        <FormItem className="space-y-2">
          {label && <FormLabel>{label}</FormLabel>}

          {/* Upload / Preview box */}
          <label
            className={`relative 
              ${className}
              flex cursor-pointer items-center justify-center overflow-hidden rounded-md 
              border border-dashed border-muted-foreground/50 hover:border-gray-400`}
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
              <Upload className="h-6 w-6 text-muted-foreground" />
            )}
          </label>

          {/* Remove button BELOW */}
          {field.value && (
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="w-fit bg-red-400"
              onClick={() => field.onChange(null)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Remove image
            </Button>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
