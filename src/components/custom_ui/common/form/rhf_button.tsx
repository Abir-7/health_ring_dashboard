import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function SubmitButton({ children, className }: SubmitButtonProps) {
  const { formState } = useFormContext();

  return (
    <Button
      type="submit"
      className={className}
      disabled={formState.isSubmitting} // automatically disable when submitting
    >
      {children}
    </Button>
  );
}
