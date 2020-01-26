using Microsoft.EntityFrameworkCore.Migrations;

namespace CoreApp.Migrations
{
    public partial class @null : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_departements_Dep_ID",
                table: "Employees");

            migrationBuilder.AlterColumn<int>(
                name: "Dep_ID",
                table: "Employees",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_departements_Dep_ID",
                table: "Employees",
                column: "Dep_ID",
                principalTable: "departements",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_departements_Dep_ID",
                table: "Employees");

            migrationBuilder.AlterColumn<int>(
                name: "Dep_ID",
                table: "Employees",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_departements_Dep_ID",
                table: "Employees",
                column: "Dep_ID",
                principalTable: "departements",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
