import { cn } from "@/lib/utils";
import { Card, CardContent } from "../../ui/card";
import { PlayerProps } from "@/src/types/team-props";
import CaptainBadge from "./CaptainBadge";
import Image from "next/image";

export default function PlayerCard({
  imageUrl,
  name,
  age,
  isCaptain,
  stats,
  className,
}: PlayerProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-xl border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl",
        "bg-gradient-to-b from-background to-muted/50 gap-2 py-0",
        "transform hover:-translate-y-2 transition-transform bg-primary text-primary-foreground",
        className,
      )}
    >
      {/* captain badge */}
      {isCaptain && <CaptainBadge />}

      {/* play number */}
      {/* <div className="absolute top-3 left-3 z-20">
        <div className="bg-primary text-primary-foreground text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          {number}
        </div>
      </div> */}

      {/* Container image */}
      <div className="relative overflow-hidden min-h-64 w-full">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        {/* Player image */}
        <Image
          src={imageUrl}
          alt={`${name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={200}
          height={200}
        />
      </div>

      {/* Content */}
      <CardContent className="px-3 py-0">
        {/* Player name and position */}
        <div className="mb-4">
          <h3 className="text-sm md:text-xl font-semibold truncate flex flex-col">
            {name}
            {age && <span className="text-xs"> {age} anos</span>}
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
