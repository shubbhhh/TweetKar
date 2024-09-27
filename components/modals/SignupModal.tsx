"use client"

import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useSignupModal from "@/hooks/useSignupModal";
import { signIn } from "next-auth/react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useLoginModal from "@/hooks/useLoginModal";

export default function SignupModal() {
    const loginModal = useLoginModal();
    const signupModal = useSignupModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toggle = useCallback(() => {
        if (isLoading) return;

        signupModal.onClose();
        loginModal.onOpen();

    }, [loginModal, signupModal, isLoading]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            console.log("user details",{ email, name, username, password })

            await axios.post('api/signup', {
                email,
                name,
                username,
                password
            });
            
            toast.success("Account created!")
            
            signIn("credentials", {
                email,
                password
            });

            signupModal.onClose()
        } catch(error) {
            console.log(error)
            toast.error('Something went wrong')
        } finally {
            setIsLoading(false);
        }
    }, [signupModal, email, username, password, name])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value)
                    console.log(email)
                }}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="flex gap-1 items-center">
            <p>Already have an account?</p>
            <p
                onClick={toggle}
                className="hover:underline"
            >
                Login
            </p>
        </div>
    )

    return (
        <>
            <Modal 
                disabled={isLoading}
                isOpen={signupModal.isOpen}
                title="Sign-up"
                actionLabel="Sign un"
                onClose={signupModal.onClose}
                onSubmit={onSubmit}
                body={bodyContent}
                footer={footerContent}
            />
        </>
    )
}