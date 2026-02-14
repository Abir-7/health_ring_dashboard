import { SubmitButton } from "@/components/custom_ui/common/form/rhf_button";
import { RHFForm } from "@/components/custom_ui/common/form/rhf_form";
import { RHFImageUploadWithDelete } from "@/components/custom_ui/common/form/rhf_image_with_delete";
import { RHFInput } from "@/components/custom_ui/common/form/rhf_input";
import { RHFTextarea } from "@/components/custom_ui/common/form/rhf_textarea";

const Articles_upload = () => {
  return (
    <div className="">
      <RHFForm onSubmit={() => {}}>
        <RHFImageUploadWithDelete
          className="w-36 h-36"
          name="image"
          label="Upload Image"
        ></RHFImageUploadWithDelete>
        <RHFInput name="title" label="Caption"></RHFInput>
        <RHFTextarea name="description" label="Description"></RHFTextarea>
        <div className="flex justify-end">
          <SubmitButton className="bg-app-base-color">Publish</SubmitButton>
        </div>
      </RHFForm>
    </div>
  );
};

export default Articles_upload;
