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
    "collision_id" SERIAL NOT NULL,
    "numberOfCyclistKilled" INTEGER,
    "locationState" TEXT,
    "location" TEXT,
    "vehicleTypeCode1" TEXT,
    "vehicleTypeCode2" TEXT,
    "vehicleTypeCode3" TEXT,
    "vehicleTypeCode4" TEXT,
    "vehicleTypeCode5" TEXT,
    "contributing_factor_vehicle_1" TEXT,
    "contributing_factor_vehicle_2" TEXT,
    "contributing_factor_vehicle_3" TEXT,
    "contributing_factor_vehicle_4" TEXT,
    "contributing_factor_vehicle_5" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "locationAddress" TEXT,
    "borough" TEXT,
    "zipCode" TEXT,
    "crashDate" TIMESTAMP(3),
    "crashTime" TEXT,
    "onStreetName" TEXT,
    "crossStreetName" TEXT,
    "offStreetName" TEXT,
    "locationCity" TEXT,
    "locationZip" TEXT,
    "number_of_persons_injured" INTEGER,
    "number_of_persons_killed" INTEGER,
    "number_of_pedestrians_injured" INTEGER,
    "number_of_pedestrians_killed" INTEGER,
    "number_of_motorist_injured" INTEGER,
    "number_of_motorist_killed" INTEGER,
    "number_of_cyclist_injured" INTEGER,
    "number_of_cyclist_killed" INTEGER,
    "created_on" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMP(3),

    CONSTRAINT "crashes_pkey" PRIMARY KEY ("collision_id")
);

