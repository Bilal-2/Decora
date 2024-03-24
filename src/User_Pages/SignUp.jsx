import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { useState } from "react";

export default function SignUp() {

  const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
    
    })
    
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const responce = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: credentials.name,
                password: credentials.password,
                email: credentials.email,
               
    
            })
        });
        const json = await responce.json()
        console.log(json);
    
        if (!json.success) {
            alert("Enter Valid Credentials ")
        }
    
    }
    
    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    
    




  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <Card
        color="white"
        shadow="lg"
        className="px-6 py-4"
      >
       <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3 text-black">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            value={credentials.name} 
            onChange={onChange}
            name="name"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3text-gray-800" >
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            value={credentials.email} 
            onChange={onChange}
            name="email"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3 text-black">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            value={credentials.password} 
            onChange={onChange}
            name="password"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        {/* <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        /> */}
        <Button className="mt-6" fullWidth type="submit">
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
      </Card>
    </div>
  );
}




