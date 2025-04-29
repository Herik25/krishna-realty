"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const selectedFile = watch("resume");

  return (
    <Card className="w-full shadow-xl rounded-2xl border-black bg-background">
      <CardContent>
        <h2 className="text-2xl font-bold text-center mb-4 text-black">
          Apply Now
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="mb-2">
                First Name
              </Label>
              <Input
                className="border-black focus-visible:ring-0 focus-visible:border-black"
                id="firstName"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">First name is required</p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName" className="mb-2">
                Last Name
              </Label>
              <Input
                className="border-black focus-visible:ring-0 focus-visible:border-black"
                id="lastName"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">Last name is required</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="mobile" className="mb-2">
              Mobile Number
            </Label>
            <Input
              className="border-black focus-visible:ring-0 focus-visible:border-black"
              id="mobile"
              type="tel"
              {...register("mobile", { required: true })}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">Mobile number is required</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city" className="mb-2">
                City
              </Label>
              <Input
                className="border-black focus-visible:ring-0 focus-visible:border-black"
                id="city"
                {...register("city", { required: true })}
              />
            </div>

            <div>
              <Label htmlFor="state" className="mb-2">
                State
              </Label>
              <Input
                className="border-black focus-visible:ring-0 focus-visible:border-black"
                id="state"
                {...register("state", { required: true })}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="post" className="mb-2">
                Applying For
              </Label>
              <Select onValueChange={(value) => setValue("post", value)}>
                <SelectTrigger className="border-black !text-black w-full focus-visible:ring-0 focus-visible:border-black">
                  <SelectValue placeholder="Select a post" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-black">
                  <SelectItem
                    className="hover:!bg-transparent hover:border hover:border-black border border-transparent focus:bg-background focus:border-black"
                    value="frontend"
                  >
                    Frontend Developer
                  </SelectItem>
                  <SelectItem
                    className="hover:!bg-transparent hover:border hover:border-black border border-transparent focus:bg-background focus:border-black"
                    value="backend"
                  >
                    Backend Developer
                  </SelectItem>
                  <SelectItem
                    className="hover:!bg-transparent hover:border hover:border-black border border-transparent focus:bg-background focus:border-black"
                    value="fullstack"
                  >
                    Full Stack Developer
                  </SelectItem>
                  <SelectItem
                    className="hover:!bg-transparent hover:border hover:border-black border border-transparent focus:bg-background focus:border-black"
                    value="designer"
                  >
                    UI/UX Designer
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.post && (
                <p className="text-red-500 text-sm">Please select a post</p>
              )}
            </div>

            <div>
              <Label htmlFor="resume" className="mb-2">
                Upload Resume
              </Label>
              <Input
                className="border-black focus-visible:ring-0 focus-visible:border-black"
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                {...register("resume", { required: true })}
              />
              {/* {selectedFile?.[0] && (
                <p className="text-sm text-green-600 mt-1">
                  Uploaded: {selectedFile[0]?.name}
                </p>
              )} */}
              {errors.resume && (
                <p className="text-red-500 text-sm">Resume is required</p>
              )}
            </div>
          </div>

          <div className="w-min mx-auto pt-4">
            <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] lg:block cursor-pointer">
              <Button
                className="rounded-full border-0 bg-background text-black font-light hover:bg-transparent hover:text-white"
                type="submit"
              >
                Submit Application
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
