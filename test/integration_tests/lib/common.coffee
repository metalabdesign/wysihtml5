global.wd = require("wd")
chai = require("chai")
chaiAsPromised = require("chai-as-promised")
require("mocha-as-promised")()

global.SetupContentEditable = require("./setup_content_editable")
global.ContentShouldEqual = require("./content")
global.expect = chai.expect
global.execCommand = require "./exec_command"
global.Editor = require "./editor"

fakePaste = require "./fake_paste"

global.pasteHTML = fakePaste.html
global.pasteText = fakePaste.text

chai.use(chaiAsPromised)