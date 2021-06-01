using System;
using System.Collections.Generic;
namespace MyJSON

{

    public delegate bool InputCondition(Input input);
    public class Input
    {
        private readonly string input;
        private readonly int length;
        private int position;
        private int lineNumber;
        //Properties
        public int Length
        {
            get
            {
                return this.length;
            }
        }
        public int Position
        {
            get
            {
                return this.position;
            }
        }
        public int NextPosition
        {
            get
            {
                return this.position + 1;
            }
        }
        public int LineNumber
        {
            get
            {
                return this.lineNumber;
            }
        }
        public char Character
        {
            get
            {
                if (this.position > -1) return this.input[this.position];
                else return '\0';
            }
        }
        public Input(string input)
        {
            this.input = input;
            this.length = input.Length;
            this.position = -1;
            this.lineNumber = 1;
        }
        public bool hasMore(int numOfSteps = 1)
        {
            if (numOfSteps <= 0) throw new Exception("Invalid number of steps");
            return (this.position + numOfSteps) < this.length;
        }
        public bool hasLess(int numOfSteps = 1)
        {
            if (numOfSteps <= 0) throw new Exception("Invalid number of steps");
            return (this.position - numOfSteps) > -1;
        }
        //callback -> delegate
        public Input step(int numOfSteps = 1)
        {
            if (this.hasMore(numOfSteps))
                this.position += numOfSteps;
            else
            {
                throw new Exception("There is no more step");
            }
            return this;
        }
        public Input back(int numOfSteps = 1)
        {
            if (this.hasLess(numOfSteps))
                this.position -= numOfSteps;
            else
            {
                throw new Exception("There is no more step");
            }
            return this;
        }
        public Input reset() { return this; }
        public char peek(int numOfSteps = 1)
        {
            if (this.hasMore(numOfSteps)) return this.input[this.position + numOfSteps];
            return '\0';
        }
        public string loop(InputCondition condition)
        {
            string buffer = "";
            while (this.hasMore() && condition(this))
                buffer += this.step().Character;
            return buffer;
        }
    }
    public class Token
    {
        public int Position { set; get; }
        public int LineNumber { set; get; }
        public string Type { set; get; }
        public string Value { set; get; }
        public Token(int position, int lineNumber, string type, string value)
        {
            this.Position = position;
            this.LineNumber = lineNumber;
            this.Type = type;
            this.Value = value;
        }
    }
    public abstract class Tokenizable
    {
        public abstract bool tokenizable(Tokenizer tokenizer);
        public abstract Token tokenize(Tokenizer tokenizer);
    }
    public class Tokenizer
    {
        public List<Token> tokens;
        public bool enableHistory;
        public Input input;
        public Tokenizable[] handlers;
        public Tokenizer(string source, Tokenizable[] handlers)
        {
            this.input = new Input(source);
            this.handlers = handlers;
        }
        public Tokenizer(Input source, Tokenizable[] handlers)
        {
            this.input = source;
            this.handlers = handlers;
        }
        public Token tokenize()
        {
            foreach (var handler in this.handlers)
                if (handler.tokenizable(this)) return handler.tokenize(this);
            return null;
        }
        public List<Token> all() { return null; }
    }
    public class NumberTokenizer : Tokenizable
    {
        public override bool tokenizable(Tokenizer t)
        {
            char currentCharacter = t.input.peek();
            char secondCharacter = t.input.peek(2);
            char thirdCharacter = t.input.peek(3);
            return Char.IsDigit(currentCharacter)
                || (isNegative(currentCharacter, secondCharacter));
        }
        public override Token tokenize(Tokenizer t)
        {
            Token token = new Token(t.input.Position, t.input.LineNumber, "Number", "");
            char currentCharacter = t.input.peek();
            char secondCharacter = t.input.peek(2);
            while (t.input.hasMore() && ((Char.IsDigit(currentCharacter)) ||
                isNegative(currentCharacter, secondCharacter)||currentCharacter.Equals('.')))
            {
                secondCharacter = t.input.peek(2);
                if (isNegative(currentCharacter, secondCharacter))
                {
                    token.Type = "integer";
                    token.Value += t.input.step().Character;//+ or -
                    currentCharacter = t.input.peek();
                    while (t.input.hasMore() && (Char.IsDigit(currentCharacter) || currentCharacter.Equals('.')))
                    {
                        token.Value += t.input.step().Character;
                        if (currentCharacter.Equals('.'))
                        {
                            currentCharacter = t.input.peek();
                            while (t.input.hasMore() && (Char.IsDigit(currentCharacter)))
                            {
                                token.Value += t.input.step().Character;
                                currentCharacter = t.input.peek();
                                if (currentCharacter.Equals('E')||currentCharacter.Equals('e'))
                                {
                                    token.Type = "exponent";
                                    currentCharacter = t.input.peek();
                                    return getExponent(token, currentCharacter, secondCharacter, t);
                                }
                                return getFloat(token, currentCharacter, t); //float
                                

                            }
                            currentCharacter = t.input.peek();
                        }
                        return token; //integer ex -3 or +3
                    }
                }
                // float not signed ex: 24.3
                else if (currentCharacter.Equals('.'))
                {
                    token.Value += t.input.step().Character;
                    currentCharacter = t.input.peek();
                    while (t.input.hasMore() && (Char.IsDigit(currentCharacter)))
                    {
                        token.Value += t.input.step().Character;
                        currentCharacter = t.input.peek();
                        if (currentCharacter.Equals('E')||currentCharacter.Equals('e'))
                        {
                            token.Type = "exponent";
                            currentCharacter = t.input.peek();
                            return getExponent(token, currentCharacter, secondCharacter, t);
                        }
                        
                    }
                    return getFloat(token, currentCharacter, t); //float
                    

                }
                else
                {
                    token.Value += t.input.step().Character;
                    currentCharacter = t.input.peek();
                }
            }
            return token; //number ex 44
        }
        public bool isNegative(char currentCharacter, char secondCharacter)
        {
            return (currentCharacter.Equals('-') && Char.IsDigit(secondCharacter));
        }
        public Token getFloat(Token token, char currentCharacter, Tokenizer t)
        {
            token.Type = "fraction";
            currentCharacter = t.input.peek();
            while (t.input.hasMore() && (Char.IsDigit(currentCharacter)))
            {
                token.Value += t.input.step().Character;
                currentCharacter = t.input.peek();
            }
            return token;
        }
        public Token getExponent(Token token, char currentCharacter, char secondCharacter, Tokenizer t)
        {
            token.Type = "exponent";
            currentCharacter = t.input.peek();
            while (t.input.hasMore() && (Char.IsDigit(currentCharacter)||currentCharacter.Equals('E') || currentCharacter.Equals('e')
                && Char.IsDigit(secondCharacter)||secondCharacter.Equals('+')||secondCharacter.Equals('-')))
            {
                token.Value += t.input.step().Character;
                currentCharacter = t.input.peek();
                secondCharacter = t.input.peek(1);
            }
            return token;
        }

    }
    public abstract class JSONValue { }
    public class JStringValue : JSONValue
    {
        private string str;
    }
    public class JNumber : JSONValue
    {
        private double num;
    }
    public class JBoolean : JSONValue
    {
        private bool boolean;
    }
    public class ObjectInfo
    {
        public class JArray : JSONValue
        {
            public List<JSONValue> valueList;
        }
        public class JKeyValue
        {
            public string key;
            public JSONValue value;
        }
        public class JSONObject
        {
            public List<JKeyValue> objList;
        }
        class Program
        {
            static void Main(string[] args)
            {
            
                    Tokenizer t = new Tokenizer(new Input("0.77e77"), new Tokenizable[] {
                new NumberTokenizer()
            });
                    Token res = t.tokenize();
                    while (res != null)
                    {
                        Console.WriteLine("token \"{0}\" of type \"{1}\" ", res.Value, res.Type);
                        res = t.tokenize();
                    }
                }
                /*
                 readKeyValue(){
    if ( ch == """) {
    readKey()
    if (ch!= : )
    //value 
    if (ch == ") readString ()
    else if(isDigit(ch) readNumber())
    else if(isLetter(ch) readId())
    else if (ch == '{') {
    readObject()
    if ch != } error  
    } else if (ch == '[' )
    readArray()
    if (ch!= ']' )error 
    }
    readObject()
    }
                 */
            }
        }
    }

