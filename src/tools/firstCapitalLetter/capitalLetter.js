export default function capitalLetter(string) {
    const nullValues = [null, "", " ",undefined]
    return nullValues.includes(string) ?
        `unknown` :
        string.replace(/_/g, ' ').split(" ").map(
            e =>
                e.charAt(0).toUpperCase() + e.slice(1))
            .join(" ")
}
