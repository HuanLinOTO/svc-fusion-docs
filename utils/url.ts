export const encode_string = (str: string) => {
    return btoa(unescape(str))
}

export const decode_string = (str: string) => {
    return atob(str)
}

export function parse(url) {
    return [...new URL(url).searchParams].reduce(
      (cur, [key, value]) => ((cur[key] = value), cur),
      {}
    );
}