import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data";
import type { Skill } from "@/types";

const categories: { value: Skill["category"]; label: string }[] = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "tools", label: "Tools" },
  { value: "other", label: "Other" },
];

const levelColor: Record<NonNullable<Skill["level"]>, string> = {
  beginner: "bg-slate-200 text-slate-700",
  intermediate: "bg-blue-100 text-blue-700",
  advanced: "bg-violet-100 text-violet-700",
  expert: "bg-green-100 text-green-700",
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Skills</h2>
        <p className="mb-12 text-muted-foreground">Technologies I work with.</p>

        <Tabs defaultValue="frontend">
          <TabsList className="mb-8">
            {categories.map((cat) => {
              const hasSkills = skills.some((s) => s.category === cat.value);
              if (!hasSkills) return null;
              return (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === cat.value)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-full border px-4 py-2"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {skill.level && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${levelColor[skill.level]}`}
                        >
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
