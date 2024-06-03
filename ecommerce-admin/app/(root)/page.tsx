import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>
        <UserButton />
    </div>
  );
}
