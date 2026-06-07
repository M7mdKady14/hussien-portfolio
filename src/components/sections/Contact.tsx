import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Lightweight field wrapper — replicates what shadcn's FormItem/FormMessage did,
// but with zero extra dependencies.
function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    // TODO: wire up to your preferred service:
    // - Formspree: fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(values) })
    // - EmailJS
    // - Resend
    // - Your own API route
    console.log(values);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Get In Touch</h2>
        <p className="mb-12 max-w-lg text-muted-foreground">
          Have a project in mind or just want to chat? Send me a message and
          I'll get back to you as soon as possible.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Direct contact info */}
          <div className="space-y-4 text-muted-foreground">
            <p>You can also reach me directly at:</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="block text-lg font-medium text-foreground underline-offset-4 hover:underline"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
              <p className="text-xl font-semibold">Message sent!</p>
              <p className="mt-2 text-muted-foreground">
                I'll get back to you soon.
              </p>
              <Button
                className="mt-6"
                variant="outline"
                onClick={() => setSubmitted(false)}
              >
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Field label="Name" id="name" error={errors.name?.message}>
                <Input
                  id="name"
                  placeholder="Your name"
                  className={cn(errors.name && "border-destructive")}
                  {...register("name")}
                />
              </Field>

              <Field label="Email" id="email" error={errors.email?.message}>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={cn(errors.email && "border-destructive")}
                  {...register("email")}
                />
              </Field>

              <Field
                label="Message"
                id="message"
                error={errors.message?.message}
              >
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className={cn(
                    "min-h-32 resize-none",
                    errors.message && "border-destructive",
                  )}
                  {...register("message")}
                />
              </Field>

              <Button type="submit" className="gap-2" disabled={isSubmitting}>
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
