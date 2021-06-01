using System;
namespace AdvancedTokenizer
{
    public class Token
    {
        public string type;
        public string value;
        public int position;
        public int lineNumber;
    }
    public class Tokenizer
    {
        public string input;
        public int currentPostion;
        public int lineNumber;
        public Tokenizer(string input)
        {
            this.input = input;
            this.currentPostion = -1;
            this.lineNumber = 1;
        }
        public bool hasMore()
        {
            return (this.currentPostion + 1) < this.input.Length;
        }
        public char peek(int numOfPositions = 1)
        {
            if (this.hasMore())
            {
                return this.input[this.currentPostion + numOfPositions];
            }
            else
            {
                return '\0';
            }
        }
        public char next()
        {
            char currentChar = this.input[++this.currentPostion];
            if (currentChar == '\n')
            {
                this.lineNumber++;
            }
            return currentChar;
        }
        public Token tokenize(Tokenizable[] handlers)
        {
            foreach (var t in handlers)
            {
                if (t.tokenizable(this))
                {
                    return t.tokenize(this);
                }
            }
            return null;
        }
    }
    public abstract class Tokenizable
    {
        public abstract bool tokenizable(Tokenizer t);
        public abstract Token tokenize(Tokenizer t);
    }
    public class NumberTokenizer : Tokenizable
    {
        public override bool tokenizable(Tokenizer t)
        {
            return t.hasMore() && Char.IsDigit(t.peek());
        }
        public override Token tokenize(Tokenizer t)
        {
            Token token = new Token();
            token.value = "";
            token.type = "number";
            token.position = t.currentPostion;
            token.lineNumber = t.lineNumber;
            while (t.hasMore() && Char.IsDigit(t.peek()))
            {
                token.value += t.next();
            }
            return token;
        }
    }

    public class BracketsTokenizer : Tokenizable
    {
        public override bool tokenizable(Tokenizer t)
        {
            return t.hasMore() && t.peek().Equals('[');
        }
        public override Token tokenize(Tokenizer t)
        {
            Token token = new Token();
            token.value = "";
            token.type = "Square Brackets";
            token.position = t.currentPostion;
            token.lineNumber = t.lineNumber;
            token.value += t.next();
            while (t.hasMore())
            {
                if (t.peek().Equals(']'))
                {
                    token.value += t.next();
                    break;
                }
                token.value += t.next();
            }
            if (token.value[token.value.Length - 1].Equals(']'))
            {
                return token;
            }
            else
            {
                t.currentPostion = token.position + 1;
                token.type = "**Unexpected Token**";
                return token;
            }
        }
    }

    public class PhoneTokenizer : Tokenizable
    {
        public override bool tokenizable(Tokenizer t)
        {
            return t.hasMore() && t.peek().Equals('+') &&t.peek(2).Equals('9') && t.peek(3).Equals('6') && t.peek(4).Equals('6') && t.peek(5).Equals('5');
        }
        public override Token tokenize(Tokenizer t)
        {
            Token token = new Token();
            token.value = "";
            token.type = "Phone number";
            token.position = 0;
            token.lineNumber = 1;
            token.value += t.next();
            token.lineNumber = 1;
            int i = 0;
            

            while (t.hasMore() && !t.peek().Equals(' ') &&i<=13)
            {
                token.value += t.next();
                i++;
            }

            if (token.value.Length > 13 || token.value.Length<13)
            {
                Console.WriteLine("Phone number length should be 13 digits");
                return null;
                
            }
            return token;
        }
    }
    public class IdTokenizer : Tokenizable
    {
        public override bool tokenizable(Tokenizer t)
        {
            return t.hasMore() && (Char.IsLetter(t.peek()) || t.peek().Equals('_'));
        }
        public override Token tokenize(Tokenizer t)
        {
            Token token = new Token();
            token.value = "";
            token.type = "identifrer";
            token.position = 0;
            token.lineNumber = 1;
            while (t.hasMore() && Char.IsLetterOrDigit(t.peek()) || t.peek().Equals('_'))
            {
                token.value += t.next();
            }
            return token;
        }
    }
   
    public class SpaceTokenizer : Tokenizable
    {
        public override bool tokenizable(Tokenizer t)
        {
            return t.hasMore() && (Char.IsWhiteSpace(t.peek()));
        }
        public override Token tokenize(Tokenizer t)
        {
            Token token = new Token();
            token.value = "";
            token.type = "whitespace";
            token.position = 0;
            token.lineNumber = 1;
            token.value += t.next();
            while (t.hasMore() && Char.IsWhiteSpace(t.peek()))
            {
                token.value += t.next();
            }
            return token;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Tokenizer test = new Tokenizer("+966555612127");
            Tokenizable[] handlers = new Tokenizable[] { new NumberTokenizer(), new SpaceTokenizer(),
                 new IdTokenizer(), new PhoneTokenizer(), new BracketsTokenizer()};
            Token token = test.tokenize(handlers);
            while (token != null)
            {
                Console.WriteLine("This is a token:  {0} ", token.value);
                token = test.tokenize(handlers);
            }
        }
    }
}
















