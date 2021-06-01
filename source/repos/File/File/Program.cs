using System;
using System.IO;
using System.Text;


namespace File
{
    class Program
    {
        static void Main(string[] args)
        {
            String path = @"c:\Desktop\Projects\TestFile.txt";
            if (!File.Exists(path))
            {
                // Create a file to write to.
                using (StreamWriter sw = File.CreateText(path))
                {
                    sw.WriteLine("Welcome to C#");

                }
            }
            using (StreamReader sr = File.OpenText(path))
            {
                string s;
                while ((s = sr.ReadLine()) != null)
                {
                    Console.WriteLine(s);
                }
            }
        }
    }
}
1



