"use client"
import { useRouter } from 'next/navigation'

export default function layout({children}){
    const router = useRouter()
    const login = true
    return (
        <>
        {login?children:router.push("/")}
        </>
    )
}