using System;

public class Bill
{
	public float price;
	public float total;
	public int quantity;
	public float paid;
	public string unit;

	public Bill(float price, float total, float paid, int quantity, string unit)
	{
		this.price = price;
		this.total = total;
		this.paid = paid;
		this.quantity = quantity;
		this.unit = unit;
	}
}

class Builder
{
	private string BillFormat;
	public Builder()
	{
		
	}

	public Builder Opening()
	{
		this.BillFormat += "\t \t BILL \n-----------------------------------------\n";
		return this;
	}

	public Builder End()
	{
		this.BillFormat += "\n-----------------------------------------";
		return this;
	}

	public Builder addinfo(string info)
	{
		this.BillFormat += info;
		return this;
	}


	public string printBill()
	{
		return this.BillFormat;
	}
}

public class BillBuilder
{
	public static void Main()
	{
		Bill bill = new Bill(250, 500, 500, 2, "Archery bow");
		string BillString = buildbill(bill);
		Console.WriteLine(BillString);
	}

	public static string buildbill(Bill bill)
	{
		Builder builder = new Builder();
		string billFormat = builder
		.Opening().addinfo("\tUnit name: " + bill.unit + "\n\t")
		.addinfo("Price: " + bill.price+ "\n\t")
		.addinfo("Quantity: " + bill.quantity+ "\n\t")
		.addinfo("Total: " + bill.total + "\n\t")
		.addinfo("Paid Price: " + bill.paid).End()
		.printBill();

		return billFormat;
	}



}