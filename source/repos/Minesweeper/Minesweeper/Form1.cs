using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MineSweeper
{
    public partial class Minefield : Form
    {
        public Minefield()
        {
            InitializeComponent();
            Game_start();
        }



        public void Game_start()
        {
            Random random = new Random();
            int mine1 = random.Next(1, 12);
            int mine2 = random.Next(13, 25);
            int mine3 = random.Next(26, 32);
            int mine4 = random.Next(33, 40);
            int mine5 = random.Next(41, 49);
         

            for (int i = 1; i < 50; i++)
            {
                Button btn = new Button();

                btn.Name = "Minefield" + i.ToString();
                btn.Size = new System.Drawing.Size(75, 75);             
                btn.UseVisualStyleBackColor = true;
                

                if (mine1 == i || mine2 == i || mine3 == i||mine4== i||mine5==i)
                    btn.Tag = true;
                else
                    btn.Tag = false;

                btn.Click += BtnTemp_Click;
                flowLayoutPanel1.Controls.Add(btn);

            }
        }

        private void BtnTemp_Click(object sender, EventArgs e)
        {
            Button btn1 = (Button)sender;
            bool tag = (bool)btn1.Tag;

            if (tag)
            {
             
                DialogResult loss = MessageBox.Show("YOU LOST! YOU EXPLODED!", "Game Result");
                Close();
            }
            
            else
            {
                btn1.BackColor = Color.Green;
            }
        }

        private void flowLayoutPanel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
   
}