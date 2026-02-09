import { SubmitButton } from "@/components/custom_ui/common/form/rhf_button";
import { RHFForm } from "@/components/custom_ui/common/form/rhf_form";
import { RHFImageUploadWithDelete } from "@/components/custom_ui/common/form/rhf_image_with_delete";
import { RHFInput } from "@/components/custom_ui/common/form/rhf_input";
import { RHFSelect } from "@/components/custom_ui/common/form/rhf_select";
import { RHFTextarea } from "@/components/custom_ui/common/form/rhf_textarea";

const Video_upload = () => {
  return (
    <div className="">
      <RHFForm onSubmit={() => {}}>
        <RHFSelect
          className="w-96"
          name="category"
          label="Category"
          options={[{ label: "Category 1", value: "value-1" }]}
          placeholder="Select Category"
        ></RHFSelect>
        <RHFImageUploadWithDelete
          className="w-36 h-36"
          name="video"
          label="Upload Video"
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

export default Video_upload;
