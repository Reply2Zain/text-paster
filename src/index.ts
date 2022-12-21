const {keyboard} = require("@nut-tree/nut-js");
// wait time to let the user focus their cursor
const READY_TIME_SEC = 7;
// wait time before program exits
const WAIT_BEFORE_EXIT_MS = 500;
// milliseconds in a second
const MS_IN_ONE_SEC = 1000;

let text = process.argv.slice(2).join(' ');
if (text.length < 1) {
    console.log('no input given: enter the words you would like to paste from the keyboard');
    process.exit(0)
}
if (process.argv.length === 3) {
    if (process.argv[2].slice(0,1) === '"' && process.argv[2].slice(-1) === '"'){
        text = text.substring(1, text.length - 2);
    }
}


/**
 * Types the text as a keyboard event.
 * @param phrase {string} The text to type.
 */
async function type(phrase: string) {
    await new Promise(resolve => {
       setTimeout(async ()=> {
           await keyboard.type(phrase);
           resolve('');
       }, READY_TIME_SEC * MS_IN_ONE_SEC);
    });
}


/**
 * The main function.
 */
async function main() {
    console.log(`typing in ${READY_TIME_SEC} seconds...\nfocus on the text-box where you want the text to be pasted`);
    console.log(`content:\n${text}`);
    await type(text);
    await new Promise(res => setTimeout(res, WAIT_BEFORE_EXIT_MS));
    return null;
}


main().then();
