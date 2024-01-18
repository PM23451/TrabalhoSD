-- CreateTable
CREATE TABLE "teachers" (
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "crashes" (
    "collision_id" INTEGER NOT NULL,
    ":id" TEXT NOT NULL,
    "numberOfCyclistKilled" INTEGER NOT NULL,
    "locationState" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "vehicleTypeCode1" TEXT NOT NULL,
    "vehicleTypeCode2" TEXT NOT NULL,
    "vehicleTypeCode3" TEXT NOT NULL,
    "vehicleTypeCode4" TEXT NOT NULL,
    "vehicleTypeCode5" TEXT NOT NULL,
    "contributing_factor_vehicle_1" TEXT NOT NULL,
    "contributing_factor_vehicle_2" TEXT NOT NULL,
    "contributing_factor_vehicle_3" TEXT NOT NULL,
    "contributing_factor_vehicle_4" TEXT NOT NULL,
    "contributing_factor_vehicle_5" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "locationAddress" TEXT NOT NULL,
    "borough" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "crashDate" TIMESTAMP(3) NOT NULL,
    "crashTime" TEXT NOT NULL,
    "onStreetName" TEXT NOT NULL,
    "crossStreetName" TEXT NOT NULL,
    "offStreetName" TEXT NOT NULL,
    "locationCity" TEXT NOT NULL,
    "locationZip" TEXT NOT NULL,
    "number_of_persons_injured" INTEGER NOT NULL,
    "number_of_persons_killed" INTEGER NOT NULL,
    "number_of_pedestrians_injured" INTEGER NOT NULL,
    "number_of_pedestrians_killed" INTEGER NOT NULL,
    "number_of_motorist_injured" INTEGER NOT NULL,
    "number_of_motorist_killed" INTEGER NOT NULL,
    "number_of_cyclist_injured" INTEGER NOT NULL,
    "number_of_cyclist_killed" INTEGER NOT NULL,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "crashes_pkey" PRIMARY KEY ("collision_id")
);
