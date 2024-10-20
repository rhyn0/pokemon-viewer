/**
 * Extract the specific id from the url.
 * Assumes a standard PokeAPI v2 url format.
 */
export function getUrlId(url: string): string | undefined {
    const match = /\/v2\/\w+\/(\d+|\w+)(?:\/|\?|#|$)/.exec(url);

    return match ? match[1] : undefined;
}
