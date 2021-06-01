using System;

namespace HelperClass
{
    public static class Helper
    {
        public static int Double(this int x)
        {
            
            return x * 2; 
        }
    }
    
    
    

    class Program
    {
        static void Main(string[] args)
        {
            int x = 3;
            x.Double();

        }
        

        }

    }
