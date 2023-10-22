"use client";

// import CodeEditor from "@uiw/react-textarea-code-editor";
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import SnippetCard from "@/components/snippet-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { LanguageSelectionComboBox } from "./_components/language-selection";

type Inputs = {
  description: string;
  language: string;
  code: string;
  tags: string;
};

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

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
        <CodeEditor
          value={watch("code")}
          onChange={(e) => setValue("code", e.target.value)}
          placeholder="Enter your snippet code"
          className="min-h-[300px] bg-transparent border-purple-400 rounded-md"
          language={watch("language")}
          padding={10}
          style={{
            fontSize: 15,
            fontFamily: '"Fira code", "Fira Mono", monospace',
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Enter your snippet tags</Label>
        <Input
          placeholder="Tags"
          className="bg-transparent border-purple-400"
          {...register("tags", { required: true })}
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
        // <CodePreviewComponent
        //   code={watch("code")}
        //   language={watch("language")}
        // />
        <SnippetCard
          snippet={{
            author: "test",
            description: watch("description"),
            language: watch("language"),
            code: watch("code"),
            tags: watch("tags").split(","),
            date: "22 Oct 2023",
          }}
        />
      )}
    </form>
  );
};

export default CreateSnippetPage;
