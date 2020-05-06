// the code in this file will be run by CopperCube at startup. 
// You can create some plugin toolbars with this code for example:

function printHello()
{
  alert("Hello from the example script!\n You can edit this example plugin from the CopperCube folder in 'Your documents'. ");
}

// add the hello function to the plugin menu
editorRegisterMenuEntry("printHello()", "Print Hello (example script)\tCtrl+H");

