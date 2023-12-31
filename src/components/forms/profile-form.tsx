"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { updateProfile } from "@/app/_actions/profile";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Profile } from "@/db/schema/users";
import { cn } from "@/lib/utils";

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
  connectGithub: z.boolean().optional(),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;

type InitialValues = Omit<Profile, "links" | "bio"> & {
  urls: { value: string }[];
  bio: string | undefined;
};

export function ProfileForm({
  initialValues,
}: {
  initialValues?: InitialValues;
}) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: initialValues,
    mode: "onChange",
  });
  const [pending, startTransition] = useTransition();

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  function onSubmit(data: ProfileFormValues) {
    startTransition(() => {
      updateProfile(data);
    });
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-9">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-black md:col-span-7"
        >
          <div>
            <h2 className="text-2xl text-white">Your DevShare Profile</h2>
            <p className="text-slate-300">
              Some of this information will be visible to the public.
            </p>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="shadcn"
                    {...field}
                    className="text-white bg-transparent border-purple-400"
                  />
                </FormControl>
                <FormDescription className="text-slate-300">
                  This is your public display name. It can be your real name or
                  a pseudonym. You can only change this once every 30 days.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="text-white bg-transparent border-purple-400 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-slate-300">
                  You can <span>@mention</span> other users and organizations to
                  link to them.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`urls.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(index !== 0 && "sr-only", "text-white")}
                    >
                      URLs
                    </FormLabel>
                    <FormDescription
                      className={cn(index !== 0 && "sr-only", "text-slate-300")}
                    >
                      Add links to your website, blog, or social media profiles.
                    </FormDescription>
                    <FormControl>
                      <Input
                        {...field}
                        className="text-white bg-transparent border-purple-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append({ value: "" })}
            >
              Add URL
            </Button>
          </div>
          <div className="flex space-x-2 text-white items-top">
            <Checkbox id="terms1" className="border-white" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Connect to GitHub
              </label>
              <p className="text-sm text-slate-300">
                Connect your GitHub account to show your latest activity on your
                profile.
              </p>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600"
            disabled={pending}
          >
            Update profile
          </Button>
        </form>
      </Form>
    </section>
  );
}
