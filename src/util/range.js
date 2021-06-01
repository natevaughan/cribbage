/**
 * Adapted from https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
 */
export default function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}
