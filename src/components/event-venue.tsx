import { Card, CardBody } from "@nextui-org/react";

const EventVenue = () => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-[100%] size-96 shadow-md"
    >
      <CardBody>
        <div className="grid grid-cols-6 gap-6 md:gap-4 items-center justify-center">
          <div className="flex flex-col col-span-6 justify-center items-center border-1 border-solid border-black">
            <div className="flex flex-col gap-0 justify-center items-center border-1 border-solid border-red-500">
              <h3 className="text-2xl text-foreground/90">Lugar del evento</h3>
              <p className="text-2xl font-bold text-foreground/80">
                7:30 PM / ¡LLEGADA!
              </p>
              <h1 className="text-2xl font-bold mt-2">
                HOTEL RIU PLAZA PANAMÁ
              </h1>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EventVenue;
