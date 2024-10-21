import AutoplayCarousel from "@/components/autoplay-carousel";
import type { PokeEggGroupT } from "../types";
import ImagePlaceholder from "@/components/image-placeholder";

export type PokeEggSpeciesCarouselProps = {
    species: PokeEggGroupT["pokemon_species"];
    className?: string;
};

export default function PokeEggSpeciesCarousel({
    species,
}: PokeEggSpeciesCarouselProps) {
    return (
        <AutoplayCarousel className="max-w-40 ">
            {species.map((species) => (
                <AutoplayCarousel.Item key={species.name}>
                    <div className="flex flex-col justify-center border border-red-600 px-10">
                        <span className="text-center">{species.name}</span>
                        <ImagePlaceholder className="w-full" />
                    </div>
                </AutoplayCarousel.Item>
            ))}
        </AutoplayCarousel>
    );
}
