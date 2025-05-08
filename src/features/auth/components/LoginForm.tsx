'use client'

import { toast } from 'sonner';
import { Controller, useForm } from "react-hook-form"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { loginSchema } from "@/schema/login.schema"
import ErrorText from "@/components/common/ErrorText"
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';


interface LoginFormData {
  email: string
  password: string
}

const LoginForm = () => {

  const router = useRouter()

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "admin@gmail.com",
      password: "12345678"
    },
  });

  const onSubmit = async (payload: LoginFormData) => {
    console.log("Form Submitted ++66", payload)
    toast.success('Logged In Successfully!');
    router.push("/dashboard/overview")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              id="email"
              {...field}
              type="email"
              placeholder="Enter your email"
            />
          )}
        />
        <ErrorText title={errors?.email?.message} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              id="password"
              {...field}
              type="password"
              placeholder="Enter your password"
            />
          )}
        />
        <ErrorText title={errors?.password?.message} />
      </div>

      <Button type="submit" className="w-full" loading={false} >
        Login
      </Button>
    </form>
  )
}

export default LoginForm
