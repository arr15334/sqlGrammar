
@{%

const moo = require('moo');

let lexer = moo.compile({
	keyword:	['CREATE', 'DATABASE', 'ALTER', 'RENAME', 'TO', 'DROP', 'DATABASES', 'SHOW', 'USE', 'TABLE', 'TABLES', 'COLUMNS', 'FROM', 'INT', 'FLOAT', 'DATE', 'CHAR', 'KEY', 'PRIMARY', 'FOREIGN', 'CHECK', 'COLUMN', 'CONSTRAINT', 'NOT', 'AND', 'OR', 'PK_'],
	ws: 		{match: /\s+/, lineBreaks: true},
	id:			/[a-zA-Z][a-zA-Z0-9]*/,
	num:		/[0-9] [0-9]*/,
	';': ';',
	'(': '(',
	')': ')',
	',': ',',
	'*': '*',
	'>': '>',
	'<': '<',
	'<>': '<>'
})

lexer.next = (next => () => {
    let tok;
    while ((tok = next.call(lexer)) && tok.type === "ws") {}
    return tok;
})(lexer.next);

%}

@lexer lexer


program ->  (query ";"):*

query ->
		"CREATE" "DATABASE" %id
	|	"ALTER" "DATABASE" %id "RENAME" "TO" %id
	|	"DROP" "DATABASE" %id
	|	"SHOW" "DATABASES"
	|	"USE" "DATABASE" %id
	|	"CREATE" "TABLE" %id "(" columnDeclaration ( "," columnDeclaration):* ("," "CONSTRAINT" constraintDeclaration):* ")"
	|	"ALTER" "TABLE" %id "RENAME" "TO" %id
	|	"ALTER" "TABLE" %id (action)
	|	"DROP" "TABLE" %id
	|	"SHOW" "TABLES"
	|	"SHOW" "COLUMNS" "FROM" %id

columnDeclaration -> %id dataType

dataType ->
		"INT"
	|	"FLOAT"
	|	"DATE"
	|	"CHAR" "(" %num ")"

constraintDeclaration ->
		"PK_" %id "PRIMARY" "KEY" "("  %id ("," %id):* ")"
	|	"FK_" %id "FOREIGN" "KEY" "("  %id ("," %id):* ")" "REFERENCES" %id "("  %id ("," %id):* ")"
	|	"CH_" %id "CHECK" "(" expression ")"

action ->
		"ADD" "COLUMN" %id dataType "CONSTRAINT" constraintDeclaration
	|	"ADD" constraintDeclaration
	|	"DROP" "COLUMN" %id
	|	"DROP" "CONSTRAINT" %id

expression ->
		"(" expression ")"
	|	%num
	|	%id
	|	"NOT" expression
	|	expression relOp expression
	|	expression "AND" expression
	|	expression "OR" expression


relOp 	->
		"<"
	|	">"
	|	"<="
	|	">="
	|	"<>"
	|	"="
