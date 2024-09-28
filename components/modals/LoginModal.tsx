"use client"

import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useSignupModal from "@/hooks/useSignupModal";
import { signIn } from "next-auth/react";
import bcrypt from "bcrypt";


export default function LoginModal() {
    const loginModal = useLoginModal();
    const signupModal = useSignupModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toggle = useCallback(() => {
        if (isLoading) return;

        loginModal.onClose();
        signupModal.onOpen();
        
    }, [loginModal, signupModal, isLoading]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            
            console.log(email, password);
            
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false
            })
            
            if (res?.error) {   
                console.log(res.error);
            } else {
                loginModal.onClose();   
            }

        } catch(error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }, [loginModal, email, password])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
            <p>Don't have an account?
                <span
                    onClick={toggle}
                    className="hover:underline"
                >
                    Sign-up
                </span>
            </p>
        </div>
    )

    return (
        <>
            <Modal 
                disabled={isLoading}
                isOpen={loginModal.isOpen}
                title="Login"
                actionLabel="Sign in"
                onClose={loginModal.onClose}
                onSubmit={onSubmit} 
                body={bodyContent}
                footer={footerContent}
            />
        </>
    )
}