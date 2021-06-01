using System;
using System.Collections.Generic;

public class CheckBalanceClass
{

	public static bool CheckBalance(string numberString)
	{
		Stack<char> stack = new Stack<char>();

		stack.Push(numberString[0]);

		foreach (char num in numberString)
		{
			if (stack.Count == 0 || num != stack.Peek())
			{
				stack.Push(num);
			}
			else
			{
				stack.Pop();
			}
		}

			if (stack.Count == 0)
		{
			Console.WriteLine("string is balanced");
			return true;
		}
        else
        {
			return false;
        }
	}

	public static void Main()
	{
		String number = "1233211";

		
			Console.WriteLine(CheckBalance(number));
		

	}

	
}