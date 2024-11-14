import { Card, CardBody } from '@nextui-org/react';

const EventVenue = () => {
  return (
    <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 w-[100%] size-96 shadow-md">
      <CardBody>
        <div className="grid grid-cols-6 gap-6 md:gap-4 items-center justify-center">
          <div className="flex flex-col col-span-6 gap-4 justify-center items-center">
            <h3 className="font-imperial text-5xl text-foreground/90">Lugar del evento</h3>
            <p className="text-2xl font-bold text-foreground/80">7:30 PM / ¡LLEGADA!</p>
            <h1 className="text-2xl font-bold text-foreground/80">HOTEL RIU PLAZA PANAMÁ</h1>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EventVenue;
