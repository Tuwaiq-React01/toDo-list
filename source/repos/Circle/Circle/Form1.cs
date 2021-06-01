using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Circle
{
    public partial class Form1 : Form
    {
        int X = 0;
        int Y = 0;
        int width = 100;
        int height = 100;
        int radius = 100;
        public Rectangle rec;
        int selectRadius = 10;
        bool isSelected = false;
        bool isActive = false;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
        }

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            Graphics g = e.Graphics;
            rec = new Rectangle(X, Y, width, height);
            g.DrawEllipse(new Pen(Brushes.Black, 3), this.X, this.Y, radius, radius);
            //  g.DrawRectangle(new Pen(Brushes.Red, 1), rec);
            if (isSelected == true)
            {
                g.DrawEllipse(new Pen(Brushes.Blue, 9), X + ((width - selectRadius) / 2), Y + ((width - selectRadius) / 2), selectRadius, selectRadius);//midle
                g.DrawEllipse(new Pen(Brushes.Blue, 9), X + ((width - selectRadius) / 2), Y + ((width - selectRadius)), selectRadius, selectRadius);
                g.DrawEllipse(new Pen(Brushes.Blue, 9), X + ((width - selectRadius) / 2), Y, selectRadius, selectRadius);//top
                g.DrawEllipse(new Pen(Brushes.Blue, 9), X + ((width - selectRadius) / 2), Y + ((width - selectRadius) / 2), selectRadius, selectRadius);
                g.DrawEllipse(new Pen(Brushes.Blue, 9), X, Y + ((width - selectRadius) / 2), selectRadius, selectRadius);//left
                g.DrawEllipse(new Pen(Brushes.Blue, 9), X + ((width - selectRadius)), Y + ((width - selectRadius) / 2), selectRadius, selectRadius);
            }
        }


        private void Form1_MouseClick(object sender, MouseEventArgs e)
        {
            Rectangle area = new Rectangle(e.Location.X, e.Location.Y, 10, 10);
            this.isActive = this.rec.IntersectsWith(area);
            this.Invalidate();
        }


        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            Rectangle area = new Rectangle(e.Location.X, e.Location.Y, 10, 10);
            this.isSelected = this.rec.IntersectsWith(area);
            this.Invalidate();
        }

        private void Form1_MouseMove(object sender, MouseEventArgs e)
        {
            if (isSelected)
            {
                this.X = e.Location.X - (width / 2);
                this.Y = e.Location.Y - (width / 2);
                this.Invalidate();
            }
        }

        private void Form1_MouseUp(object sender, MouseEventArgs e)
        {
            isSelected = false;
            isActive = false;
        }
    }
}
