const {app, BrowserWindow, globalShortcut} = require('electron');
const {execSync} = require("child_process");

const output = execSync('npm run build_react', {encoding: 'utf-8'});


const createWindow = (file)=>{
    const window = new BrowserWindow( {
        width: 1200,
        height: 1080
    });

    globalShortcut.register('f5', ()=>{
        console.log('f5 is pressed');
        window.reload();
    });

    globalShortcut.register('CommandOrControl+R', ()=>{
        console.log('Output was:\n', output);
        console.log('Control+R is pressed');

        window.reload();
    })

    window.loadFile(file);
    window.setMenu(null);
}



app.whenReady().then( ()=>{
    createWindow("./build/index.html");
    createWindow("./build_second/second.html");
});