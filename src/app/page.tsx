"use client";
import { AuthModal } from "crefy-connect";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <AuthModal triggerText="Zanzalu Connect" />
    </div>
  );
}
