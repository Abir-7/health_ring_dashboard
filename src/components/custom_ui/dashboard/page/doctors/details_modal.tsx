import { RHFForm } from "@/components/custom_ui/common/form/rhf_form";
import { RHFImageUpload } from "@/components/custom_ui/common/form/rhf_image";
import { RHFInput } from "@/components/custom_ui/common/form/rhf_input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const DoctorDetails = ({
  data,
}: {
  data: { image: string; name: string; specialist: string };
}) => {
  const [readOnly, setReadOnly] = useState(true);
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-left">
          <div className="flex items-center gap-3">
            <img
              src={data.image}
              alt={data.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="">
              <p className="font-medium text-user-filter-default">
                {data.name}
              </p>
              <span className=" text-muted-foreground ">{data.specialist}</span>
            </span>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full" style={{ maxWidth: "90vw" }}>
          <DialogHeader>
            <DialogTitle className="w-full"></DialogTitle>
            <DialogDescription>
              <RHFForm onSubmit={() => {}} className="space-y-4">
                <div className="space-y-6 ">
                  <div className="flex items-center justify-between p-4 mt-4 border rounded-lg">
                    <div className="flex  items-center gap-3">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <span className="space-y-1 text-left">
                        <p className="font-medium text-[16px] text-user-filter-default">
                          {data.name}
                        </p>
                        <span className=" text-base text-muted-foreground ">
                          {data.specialist}
                        </span>
                      </span>
                    </div>
                    {!readOnly && (
                      <div className="flex gap-3 items-center">
                        <Button>Update</Button>
                        <Button>Cancel</Button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className=" p-4 border rounded-lg space-y-4">
                      <div className="flex justify-between items-center text-gray-900">
                        <div className="text-lg text-gray-900">
                          Profile Details
                        </div>
                        <div
                          onClick={() => {
                            setReadOnly(!readOnly);
                          }}
                        >
                          <Edit
                            className="hover:text-app-base-color"
                            size={20}
                          />
                        </div>
                      </div>
                      <RHFInput
                        name="name"
                        placeholder="Name"
                        label="Full Name"
                        readonly={readOnly}
                      ></RHFInput>
                      <RHFInput
                        name="experience"
                        placeholder="Experience"
                        label="Experience"
                        readonly={readOnly}
                      ></RHFInput>

                      <RHFInput
                        name="specialist"
                        placeholder="Speciality"
                        label="Speciality"
                        readonly={readOnly}
                      ></RHFInput>
                      <RHFInput
                        name="hospital_number"
                        placeholder="Hospital number you work in"
                        label="Hospital number you work in"
                        readonly={readOnly}
                      ></RHFInput>
                      <RHFInput
                        name="experience"
                        placeholder="Experience"
                        label="Experience"
                        readonly={readOnly}
                      ></RHFInput>
                    </div>
                    <div className="lg:col-span-2 p-4 border rounded-lg">
                      {!readOnly ? (
                        <RHFImageUpload
                          className="w-full h-60"
                          name="image"
                          label="Upload Image"
                        ></RHFImageUpload>
                      ) : (
                        <div className="space-y-6">
                          <p className="text-lg text-gray-900">Review</p>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <ReviewData data={data} />
                            <ReviewData data={data} />
                            <ReviewData data={data} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </RHFForm>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DoctorDetails;

const ReviewData = ({
  data,
}: {
  data: { image: string; name: string; specialist: string };
}) => {
  return (
    <div className="space-y-2 p-3 border-l  ">
      <div className="flex  items-center gap-3">
        <img
          src={data.image}
          alt={data.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="space-y-0.5 text-left">
          <p className="font-medium text-[14px] text-user-filter-default">
            {data.name}
          </p>
          <div className="flex gap-3">
            <span className=" text-sm text-muted-foreground ">
              <Rating style={{ maxWidth: 90 }} value={4} readOnly />
            </span>
            <span className=" text-sm text-muted-foreground ">
              {"3 week ago"}
            </span>
          </div>
        </span>
      </div>
      <p className="text-sm leading-relaxed text-gray-700 line-clamp-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        praesentium alias illum ut autem iste aspernatur, ipsam sunt dicta
        facilis numquam incidunt amet ipsum necessitatibus quidem non blanditiis
        quo. Dolorum.
      </p>
    </div>
  );
};
