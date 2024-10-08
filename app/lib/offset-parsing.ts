export function getOffsetParam(url: string): number | undefined {
    const match = url.match(/offset=(\d+)/);
    return match?.length
        ? match[1]
            ? Number.parseInt(match[1])
            : undefined
        : undefined;
}
