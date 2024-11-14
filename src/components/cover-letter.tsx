import { Card, Image, CardBody, Divider } from '@nextui-org/react';

const CoverLetter = () => {
  return (
    <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 w-[100%]" shadow="sm">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              shadow="md"
              src="https://nextui.org/images/card-example-4.jpeg"
              width="100%"
            />
          </div>
          <div className="flex flex-col col-span-8 border-3 border-solid border-red-400 w-[100%] justify-center items-center">
            <div className="flex justify-center items-center text-center border-1 border-solid border-black w-[50%]">
              <h2 className="text-balance text-5xl font-semibold tracking-tight text-gray-900">XV de Nombre apellido1 apellido2</h2>
            </div>
            <Divider className="mt-5 w-5/6" />
            <div className="flex flex-col gap-4 my-8 justify-center items-center text-center">
              <p className="font-rouge text-3xl">
                Hoy atesoro con añoranza los recuerdos de mi niñez, como una adolescente que se convertirá en mujer. En este momento tan
                único, nada me haría más feliz que tu compañía.
              </p>
              <p className="font-rouge text-3xl text-blue-900">Todo lo puedo en cristo que me fortalece.</p>
              <p className="font-rouge text-3xl text-blue-900">Fil 4:13</p>
              <div className="border-1 border-solid border-blue-300 text-center font-bold text-blue-900">
                <p>SÁBADO 15 DE ABRIL 2023 | 7:30PM</p>
                <p>HOTEL RIU PLAZA PANAMÁ | SALÓN SIXTH | PISO 6</p>
                <p>REGALOS: LLUVIA DE SOBRES</p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CoverLetter;
