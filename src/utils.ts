export function formatString(str: string, firstN: number, lastM: number): string {
    // Check if the string length is greater than the sum of firstN and lastM
    if (str.length > firstN + lastM) {
        return str.substring(0, firstN) + '...' + str.substring(str.length - lastM);
    }

    // If the string is already shorter than the sum of firstN and lastM, return it as is
    return str;
}

export function formatAddress(str: string): string {
    return formatString(str, 5, 4)
}