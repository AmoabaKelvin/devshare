"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";

const MdEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);
const CommentSection = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-purple-400">Comments</h1>
        <Button
          className="bg-purple-600"
          onClick={() => setShowEditor(!showEditor)}
        >
          Add Comment
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {showEditor && (
          <motion.div
            key="comment"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col gap-4 mt-4"
            data-color-mode="dark"
          >
            <div className="wmde-markdown-var"> </div>
            <MdEditor
              value={comment}
              // toolbarHeight={34}
              height={250}
              onChange={(value) => setComment(value || "")}
            />
            <div className="flex items-center justify-end gap-4">
              <Button className="bg-purple-600">Post Comment</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-3">
          <Image
            src="https://avatars.githubusercontent.com/u/37606573?v=4"
            alt="AmoaKelvin"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-purple-400">Amoa Kelvin</h1>
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, voluptatum.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="https://avatars.githubusercontent.com/u/37606573?v=4"
            alt="AmoaKelvin"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-purple-400">Amoa Kelvin</h1>
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, voluptatum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentSection;
