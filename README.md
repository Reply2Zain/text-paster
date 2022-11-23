# text-paster

Paste text as key presses. Mimics typing. Intended for applications that do not allow pasting into text-based input fields.   

The program waits 7 seconds before typing the desired text. Use this time to focus on where the text needs to be emitted. 
## How to run
1. `npm install`
2. `tsc` 
3. `node index.js <TEXT TO EMIT>`

### requirements

#### Windows 
no specific requirements

#### MacOS
if errors, install Xcode command line tools: 

`xcode-select --install` 


Examples:

`node dist/index.js "hello world"`
