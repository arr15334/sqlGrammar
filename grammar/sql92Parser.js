// Generated from grammar/sql92.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sql92Listener = require('./sql92Listener').sql92Listener;
var sql92Visitor = require('./sql92Visitor').sql92Visitor;

var grammarFileName = "sql92.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.\u00d0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "5\n\u0003\f\u0003\u000e\u00038\u000b\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003<\n\u0003\f\u0003\u000e\u0003?\u000b\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003C\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003O\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "Z\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "f\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u0007s\n\u0007\f\u0007\u000e\u0007v\u000b\u0007\u0003\u0007\u0005",
    "\u0007y\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u0083\n\u0007",
    "\f\u0007\u000e\u0007\u0086\u000b\u0007\u0003\u0007\u0005\u0007\u0089",
    "\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007\u0092\n\u0007\f\u0007\u000e\u0007",
    "\u0095\u000b\u0007\u0003\u0007\u0005\u0007\u0098\n\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007\u00a2\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\b\u00b2\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00bd\n\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00c9",
    "\n\t\f\t\u000e\t\u00cc\u000b\t\u0003\n\u0003\n\u0003\n\u0002\u0003\u0010",
    "\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0003\u0003\u0002",
    "&+\u0002\u00e9\u0002\u0019\u0003\u0002\u0002\u0002\u0004Y\u0003\u0002",
    "\u0002\u0002\u0006[\u0003\u0002\u0002\u0002\be\u0003\u0002\u0002\u0002",
    "\ng\u0003\u0002\u0002\u0002\f\u00a1\u0003\u0002\u0002\u0002\u000e\u00b1",
    "\u0003\u0002\u0002\u0002\u0010\u00bc\u0003\u0002\u0002\u0002\u0012\u00cd",
    "\u0003\u0002\u0002\u0002\u0014\u0015\u0005\u0004\u0003\u0002\u0015\u0016",
    "\u0007\u0003\u0002\u0002\u0016\u0018\u0003\u0002\u0002\u0002\u0017\u0014",
    "\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017",
    "\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u0003",
    "\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u001d",
    "\u0007\u0004\u0002\u0002\u001d\u001e\u0007\u0005\u0002\u0002\u001eZ",
    "\u0007,\u0002\u0002\u001f \u0007\u0006\u0002\u0002 !\u0007\u0005\u0002",
    "\u0002!\"\u0007,\u0002\u0002\"#\u0007\u0007\u0002\u0002#$\u0007\b\u0002",
    "\u0002$Z\u0007,\u0002\u0002%&\u0007\t\u0002\u0002&\'\u0007\u0005\u0002",
    "\u0002\'Z\u0007,\u0002\u0002()\u0007\n\u0002\u0002)Z\u0007\u000b\u0002",
    "\u0002*+\u0007\f\u0002\u0002+,\u0007\u0005\u0002\u0002,Z\u0007,\u0002",
    "\u0002-.\u0007\u0004\u0002\u0002./\u0007\r\u0002\u0002/B\u0007,\u0002",
    "\u000201\u0007\u000e\u0002\u000216\u0005\u0006\u0004\u000223\u0007\u000f",
    "\u0002\u000235\u0005\u0006\u0004\u000242\u0003\u0002\u0002\u000258\u0003",
    "\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u0002",
    "7=\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u00029:\u0007\u000f\u0002",
    "\u0002:<\u0005\n\u0006\u0002;9\u0003\u0002\u0002\u0002<?\u0003\u0002",
    "\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>@\u0003",
    "\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@A\u0007\u0010\u0002\u0002",
    "AC\u0003\u0002\u0002\u0002B0\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002",
    "\u0002CZ\u0003\u0002\u0002\u0002DE\u0007\u0006\u0002\u0002EF\u0007\r",
    "\u0002\u0002FG\u0007,\u0002\u0002GH\u0007\u0007\u0002\u0002HI\u0007",
    "\b\u0002\u0002IZ\u0007,\u0002\u0002JK\u0007\u0006\u0002\u0002KL\u0007",
    "\r\u0002\u0002LN\u0007,\u0002\u0002MO\u0005\u000e\b\u0002NM\u0003\u0002",
    "\u0002\u0002NO\u0003\u0002\u0002\u0002OZ\u0003\u0002\u0002\u0002PQ\u0007",
    "\t\u0002\u0002QR\u0007\r\u0002\u0002RZ\u0007,\u0002\u0002ST\u0007\n",
    "\u0002\u0002TZ\u0007\u0011\u0002\u0002UV\u0007\n\u0002\u0002VW\u0007",
    "\u0012\u0002\u0002WX\u0007\u0013\u0002\u0002XZ\u0007,\u0002\u0002Y\u001c",
    "\u0003\u0002\u0002\u0002Y\u001f\u0003\u0002\u0002\u0002Y%\u0003\u0002",
    "\u0002\u0002Y(\u0003\u0002\u0002\u0002Y*\u0003\u0002\u0002\u0002Y-\u0003",
    "\u0002\u0002\u0002YD\u0003\u0002\u0002\u0002YJ\u0003\u0002\u0002\u0002",
    "YP\u0003\u0002\u0002\u0002YS\u0003\u0002\u0002\u0002YU\u0003\u0002\u0002",
    "\u0002Z\u0005\u0003\u0002\u0002\u0002[\\\u0007,\u0002\u0002\\]\u0005",
    "\b\u0005\u0002]\u0007\u0003\u0002\u0002\u0002^f\u0007\u0014\u0002\u0002",
    "_f\u0007\u0015\u0002\u0002`f\u0007\u0016\u0002\u0002ab\u0007\u0017\u0002",
    "\u0002bc\u0007\u000e\u0002\u0002cd\u0007.\u0002\u0002df\u0007\u0010",
    "\u0002\u0002e^\u0003\u0002\u0002\u0002e_\u0003\u0002\u0002\u0002e`\u0003",
    "\u0002\u0002\u0002ea\u0003\u0002\u0002\u0002f\t\u0003\u0002\u0002\u0002",
    "gh\u0007\u0018\u0002\u0002hi\u0005\f\u0007\u0002i\u000b\u0003\u0002",
    "\u0002\u0002jk\u0007\u0019\u0002\u0002kl\u0007,\u0002\u0002lm\u0007",
    "\u001a\u0002\u0002mn\u0007\u001b\u0002\u0002nx\u0007\u000e\u0002\u0002",
    "ot\u0007,\u0002\u0002pq\u0007\u000f\u0002\u0002qs\u0007,\u0002\u0002",
    "rp\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002",
    "\u0002tu\u0003\u0002\u0002\u0002uy\u0003\u0002\u0002\u0002vt\u0003\u0002",
    "\u0002\u0002wy\u0003\u0002\u0002\u0002xo\u0003\u0002\u0002\u0002xw\u0003",
    "\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z\u00a2\u0007\u0010\u0002",
    "\u0002{|\u0007\u001c\u0002\u0002|}\u0007,\u0002\u0002}~\u0007\u001d",
    "\u0002\u0002~\u0088\u0007\u000e\u0002\u0002\u007f\u0084\u0007,\u0002",
    "\u0002\u0080\u0081\u0007\u000f\u0002\u0002\u0081\u0083\u0007,\u0002",
    "\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002",
    "\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002",
    "\u0002\u0085\u0089\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002",
    "\u0002\u0087\u0089\u0003\u0002\u0002\u0002\u0088\u007f\u0003\u0002\u0002",
    "\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0007\u0010\u0002\u0002\u008b\u008c\u0007\u001e\u0002",
    "\u0002\u008c\u008d\u0007,\u0002\u0002\u008d\u0097\u0007\u000e\u0002",
    "\u0002\u008e\u0093\u0007,\u0002\u0002\u008f\u0090\u0007\u000f\u0002",
    "\u0002\u0090\u0092\u0007,\u0002\u0002\u0091\u008f\u0003\u0002\u0002",
    "\u0002\u0092\u0095\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0098\u0003\u0002\u0002",
    "\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u0098\u0003\u0002\u0002",
    "\u0002\u0097\u008e\u0003\u0002\u0002\u0002\u0097\u0096\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u00a2\u0007\u0010\u0002",
    "\u0002\u009a\u009b\u0007\u001f\u0002\u0002\u009b\u009c\u0007,\u0002",
    "\u0002\u009c\u009d\u0007 \u0002\u0002\u009d\u009e\u0007\u000e\u0002",
    "\u0002\u009e\u009f\u0005\u0010\t\u0002\u009f\u00a0\u0007\u0010\u0002",
    "\u0002\u00a0\u00a2\u0003\u0002\u0002\u0002\u00a1j\u0003\u0002\u0002",
    "\u0002\u00a1{\u0003\u0002\u0002\u0002\u00a1\u009a\u0003\u0002\u0002",
    "\u0002\u00a2\r\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007!\u0002\u0002",
    "\u00a4\u00a5\u0007\"\u0002\u0002\u00a5\u00a6\u0007,\u0002\u0002\u00a6",
    "\u00a7\u0005\b\u0005\u0002\u00a7\u00a8\u0005\n\u0006\u0002\u00a8\u00b2",
    "\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007!\u0002\u0002\u00aa\u00b2",
    "\u0005\n\u0006\u0002\u00ab\u00ac\u0007\t\u0002\u0002\u00ac\u00ad\u0007",
    "\"\u0002\u0002\u00ad\u00b2\u0007,\u0002\u0002\u00ae\u00af\u0007\t\u0002",
    "\u0002\u00af\u00b0\u0007\u0018\u0002\u0002\u00b0\u00b2\u0007,\u0002",
    "\u0002\u00b1\u00a3\u0003\u0002\u0002\u0002\u00b1\u00a9\u0003\u0002\u0002",
    "\u0002\u00b1\u00ab\u0003\u0002\u0002\u0002\u00b1\u00ae\u0003\u0002\u0002",
    "\u0002\u00b2\u000f\u0003\u0002\u0002\u0002\u00b3\u00b4\b\t\u0001\u0002",
    "\u00b4\u00b5\u0007\u000e\u0002\u0002\u00b5\u00b6\u0005\u0010\t\u0002",
    "\u00b6\u00b7\u0007\u0010\u0002\u0002\u00b7\u00bd\u0003\u0002\u0002\u0002",
    "\u00b8\u00bd\u0007.\u0002\u0002\u00b9\u00bd\u0007,\u0002\u0002\u00ba",
    "\u00bb\u0007#\u0002\u0002\u00bb\u00bd\u0005\u0010\t\u0006\u00bc\u00b3",
    "\u0003\u0002\u0002\u0002\u00bc\u00b8\u0003\u0002\u0002\u0002\u00bc\u00b9",
    "\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bd\u00ca",
    "\u0003\u0002\u0002\u0002\u00be\u00bf\f\u0005\u0002\u0002\u00bf\u00c0",
    "\u0005\u0012\n\u0002\u00c0\u00c1\u0005\u0010\t\u0006\u00c1\u00c9\u0003",
    "\u0002\u0002\u0002\u00c2\u00c3\f\u0004\u0002\u0002\u00c3\u00c4\u0007",
    "$\u0002\u0002\u00c4\u00c9\u0005\u0010\t\u0005\u00c5\u00c6\f\u0003\u0002",
    "\u0002\u00c6\u00c7\u0007%\u0002\u0002\u00c7\u00c9\u0005\u0010\t\u0004",
    "\u00c8\u00be\u0003\u0002\u0002\u0002\u00c8\u00c2\u0003\u0002\u0002\u0002",
    "\u00c8\u00c5\u0003\u0002\u0002\u0002\u00c9\u00cc\u0003\u0002\u0002\u0002",
    "\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002",
    "\u00cb\u0011\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002",
    "\u00cd\u00ce\t\u0002\u0002\u0002\u00ce\u0013\u0003\u0002\u0002\u0002",
    "\u0014\u00196=BNYetx\u0084\u0088\u0093\u0097\u00a1\u00b1\u00bc\u00c8",
    "\u00ca"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'CREATE'", "'DATABASE'", "'ALTER'", "'RENAME'", 
                     "'TO'", "'DROP'", "'SHOW'", "'DATABASES'", "'USE'", 
                     "'TABLE'", "'('", "','", "')'", "'TABLES'", "'COLUMNS'", 
                     "'FROM'", "'INT'", "'FLOAT'", "'DATE'", "'CHAR'", "'CONSTRAINT'", 
                     "'PK_'", "'PRIMARY'", "'KEY'", "'FK_'", "'FOREIGN KEY'", 
                     "'REFERENCES'", "'CH_'", "'CHECK'", "'ADD'", "'COLUMN'", 
                     "'NOT'", "'AND'", "'OR'", "'<'", "'>'", "'<='", "'>='", 
                     "'<>'", "'='" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "ID", "WS", "NUM" ];

var ruleNames =  [ "program", "query", "columnDeclaration", "dataType", 
                   "constraintDeclaration", "constraint", "action", "expression", 
                   "rel_op" ];

function sql92Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

sql92Parser.prototype = Object.create(antlr4.Parser.prototype);
sql92Parser.prototype.constructor = sql92Parser;

Object.defineProperty(sql92Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

sql92Parser.EOF = antlr4.Token.EOF;
sql92Parser.T__0 = 1;
sql92Parser.T__1 = 2;
sql92Parser.T__2 = 3;
sql92Parser.T__3 = 4;
sql92Parser.T__4 = 5;
sql92Parser.T__5 = 6;
sql92Parser.T__6 = 7;
sql92Parser.T__7 = 8;
sql92Parser.T__8 = 9;
sql92Parser.T__9 = 10;
sql92Parser.T__10 = 11;
sql92Parser.T__11 = 12;
sql92Parser.T__12 = 13;
sql92Parser.T__13 = 14;
sql92Parser.T__14 = 15;
sql92Parser.T__15 = 16;
sql92Parser.T__16 = 17;
sql92Parser.T__17 = 18;
sql92Parser.T__18 = 19;
sql92Parser.T__19 = 20;
sql92Parser.T__20 = 21;
sql92Parser.T__21 = 22;
sql92Parser.T__22 = 23;
sql92Parser.T__23 = 24;
sql92Parser.T__24 = 25;
sql92Parser.T__25 = 26;
sql92Parser.T__26 = 27;
sql92Parser.T__27 = 28;
sql92Parser.T__28 = 29;
sql92Parser.T__29 = 30;
sql92Parser.T__30 = 31;
sql92Parser.T__31 = 32;
sql92Parser.T__32 = 33;
sql92Parser.T__33 = 34;
sql92Parser.T__34 = 35;
sql92Parser.T__35 = 36;
sql92Parser.T__36 = 37;
sql92Parser.T__37 = 38;
sql92Parser.T__38 = 39;
sql92Parser.T__39 = 40;
sql92Parser.T__40 = 41;
sql92Parser.ID = 42;
sql92Parser.WS = 43;
sql92Parser.NUM = 44;

sql92Parser.RULE_program = 0;
sql92Parser.RULE_query = 1;
sql92Parser.RULE_columnDeclaration = 2;
sql92Parser.RULE_dataType = 3;
sql92Parser.RULE_constraintDeclaration = 4;
sql92Parser.RULE_constraint = 5;
sql92Parser.RULE_action = 6;
sql92Parser.RULE_expression = 7;
sql92Parser.RULE_rel_op = 8;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sql92Parser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.query = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QueryContext);
    } else {
        return this.getTypedRuleContext(QueryContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sql92Visitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sql92Parser.ProgramContext = ProgramContext;

sql92Parser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sql92Parser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sql92Parser.T__1) | (1 << sql92Parser.T__3) | (1 << sql92Parser.T__6) | (1 << sql92Parser.T__7) | (1 << sql92Parser.T__9))) !== 0)) {
            this.state = 18;
            this.query();
            this.state = 19;
            this.match(sql92Parser.T__0);
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sql92Parser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sql92Parser.ID);
    } else {
        return this.getToken(sql92Parser.ID, i);
    }
};


QueryContext.prototype.columnDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ColumnDeclarationContext);
    } else {
        return this.getTypedRuleContext(ColumnDeclarationContext,i);
    }
};

QueryContext.prototype.constraintDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstraintDeclarationContext);
    } else {
        return this.getTypedRuleContext(ConstraintDeclarationContext,i);
    }
};

QueryContext.prototype.action = function() {
    return this.getTypedRuleContext(ActionContext,0);
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.exitQuery(this);
	}
};

QueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sql92Visitor ) {
        return visitor.visitQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sql92Parser.QueryContext = QueryContext;

sql92Parser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sql92Parser.RULE_query);
    var _la = 0; // Token type
    try {
        this.state = 87;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 26;
            this.match(sql92Parser.T__1);
            this.state = 27;
            this.match(sql92Parser.T__2);
            this.state = 28;
            this.match(sql92Parser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 29;
            this.match(sql92Parser.T__3);
            this.state = 30;
            this.match(sql92Parser.T__2);
            this.state = 31;
            this.match(sql92Parser.ID);
            this.state = 32;
            this.match(sql92Parser.T__4);
            this.state = 33;
            this.match(sql92Parser.T__5);
            this.state = 34;
            this.match(sql92Parser.ID);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 35;
            this.match(sql92Parser.T__6);
            this.state = 36;
            this.match(sql92Parser.T__2);
            this.state = 37;
            this.match(sql92Parser.ID);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 38;
            this.match(sql92Parser.T__7);
            this.state = 39;
            this.match(sql92Parser.T__8);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 40;
            this.match(sql92Parser.T__9);
            this.state = 41;
            this.match(sql92Parser.T__2);
            this.state = 42;
            this.match(sql92Parser.ID);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 43;
            this.match(sql92Parser.T__1);
            this.state = 44;
            this.match(sql92Parser.T__10);
            this.state = 45;
            this.match(sql92Parser.ID);
            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sql92Parser.T__11) {
                this.state = 46;
                this.match(sql92Parser.T__11);
                this.state = 47;
                this.columnDeclaration();
                this.state = 52;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 48;
                        this.match(sql92Parser.T__12);
                        this.state = 49;
                        this.columnDeclaration(); 
                    }
                    this.state = 54;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
                }

                this.state = 59;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===sql92Parser.T__12) {
                    this.state = 55;
                    this.match(sql92Parser.T__12);
                    this.state = 56;
                    this.constraintDeclaration();
                    this.state = 61;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 62;
                this.match(sql92Parser.T__13);
            }

            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 66;
            this.match(sql92Parser.T__3);
            this.state = 67;
            this.match(sql92Parser.T__10);
            this.state = 68;
            this.match(sql92Parser.ID);
            this.state = 69;
            this.match(sql92Parser.T__4);
            this.state = 70;
            this.match(sql92Parser.T__5);
            this.state = 71;
            this.match(sql92Parser.ID);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 72;
            this.match(sql92Parser.T__3);
            this.state = 73;
            this.match(sql92Parser.T__10);
            this.state = 74;
            this.match(sql92Parser.ID);
            this.state = 76;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sql92Parser.T__6 || _la===sql92Parser.T__30) {
                this.state = 75;
                this.action();
            }

            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 78;
            this.match(sql92Parser.T__6);
            this.state = 79;
            this.match(sql92Parser.T__10);
            this.state = 80;
            this.match(sql92Parser.ID);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 81;
            this.match(sql92Parser.T__7);
            this.state = 82;
            this.match(sql92Parser.T__14);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 83;
            this.match(sql92Parser.T__7);
            this.state = 84;
            this.match(sql92Parser.T__15);
            this.state = 85;
            this.match(sql92Parser.T__16);
            this.state = 86;
            this.match(sql92Parser.ID);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColumnDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sql92Parser.RULE_columnDeclaration;
    return this;
}

ColumnDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColumnDeclarationContext.prototype.constructor = ColumnDeclarationContext;

ColumnDeclarationContext.prototype.ID = function() {
    return this.getToken(sql92Parser.ID, 0);
};

ColumnDeclarationContext.prototype.dataType = function() {
    return this.getTypedRuleContext(DataTypeContext,0);
};

ColumnDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.enterColumnDeclaration(this);
	}
};

ColumnDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.exitColumnDeclaration(this);
	}
};

ColumnDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sql92Visitor ) {
        return visitor.visitColumnDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sql92Parser.ColumnDeclarationContext = ColumnDeclarationContext;

sql92Parser.prototype.columnDeclaration = function() {

    var localctx = new ColumnDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sql92Parser.RULE_columnDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.match(sql92Parser.ID);
        this.state = 90;
        this.dataType();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sql92Parser.RULE_dataType;
    return this;
}

DataTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataTypeContext.prototype.constructor = DataTypeContext;

DataTypeContext.prototype.NUM = function() {
    return this.getToken(sql92Parser.NUM, 0);
};

DataTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.enterDataType(this);
	}
};

DataTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.exitDataType(this);
	}
};

DataTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sql92Visitor ) {
        return visitor.visitDataType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sql92Parser.DataTypeContext = DataTypeContext;

sql92Parser.prototype.dataType = function() {

    var localctx = new DataTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sql92Parser.RULE_dataType);
    try {
        this.state = 99;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sql92Parser.T__17:
            this.enterOuterAlt(localctx, 1);
            this.state = 92;
            this.match(sql92Parser.T__17);
            break;
        case sql92Parser.T__18:
            this.enterOuterAlt(localctx, 2);
            this.state = 93;
            this.match(sql92Parser.T__18);
            break;
        case sql92Parser.T__19:
            this.enterOuterAlt(localctx, 3);
            this.state = 94;
            this.match(sql92Parser.T__19);
            break;
        case sql92Parser.T__20:
            this.enterOuterAlt(localctx, 4);
            this.state = 95;
            this.match(sql92Parser.T__20);
            this.state = 96;
            this.match(sql92Parser.T__11);
            this.state = 97;
            this.match(sql92Parser.NUM);
            this.state = 98;
            this.match(sql92Parser.T__13);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstraintDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sql92Parser.RULE_constraintDeclaration;
    return this;
}

ConstraintDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstraintDeclarationContext.prototype.constructor = ConstraintDeclarationContext;

ConstraintDeclarationContext.prototype.constraint = function() {
    return this.getTypedRuleContext(ConstraintContext,0);
};

ConstraintDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.enterConstraintDeclaration(this);
	}
};

ConstraintDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.exitConstraintDeclaration(this);
	}
};

ConstraintDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sql92Visitor ) {
        return visitor.visitConstraintDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sql92Parser.ConstraintDeclarationContext = ConstraintDeclarationContext;

sql92Parser.prototype.constraintDeclaration = function() {

    var localctx = new ConstraintDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, sql92Parser.RULE_constraintDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.match(sql92Parser.T__21);
        this.state = 102;
        this.constraint();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sql92Parser.RULE_constraint;
    return this;
}

ConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstraintContext.prototype.constructor = ConstraintContext;

ConstraintContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sql92Parser.ID);
    } else {
        return this.getToken(sql92Parser.ID, i);
    }
};


ConstraintContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.enterConstraint(this);
	}
};

ConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.exitConstraint(this);
	}
};

ConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sql92Visitor ) {
        return visitor.visitConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sql92Parser.ConstraintContext = ConstraintContext;

sql92Parser.prototype.constraint = function() {

    var localctx = new ConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, sql92Parser.RULE_constraint);
    var _la = 0; // Token type
    try {
        this.state = 159;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sql92Parser.T__22:
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            this.match(sql92Parser.T__22);
            this.state = 105;
            this.match(sql92Parser.ID);
            this.state = 106;
            this.match(sql92Parser.T__23);
            this.state = 107;
            this.match(sql92Parser.T__24);
            this.state = 108;
            this.match(sql92Parser.T__11);
            this.state = 118;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case sql92Parser.ID:
                this.state = 109;
                this.match(sql92Parser.ID);
                this.state = 114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===sql92Parser.T__12) {
                    this.state = 110;
                    this.match(sql92Parser.T__12);
                    this.state = 111;
                    this.match(sql92Parser.ID);
                    this.state = 116;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                break;
            case sql92Parser.T__13:
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 120;
            this.match(sql92Parser.T__13);
            break;
        case sql92Parser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 121;
            this.match(sql92Parser.T__25);
            this.state = 122;
            this.match(sql92Parser.ID);
            this.state = 123;
            this.match(sql92Parser.T__26);
            this.state = 124;
            this.match(sql92Parser.T__11);
            this.state = 134;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case sql92Parser.ID:
                this.state = 125;
                this.match(sql92Parser.ID);
                this.state = 130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===sql92Parser.T__12) {
                    this.state = 126;
                    this.match(sql92Parser.T__12);
                    this.state = 127;
                    this.match(sql92Parser.ID);
                    this.state = 132;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                break;
            case sql92Parser.T__13:
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 136;
            this.match(sql92Parser.T__13);
            this.state = 137;
            this.match(sql92Parser.T__27);
            this.state = 138;
            this.match(sql92Parser.ID);
            this.state = 139;
            this.match(sql92Parser.T__11);
            this.state = 149;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case sql92Parser.ID:
                this.state = 140;
                this.match(sql92Parser.ID);
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===sql92Parser.T__12) {
                    this.state = 141;
                    this.match(sql92Parser.T__12);
                    this.state = 142;
                    this.match(sql92Parser.ID);
                    this.state = 147;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                break;
            case sql92Parser.T__13:
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 151;
            this.match(sql92Parser.T__13);
            break;
        case sql92Parser.T__28:
            this.enterOuterAlt(localctx, 3);
            this.state = 152;
            this.match(sql92Parser.T__28);
            this.state = 153;
            this.match(sql92Parser.ID);
            this.state = 154;
            this.match(sql92Parser.T__29);
            this.state = 155;
            this.match(sql92Parser.T__11);
            this.state = 156;
            this.expression(0);
            this.state = 157;
            this.match(sql92Parser.T__13);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sql92Parser.RULE_action;
    return this;
}

ActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionContext.prototype.constructor = ActionContext;

ActionContext.prototype.ID = function() {
    return this.getToken(sql92Parser.ID, 0);
};

ActionContext.prototype.dataType = function() {
    return this.getTypedRuleContext(DataTypeContext,0);
};

ActionContext.prototype.constraintDeclaration = function() {
    return this.getTypedRuleContext(ConstraintDeclarationContext,0);
};

ActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.enterAction(this);
	}
};

ActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.exitAction(this);
	}
};

ActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sql92Visitor ) {
        return visitor.visitAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sql92Parser.ActionContext = ActionContext;

sql92Parser.prototype.action = function() {

    var localctx = new ActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, sql92Parser.RULE_action);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 161;
            this.match(sql92Parser.T__30);
            this.state = 162;
            this.match(sql92Parser.T__31);
            this.state = 163;
            this.match(sql92Parser.ID);
            this.state = 164;
            this.dataType();
            this.state = 165;
            this.constraintDeclaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 167;
            this.match(sql92Parser.T__30);
            this.state = 168;
            this.constraintDeclaration();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 169;
            this.match(sql92Parser.T__6);
            this.state = 170;
            this.match(sql92Parser.T__31);
            this.state = 171;
            this.match(sql92Parser.ID);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 172;
            this.match(sql92Parser.T__6);
            this.state = 173;
            this.match(sql92Parser.T__21);
            this.state = 174;
            this.match(sql92Parser.ID);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sql92Parser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.NUM = function() {
    return this.getToken(sql92Parser.NUM, 0);
};

ExpressionContext.prototype.ID = function() {
    return this.getToken(sql92Parser.ID, 0);
};

ExpressionContext.prototype.rel_op = function() {
    return this.getTypedRuleContext(Rel_opContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sql92Visitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



sql92Parser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, sql92Parser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sql92Parser.T__11:
            this.state = 178;
            this.match(sql92Parser.T__11);
            this.state = 179;
            this.expression(0);
            this.state = 180;
            this.match(sql92Parser.T__13);
            break;
        case sql92Parser.NUM:
            this.state = 182;
            this.match(sql92Parser.NUM);
            break;
        case sql92Parser.ID:
            this.state = 183;
            this.match(sql92Parser.ID);
            break;
        case sql92Parser.T__32:
            this.state = 184;
            this.match(sql92Parser.T__32);
            this.state = 185;
            this.expression(4);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 200;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 198;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, sql92Parser.RULE_expression);
                    this.state = 188;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 189;
                    this.rel_op();
                    this.state = 190;
                    this.expression(4);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, sql92Parser.RULE_expression);
                    this.state = 192;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 193;
                    this.match(sql92Parser.T__33);
                    this.state = 194;
                    this.expression(3);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, sql92Parser.RULE_expression);
                    this.state = 195;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 196;
                    this.match(sql92Parser.T__34);
                    this.state = 197;
                    this.expression(2);
                    break;

                } 
            }
            this.state = 202;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Rel_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sql92Parser.RULE_rel_op;
    return this;
}

Rel_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rel_opContext.prototype.constructor = Rel_opContext;


Rel_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.enterRel_op(this);
	}
};

Rel_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof sql92Listener ) {
        listener.exitRel_op(this);
	}
};

Rel_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sql92Visitor ) {
        return visitor.visitRel_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sql92Parser.Rel_opContext = Rel_opContext;

sql92Parser.prototype.rel_op = function() {

    var localctx = new Rel_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, sql92Parser.RULE_rel_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (sql92Parser.T__35 - 36)) | (1 << (sql92Parser.T__36 - 36)) | (1 << (sql92Parser.T__37 - 36)) | (1 << (sql92Parser.T__38 - 36)) | (1 << (sql92Parser.T__39 - 36)) | (1 << (sql92Parser.T__40 - 36)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


sql92Parser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

sql92Parser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.sql92Parser = sql92Parser;
