"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { SocialConnection } from "@/components/index";
import { CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Not a valid name",
  }),
  email: z.string().email().min(5, {
    message: "Not a valid mail",
  }),
});

const ContactPage = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted");

    console.log(values);
  }

  return (
    <>
      <div className="bg-white-800 dark:bg-black-200 py-24 ">
        <div className="flex max-container sm:flex-col-reverse">
          <div className="w-1/2 sm:w-full text-center">
            <h1 className="text-center heading-1 text-black-200 dark:text-white-900 mb-8">
              <span className="strip">Get In Touch</span>
            </h1>
            <p className="para-regular text-white-500">
              Let&apos;s Collaborate on Your Next Project
            </p>
          </div>
        </div>
      </div>
      <div className="flex max-w-screen-xl mx-auto py-20">
        <div className="w-2/5">
          <SocialConnection />
        </div>
        <div className="w-3/5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CardContent>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="my-8">
                      <FormLabel>What is your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="my-8">
                      <FormLabel>What&apos;s your email?</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="my-8">
                      <FormLabel>Write something about your project goals and timeframe</FormLabel>
                      <FormControl>
                        <Input className="h-[180px]" placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="my-8">
                      <FormLabel>How to reach out to you back? eg. phone number or email</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <div className="flex justify-end pr-5">
                <Button type="submit" className="btn-primary">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
