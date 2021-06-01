using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Drawing_Engine
{
    public partial class Form1 : Form
    {
       
        private bool isClicked = false;
        private List<Line> lines;
        private Line currentLine = null;
        public Form1()
        {
            InitializeComponent();
            this.lines = new List<Line>();
        }
    private void Form1_Load(object sender, EventArgs e)
        {

        }
        private void Form1_Paint(object sender, PaintEventArgs e)
        {
       Graphics g = e.Graphics;
        foreach (var line in this.lines)
            g.DrawLine(Pens.Red,
            line.start.X,
            line.start.Y,
            line.end.X,
            line.end.Y);
        //Graphics g = e.Graphics;
        }
        private void Form1_MouseClick_1(object sender, MouseEventArgs e)
        {
            if (this.isClicked)
            {
                this.currentLine = new Line();
                currentLine.start = new Point(e.X, e.Y);
            }
            else
            {
                currentLine.end = new Point(e.X, e.Y);
                this.lines.Add(currentLine);
                this.Invalidate();
            }
            this.isClicked = !isClicked;
        }
    }
    public class Line
    {
        public Point start;
        public Point end;
    }
}

