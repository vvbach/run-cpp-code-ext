// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { extname } = require('node:path/win32');
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "project-1" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('project-1.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from project-1!');
	});
	
	let run_cpp_cmd = vscode.commands.registerCommand('project1.run_cpp', function(){
		var terminal = null;
		if (terminal === null){
			terminal = vscode.window.createTerminal("Run CPP");
		}
		terminal.show();
		var file = vscode.window.activeTextEditor.document.fileName;
		var fileName = file.match(/[^\/]+$/)
		var fileNoExt = file.match(/[^\/|\\]*(?=\.)/)
		var cmd = "gcc " + fileName + " -o " + fileNoExt + "; ./" + fileNoExt;
		
		terminal.sendText(cmd);
		
	})
	context.subscriptions.push(run_cpp_cmd);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
