using System;
using System.Collections.Generic;

namespace HTML_Tag
{
    class HTMLtag
    {
        public string name;
        public bool hasEnd;
        public string innerText;
        public string style;
        public string className;
        public string ID;

        public HTMLtag parent;
        public List<HTMLtag> children;

        public void addChild(HTMLtag child) {  }
        public void addChild(string name, string innerText, string style, string className, string ID, bool hasEnd) { }


    }
        class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
