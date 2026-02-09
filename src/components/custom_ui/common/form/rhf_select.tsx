import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOption {
  label: string;
  value: string;
}

interface RHFSelectProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
  labelStyle?: string;
  disabled?: boolean;
}

export function RHFSelect<T extends FieldValues>({
  name,
  label,
  placeholder = "Select an option",
  options,
  className,
  labelStyle,
  disabled = false,
}: RHFSelectProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className={labelStyle}>{label}</FormLabel>}
          <FormControl>
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={disabled}
            >
              <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
