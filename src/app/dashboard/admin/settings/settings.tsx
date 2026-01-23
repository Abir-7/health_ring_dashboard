import { SubmitButton } from "@/components/custom_ui/common/form/rhf_button";
import { RHFForm } from "@/components/custom_ui/common/form/rhf_form";
import { RHFInput } from "@/components/custom_ui/common/form/rhf_input";
import { Label } from "@/components/ui/label";
import {
  settingsSchema,
  type SettingsFormValues,
} from "@/validation/zod/setting.schema";

import { Globe } from "lucide-react";

const Settings = () => {
  const handleLogin = async (data: SettingsFormValues) => {
    console.log(data);
  };

  const defaultValues: SettingsFormValues = {
    name: "",
    email: "",
    phone: "",
    subscription: {
      standard: 0,
      classic: 0,
      premium: 0,
    },
  };

  return (
    <div className="p-4 text-user-filter-default">
      <div className="p-4 border rounded-lg space-y-4">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-green-500" />
          <h1> Platform Settings</h1>
        </div>
        <RHFForm
          schema={settingsSchema}
          defaultValues={defaultValues}
          onSubmit={handleLogin}
          className=""
        >
          <RHFInput
            name="name"
            label="Platform Name"
            type="text"
            placeholder="Platform Name"
          />
          <RHFInput
            name="email"
            label="Support Email"
            type="email"
            placeholder="Support Email"
          />
          <RHFInput
            name="phone"
            label="Support Phone"
            type="text"
            placeholder="Support Phone"
          />

          <div className="space-y-3">
            <Label className="">Subscription Pricing (XOF)</Label>
            <div className="flex gap-4">
              <RHFInput
                name="subscription.standard"
                label="Standard"
                type="number"
                placeholder="Support Phone"
                labelStyle="text-xs text-user-filter-option"
              />
              <RHFInput
                name="subscription.classic"
                label="Classic"
                type="number"
                placeholder="Support Phone"
                labelStyle="text-xs text-user-filter-option"
              />
              <RHFInput
                name="subscription.premium"
                label="Premium"
                type="number"
                placeholder="Support Phone"
                labelStyle="text-xs text-user-filter-option"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <SubmitButton className=" max-w-1/4 w-full bg-green-600">
              Update
            </SubmitButton>
          </div>
        </RHFForm>
      </div>
    </div>
  );
};

export default Settings;
