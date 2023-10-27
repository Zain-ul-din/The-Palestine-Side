import { readFileSync, readdirSync, lstatSync } from "fs";

const CONTENT_DIR = "./content"
const VIDEOS_DIR = `${CONTENT_DIR}/videos`

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
export function getContentOfFile(fileName: string, ext: string = '.md')
{
    return readFileSync(`${CONTENT_DIR}/${fileName}${ext}`, "utf-8")
}

/**
 * Returns videos content from content/videos directory
 * @returns  Object
*/
export function getVideosContent()
{
    return JSON.parse(readFileSync(`${VIDEOS_DIR}/content.json`, "utf-8"))
}
