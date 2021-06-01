using System;
using System.Collections;

namespace c
{
    class Program
    {'';';
        static void Main(string[] args)
        {
            String source;

            Console.WriteLine("Hello World!");
            match("{{}}{{}}}{");
        }
        static bool match(string source)
        {
            const char left = '{';
            const char right = '}';
            int last = 0;
            Stack stack = new Stack();
            for (int i = 0; i < source.Length; i++)
            {
                if (source[i] == left)
                {
                    stack.Push(i);
                }
                else if (source[i] == right)
                {

                   
                    stack.Pop();
                    
                }

                /*
                 static void shiftWords( string values, int shifts){
                int pos;
                for (int i=string.length; i<shifts; i--){
                Console.Writeln(" ");
                pos++;
                shifted[pos]=string.charat[i-1];
                }
                    }
                 * 
                 * */




                if (stack.Count != 0)
                {
                    Console.WriteLine("missing brackets detected");

                }
                int counter;
                return false;
            }
        }
    }
}