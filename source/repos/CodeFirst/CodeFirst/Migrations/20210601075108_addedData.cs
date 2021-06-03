using Microsoft.EntityFrameworkCore.Migrations;

namespace CodeFirst.Migrations
{
    public partial class addedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "id", "email", "fn", "ln" },
                values: new object[] { 1, "reema@gmail.com", "Reema", "Alyousef" });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "id", "email", "fn", "ln" },
                values: new object[] { 2, "hala@gmail.com", "Hala", "Alyousef" });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "id", "email", "fn", "ln" },
                values: new object[] { 3, "waz@gmail.com", "Wedad", "Alzamil" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "id",
                keyValue: 3);
        }
    }
}
