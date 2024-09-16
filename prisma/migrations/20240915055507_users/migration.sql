-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('Admin', 'Pustakawan', 'Siswa') NOT NULL DEFAULT 'Siswa';
