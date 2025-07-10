import { useState } from "react";
import { TextField, Button, Typography, Card, CardContent } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-md">
        <CardContent>
          <Typography variant="h5" className="text-center mb-6 font-semibold">
            Sign Up
          </Typography>
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

