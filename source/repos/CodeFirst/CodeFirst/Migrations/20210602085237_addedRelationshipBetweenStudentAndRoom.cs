using Microsoft.EntityFrameworkCore.Migrations;

namespace CodeFirst.Migrations
{
    public partial class addedRelationshipBetweenStudentAndRoom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "StudentModelid",
                table: "Rooms",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Rooms_StudentModelid",
                table: "Rooms",
                column: "StudentModelid",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Rooms_Students_StudentModelid",
                table: "Rooms",
                column: "StudentModelid",
                principalTable: "Students",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rooms_Students_StudentModelid",
                table: "Rooms");

            migrationBuilder.DropIndex(
                name: "IX_Rooms_StudentModelid",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "StudentModelid",
                table: "Rooms");

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
    }
}
