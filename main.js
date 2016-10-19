const {app, BrowserWindow} = require('electron');

class MemeOrganizer{

    constructor(){
        this.window = null;
        this.targetURL = `file://${__dirname}/index.html`;

        app.on("ready", () => this.createWindow());
        app.on("window-all-closed", () => this.onWindowAllClosed());
    }

    createWindow(){
        if(!this.window){
            this.window = new BrowserWindow({width: 800, height: 600});
            this.window.loadURL(this.targetURL);

            this.window.webContents.openDevTools();

            this.window.on("closed", () => this.onWindowClosed());
        }else{
            console.warn("A window already exists!");
        }
    }

    onWindowClosed(){
        this.window = null;
    }

    onWindowAllClosed(){
        if(process.platform !== 'darwin'){
            app.quit();
        }
    }

    onActivate(){
        if(this.window == null){
            createWindow();
        }
    }

}

new MemeOrganizer();
