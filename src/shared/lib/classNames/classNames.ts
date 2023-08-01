export type Mods = Record<string, boolean>

export function classNames(
    className: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        className,
        ...additional.filter(Boolean),
        ...Object.entries(mods).reduce((acc, [key, value]) => {
            if (value) {
                acc.push(key);
            }
            return acc;
        }, []),
    ].join(' ');
}
