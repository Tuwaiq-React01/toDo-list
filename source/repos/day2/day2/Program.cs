using System;

namespace day2
{
    class Program
    {
        static void Main(string[] args)
        {
            uint colors = 3;
            int value = 0;
            byte one = 0;
            byte two = 8;
            byte three = 201;
            byte four = 25;

            value = (one << 7) | (two << 15) |(three<<23) |(four<<31) << 15;
            System.Console.WriteLine(value);

            static string tobinary(uint colors)
            {
                string result = null;
                for(int i = 0; i <= 32; i++)
                {
                    colors = 0 | colors;
                }
                return result;
            }
                    


            System.Console.WriteLine(colors);



            Console.WriteLine("Hello World!");

        }
    }
    }

