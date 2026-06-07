import { MapPin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { personalInfo } from "@/data";

export function About() {
  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">About Me</h2>

        <div className="grid gap-12 md:grid-cols-[200px_1fr]">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Avatar className="h-40 w-40">
              <AvatarImage src="/images/avatar.jpg" alt={personalInfo.name} />
              <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
            </Avatar>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {personalInfo.bio}
            </p>

            <Separator />

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
