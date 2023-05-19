/**
 * get public folder absolute url
 * @param pathname
 * @returns
 */

export const getPublicAbsoluteUrl = (pathname) => {
    return process.env.PUBLIC_URL + pathname;
}


