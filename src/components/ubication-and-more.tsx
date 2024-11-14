import { Card, CardBody, Divider } from '@nextui-org/react';

const UbicationAndMore = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center w-full">
        <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 w-[100%] h-[100%] shadow-md p-4">
          <CardBody>
            <div className="grid grid-cols-6 gap-6 md:gap-4 items-center justify-center">
              <div className="flex flex-col col-span-6 gap-4 justify-center items-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                  <h3 className="font-imperial text-5xl text-foreground/90">Tarifa de estadía</h3>
                  <h3 className="text-2xl font-bold text-foreground/90">HOTEL RIU PLAZA PANAMÁ</h3>
                </div>
              </div>
              <div className="flex flex-col col-span-6 gap-4 justify-left items-left text-left">
                <p className="text-1xl text-foreground/90">
                  Las futuras reservaciones de los invitados al XV años de [nombre] el 15 de abril.
                </p>
                <p className="text-1xl text-foreground/90">
                  <strong>Aristides Combe Carranza</strong> <br />
                  Reservations supervisor <br />
                  Comercial Plaza Panamá <br />
                  (+507) 282 0422 <br />
                  Reservationso1.panama@riu.com <br />
                  www.riu.com / www.riuplaza.com
                </p>
                <Divider />
              </div>
              <div className="flex flex-col col-span-6 gap-4 justify-left items-left text-left">
                <p className="text-1xl font-bold text-foreground/90">Categorías estandar:</p>
                <p className="text-1xl text-foreground/90">
                  Deluxe cama King y Deluxe camas Twin (Camas individuales) 85 USD + 10% - Esta categoría tiene capacidad máxima para 03
                  adultos y un niño de 12 años o menos ó 02 niños de 12 años o menos. El tercer adulto tiene un costo adicional de 25 USD +
                  10%, los niños de 12 años o menos no tienen costo. <br />
                  <strong>Niños de 13 años en adelante cuentan como adultos.</strong>
                </p>
              </div>
              <div className="flex flex-col col-span-6 gap-4 justify-left items-left text-left">
                <p className="text-1xl font-bold text-foreground/90">Categorías familiares:</p>
                <p className="text-1xl text-foreground/90">
                  Deluxe Family Twin (Deluxe de dos camas individuales más un sofá cama) 95 USD + 10% - Esta categoría tiene capacidad
                  máxima para 03 adultos y un niño de 12 años o menos ó 02 adultos y 02 niños de 12 años o menos. El tercer adulto tiene un
                  costo adicional de 25USD + 10%, los niños de 12 años o menos no tiene costo. <br />
                  <strong>Niños de 13 años en adelante cuentan como adultos.</strong>
                </p>
              </div>
              <div className="flex flex-col col-span-6 gap-4 justify-left items-left text-left">
                <p className="text-1xl font-bold text-foreground/90">Categorías familiares:</p>
                <p className="text-1xl text-foreground/90">
                  Nuestros precios ya cuentan con el desayuno Buffet incluido, no manejamos tarifas sin desayuno. <br />
                  <strong>Para mas información puede escribir a:</strong> reservationso1.panama@riu.com
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 w-[100%] shadow-md justify-center items-center">
          <CardBody>
            <div className="grid grid-cols-6 gap-6 md:gap-4 items-center justify-center">
              <div className="flex flex-col col-span-6 gap-0 justify-center items-center">
                <iframe
                  height="500"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=SantaMariaBusinessdistrictgrupotrenco"
                  title="mymapframe"
                  width="100%"
                  className='rounded-md'
                />
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
