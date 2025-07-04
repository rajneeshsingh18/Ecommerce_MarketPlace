import { Button } from "@/components/ui/button";
import "../globals.css";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant="elevated">I am a Button</Button>
        </div>

        <div>
          <Input placeholder="I am a INput"></Input>
        </div>

        <div>
          <Progress value={50}></Progress>
        </div>

        <div>
          <Textarea placeholder="I am a text Area" />
        </div>

        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
