import { SubmitButton } from "@/components/custom_ui/common/form/rhf_button";
import { RHFForm } from "@/components/custom_ui/common/form/rhf_form";
import { RHFImageUploadWithDelete } from "@/components/custom_ui/common/form/rhf_image_with_delete";

const BannerUploads = () => {
  return (
    <div className="">
      <RHFForm onSubmit={() => {}}>
        <RHFImageUploadWithDelete
          className="w-36 h-36"
          name="video"
          label="Upload Video"
        ></RHFImageUploadWithDelete>

        <div className="flex justify-end">
          <SubmitButton className="bg-app-base-color">Publish</SubmitButton>
        </div>
      </RHFForm>
    </div>
  );
};

export default BannerUploads;
