import { Card, CardHeader, Image, Divider, CardBody } from "@nextui-org/react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import CoverLetter from "@/components/cover-letter";
import EventVenue from "@/components/event-venue";
import UbicationAndMore from "@/components/ubication-and-more";
import ContactConfirmation from "@/components/contact-confirmation";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className="font-serif text-5xl">¡Le invitamos!</span>
          {/* <span className={title({ color: "violet" })}>beautiful&nbsp;</span> */}
          <br />
        </div>
        <CoverLetter />
        <EventVenue />
        <UbicationAndMore />
        <ContactConfirmation />
        {/* <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div> */}

        {/* <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div> */}
      </section>
    </DefaultLayout>
  );
}