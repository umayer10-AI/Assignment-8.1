"use client"
import { authClient } from '@/lib/auth-client';
import { Check, Eye, EyeSlash } from '@gravity-ui/icons';
import { Button, FieldError, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {

    const {register,handleSubmit,formState: { errors }} = useForm()

    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter()

    const a = async (v) => {

        const { data, error } = await authClient.signUp.email({
            name: v.name,
            email: v.email,
            password: v.password,
            image: v.image,
            callbackURL: "/",
        });

        console.log({data,error})

        if(data){
          alert("Data Successfully")
          router.push('/')
        }
        if(error){
          alert(error.message)
        }

    }

    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="flex justify-center">
      <Form className="flex w-80 shadow border lg:w-100 p-5 mt-5 rounded-xl flex-col gap-4" onSubmit={handleSubmit(a)}>

        <h2 className="text-2xl font-bold text-center">Register your account</h2>
        <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" {...register("name", { required: true })}/>
            <FieldError />
          </TextField>

        <TextField
            isRequired
            name="url"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Photo URL</Label>
            <Input placeholder="Enter your URL" {...register("url", { required: true })}/>
            <FieldError />
          </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" {...register("email", { required: true })}/>  
          <FieldError />
        </TextField>

        <TextField className="w-full" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full"
          type={isVisible ? "text" : "password"}
          {...register("password", { required: true })}
           placeholder="Enter your password"
        />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>

        <div className="space-y-2">
            <div className="flex gap-2 justify-center">
          <Button className={"bg-linear-to-r from-cyan-500 to-blue-600"} type="submit">
            <Check />
            Register
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <div className="mt-4 space-y-1">
            <h2 className="font-semibold text-center text-sm">Already have an account? <Link href={'/signin'} className="text-green-500">Login</Link></h2>
          <h2 className="text-center">Or</h2>
          <Button onClick={handleGoogle} className={'w-full shadow'} variant='secondary'><FcGoogle />Sign In With Google</Button>
        </div>
        </div>
      </Form>
    </div>
    );
};

export default SignUpPage;