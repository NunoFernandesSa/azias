import { cn } from "@/lib/utils";
import { Card, CardContent } from "../../ui/card";
import { PlayerCardProps } from "@/src/types/team-props";

export default function PlayerCard({
  imageUrl,
  name,
  number,
  age,
  isCaptain,
  stats,
  className,
}: PlayerCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-xl border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl",
        "bg-gradient-to-b from-background to-muted/50 gap-2 py-0",
        "transform hover:-translate-y-2 transition-transform bg-primary text-primary-foreground",
        className
      )}
    >
      {/* captain badge */}
      {isCaptain && (
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-primary">
            Capitão
          </div>
        </div>
      )}

      {/* play number */}
      {/* <div className="absolute top-3 left-3 z-20">
        <div className="bg-primary text-primary-foreground text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          {number}
        </div>
      </div> */}

      {/* Container image */}
      <div className="relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

        {/* Player image */}
        <img
          src={imageUrl}
          alt={`${name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <CardContent className="px-3 py-0">
        {/* Player name and position */}
        <div className="mb-4">
          <h3 className="text-xl font-bold truncate flex flex-col">
            {name}
            {age && <span className="text-base font-normal"> {age} anos</span>}
          </h3>
        </div>

        {/* Player additional info */}
        <div className="space-y-3 mb-2">
          {stats && (
            <div className="grid grid-cols-3 gap-2 pt-3 border-t">
              {stats.matches !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">
                    {stats.matches}
                  </div>
                  <div className="text-xs text-secondary">Jogos</div>
                </div>
              )}
              {stats.goals !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">
                    {stats.goals}
                  </div>
                  <div className="text-xs text-secondary">Golos</div>
                </div>
              )}
              {stats.assists !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">
                    {stats.assists}
                  </div>
                  <div className="text-xs text-secondary">Assist.</div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
