import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { initialSignUpData, type SignUpDataType } from "../../types/auth.types";

function SignUp() {
  const [signUpData, setSignUpData] =
    useState<SignUpDataType>(initialSignUpData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Input
        name="username"
        value={signUpData.username}
        onChange={handleChange}
      />
      <Input name="email" value={signUpData.email} onChange={handleChange} />
      <Input
        name="password"
        value={signUpData.password}
        onChange={handleChange}
      />

      <Button type="submit" value="Sign Up" disabled={signUpData.loading} />
    </div>
  );
}

export default SignUp;
