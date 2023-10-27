import { readFileSync, readdirSync, lstatSync } from "fs";

const CONTENT_DIR = "./content"

/**
 * Returns table of content
 * @returns string[]
*/
export function getTableOfContent ()
{
    return readdirSync(CONTENT_DIR)
    /** ignores any folder inside content folder*/
    .filter(name => lstatSync(`${CONTENT_DIR}/${name}`).isFile())
    .map(name=> `${name.replace(/^(.*?)\.[^.]+$/, '$1')}`)
}

/**
 * Return content of file from content directory
 * @param fileName file name with out extension
 */
export default function getContentOfFile(fileName: string, ext: string = '.md')
{
    return readFileSync(`${CONTENT_DIR}/${fileName}${ext}`, "utf-8")
}
