import { cn } from "@/lib/utils";
import { Card, CardContent } from "../../ui/card";
import { CoachCardProps } from "@/src/types/team-props";

export default function CoachCard({
  imageUrl,
  name,
  age,
  className,
}: CoachCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-xl border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl",
        "bg-gradient-to-b from-background to-muted/50 gap-2 py-0",
        "transform hover:-translate-y-2 transition-transform bg-primary text-primary-foreground",
        className
      )}
    >
      {/* Container image */}
      <div className="relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

        {/* Coach image */}
        <img
          src={imageUrl}
          alt={`${name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <CardContent className="px-3 py-0">
        {/* Player name and position */}
        <div className="mb-4">
          <h3 className="text-xl font-bold truncate flex flex-col">
            {name}
            {age ? (
              <span className="text-base font-normal"> {age} anos</span>
            ) : (
              ""
            )}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
