"use client";

import "@uiw/react-textarea-code-editor/dist.css";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { createSnippet } from "@/app/_actions/snippets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

import { LanguageSelectionComboBox } from "./_components/language-selection";

type Inputs = {
  description: string;
  language: string;
  code: string;
  tags: string;
};

export const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

const CreateSnippetPage = () => {
  const [loading, startTransition] = useTransition();
  const { toast } = useToast();
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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    startTransition(async () => {
      await createSnippet(data);
      // TODO: HANDLE ERROR
      // TODO: RESET FORM AND PUSH TO SNIPPET PAGE
      toast({
        title: "Snippet created successfully",
      });
    });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-11">
      <form
        className="flex flex-col col-span-9 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
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
              fontFamily: "Fira Code",
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
          <Button className="bg-purple-600" disabled={loading}>
            Create Snippet
            {loading && <Loader2 className="ml-2 animate-spin" size={16} />}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default CreateSnippetPage;
