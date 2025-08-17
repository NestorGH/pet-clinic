-- DropForeignKey
ALTER TABLE "public"."Service" DROP CONSTRAINT "Service_appointmentId_fkey";

-- AlterTable
ALTER TABLE "public"."Service" ALTER COLUMN "appointmentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "public"."Appointment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
