import jsdom from 'jsdom'
import { expect } from 'chai'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView

export { expect }
