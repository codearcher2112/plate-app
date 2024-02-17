'use client'

import { useEffect, useState } from 'react';
import { UserAuth } from '@/context/AuthContext';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function ProfilePage({params}) {
    const { user } = UserAuth();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 300));
            setLoading(false);
        }

        checkAuthentication();
    }, [user]);

    return (
        <main className="profile py-24">
            <div className="profile__container container mx-auto px-4">
                {loading ? (<div className="flex justify-center items-center min-h-[60vh] py-24">Loading...</div>) : user ? (
                    <div className="min-h-[60vh] py-24">
                        <div className="profile__avatar-wrapper mb-10">
                            <Avatar className="w-32 h-32">
                                <AvatarImage src={user.photoURL} />

                                <AvatarFallback>
                                    X
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="text-3xl">
                            {user.displayName}
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center min-h-[60vh] py-24 text-3xl sm:text-5xl text-center">
                        You must logged in to view this page
                    </div>)}
            </div>
        </main>
    );
}
