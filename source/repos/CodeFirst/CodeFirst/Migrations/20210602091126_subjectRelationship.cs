using Microsoft.EntityFrameworkCore.Migrations;

namespace CodeFirst.Migrations
{
    public partial class subjectRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "teacherid",
                table: "Subjects",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Subjects_teacherid",
                table: "Subjects",
                column: "teacherid");

            migrationBuilder.AddForeignKey(
                name: "FK_Subjects_Teachers_teacherid",
                table: "Subjects",
                column: "teacherid",
                principalTable: "Teachers",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Subjects_Teachers_teacherid",
                table: "Subjects");

            migrationBuilder.DropIndex(
                name: "IX_Subjects_teacherid",
                table: "Subjects");

            migrationBuilder.DropColumn(
                name: "teacherid",
                table: "Subjects");
        }
    }
}
