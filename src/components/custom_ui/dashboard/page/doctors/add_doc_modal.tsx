import { SubmitButton } from "@/components/custom_ui/common/form/rhf_button";
import { RHFForm } from "@/components/custom_ui/common/form/rhf_form";
import { RHFImageUpload } from "@/components/custom_ui/common/form/rhf_image";
import { RHFInput } from "@/components/custom_ui/common/form/rhf_input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import "@smastrom/react-rating/style.css";
const AddNewDoctor = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-left px-3 py-1 rounded-lg bg-app-base-color_hover">
          Add New
        </DialogTrigger>

        <DialogContent
          className="
      w-[95vw]
      max-w-[95vw]
      sm:max-w-3xl
      lg:max-w-5xl
      xl:max-w-6xl

      overflow-y-auto
    "
        >
          <DialogHeader>
            <DialogTitle className="mb-3">Add New Doctor</DialogTitle>

            <DialogDescription asChild>
              <RHFForm onSubmit={() => {}} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Left */}
                  <div className="space-y-4 rounded-lg border p-4">
                    <RHFInput name="name" label="Full Name" />
                    <RHFInput name="experience" label="Experience" />
                    <RHFInput name="specialist" label="Speciality" />
                    <RHFInput name="contact" label="Contact" />
                    <RHFInput
                      name="hospital_number"
                      label="Hospital number you work in"
                    />
                  </div>

                  {/* Right */}
                  <div className="rounded-lg border p-4">
                    <RHFImageUpload
                      name="image"
                      label="Upload Image"
                      className="h-60 sm:h-75 w-full"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <SubmitButton className="w-40 md:w-72">Add</SubmitButton>
                </div>
              </RHFForm>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewDoctor;
