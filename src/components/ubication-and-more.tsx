import { Card, CardBody } from "@nextui-org/react";

const UbicationAndMore = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center grid grid-cols-2 items-center w-[100%] h-[60rem]">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-[100%] h-[100%] shadow-md"
        >
          <CardBody>
            <div className="grid grid-cols-6 gap-6 md:gap-4 items-center justify-center">
              <div className="flex flex-col col-span-6">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col gap-0 justify-center items-center border-1 border-solid border-blue-400">
                    <h3 className="text-2xl text-foreground/90">
                      Tarifa de estadia...
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-[100%] shadow-md justify-center items-center border-1 border-solid border-black"
        >
          <CardBody>
            <div className="grid grid-cols-6 gap-6 md:gap-4 items-center justify-center">
              <div className="flex flex-col col-span-6">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col gap-0 justify-center items-center border-1 border-solid border-blue-400">
                    <iframe
                      height="500"
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=SantaMariaBusinessdistrictgrupotrenco"
                      title="mymapframe"
                      width="700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

4;
export default UbicationAndMore;
