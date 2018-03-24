
const antlr4 = require('antlr4');
const sql92Lexer = require('../grammar/sql92Lexer');
const sql92Parser = require('../grammar/sql92Parser');
//import { sql92Lexer } from '../grammar/sql92.g4';
// const prettyTree = require('pretty-tree');
// const printTree = require('print-tree');
// const treeify = require('treeify');

var but = document.getElementById('parse');

but.onclick = function TreeGenerator() {
	var input = "CREATE TABLE hola (negro INT, sabe INT sabe INT,)"
	var chars = new antlr4.InputStream(input);
	var lexer = new sql92Lexer.sql92Lexer(chars);
	var tokens = new antlr4.CommonTokenStream(lexer);
	var parser = new sql92Parser.sql92Parser(tokens);
	parser.buildParseTrees = true;
	var tree = parser.program();

	console.log(tree);
}


