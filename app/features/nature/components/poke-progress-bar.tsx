export function PokemonProgressBar({ value }: { value: number }) {
    return (
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden relative">
            <div
                className="h-full bg-green-500 absolute left-0 top-0 transition-all duration-500 ease-out"
                style={{ width: `${value}%` }}
            />
            <div className="h-full w-full border-2 border-red-500 absolute left-0 top-0 rounded-full" />
        </div>
    );
}
