#define Cat
using System;


namespace PreDir

{

    class Cat
    {
        #region CatInfo
        public String Name;
        public String Color;
        public int Age;
        public String Breed;
        #endregion

        #region CatMethods
        public void printinfo()
        {

        }
        #endregion

    }
    class Program
    {
        static void Main(string[] args)
        {


#warning This is too cute
#if Cat
            Cat cutie = new Cat();
            cutie.Name = "Gus Gus";
            cutie.Color = "White";
            Console.WriteLine(cutie.Name);
#endif

        }
    }
}
