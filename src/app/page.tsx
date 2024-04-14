import { Button } from "@/components/ui/button";
import Link from "next/link";
import AppButton from "./_components/AppButton";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-slate-200">🔐 Next Auth</h1>
        <p className="text-3xl font-medium text-slate-300">
          This is a practice in NextJS
        </p>
        <div>
          <AppButton
            ActionMode="redirect"
            path="/signin"
            className="w-full text-xl py-6"
          >
            Try Auth
          </AppButton>
        </div>
      </div>
    </div>
  );
}
