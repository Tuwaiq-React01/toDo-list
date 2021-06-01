using System;

namespace practice
{

    class Phone
    {
        public String Modelname;
        public int StorageSpace;
        public String Manufacturer;
        public String OS;
        public int SerialNumber;
        public int PhoneNumber;

        public void call() { }
        public void connectToNetwork() { }

        public int sendMSG(int PhoneNumber, String MSGcontents, int ReceiverNumber) { return 0; }
        public void ReceiveCall() { }
        public void charge() { }
        public void TurnOn() { }
        public void TurnOff() { }
    }

    class Car
    {
        public String Modelname;
        public String Engine;
        public String Manufacturer;
        public String Wheels;
        public int PlateNumber;
        public int SerialNumber;

        public void Steer(String direction) { }
        public void Accelarate(float speed, String direction) { }

        //static
        public void getInfo()
        {
            this.Modelname = "Taurus";
            this.Engine = "Engine";
            
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Phone p = new Phone();
            p.sendMSG(0547722199, "Hello", 0555612127);

            Car mycar = new Car();
            Car yourCar = new Car();
            mycar.Accelarate(40.1f, "forward");
            mycar.Steer("right");
            mycar.getInfo();
            yourCar.getInfo();
            //Car.getInfo();



        }
        public int LinearSearch(int[] r, int item)
        {
            for (int i = 0; i < r.Length; i++)
            {
                if (r[i] == item)

                    return 1;
            }
                return -1;
            }

        }
    }
