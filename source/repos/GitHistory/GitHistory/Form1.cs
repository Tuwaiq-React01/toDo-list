using LibGit2Sharp;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Diagnostics;
using System.Drawing.Drawing2D;


namespace GitHistory
{
    public partial class Form1 : Form
    {
       
        public Form1()
        {
            InitializeComponent();
            Graphics g;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            
        }

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            using (var repo = new Repository(@"C:\Users\maryam\source\repos\GitHistory"))
            {
                foreach (var commit in repo.Commits)
                {
                    Debug.WriteLine(
                      $"{commit.Id.ToString().Substring(0, 7)} " +
                      $"{commit.Author.When.ToLocalTime()} " +
                      $"{commit.MessageShort} " +
                      $"{commit.Author.Name}");
                    g.DrawEllipse(pen, x + 100, y + 200, 60, 60);
                    // Set format of string.
                    SolidBrush drawBrush = new SolidBrush(Color.Black);
                    Font drawFont = new Font("Arial", 10);
                    // Draw string to screen.
                    e.Graphics.DrawString();
                    //e.Graphics.DrawString(commit.Author.When.ToLocalTime().ToString(), drawFont, drawBrush, x + 80, y + 180);
                    x += 280;
                }

            }
        }
    }
}
