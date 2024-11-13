import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Button,
  CardHeader,
} from "@nextui-org/react";

const ContactConfirmation = () => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-[100%] size-96 shadow-md"
    >
      <CardHeader className="flex gap-3 justify-center items-center">
        <div className="flex flex-col">
          <p className="text-2xl font-bold mt-2 text-default-600">
            Confirmación
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-6 gap-6 m-8 md:gap-4 items-center justify-center">
          <div className="flex flex-col col-span-6 justify-center items-center text-center">
            <div className="flex gap-0 max-w-[70%] ">
              <h3 className="text-2xl text-foreground/60 ">
                Por favor llenar el formulario para confirmar tu asistencia y
                coméntanos de cualquier detalle de tu invitación al Quince de
                [nombre]
              </h3>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="justify-center items-center mb-10">
        <Button className="font-bold text-2xl" color="primary" size="lg">
          Confirmar asistencia
        </Button>
      </CardFooter>
      <Divider />
      <div className="grid grid-cols-6 gap-6 items-center justify-center m-2">
        <div className="flex flex-col col-span-6 justify-center items-center text-center">
          <p className="text-2xl font-bold mt-2 text-default-600">
            Información de contacto
          </p>
          <div className="flex gap-0 max-w-[70%] m-5">
            <h1 className="text-2xl font-bold text-foreground/60 ">+50764597528</h1>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactConfirmation;
