using System;
using System.Collections.Generic;
namespace Homework
{

    public class Token
    {
        public string type;
        public string value;
        public int position;
        public int linenumber;
    }

    public abstract class Tokenizable
    {
        public abstract bool tokenizable(tokenizer t);
        public abstract Token tokenize(tokenizer t);

    }
    public class IdTokenizer : Tokenizable
    {
        public override bool tokenizable(tokenizer t)
        {
            return true;
           
        }

        public override Token tokenize(tokenizer t)
        {
            Token token = new Token();
            token.value = "";
            token.type = "ID";
            token.linenumber = 1;
            return token;
        }

       

    }

    public class tokenizer
    {
        public string input;
        public int CurrentPosition;
        public int lineNumber;
        public string value;

        public tokenizer(string input)
        {
            this.input = input;
            CurrentPosition = -1;
            this.lineNumber = 1;
        }

        public char peek()
        {
            if (this.hasMore())
            {
                return this.input[this.CurrentPosition + 1];
            }
            else
            {
                return '\0';
            }
        }
        public char next()
        {
            char currentChar = this.input[++this.CurrentPosition];
            if (currentChar == '\n')
            {
                this.lineNumber++;
            }
            return currentChar;
        }

        public bool hasMore()
        {
            return (this.CurrentPosition + 1) < this.input.Length;
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
            throw new Exception("Unexpected token");

        }

        public class NumberTokenizer : Tokenizable
    {
        public override bool tokenizable(tokenizer t)
        {
            return t.hasMore() && Char.IsDigit(t.peek());
        }

        public override Token tokenize(tokenizer t)
        {
            Token token = new Token();
            token.value = "";
            token.type = "Number";
            token.position = t.CurrentPosition;
            token.linenumber = t.lineNumber;

            while(t.hasMore()&& Char.IsDigit(t.peek()))
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

            tokenizer t = new tokenizer("1234");
            Tokenizable[] handlers = new Tokenizable[] { new NumberTokenizer() };
            Token token = t.tokenize(handlers);

            while(token != null)
            {
                token = t.tokenize(handlers);
            }

        }



        /*
         static List<String> tokenizer (string input)
        {
            if (input == null || input.Trim().Length == 0)
                return null;

            List<string> tokens = new List<string>();
            int i = 0;
            string token = null;

            while(i<input.Length)
            {
                token = "";
                if (Char.IsLetter(input[i]) || input[i] == '_')
                {
                    token += input[i++];
                    while((i<input.Length) && Char.IsLetterOrDigit(input[i]) || input[i]=='_')
                        {
                        token += input[i++];
                    }
                    tokens.Add(token);
                    continue;
                }
                else if (Char.IsDigit(input[i]))
                {
                    token += input[i++];
                    while ((i < input.Length) && Char.IsDigit(input[i]))
                    {
                        token += input[i++];
                    }
                    tokens.Add(token);
                    continue;
                }
                else if (Char.IsWhiteSpace(input[i]))
                {
                    token += input[i++];
                    while ((i < input.Length) && Char.IsWhiteSpace(input[i]))
                    {
                        token += input[i++];
                    }
                    tokens.Add(token);
                    continue;
                }
                i++;
            }
            return tokens;
        }
         */




    }



