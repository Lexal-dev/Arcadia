-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'EMPLOYEE', 'VETERINARIAN') NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Habitat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `breed` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `food` VARCHAR(191) NOT NULL,
    `foodGrams` INTEGER NOT NULL,
    `lastVisit` DATETIME(3) NOT NULL,
    `details` VARCHAR(191) NULL,
    `habitatId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_habitatId_fkey` FOREIGN KEY (`habitatId`) REFERENCES `Habitat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
