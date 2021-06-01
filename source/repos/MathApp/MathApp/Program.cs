using System;
using MathLib;
using Math;

namespace MathApp
{
    class Program
    {
        static void Main(string[] args)
        {
            MyMath m = new MyMath();
            Console.WriteLine(m.add(3, 4));
        }
    }
}
