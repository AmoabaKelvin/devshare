"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import CodePreviewComponent from "@/components/code-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { LanguageSelectionComboBox } from "./_components/language-selection";

type Inputs = {
  description: string;
  language: string;
  code: string;
  tags: string;
};

const CreateSnippetPage = () => {
  const [viewPreview, setViewPreview] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const handleLanguageSelection = (language: string, value: string) => {
    setValue("language", value);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">
          What is your snippet about? (e.g. How to create a custom hook)
        </Label>
        <Input
          placeholder="Description"
          className="col-span-6 bg-transparent border-purple-400"
          {...register("description", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="description">Enter your snippet code</Label>
          <LanguageSelectionComboBox onSelect={handleLanguageSelection} />
        </div>
        <Textarea
          className="bg-transparent border-purple-400"
          rows={12}
          {...register("code", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Enter your snippet tags</Label>
        <Input
          placeholder="Tags"
          className="bg-transparent border-purple-400"
        />
      </div>
      <div className="flex justify-end gap-4">
        <Button
          variant="secondary"
          onClick={(e) => {
            setViewPreview(!viewPreview);
          }}
        >
          {/* Preview Snippet */}
          {viewPreview ? "Close Preview" : "Preview Snippet"}
        </Button>
        <Button className="bg-purple-600">Create Snippet</Button>
      </div>

      {viewPreview && (
        <CodePreviewComponent
          code={watch("code")}
          language={watch("language")}
        />
      )}
    </form>
  );
};

export default CreateSnippetPage;
